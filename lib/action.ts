"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import prisma from "./prisma";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  
  return session?.user;
}

export async function getUserbyEmail(email: string ) {
  const user = await prisma.user.findUnique({
    where: {email: email}
  })
  return user
}

export async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}
export async function getAllPosts() {
  const posts = await prisma.post.findMany()
  return posts
}

export async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id: id
    }
  })
  return post
}

export const handleDelete = async (id: string) => {  
  await prisma.user.delete({
    where: {
      id,
    }
  })
}