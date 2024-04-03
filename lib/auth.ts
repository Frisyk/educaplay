import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma"
import { Adapter } from "next-auth/adapters"
import  {UserRole}  from "@prisma/client";
import { getUserById, getAccountByUserId } from "./data";


export const authOptions = {
//   callbacks: {
//     async session({ token, session }) {
          
//         if (token?.sub && session.user) {
//           session.user.id = token.sub;
//         }
  
//         if (token.role && session.user) {
//           console.log(UserRole);
          
//           session.user.role = token.role as UserRole;
//         }
  
//         if (session.user) {
//           session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
//         }
  
//         if (session.user) {
//           session.user.name = token.name;
//           session.user.email = token.email;
//           session.user.isOAuth = token.isOAuth as boolean;
//         }
  
//         return session;
//       },

//       async jwt({ token }) {
//         if (!token.sub) return token;

        
//         const existingUser = await getUserById(token.sub);
  
//         if (!existingUser) return token;
  
//         const existingAccount = await getAccountByUserId(
//           existingUser.id
//         );
  
//         token.isOAuth = !!existingAccount;
//         token.name = existingUser.name;
//         token.email = existingUser.email;
//         token.role = existingUser.role;
//         console.log(existingUser.role);
        
//         // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
  
//         return token;
//       }
// },
session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}
