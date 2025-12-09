import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from './supabase';

export async function validateUser(req: VercelRequest, res: VercelResponse) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: 'Missing authorization header' });
        return null;
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !user) {
        res.status(401).json({ error: 'Invalid token' });
        return null;
    }

    return user;
}

export async function validateAdmin(req: VercelRequest, res: VercelResponse) {
    const user = await validateUser(req, res);
    if (!user) return null;

    const { data: profile, error } = await supabaseAdmin
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

    if (error || !profile || profile.role !== 'admin') {
        res.status(403).json({ error: 'Forbidden: Admins only' });
        return null;
    }

    return user;
}
