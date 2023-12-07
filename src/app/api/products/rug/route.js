import pool from '../../../lib/db';

export async function GET(Request) {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM products WHERE category = 'rug'");
  const products = result.rows;
  client.release();
  console.log(products);
  //const data = await products.json();
  return Response.json(products);
}