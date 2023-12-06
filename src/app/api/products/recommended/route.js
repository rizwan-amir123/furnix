import pool from '../../../lib/db';

/*
export async function GET(Request) {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM furnixschema.products WHERE category = 'rug'");
  const products = result.rows;
  client.release();
  console.log(products);
  //const data = await products.json();
  return Response.json(products);
}
*/

export async function GET(req) {
    const {searchParams} = new URL(req.url);
    const first = searchParams.get("first");
    const second = searchParams.get("second");
    const third = searchParams.get("third");
    const answer = [];
    try {
      const client = await pool.connect();
      if (first !== "" && second !== "" && third !== "") {
        const result = await client.query("SELECT * FROM furnixschema.products WHERE category = $1", [first]);
        answer.push(result.rows[0]);
        answer.push(result.rows[1]);
        const resultSecond = await client.query("SELECT * FROM furnixschema.products WHERE category = $1", [second]);
        answer.push(resultSecond.rows[0]);
        const resultThird = await client.query("SELECT * FROM furnixschema.products WHERE category = $1", [third]);
        answer.push(resultThird.rows[0]);
      }
      else {
        const result = await client.query("SELECT * FROM furnixschema.products WHERE category = $1", [first]);
        answer.push(result.rows[0]);
        answer.push(result.rows[1]);
        answer.push(result.rows[2]);
        const resultSecond = await client.query("SELECT * FROM furnixschema.products WHERE category = 'outdoor'");
        answer.push(resultSecond.rows[0]);
      }
      client.release();
      return Response.json(answer);
    } catch {
      return Response.json({ error: 'Internal server error' });
    }
  }