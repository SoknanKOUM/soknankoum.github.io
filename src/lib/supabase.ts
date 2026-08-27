import { createClient } from '@supabase/supabase-js';

// Hardcoded rather than read from an env var: this site is a fully static
// build (GitHub Pages), so there is no server-side secret injection at
// request time — these values would end up baked into the public JS bundle
// either way. That's fine here: this is the Supabase *anon* key, which is
// meant to be public. Access is actually restricted by the Row Level
// Security policy on `contact_messages` (see supabase/migrations), which
// only allows anonymous INSERT — nobody can read, edit or delete messages
// through this key.
const supabaseUrl = 'https://pvbwxduerlgcrwpscmzz.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2Ynd4ZHVlcmxnY3J3cHNjbXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3MzMxMjQsImV4cCI6MjEwMzMwOTEyNH0.9PS1w8BUxeX_qQter_QtrBM7HvihU0mzFonTN-fVGfI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
