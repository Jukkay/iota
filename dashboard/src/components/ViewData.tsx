import { DataPoint } from "@prisma/client";

export const DataTable = ({ data }: { data: DataPoint[] }) => {
  if (!data) return null;
  return (
    <div className="rounded-lg border-4 border-indigo-600">
      {data.map((datapoint: DataPoint) => (
        <TableRow datapoint={datapoint} />
      ))}
    </div>
  );
};

const TableRow = ({ datapoint }: { datapoint: DataPoint }) => {
  if (!datapoint) return null;
  return (
    <div className="m-3 flex">
      <div className="m-1 flex rounded-lg bg-slate-200 text-indigo-600">
        <div className="m-1 flex flex-col">
          <div>Data</div>
          <div className="text-black">{datapoint.dataPoint}</div>
        </div>
        <div className="m-1 flex flex-col">
          <div>Time</div>
          <div className="text-black">{`${datapoint.createdAt.toLocaleDateString()} ${datapoint.createdAt.toLocaleTimeString()}`}</div>
        </div>
      </div>
    </div>
  );
};
