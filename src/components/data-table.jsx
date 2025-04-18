import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    getFilteredRowModel,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import TablePagination from "@/components/TablePagination";
import TableViewOptions from "@/components/TableViewOptions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const data = [
    {
        id: "1",
        name: "netflex subscription",
        status: "active",
        subscripted_at: "2025-04-01",
        end_at: "2025-04-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "2",
        name: "genshin impact subscription",
        status: "active",
        subscripted_at: "2025-03-01",
        end_at: "2025-04-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "3",
        name: "zzz subscription",
        status: "active",
        subscripted_at: "2025-02-01",
        end_at: "2025-02-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "4",
        name: "hsr subscription",
        status: "active",
        subscripted_at: "2025-01-01",
        end_at: "2025-05-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "5",
        name: "youtube subscription",
        status: "active",
        subscripted_at: "2025-03-01",
        end_at: "2025-05-01",
        duration: "1 month",
        is_cancelled: false,
    },
];

export default function DataTable({ columns }) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});

    const paginatedData = data.filter((row, index) => {
        const start = pagination.pageIndex * pagination.pageSize;
        const end = start + pagination.pageSize;

        return index >= start && index < end;
    });

    const pageCount = Math.ceil(data.length / pagination.pageSize);

    const table = useReactTable({
        data: paginatedData,
        columns,
        manualPagination: true,
        pageCount: pageCount,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onFilteringChange: setFiltering,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            pagination,
            sorting,
            filtering,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div>
            <div className="flex items-end py-4">
                <Input
                    placeholder="Filter name..."
                    // initial value of the filter is undefined or null => uncontrolled component
                    // onChange set value => controlled component
                    // react does not know if the component is controlled or uncontrolled
                    // so we need to set the value to empty string
                    value={table.getColumn("name").getFilterValue() ?? ""}
                    onChange={(event) =>
                        table.getColumn("name").setFilterValue(event.target.value)
                    }
                    className="max-w-sm py-0"
                />
                <TableViewOptions table={table} />
            </div>
            <TablePagination table={table} />
            <div className="rounded-md border mt-4">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell className="" key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
