import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddSubscriptionForm from "@/components/AddSubscriptionForm";

export default function Modal(props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={props.className} variant="outline">
					{props.title}
				</Button>
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
				<AddSubscriptionForm />
				{/* <DialogFooter> */}
				{/* 	<Button type="submit" size="lg"> */}
				{/* 		{props.buttonContent} */}
				{/* 	</Button> */}
				{/* </DialogFooter> */}
			</DialogContent>
		</Dialog>
	);
}
