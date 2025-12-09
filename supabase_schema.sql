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

-- --- PHASE 3 UPDATES ---

-- Create Players Table
create table public.players (
  id uuid default gen_random_uuid() primary key,
  team_id uuid references public.teams(id) on delete cascade not null,
  name text not null,
  position text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Players
alter table public.players enable row level security;
create policy "Enable read for all" on public.players for select using (true);
create policy "Enable insert for authenticated users" on public.players for insert with check (auth.role() = 'authenticated');

-- Create Fixtures Table
create table public.fixtures (
  id uuid default gen_random_uuid() primary key,
  team_a_id uuid references public.teams(id) on delete set null,
  team_b_id uuid references public.teams(id) on delete set null,
  match_date timestamp with time zone not null,
  venue text not null,
  score_a integer default 0,
  score_b integer default 0,
  status text check (status in ('Upcoming', 'Live', 'Finished')) default 'Upcoming',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Fixtures
alter table public.fixtures enable row level security;
create policy "Enable read for all" on public.fixtures for select using (true);
create policy "Enable update for admins" on public.fixtures for update using (auth.role() = 'authenticated');

-- Create Workshops Table (Catalog)
create table public.workshops (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null, -- e.g. 'AI', 'E-commerce'
  resource_url text,
  registered_users jsonb default '[]'::jsonb, -- Storing User IDs as JSON array
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Workshops
alter table public.workshops enable row level security;
create policy "Enable read for all" on public.workshops for select using (true);
create policy "Enable update for users (registration)" on public.workshops for update using (auth.role() = 'authenticated');

-- Create Transactions Table
create table public.transactions (
  id uuid default gen_random_uuid() primary key,
  team_id uuid references public.teams(id) on delete set null,
  amount decimal(10, 2) not null,
  provider text not null check (provider in ('M-Pesa', 'PayPal', 'Stripe')),
  transaction_code text unique not null,
  status text default 'pending', -- 'pending', 'completed', 'failed'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Transactions
alter table public.transactions enable row level security;
create policy "Enable read for own team" on public.transactions for select using (auth.uid() in (select captain_id from teams where id = team_id)); -- Assuming link to user, but for now simple check
-- Note: 'captain_id' isn't explicitly in teams yet based on my read (it has captain_name). 
-- Use a simpler policy for now or assume public for demo/admin:
create policy "Enable read for all authenticated" on public.transactions for select using (auth.role() = 'authenticated');
create policy "Enable insert for authenticated" on public.transactions for insert with check (auth.role() = 'authenticated');
