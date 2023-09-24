import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wendjyexikqtujaiqage.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlbmRqeWV4aWtxdHVqYWlxYWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1MzM5MTcsImV4cCI6MjAxMTEwOTkxN30.5s2OW2-7fyrIgSGi1PBGDKzGVcbcNP2ficGcwy_k8LE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;