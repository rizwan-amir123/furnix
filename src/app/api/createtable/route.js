/*
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
*/

import pool from '../../lib/db';

export async function GET(req) {
  //const { email, firstname, lastname, password, cart, manual} = await req.json();
  try {
  const client = await pool.connect();
  const result = await pool.query('CREATE TABLE Nets ( Name varchar(255), Owner varchar(255) )');
  //const insertedUser = result.rows[0];
  client.release();
  return Response.json(insertedUser);
  } catch {
    return Response.json({ error: 'Internal server error' });
  }
}