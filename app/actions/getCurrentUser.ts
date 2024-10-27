import { getServerSession } from "next-auth/next"

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    console.log("Fetching session...");
    return await getServerSession(authOptions);
  }
  
  export default async function getCurrentUser() {
    try {
      const session = await getSession();
      console.log("Session data:", session);
  
      if (!session?.user?.email) {
        console.log("No user email found in session.");
        return null;
      }
  
      const currentUser = await prisma.user.findUnique({
        where: {
          email: session.user.email as string,
        }
      });
  
      if (!currentUser) {
        console.log("No user found with this email in the database.");
        return null;
      }
  
      console.log("Current user:", currentUser);
  
      return {
        ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: 
          currentUser.emailVerified?.toISOString() || null,
      };
    } catch (error: any) {
      console.error("Error in getCurrentUser:", error);
      return null;
    }
  }
  