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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <ClientList clients={data}/>
      </main>
    </>
  );
};

export default Dashboard;
