import pool from '../../lib/db';

export async function POST(req) {
  const { email, cart } = await req.json();
  try {
  const client = await pool.connect();
  const result = await pool.query('UPDATE furnixschema.users SET cart = $1 WHERE email = $2 RETURNING *', [cart, email]);
  const updatedRow = result.rows[0];
  console.log("updatedRow:", updatedRow);
  client.release();
  return Response.json(updatedRow);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}
