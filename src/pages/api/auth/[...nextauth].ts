// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: String(process.env.GOOGLE_CLIENT_ID),
//       clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
//     }),
//     // ...add more providers here
//   ],
//   secret: process.env.NEXT_SECRET,

// pages: {
//     signIn: "/auth/signin",
//   },

// };
// export default NextAuth(authOptions);

import NextAuth from "next-auth";
import { authOptions } from "../../../server/auth";

export default NextAuth(authOptions);
