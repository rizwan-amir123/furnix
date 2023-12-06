import pool from '../../lib/db';

export async function POST(req) {
  const { email, firstname, lastname, address, city, postalcode, phone, shipaddress, country,
  payment} = await req.json();
  try {
  const client = await pool.connect();
  console.log(email);
  console.log(firstname);
  console.log(lastname);
  console.log(address);
  console.log(city);
  console.log(postalcode);
  console.log(phone);
  console.log(shipaddress);
  console.log(country);
  console.log(payment);
  const result = await pool.query('INSERT INTO furnixschema.info (email, firstname, lastname, address, city, postalcode, phone, shipaddress, country, payment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [email, firstname, lastname, address, city, postalcode, phone, shipaddress, country,
    payment]);
  const insertedInfo = result.rows[0];
  console.log(insertedInfo);
  client.release();
  return Response.json(insertedInfo);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}

