import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React from 'react'


const DataT = ({ data, columns }) => {

    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel()
    })

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(header => (
                        <tr key={header.id}>
                            {header.headers.map(header => (
                                <th key={header.id} >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={row.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataT
