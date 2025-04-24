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
import { cn } from "@/lib/utils";

export const columns = [
	/*
        We use accessorKey to define the key of the data object (row) 
        we want to display in the column.

        We use id when this column is not define in the data object but some action columns.

        header: defines what will be render in the header of the column.
        cell: defines what will be render in the body of the column.
        header, cell can take table, column, row as parameter to get the table instance, column instance, row instance,
        based on what header, cell need to render its self.
    */
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
	// {
	//     accessorKey: "status",
	//     header: "Status",
	// },
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "start_date",
		header: ({ column }) => {
			return <ColumnHeader column={column} title="Subscription At" />;
		},
	},
	{
		accessorKey: "end_date",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					className="p-0 justify-center has-[>svg]:px-0"
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
		header: () => <div className="text-center">Is Cancelled</div>,
		cell: ({ row }) => {
			const isCancelled = row.getValue("is_cancelled");
			return (
				<div className={cn(!isCancelled ? "text-red-500" : "", "text-center")}>
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
