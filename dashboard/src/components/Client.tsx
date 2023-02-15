import { Client } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { Button } from "./Form";

export const ClientItem = ({ client }: { client: Client }) => {
  if (!client) return null;
  return (
    <div className="m-3 flex">
      <div className="m-1 flex rounded-lg bg-slate-200 text-indigo-600 shadow-xl">
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
        <button className="m-1 rounded-lg bg-indigo-600 p-1 text-slate-50 shadow-xl">
          See client data
        </button>
      </Link>
    </div>
  );
};

export const ClientItemAdmin = ({ client }: { client: Client }) => {
  if (!client) return null;
  const router = useRouter()
  const mutation = api.client.delete.useMutation()
  const handleDelete = () => {
    mutation.mutate(client.id)
  }
  const handleEdit = () => {
    router.push(`/editclient/${client.id}`)
  }
  return (
    <div className="m-3 flex">
      <div className="m-1 flex rounded-lg bg-slate-200 text-indigo-600 shadow-xl">
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
      <Button classNames="m-1" onClick={handleEdit}>Edit</Button>
      <Button classNames="m-1" onClick={handleDelete}>Delete</Button>
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

export const ClientListAdmin = ({ clients }: { clients: Client[] }) => {
  if (clients.length < 1) return <p>No clients found</p>;
  return (
    <div>
      <h1 className="text-2xl text-indigo-800 my-6">Clients</h1>
      <div className="rounded-lg border-4 border-indigo-600">
        {clients.map((client: Client) => (
          <ClientItemAdmin key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};