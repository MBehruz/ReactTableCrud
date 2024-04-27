import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import './style.css'
const TstHeaderG = () => {

    type Person = { name: string, age: number, title: string, desc: string, hobby: string }

    const defaultDataT: Person[] = [
        {
            name: 'as',
            age: 23,
            title: 'dsf',
            desc: 'scd',
            hobby: 'defrgt'
        }
    ]

    const columnHelper = createColumnHelper<Person>()

    const columns = [
        columnHelper.group({
            id: 'test',
            header: () => <span>Test</span>,
            columns: [
                columnHelper.accessor('name', {
                    cell: info => info.getValue(),
                    footer: props => props.column.id
                }),
                columnHelper.accessor('title', {
                    cell: info => info.getValue(),
                    footer: props => props.column.id
                })
            ],
        }),
        columnHelper.group({
            header: 'info',

            columns: [
                columnHelper.accessor('age', {
                    header: () => 'Age',
                    footer: props => props.column.id
                }),
                columnHelper.accessor('desc', {
                    header: () => <span>Desc</span>,
                    footer: props => props.column.id
                }),
                columnHelper.accessor('hobby', {
                    header: 'Hobby',
                    footer: props => props.column.id
                })
            ]
        })
    ]


    const [data, setData] = useState(() => [...defaultDataT])



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div>
            <p>Hello</p>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} >
                            {headerGroup.headers.map(header => (
                                <th key={header.id} colSpan={header.colSpan}>
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
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    )
}

export default TstHeaderG
