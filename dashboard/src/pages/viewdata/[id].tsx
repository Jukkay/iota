import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Column } from "react-table";
import { DataTable } from "../../components/ViewData";
import { api } from "../../utils/api";

const ViewData = () => {
  const { query } = useRouter();
  const { status } = useSession();
  const { data, isLoading, isError } = api.client.getData.useQuery(
    query.id as string
  );
  const tableData = useMemo(() => data, [data])
  const columns: Column[] = useMemo(
    () => [
      {
        Header: 'Data',
        accessor: 'data', // accessor is the "key" in the data
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
    ],
    []
  )
  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data || data.length < 1) return <p>No data found for this client</p>;
  return (
    <>
      <Head>
        <title>Client Data</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-6 text-5xl text-indigo-800">{query.id}</h1>
        {tableData && <DataTable data={tableData} columns={columns} />}
      </div>
    </>
  );
};

export default ViewData;
