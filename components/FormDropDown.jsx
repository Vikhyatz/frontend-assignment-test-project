import React from 'react';
import { Button } from '../components/ui/button';
import { useFormContext, Controller } from 'react-hook-form';

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FormDropDown = ({ name, label, optionsArr }) => {
    // form context passed by the form provider in the parent page
    const { control, trigger, formState: { errors } } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                // handling toggle by checking if the option is checked or not:
                // CASE 1: if not then the value is added in the array to be passed on later
                // CASE 2: if yest then it is filtered out from the array to remove it from the array 
                const handleToggle = (option, checked) => {
                    const newValue = checked
                        ? [...field.value, option]
                        : field.value.filter((val) => val !== option);

                    field.onChange(newValue);

                    // trigger used to manually trigger the error messages
                    trigger(name);
                };

                return (
                    <div className="space-y-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full justify-start">
                                    {/* dropdown button shows the values selected else default "select categories/languages" */}
                                    {field.value.length > 0
                                        ? field.value.join(", ")
                                        : `Select ${label}`}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {/* mapping the options from the array passed in the props */}
                                {optionsArr.map((option) => (
                                    <DropdownMenuCheckboxItem
                                        key={option}
                                        checked={field.value.includes(option)}
                                        onCheckedChange={(checked) => handleToggle(option, checked)}
                                    >
                                        {option}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {/* validation */}
                        {errors?.[name] && (
                            <p className="text-sm text-red-500">{errors[name]?.message}</p>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default FormDropDown;
