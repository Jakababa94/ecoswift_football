-- users (organisers/admins/volunteers)
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  role text NOT NULL CHECK (role IN ('admin','organiser','volunteer','viewer')),
  created_at timestamptz DEFAULT now()
);

-- teams (registration)
CREATE TABLE teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  captain_name text NOT NULL,
  captain_phone text NOT NULL,
  captain_email text,
  num_players int CHECK (num_players BETWEEN 7 AND 30),
  logo_url text,
  registration_status text DEFAULT 'pending' CHECK (registration_status IN ('pending','paid','confirmed','rejected')),
  payment_id text, -- reference to payments.payment_ref
  created_at timestamptz DEFAULT now()
);

-- payments
CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_ref text UNIQUE,
  method text CHECK (method IN ('mpesa','paypal','card')),
  amount numeric NOT NULL,
  status text CHECK (status IN ('initiated','success','failed','pending')),
  raw_payload jsonb,
  created_at timestamptz DEFAULT now()
);

-- fixtures & results
CREATE TABLE fixtures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time time,
  venue text,
  team_a uuid REFERENCES teams(id) ON DELETE SET NULL,
  team_b uuid REFERENCES teams(id) ON DELETE SET NULL,
  status text CHECK (status IN ('scheduled','playing','finished','postponed')),
  score_a int,
  score_b int,
  created_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

-- workshop_signups
CREATE TABLE workshop_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  interests text[], -- ['AI','ecommerce']
  created_at timestamptz DEFAULT now()
);

-- sponsors
CREATE TABLE sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  logo_url text,
  level text, -- 'platinum','gold','silver'
  created_at timestamptz DEFAULT now()
);

-- audit log
CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor uuid REFERENCES users(id),
  action text,
  resource_type text,
  resource_id uuid,
  details jsonb,
  created_at timestamptz DEFAULT now()
);
