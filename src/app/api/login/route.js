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
    const result = await client.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    //const result = await client.query("SELECT * FROM furnixschema.products WHERE email = $1 AND password = $2", [email, password]);
    const count = result.rowCount;
    client.release();
    if (count >=1 ) {
      //return Response.json({"success":true});
      return new Response(JSON.stringify({"success" :true }), {
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
    else {
      //return Response.json({"success":false});
      return new Response(JSON.stringify({"success": false }), {
        status: 400,
        headers: {
          //'Access-Control-Allow-Credentials': "true",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          "Content-Type": "application/json"
        },
      });
    }
    //const products = result.rows;
    //client.release();
    //return Response.json(products);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}