
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qiukonqwibexeimoxlil.supabase.co';
const supabaseKey = 'sb_publishable_-c7YN6gSt35aw0e0cA8mzQ_D7Ma_1zh';

export const supabase = createClient(supabaseUrl, supabaseKey);
