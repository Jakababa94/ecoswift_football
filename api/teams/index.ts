import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from '../../_utils/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, captain_name, captain_phone, captain_email, num_players, payment_id } = req.body;

    if (!name || !captain_name || !captain_phone) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // 1. Validate payment if provided (optional check)
        if (payment_id) {
            const { data: payment } = await supabaseAdmin
                .from('payments')
                .select('status')
                .eq('payment_ref', payment_id)
                .single();

            if (!payment || payment.status !== 'success') {
                // Can decide to warn or block. For now, we allow but status remains pending/initiated
            }
        }

        // 2. Insert Team
        const { data, error } = await supabaseAdmin
            .from('teams')
            .insert([
                {
                    name,
                    captain_name,
                    captain_phone,
                    captain_email,
                    num_players, // Make sure to parse int if string coming in
                    payment_id,
                    registration_status: 'pending' // Default, updated by webhook or admin
                }
            ])
            .select()
            .single();

        if (error) throw error;

        res.status(201).json(data);
    } catch (error: any) {
        console.error('Registration Error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
