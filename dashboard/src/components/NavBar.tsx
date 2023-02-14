import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./Form";

export const NavBar = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex justify-between m-3">
            <div className="justify-start">
                <Link className="p-3" href="/dashboard">Dashboard</Link>
                <Link className="p-3" href="/controlpanel">Control Panel</Link>
            </div>
            <Button onClick={sessionData ? () => void signOut({
                callbackUrl: `/`,
            }) : () => void signIn("github", {
                callbackUrl: `/dashboard`,
            })}>{sessionData ? "Sign out" : "Sign in"}</Button>
        </div>
    )
}
