/*

App.js


import React, { useMemo } from 'react'
import Test from './Test'
import './App.css'
import mData from './MOC_DATA.json'
import { DateTime } from 'luxon'
import movies from './MOVIE_DATA.json'
import TableSearch from './TableSearch'
const App = () => {
  // const data = useMemo(() => mData, []);
  // const columns = [
  //   { header: 'ID', accessorKey: 'id', footer: 'ID' },
  //   ///  2 qator korsatadi first name last name larni    ///
  //   {
  //     header: 'Name',
  //     columns: [
  //       {
  //         header: 'Firs ',
  //         accessorKey: 'first_name',
  //         footer: 'First Name',
  //       },
  //       { header: 'Last ', accessorKey: 'first_name', footer: 'Last Name' },
  //     ],
  //   },

  //   ////  first name va last name ni qoshib chiqaradi   ////
  //   // {
  //   //   header: 'Name',
  //   //   accessorFn: (row) => (row = `${row.first_name} ${row.last_name}`),
  //   // },

  //   ////  first name va last name ni chiqaradi   ////
  //   // { header: 'Firs Name', accessorKey: 'first_name', footer: 'First Name' },
  //   // { header: 'Last Name', accessorKey: 'first_name', footer: 'Last Name' },

  //   { header: 'E-mail', accessorKey: 'email', footer: 'e-mail' },
  //   { header: 'Gender', accessorKey: 'gender', footer: 'Gender' },
  //   {
  //     header: 'Date of birth',
  //     accessorKey: 'dob',
  //     footer: 'Date of birth',
  //     cell: info =>
  //       DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
  //   },
  // ];

  const data = useMemo(() => movies, []);
  const movieColumns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Genre", accessorKey: "genre" },
    { header: "Rating", accessorKey: "rating" },
  ]
  return (
    <div>
      <TableSearch data={data} columns={movieColumns} />
    </div>
  )
}

export default App

 */

import React, { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

const TableSearch = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  return (
    <div className='w3-container'>
      <input
        type='text'
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table className='w3-table-all'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {
                        { asc: '🔼', desc: '🔽' }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.di}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>a
          ))}
        </tfoot> */}
      </table>
      <div>
        <button onClick={() => table.setPageIndex(0)}>Fist Page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous Page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next Page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last Page
        </button>
      </div>
    </div>
  );
};

export default TableSearch;
