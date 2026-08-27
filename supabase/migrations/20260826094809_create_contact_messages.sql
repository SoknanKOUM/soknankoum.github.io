/*
# Create contact_messages table

Stores messages submitted through the portfolio "Get in Touch" contact form.

1. New Tables
   - `contact_messages`
     - `id` (uuid, primary key) - unique identifier for each message
     - `name` (text, not null) - sender's name
     - `email` (text, not null) - sender's email address
     - `message` (text, not null) - the message body
     - `created_at` (timestamptz) - when the message was submitted

2. Security
   - Enable Row Level Security on `contact_messages`.
   - This is a public, no-auth portfolio site, so the anon key must be able to
     submit messages. A single INSERT policy for `anon` + `authenticated` allows
     visitors to send a message.
   - No SELECT/UPDATE/DELETE policies are added, so nobody can read, edit, or
     delete submissions through the public API (the owner reads them from the
     Supabase dashboard). This prevents visitors from harvesting others' messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone_can_submit_contact_message" ON contact_messages;
CREATE POLICY "anyone_can_submit_contact_message" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
