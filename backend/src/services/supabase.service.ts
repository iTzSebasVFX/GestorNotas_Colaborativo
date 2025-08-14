import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uysoykwqgxzlltabidop.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5c295a3dxZ3h6bGx0YWJpZG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNTIzMDgsImV4cCI6MjA3MDYyODMwOH0.6Ky_SE1zPVpCSgu-gO1gTfxRIZX5A196Ye3KoBsaYfc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase