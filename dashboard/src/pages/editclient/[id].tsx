import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { EditClientInfo } from "../../components/EditClientInfo";
import { api } from "../../utils/api";

const EditClient = () => {
  const { query } = useRouter();
  const { status } = useSession();
  const { data, isLoading, isError } = api.client.getClient.useQuery(
    query.id as string
  );
  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return <p>No client found</p>;
  return (
    <>
      <Head>
        <title>Client info</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-6 text-5xl text-indigo-800">Client Info</h1>
        <EditClientInfo client={data} />
      </div>
    </>
  );
};

export default EditClient;
