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

