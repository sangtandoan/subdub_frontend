import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
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
import FormFieldDatePicker from "./FormFieldDatePicker";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";

const Duration = Object.freeze({
	ONE_WEEK: "weekly",
	ONE_MONTH: "monthly",
	SIX_MONTHS: "6 months",
	ONE_YEAR: "yearly",
});

const formSchema = z.object({
	name: z.string().min(3).max(50),
	subscriptedAt: z.date(),
	duration: z.nativeEnum(Duration),
});

export default function AddSubscriptionForm({ closeModal }) {
	// 1. Define your form
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			subscriptedAt: new Date(),
		},
	});

	// 2.Define submit handler
	// onSubmit is called when the form is submitted and has been processed by the zod resolver
	// so the data is already validated
	const handleAddNewSub = async (data) => {
		const dateString = formatDate(data.subscriptedAt);
		const url = "http://localhost:8080/api/v1/subscriptions";

		try {
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
				body: JSON.stringify({
					name: data.name,
					start_date: dateString,
					duration: data.duration,
				}),
			});

			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			closeModal(false);
			window.location.reload();
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleAddNewSub)}
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
