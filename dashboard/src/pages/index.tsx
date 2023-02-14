import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { Button } from "../components/Form";
import { useEffect, useState } from "react";
import { BuiltInProviderType } from "next-auth/providers";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Iota Admin Page</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl text-indigo-800 m-6">Admin login</h1>
        <AdminAuth />
      </div>
    </>
  );
};

export default Home;

const AdminAuth = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button classNames="m-6 p-3" onClick={sessionData ? () => void signOut() : () => void signIn("github", {
        callbackUrl: `${window.location.origin}/dashboard`,
      })}>{sessionData ? "Sign out" : "Sign in"}</Button>
    </div>
  );
};
