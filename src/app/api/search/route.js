import pool from '../../lib/db';

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const query = searchParams.get("query");

  try {
    console.log(query);
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM products WHERE category = $1", [query]);
    //const result = await client.query("SELECT * FROM products WHERE email = $1 AND password = $2", [email, password]);
    const products = result.rows;
    client.release();
    return Response.json(products);
    //const products = result.rows;
    //client.release();
    //return Response.json(products);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}