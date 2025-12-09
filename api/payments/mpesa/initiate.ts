import { VercelRequest, VercelResponse } from '@vercel/node';
import { initiateSTKPush } from '../../_utils/mpesa';
import { supabaseAdmin } from '../../_utils/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { phone, amount, teamId } = req.body;

    if (!phone || !amount || !teamId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const paymentRef = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        // 1. Initiate STK Push
        const mpesaResponse = await initiateSTKPush(phone, amount, paymentRef);

        if (mpesaResponse.ResponseCode !== '0') {
            throw new Error(mpesaResponse.CustomerMessage || 'Failed to initiate payment');
        }

        // 2. Record Transaction in DB
        const { error: dbError } = await supabaseAdmin
            .from('payments')
            .insert([
                {
                    payment_ref: paymentRef,
                    method: 'mpesa',
                    amount: amount,
                    status: 'initiated',
                    raw_payload: mpesaResponse,
                },
            ]);

        // Optionally link payment to team immediately if schema supports it or wait for webhook
        // Updating team with payment_id for tracking
        await supabaseAdmin
            .from('teams')
            .update({ payment_id: paymentRef })
            .eq('id', teamId);

        if (dbError) {
            console.error('DB Error:', dbError);
            // Don't fail the request if STK push succeeded, but log it
        }

        res.status(200).json({
            message: 'Payment initiated',
            checkoutRequestID: mpesaResponse.CheckoutRequestID,
            paymentRef
        });
    } catch (error: any) {
        console.error('Payment Error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
