

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'

type Person = { firstName: string, lastName: string, age: number, phone: number, email: string, password: string, title: string }
const defaultData: Person[] = [
    {
        firstName: 'dede',
        lastName: 'sdsd',
        age: 23,
        phone: 913978051,
        email: 'testjon@gmail.com',
        password: 'istalgan'
        , title: 'tst'
    },
    {
        firstName: 'edeqbr',
        lastName: 'sdefrv',
        age: 10,
        phone: 913978051,
        email: 'testjon@gmail.com',
        password: 'istalgan'
        , title: 'tst'
    },
    {
        firstName: 'dede',
        lastName: 'sdsd',
        age: 23,
        phone: 913978051,
        email: 'testjon@gmail.com',
        password: 'istalgan'
        , title: 'tst'
    },
    {
        firstName: 'edeqbr',
        lastName: 'sdefrv',
        age: 10,
        phone: 913978051,
        email: 'testjon@gmail.com',
        password: 'istalgan',
        title: 'tst'
    },
    {
        firstName: 'dede',
        lastName: 'sdsd',
        age: 23,
        phone: 913978051,
        email: 'testjon@gmail.com',
        password: 'istalgan'
        , title: 'tst'
    },
    {
        firstName: 'edeqbr',
        lastName: 'sdefrv',
        age: 10,
        phone: 913978051,
        email: 'testjon@gmail.com',
        password: 'istalgan'
        , title: 'tst'
    }
]
const columHelper = createColumnHelper<Person>()

const columns = [
    columHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    }),
    columHelper.accessor('lastName', {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    }),
    columHelper.accessor('age', {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    }),
    columHelper.accessor("phone", {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    }),
    columHelper.accessor('email', {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    }),
    columHelper.accessor('password', {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    }),
    columHelper.accessor('title', {
        cell: info => info.getValue(),
        footer: info => info.column.columnDef.id
    })
]

const Test = () => {
    const [data, setData] = useState(() => [...defaultData])
    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel()
    })
    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.header, header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {/* <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody> */}
                <tbody>
                    {table.getRowModel().rows.map(tst => (
                        <tr key={tst.id}>
                            {tst.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}</th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}

export default Test
