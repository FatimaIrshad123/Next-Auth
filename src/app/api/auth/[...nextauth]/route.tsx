import { NextApiRequest } from "next";
import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials: {
                username: {label:'email', type:'text',placeholder:'Email'},
                password: {label:'password', type:'password',placeholder:'Password'}
            },
            async authorize(credentials:any){
                console.log(credentials)
                return {
                    id: "user1",
                    name:'Fatima',
                    email:'abcd'
                };
            }
        })
    ],
    secret: process.env.NEXTAUTH_URL
})
export const GET = handler;
export const POST = handler;
