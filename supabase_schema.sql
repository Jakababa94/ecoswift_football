-- Create the teams table
create table public.teams (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  team_name text not null,
  town text not null,
  contact_name text not null,
  contact_phone text not null,
  contact_email text not null
);

-- Enable Row Level Security (RLS)
alter table public.teams enable row level security;

-- Policies for teams
create policy "Enable insert for everyone" on public.teams for insert with check (true);
create policy "Enable read access for all users" on public.teams for select using (true);

-- --- PHASE 2 UPDATES ---

-- Modify teams table
alter table public.teams 
add column if not exists captain_name text,
add column if not exists players_count integer,
add column if not exists payment_method text,
add column if not exists payment_status text default 'pending',
add column if not exists logo_url text;

-- Create workshop_registrations table
create table public.workshop_registrations (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text not null,
  interests text[] -- Array of strings for interests e.g. ['AI', 'E-commerce']
);

-- RLS for workshops
alter table public.workshop_registrations enable row level security;

create policy "Enable insert for everyone" on public.workshop_registrations for insert with check (true);
create policy "Enable read for all" on public.workshop_registrations for select using (true);

-- Create sponsors table
create table public.sponsors (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  logo_url text not null,
  website_url text
);
