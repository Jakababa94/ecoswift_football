import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Allow CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({ error: 'Missing Supabase configuration' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        // get count of registered teams
        // status 'paid' or 'confirmed' are the only ones that should officially count usually, 
        // but for hype we might count 'pending' too if we want higher composition. 
        // Let's stick to true verified teams for quality, or just all for "Signups".
        // Getting all for now including pending to show "interest"
        const { count: teamCount, error: teamError } = await supabase
            .from('teams')
            .select('*', { count: 'exact', head: true });

        if (teamError) {
            throw teamError;
        }

        // Hardcoded stats for now as 'country' is not in schema yet
        const countriesCount = 3; // Example: Kenya, Uganda, Tanzania

        // Kickoff Date Configuration
        // Setting to June 1st, 2026 (Example future date)
        const kickoffDate = new Date('2026-06-01T12:00:00Z');
        const now = new Date();
        const diffTime = Math.max(0, kickoffDate.getTime() - now.getTime());
        const daysToKickoff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        res.status(200).json({
            teams: teamCount || 0,
            countries: countriesCount,
            daysToKickoff: daysToKickoff,
            kickoffDate: kickoffDate.toISOString()
        });

    } catch (error: any) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: error.message });
    }
}
