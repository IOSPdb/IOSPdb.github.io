import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://oogwzodwvxhfcwxwxvup.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_APIKEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
