import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React, { useReducer, useState } from 'react'
import './style.css'
const HeaderG = () => {
    type Person = {
        firstName: string
        lastName: string
        age: number
        visits: number
        status: string
        progress: number
    }


    const defaulData: Person[] = [
        {
            firstName: 'tanner',
            lastName: 'linsley',
            age: 24,
            visits: 100,
            status: 'In Relationship',
            progress: 50
        },
    ]

    const columnHelper = createColumnHelper<Person>()

    const columns = [
        columnHelper.group({
            id: 'Hello',
            header: () => <span>Hello</span>,
            footer: props => props.column.id,
            columns: [
                columnHelper.accessor("firstName", {
                    cell: info => info.getValue(),
                    footer: props => props.column.id
                }),
                columnHelper.accessor(row => row.lastName, {
                    id: 'lastName',
                    cell: info => info.getValue(),
                    header: () => <span>Last name</span>,
                    footer: props => props.column.id
                }),
            ],
        }),
        columnHelper.group({
            header: 'Info',
            footer: props => props.column.id,
            columns: [
                columnHelper.accessor("age", {
                    header: () => 'Age',
                    footer: props => props.column.id
                }),
                columnHelper.group({
                    header: 'More Info',
                    columns: [
                        columnHelper.accessor('visits', {
                            header: () => <span>Visits</span>,
                            footer: props => props.column.id
                        }),
                        columnHelper.accessor('status', {
                            header: "Status",
                            footer: props => props.column.id
                        }),
                        columnHelper.accessor('progress', {
                            header: 'Profile Progress',
                            footer: props => props.column.id,
                        }),
                    ]
                })
            ],
        })
    ]

    const [data, setData] = useState([...defaulData])
    const rerender = useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
    return (
        <div className='p-2'>
            <table >
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>

                </tfoot>
                <div>
                    <button>Render</button>
                </div>
            </table>
        </div>
    )
}

export default HeaderG
