import pool from '../../lib/db';

export async function POST(req) {
  const { email, firstname, lastname, password, cart, manual} = await req.json();
  try {
  const client = await pool.connect();
  const result = await pool.query('INSERT INTO furnixschema.users (email, firstname, lastname, password, cart, manual) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [email, firstname, lastname, password, cart, manual]);
  const insertedUser = result.rows[0];
  client.release();
  return Response.json(insertedUser);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}

