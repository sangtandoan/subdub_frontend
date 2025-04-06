import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ColumnHeader from "@/components/ColumnHeader";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";

export const columns = [
    {
        id: "select",
        header: ({ table }) => {
            return (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(value)}
                    aria-label="Select all"
                />
            );
        },
        cell: ({ row }) => {
            return (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => {
                        row.toggleSelected(value);
                    }}
                    aria-label="Select row"
                />
            );
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "Subscribed At",
        accessorKey: "subscripted_at",
        header: ({ column }) => {
            return (
                <ColumnHeader
                    column={column}
                    title="Subscription At"
                    className="flex justify-center items-center"
                />
            );
        },
    },
    {
        accessorKey: "end_at",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    End At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "duration",
        header: "Duration",
    },
    {
        accessorKey: "is_cancelled",
        header: () => <div>Is Cancelled</div>,
        cell: ({ row }) => {
            const isCancelled = row.getValue("is_cancelled");
            return (
                <div className={!isCancelled ? "text-red-500" : ""}>
                    {isCancelled ? "Yes" : "No"}
                </div>
            );
        },
        enableHiding: false,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const subscription = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-red-500">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(subscription.name)}
                        >
                            Copy subscription name
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
