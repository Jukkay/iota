import Head from "next/head";
import { useRouter } from "next/router";
import { DataTable } from "../../components/ViewData";
import { api } from "../../utils/api";

const ViewData = () => {
  const { query } = useRouter();
  const { data, isLoading, isError } = api.client.getData.useQuery(
    query.id as string
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data || data.length < 1) return <p>No data found for this client</p>;
  return (
    <>
      <Head>
        <title>Client Data</title>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <h1 className="m-6 text-5xl text-indigo-800">{`Data from client id: ${query.id}`}</h1>
        <DataTable data={data} />
      </main>
    </>
  );
};

export default ViewData;
