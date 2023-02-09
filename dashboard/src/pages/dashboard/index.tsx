import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { api } from "../../utils/api";
import { ClientItem } from "../../components/Client";
import { Client } from "@prisma/client";

const Dashboard: NextPage = () => {
  const { data, isLoading, isError } = api.client.getAll.useQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>Client Dashboard</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <RenderClients clients={data}/>
      </main>
    </>
  );
};

export default Dashboard;

const RenderClients = ({clients}: {clients: Client[]}) => {
  if (clients.length < 1) return <p>No clients found</p>;
  return (
    <>
      {clients.map((client: Client) => (
        <ClientItem client={client} />
      ))}
    </>
  );
};
