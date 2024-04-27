import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import './table.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    axios
      .delete(`http://localhost:8080/users/${rowData.id}`)
      .then((resp) => console.log())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={() => navigate('/add')}>Add</button>
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
                <button onClick={() => handleEdit(row.original)}>Edit</button>
                <button onClick={() => handleDelete(row.original)}>
                  Delete
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
