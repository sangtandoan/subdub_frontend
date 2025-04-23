import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function FormFieldDatePicker({ form }) {
    const [open, setOpen] = useState(false);

    return (
        <FormField
            control={form.control}
            name="subscriptedAt"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Subscripted At</FormLabel>
                    {/*
                        Because we open Popover in a Dialog, but Popover is also using Portal to overlay,
                        Popover conflicts with Dialog, open Popover will not open anything.
                        So we need to set modal={true} to Popover to know that it will open in another Portal.
                        => Popover will work when open in Dialog.
                    */}

                    <Popover modal={true} open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground",
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start" forceMount>
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(newDate) => {
                                    field.onChange(newDate);
                                    setOpen(false);
                                }}
                                disabled={(date) => date < new Date("1900-01-01")}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
