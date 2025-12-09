import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from '../../_utils/supabase';
import { validateAdmin } from '../../_utils/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const user = await validateAdmin(req, res);
    if (!user) return;

    const { fixtureId, score_a, score_b } = req.body;

    try {
        // 1. Update Score
        const { data, error } = await supabaseAdmin
            .from('fixtures')
            .update({
                score_a,
                score_b,
                status: 'finished'
            })
            .eq('id', fixtureId)
            .select()
            .single();

        if (error) throw error;

        // 2. Trigger Leaderboard Update (Optional: could be SQL trigger or separate function call)
        // For now, we assume the client or a periodic job handles calculating stats, 
        // or we could run a stored procedure here:
        // await supabaseAdmin.rpc('update_leaderboard', { match_id: fixtureId });

        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
