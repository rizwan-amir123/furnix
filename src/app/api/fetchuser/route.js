import pool from '../../lib/db';

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const email = searchParams.get("email");
  try {
    //const email = params.slug;
    //console.log(email);
    //console.log(password);
    //const password = params.id;
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
    //const result = await client.query("SELECT * FROM furnixschema.products WHERE email = $1 AND password = $2", [email, password]);
    const answer = result.rows;
    client.release();
    console.log("answer:", answer);
    return Response.json(answer);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}