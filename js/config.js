// =====================================================================
//  Your Supabase project settings. Safe to publish: the anon key is
//  PUBLIC by design (security comes from Row Level Security).
//  NEVER put the service_role key here.
// =====================================================================
export const SUPABASE_URL = 'https://fnxvvcwquydgtonbsypz.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZueHZ2Y3dxdXlkZ3RvbmJzeXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1NzA4NDcsImV4cCI6MjExMTE0Njg0N30.vh-zXgZVhoCiDiHo3rN1QwxndsvjrvGiOIQdZXka9mA';

// Players log in with a USERNAME. Internally Supabase Auth needs an e-mail,
// so we use <username>@<EMAIL_DOMAIN>. No mail is ever sent. This MUST match
// the PLAYER_EMAIL_DOMAIN secret of the admin-players Edge Function.
export const EMAIL_DOMAIN = 'nightcity.local';
