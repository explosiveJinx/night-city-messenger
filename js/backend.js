// Creates the Supabase client. Demo mode (?demo) swaps in an in-memory fake
// so the interface can be explored without any backend.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

export const isDemo = new URLSearchParams(location.search).has('demo') || !!window.__NCM_DEMO__;
export const isConfigured = !SUPABASE_URL.includes('YOUR-PROJECT') && !SUPABASE_ANON_KEY.includes('YOUR-ANON');

export async function createBackend() {
  if (isDemo) {
    const m = await import('./demo/mock-supabase.js');
    return m.createMockClient();
  }
  if (!isConfigured) return null;
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm');
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
    realtime: { params: { eventsPerSecond: 10 } },
  });
}
