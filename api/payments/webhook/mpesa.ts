import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from '../../_utils/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { Body } = req.body;

    if (!Body || !Body.stkCallback) {
        return res.status(400).json({ error: 'Invalid payload' });
    }

    const { ResultCode, CallbackMetadata, CheckoutRequestID } = Body.stkCallback;

    // Find original transaction by linking CheckoutRequestID if you stored it, 
    // OR rely on finding the pending payment by some other means. 
    // Ideally, initiate stored CheckoutRequestID or used M-Pesa reference. 
    // Here we'll search by raw_payload -> CheckoutRequestID comparison or similar if supported.
    // For simplicity in this demo, we assume we might query by 'payment_ref' if we passed it in AccountReference and it comes back?
    // Actually, M-Pesa callbacks often don't return AccountReference in the metadata.
    // Best practice: Store CheckoutRequestID in payments table during initiate.

    // Let's assume we update based on the CheckoutRequestID in raw_json

    try {
        const status = ResultCode === 0 ? 'success' : 'failed';

        // Update Payment
        // We need to find the payment where raw_payload->>'CheckoutRequestID' == CheckoutRequestID
        // Supabase jsonb query:
        const { data: payment } = await supabaseAdmin
            .from('payments')
            .select('id, payment_ref')
            .filter('raw_payload->>CheckoutRequestID', 'eq', CheckoutRequestID)
            .single();

        if (payment) {
            await supabaseAdmin
                .from('payments')
                .update({
                    status: status,
                    raw_payload: req.body // Append or replace with full callback
                })
                .eq('id', payment.id);

            if (status === 'success') {
                // Update Team Registration
                await supabaseAdmin
                    .from('teams')
                    .update({ registration_status: 'paid' })
                    .eq('payment_id', payment.payment_ref);
            }
        } else {
            console.warn(`Payment not found for CheckoutRequestID: ${CheckoutRequestID}`);
        }

        res.status(200).json({ message: 'Callback received' });
    } catch (error) {
        console.error('Webhook Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
