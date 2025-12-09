import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from '../../_utils/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, interests } = req.body;

    if (!name || (!email && !phone)) {
        return res.status(400).json({ error: 'Name and contact info required' });
    }

    try {
        const { data, error } = await supabaseAdmin
            .from('workshop_signups')
            .insert([
                {
                    name,
                    email,
                    phone,
                    interests
                }
            ])
            .select()
            .single();

        if (error) throw error;

        res.status(201).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
