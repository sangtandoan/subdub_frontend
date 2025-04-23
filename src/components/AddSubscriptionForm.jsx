import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import FormFieldDatePicker from "./FormFieldDatePicker";

const Duration = Object.freeze({
	ONE_MONTH: "1 month",
	THREE_MONTHS: "3 months",
	SIX_MONTHS: "6 months",
	ONE_YEAR: "1 year",
});

const formSchema = z.object({
	name: z.string().min(2).max(50),
	subscriptedAt: z.date(),
	duration: z.nativeEnum(Duration),
});

export default function AddSubscriptionForm() {
	// 1. Define your form
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});

	// 2.Define submit handler
	const onSubmit = (data) => {
		console.log("Form data", data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col justify-between flex-1 mt-4"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormFieldDatePicker form={form} />
				<FormField
					control={form.control}
					name="duration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Duration</FormLabel>
							<Select onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger className="w-[240px]">
										<SelectValue placeholder="Duration" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{Object.keys(Duration).map((key) => {
										return (
											<SelectItem key={key} value={Duration[key]}>
												{Duration[key]}
											</SelectItem>
										);
									})}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-end">
					<Button type="submit" size="lg" className="py-[30px] mb-0">
						Add subscription
					</Button>
				</div>
			</form>
		</Form>
	);
}
