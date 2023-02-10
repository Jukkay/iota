import { Client } from "@prisma/client";
import Link from "next/link";
import { api } from "../utils/api";

export const ClientItem = ({ client }: { client: Client }) => {
  if (!client) return null;
  return (
    <div className="m-3 flex">
      <div className="m-1 flex rounded-lg bg-slate-50 text-indigo-600">
        <div className="m-1 flex flex-col">
          <div>Client ID</div>
          <div className="text-black">{client.id}</div>
        </div>
        <div className="m-1 flex flex-col">
          <div>Client key</div>
          <div className="text-black">{client.clientKey}</div>
        </div>
        <div className="m-1 flex flex-col">
          <div>Last activity</div>
          <div className="text-black">{`${client.lastActivity.toLocaleDateString()} ${client.lastActivity.toLocaleTimeString()}`}</div>
        </div>
      </div>
      <Link href={`/viewdata/${client.id}`}>
        <button className="m-1 rounded-lg bg-indigo-600 p-1 text-slate-50">
          See client data
        </button>
      </Link>
    </div>
  );
};

export const ClientList = ({ clients }: { clients: Client[] }) => {
  if (clients.length < 1) return <p>No clients found</p>;
  return (
    <div className="rounded-lg border-4 border-indigo-600">
      {clients.map((client: Client) => (
        <ClientItem key={client.id} client={client} />
      ))}
    </div>
  );
};
