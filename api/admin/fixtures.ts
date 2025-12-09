import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from '../../_utils/supabase';
import { validateAdmin } from '../../_utils/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const user = await validateAdmin(req, res);
    if (!user) return; // Response handled in validateAdmin

    const { date, time, venue, team_a, team_b } = req.body;

    try {
        const { data, error } = await supabaseAdmin
            .from('fixtures')
            .insert([
                {
                    date,
                    time,
                    venue,
                    team_a,
                    team_b,
                    created_by: user.id
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
