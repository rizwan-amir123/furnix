import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from 'next-auth/providers/credentials';
import { useAuth } from '../../../context/AuthProvider';
import {verifyPassword} from '../../../lib/auth/auth.js'

/*
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions);
*/

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      //id: "username-login",
      /*
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      */
      
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log("email:", email);
        console.log("password:", password);
        const user = await verifyPassword(email, password);
        //const dummy = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        console.log("user:", user);
        
        if (user!== null) {
          return user;
        } else {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ],
  
    // ...add more providers here
  
  //  callbacks: {
  //    async signIn({user}) {
        // Custom logic after user signs in
  //      console.log('User signed in:', user);
        //const cart = {"a":"1wdqwd"};
        //console.log('User signed in:', email);
  //      console.log("sign in callback");
        //const client = await pool.connect();
        //const result = await pool.query('UPDATE furnixschema.users SET cart = $1 WHERE email = $2 RETURNING *', [cart, "a@gmail.com"]);
        //const patchedItem = result.rows[0];
        //client.release();
  

      /*
        // You can perform additional actions here, e.g., update user data in your database
        const submitData = {"cart": firstname, "email":"a@gmail.com"};
        const request = new Request('http://localhost:3000/api/createuser',{
          method: 'PATCH',
          body: JSON.stringify(submitData),
          headers: {
            'content-type': 'application/json'
          }
        })
        fetch(request)
        .then((response) => {
          if (response.status === 200) {
              console.log("sign in callback done");
          return response.json();
          } else {
          throw new Error("Something went wrong on API server!");
          }
      })
      .catch((error) => {
          console.error(error);
      });
  
        return true; // Return true to continue the sign-in process
      },
      */

     /*
      try {
        // Perform side effects, e.g., update context state
        const { signIn: contextSignIn } = useAuth();
        contextSignIn();

        // You can also make API calls, etc.
      } catch (error) {
        console.error('Error during sign in:', error);
      }
      */
      // Return true to indicate successful sign in
  //    return true;
  //  },
  //},
  
  /*
  callbacks: {
    session({ session, token, user }) {
      //session.user.cart = user.cart;
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  */
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
          cart: user.cart
        };
      }

      return token;
    },

    async session({ session, token, user }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;
      session.user.cart = token.cart;

      return session;
    },

    /*
    async signIn({ user, account, profile, email, credentials }) {
      console.log("from signin callback user id:",user.id);
      
      await fetch( `/api/fetchuser?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          //addMultipleToCart(data[0].cart);
          //addToCart(data[0].cart[0]);
          console.log("from signin callback data:",data);
          //setInitialized(true);
          //router.push('/');
        })
      .catch((error) => console.error('Error in login', error));
      return true;
    },
    */

    async redirect({ url, baseUrl }) {
      return 'http://localhost:3000/login';
    },
    
  },
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
