//import { compare } from 'bcrypt';
//import db from './db'; // Import your database connection or ORM

export async function verifyPassword(email, password) {
  try {
    console.log("insoIIIIIIIe");
    let user = [];
    console.log("pre email:", email);

    
    await fetch( process.env.NEXTAUTH_URL+ `/api/fetchuser?email=${email}`)
    .then((response) => response.json())
    .then((data) => {
      user = data;
      console.log("data:",data);
      //router.push('/');
    })
    .catch((error) => console.error('Error in login', error));
    console.log("user2:",user);

    // Fetch user from your database based on email
    //const user = await db.user.findUnique({
    //  where: {
    //    email: credentials.email,
    //  },
    //});

    if (user.length === 0) {
      return null; // User not found
    }

    // Verify the password
    //const isValid = await compare(credentials.password, user.password);
    const isValid = user[0].password === password;
    if (!isValid) {
      return null; // Incorrect password
    }

    //return { id: user.id, email: user.email }; // Valid credentials
    console.log("passeddddddd");

    return {"id": user[0].id, "email":user[0].email, "name": user[0].firstname.charAt(0).toUpperCase() +
    user[0].firstname.slice(1) 
    + " " + user[0].lastname.charAt(0).toUpperCase() + user[0].lastname.slice(1),
    "cart": user[0].cart}
    //return user[0];
  } catch (error) {
    console.error('Error verifying password:', error);
    return null;
  }
}