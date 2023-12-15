import pool from '../../lib/db';

export async function POST(req) {
  const { email, firstname, lastname, password, cart, manual} = await req.json();
  try {
  const client = await pool.connect();
  const result = await pool.query('INSERT INTO users (email, firstname, lastname, password, cart, manual) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [email, firstname, lastname, password, cart, manual]);
  const insertedUser = result.rows[0];
  client.release();
  return Response.json(insertedUser);
  /*return new Response(JSON.stringify(insertedUser), {
    status: 200,
    headers: {
      //'Access-Control-Allow-Credentials': "true",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      "Content-Type": "application/json"
    },
  });
  */
  } catch {
    /*return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 400,
      headers: {
        //'Access-Control-Allow-Credentials': "true",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        "Content-Type": "application/json"
      },
    });*/
    return Response.json({ error: 'Internal server error' });
  }
}

