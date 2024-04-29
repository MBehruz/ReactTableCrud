import '../App.css';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Fill, RiEditFill } from 'react-icons/ri';
import TutorialService from '../services/TutorialService';
const TutorialsList = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const navigate = useNavigate();

  const handleEdit = (rowData) => {
    navigate('/add', { state: rowData });
  };

  const handleDelete = (rowData) => {
    TutorialService.delete(`${rowData.id}`);
    window.location.reload().catch((err) => console.log(err));
  };

  return (
    <div>
      <button className='addTBTN' onClick={() => navigate('/add')}>
        Add
      </button>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
              <th>Action</th>
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
              <td>
                <button
                  className='addTBTN'
                  onClick={() => handleEdit(row.original)}
                >
                  <RiEditFill />
                </button>
                <button
                  className='addTBTN'
                  onClick={() => handleDelete(row.original)}
                >
                  <RiDeleteBin5Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialsList;
