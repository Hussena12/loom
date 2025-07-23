import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oteazkwtmhyabnumtirt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZWF6a3d0bWh5YWJudW10aXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDYyMDEsImV4cCI6MjA2ODUyMjIwMX0.99zvBqZu2Rct9pHPjr3m5420ymYbCiWXc_Xouy0vG2U";

console.log(supabaseAnonKey);
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
