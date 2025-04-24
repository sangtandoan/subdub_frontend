import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import AddSubscriptionForm from "@/components/AddSubscriptionForm";
import { useState } from "react";

export default function Modal(props) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className={props.className}>{props.title}</Button>
			</DialogTrigger>
			<DialogContent
				className={`sm:max-w-[400px] sm:min-h-[500px] flex flex-col`}
			>
				<DialogHeader>
					<DialogTitle>{props.title}</DialogTitle>
					<DialogDescription>{props.description}</DialogDescription>
				</DialogHeader>
				{/* <div className="grid gap-4 py-4"> */}
				{/* 	<div className="grid grid-cols-4 items-center gap-4"> */}
				{/* 		<Label htmlFor="name" className="text-right"> */}
				{/* 			Name */}
				{/* 		</Label> */}
				{/* 		<Input id="name" className="col-span-3" /> */}
				{/* 	</div> */}
				{/* 	<div className="grid grid-cols-4 items-center gap-4"> */}
				{/* 		<Label htmlFor="subscripted" className="text-right"> */}
				{/* 			Subscripted At */}
				{/* 		</Label> */}
				{/* 		<Input id="subscripted" className="col-span-3" /> */}
				{/* 	</div> */}
				{/* 	<div className="grid grid-cols-4 items-center gap-4"> */}
				{/* 		<Label htmlFor="duration" className="text-right"> */}
				{/* 			Duration */}
				{/* 		</Label> */}
				{/* 		<Input id="duration" className="col-span-3" /> */}
				{/* 	</div> */}
				{/* </div> */}
				<AddSubscriptionForm closeModal={setOpen} />
				{/* <DialogFooter> */}
				{/* 	<Button type="submit" size="lg"> */}
				{/* 		{props.buttonContent} */}
				{/* 	</Button> */}
				{/* </DialogFooter> */}
			</DialogContent>
		</Dialog>
	);
}
