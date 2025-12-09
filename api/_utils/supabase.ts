import { createClient } from '@supabase/supabase-js';
import { Database } from '../../src/lib/database.types';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables');
}

export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey);
