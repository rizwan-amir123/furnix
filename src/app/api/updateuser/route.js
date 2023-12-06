import pool from '../../lib/db';

export async function PATCH(req) {
  const { cart, email } = await req.json();
  try {
  const client = await pool.connect();
  const result = await pool.query('UPDATE furnixschema.users SET cart = $1 WHERE email = $2 RETURNING *', [cart, email]);
  const patchedItem = result.rows[0];
  client.release();
  return Response.json(patchedItem);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}

