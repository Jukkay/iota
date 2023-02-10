import { Client } from "@prisma/client";

export const ClientItem = ({client}: {client: Client}) => {
  if (!client) return null;
  return (
    <div>
      <div>{client.id}</div>
      <div>{client.clientKey}</div>
      <div>{client.lastActivity.toDateString()}</div>
    </div>
  );
};

export const ClientList = ({clients}: {clients: Client[]}) => {
  if (clients.length < 1) return <p>No clients found</p>;
  return (
    <>
      {clients.map((client: Client) => (
        <ClientItem client={client} />
      ))}
    </>
  );
};
