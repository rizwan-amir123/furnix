import pool from '../../../lib/db';
export async function GET(req, { params }) {
  const id = params.id;
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM products WHERE id = $1", [id]);
  const products = result.rows;
  client.release();
  //return Response.json(products);

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      //'Access-Control-Allow-Credentials': "true",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      "Content-Type": "application/json"
    },
  });
}