import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { api } from "../../utils/api";
import { ClientList } from "../../components/Client";

const Dashboard: NextPage = () => {
  const { data, isLoading, isError } = api.client.getAll.useQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>Client Dashboard</title>
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl text-indigo-800 m-6">Registered clients</h1>
        <ClientList clients={data}/>
      </main>
    </>
  );
};

export default Dashboard;
