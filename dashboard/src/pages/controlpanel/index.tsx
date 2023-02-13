import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { api } from "../../utils/api";
import { ClientList, ClientListAdmin } from "../../components/Client";
import { CreateClient } from "../../components/CreateClient";

const ControlPanel: NextPage = () => {
  const { data, isLoading, isError } = api.client.getAll.useQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>Client Administration</title>
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl text-indigo-800 m-6">Admin</h1>
        <h1 className="text-2xl text-indigo-800 my-6">Create new client</h1>
        <CreateClient />
        <h1 className="text-2xl text-indigo-800 my-6">Create new client</h1>
        <ClientListAdmin clients={data}/>
      </main>
    </>
  );
};

export default ControlPanel;
