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

-- Create a policy to allow anyone to insert valid data (Registration)
create policy "Enable insert for everyone" on public.teams
  for insert
  with check (true);

-- Create a policy to allow reading only your own data (Optional, for now maybe just public read or restricted)
-- For a tournament site, usually showing the list of registered teams is fine.
create policy "Enable read access for all users" on public.teams
  for select
  using (true);
