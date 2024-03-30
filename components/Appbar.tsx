"use client"
import { signIn, signOut, useSession } from "next-auth/react"


export function Appbar(){
   const session = useSession();
    return (
        <div>
            <button onClick={() => {
                signIn()
            }}>Login</button>
            <button onClick={() => {
                signOut()
            }}>Logout</button>
            {JSON.stringify(session)}
        </div>
    )
}
