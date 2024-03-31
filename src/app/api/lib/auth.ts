import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
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
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_URL,
    callbacks: {
        jwt: ({token,user}) => {
            console.log(token);
            return token
        },
        session: ({session,token,user}:any) => {
            console.log(session)
            if (session && session.user){
                session.user.id = token.sub;
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    }
}
