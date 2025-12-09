import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from '../../_utils/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { data, error } = await supabaseAdmin
            .from('fixtures')
            .select(`
        *,
        team_a:teams!fixtures_team_a_fkey(name, logo_url),
        team_b:teams!fixtures_team_b_fkey(name, logo_url)
      `)
            .order('date', { ascending: true });

        if (error) throw error;

        // Cache for 60 seconds (public), 600s stale-while-revalidate
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=600');
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
