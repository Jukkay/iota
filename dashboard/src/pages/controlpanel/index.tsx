import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { api } from "../../utils/api";
import { ClientList, ClientListAdmin } from "../../components/Client";
import { CreateClient } from "../../components/CreateClient";

const ControlPanel: NextPage = () => {
  const { status } = useSession();
  const { data, isLoading, isError } = api.client.getAll.useQuery();
  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>Client Administration</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl text-indigo-800 m-6">Admin</h1>
        <CreateClient />
        <ClientListAdmin clients={data} />
      </div>
    </>
  );
};

export default ControlPanel;
