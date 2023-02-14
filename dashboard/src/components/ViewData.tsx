import { DataPoint } from "@prisma/client";
import { Column, useTable } from 'react-table'
import { ITableData } from "../types/types";

export const DataTable = ({ data, columns }: { data: ITableData[], columns: Column[] }) => {
  if (!data) return null;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="border-x border-indigo-600">
            {headerGroup.headers.map(column => (
              <th
                className="bg-indigo-600 p-2 divide-x border-slate-50 text-slate-50"
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-slate-200 text-indigo-600 border-y border-indigo-600">
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="border-y border-indigo-600">
              {row.cells.map(cell => {
                return (
                  <td
                    className="border-x border-indigo-600 py-1 px-3"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

const TableRow = ({ datapoint }: { datapoint: DataPoint }) => {
  if (!datapoint) return null;
  return (
    <div className="m-3 flex">
      <div className="text-black mx-3">{datapoint.dataPoint}</div>
      <div className="text-black mx-3">{`${datapoint.createdAt.toLocaleDateString()} ${datapoint.createdAt.toLocaleTimeString()}`}</div>
    </div>
  );
};
