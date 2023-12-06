import pool from '../../lib/db';

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const email = searchParams.get("email");
  const password = searchParams.get("pass");
  try {
    //const email = params.slug;
    console.log(email);
    console.log(password);
    //const password = params.id;
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM furnixschema.users WHERE email = $1 AND password = $2", [email, password]);
    //const result = await client.query("SELECT * FROM furnixschema.products WHERE email = $1 AND password = $2", [email, password]);
    const count = result.rowCount;
    client.release();
    if (count >=1 ) {
      return Response.json({"success":true});
    }
    else {
      return Response.json({"success":false});
    }
    //const products = result.rows;
    //client.release();
    //return Response.json(products);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}