import NextAuth, { DefaultSession } from "next-auth";

// 세션 유저는 그대로 유지하며 새로운 username 생성
declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}
