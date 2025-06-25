"use client"
import React from 'react'

// shadcn UI components
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

// yup schema resolver
import { artistSchema } from '@/lib/validations/artistSchema'
import { yupResolver } from "@hookform/resolvers/yup";

// react hook form for easy form handling
import { useForm, Controller, FormProvider } from 'react-hook-form'

// custom component for dropdown + checkbox UI combo
import FormDropDown from '@/components/FormDropDown'

// page transition using framer motion
import { AnimatePresence, motion } from 'framer-motion';

const Page = () => {

    const methods = useForm({
        resolver: yupResolver(artistSchema),
        defaultValues: {
            feeRange: "",
            category: [],
            language: [],
        },
    });

    // react hook form methods with yup resolver
    const { register, control, handleSubmit, formState: { errors } } = methods;

    // dropdown option/checkboxes data
    const languages = ["english", "hindi", "spanish", "french", "mandarin"];
    const categories = ["singer", "dancer", "speaker", "DJ"];

    // toast to show submitted values from the form
    const toastFunction = (data) => {
        console.log(data)
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        // framer motion page animations fade-in, fade out
        <AnimatePresence mode="wait">
            <motion.div
                key={typeof window !== 'undefined' ? window.location.pathname : 'server'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-900">Artist Onboarding Form</h1>
                            <p className="leading-relaxed mt-4">Fill in the details below to onboard a new artist to the Artistly platform.</p>
                            <button></button>
                        </div>

                        {/* form provider to pass the control, errors to child components too */}
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit((data) => { toastFunction(data) })} className="lg:w-2/6 md:w-1/2 shadow-xl rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Onboard</h2>

                                <div className="relative mb-4">
                                    {/* full name input */}
                                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                    <Input {...register("fullName")} type="text" id="full-name" placeholder="Full Name" />
                                    {/* error validation */}
                                    <p className='text-red-500 text-sm'>{errors.fullName?.message}</p>
                                </div>

                                <div className="relative mb-4">
                                    {/* Bio input */}
                                    <label htmlFor='bio' className="leading-7 text-sm text-gray-600">Bio</label>
                                    <Textarea {...register("bio")} id="bio" placeholder="Type your bio here." />
                                    {/* error validation */}
                                    <p className='text-red-500 text-sm'>{errors.bio?.message}</p>
                                </div>

                                <div className="relative mb-4 flex justify-between items-center flex-col gap-5">
                                    {/* controller used to get data from custom UI elements from libraries */}
                                    {/* category and language two dropdown + checkbox UI combo components reused */}
                                    <FormDropDown name="category" label="Categories" optionsArr={categories} />
                                    <FormDropDown name="language" label="Languages" optionsArr={languages} />

                                    {/* controller used to get data from custom UI elements from libraries */}
                                    {/* select used for fee range of the artist */}
                                    <Controller
                                        name="feeRange"
                                        control={control}
                                        render={({ field }) => (
                                            <>
                                                <Select onValueChange={field.onChange} value={field.value} className={cn("w-full")}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Fee Range" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Fee Ranges</SelectLabel>
                                                            <SelectItem value="below_5000">Below ₹5,000</SelectItem>
                                                            <SelectItem value="5000_10000">₹5,000 – ₹10,000</SelectItem>
                                                            <SelectItem value="10000_20000">₹10,000 – ₹20,000</SelectItem>
                                                            <SelectItem value="20000_50000">₹20,000 – ₹50,000</SelectItem>
                                                            <SelectItem value="above_50000">Above ₹50,000</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                {/* error validation */}
                                                <p className='text-red-500 text-sm'>{errors.feeRange?.message}</p>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* location input */}
                                <div className="relative mb-4">
                                    <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location</label>
                                    <Input {...register("location")} type="text" id="location" placeholder="Enter location" />
                                    {/* error validation */}
                                    <p className='text-red-500 text-sm'>{errors.location?.message}</p>
                                </div>

                                {/* submit/onboard button */}
                                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                                    <Button type="submit" className="w-full">Onboard</Button>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>
    )
}

export default Page
