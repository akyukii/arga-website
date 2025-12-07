import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nxjedundtzyivalxlqsi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54amVkdW5kdHp5aXZhbHhscXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4OTM5MjIsImV4cCI6MjA4MDQ2OTkyMn0.phb0_LPgmhhvvmMjqQiy979PkGh4ga_Rfqp9PW2xWeg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

