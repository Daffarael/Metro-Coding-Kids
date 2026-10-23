-- =========================================================================
-- Metro Coding Kids - Database Schema & Security Policies
-- Run this script in your Supabase SQL Editor:
-- Dashboard -> SQL Editor -> New Query -> Run
-- =========================================================================

-- 1. Table: leads (Contact Vault)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    child_name TEXT NOT NULL,
    child_age TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    course_id TEXT NOT NULL,
    status TEXT DEFAULT 'baru',
    notes TEXT DEFAULT '',
    source TEXT DEFAULT 'landing_page',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop old policies if exist
DROP POLICY IF EXISTS "Allow public insert leads" ON public.leads;
DROP POLICY IF EXISTS "Allow select leads" ON public.leads;

-- Allow visitors to submit lead form
CREATE POLICY "Allow public insert leads" ON public.leads
    FOR INSERT WITH CHECK (true);

-- Allow reading leads (for admin API / service role)
CREATE POLICY "Allow select leads" ON public.leads
    FOR SELECT USING (true);

-- 2. Table: site_settings (Dynamic anti-hardcode configuration)
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Drop old policies if exist
DROP POLICY IF EXISTS "Allow public read site_settings" ON public.site_settings;
DROP POLICY IF EXISTS "Allow all for site_settings" ON public.site_settings;

-- Allow public read of site settings
CREATE POLICY "Allow public read site_settings" ON public.site_settings
    FOR SELECT USING (true);

-- Allow modify site settings
CREATE POLICY "Allow all for site_settings" ON public.site_settings
    FOR ALL USING (true);

-- 3. Default Initial Settings
INSERT INTO public.site_settings (key, value)
VALUES
    ('whatsapp_number', '"6282382872411"'),
    ('batch_name', '"Batch November 2026"'),
    ('batch_deadline', '"2026-11-15T23:59:59"'),
    ('price_normal', '950000'),
    ('price_current', '499000'),
    ('quota_seats_left', '4')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
