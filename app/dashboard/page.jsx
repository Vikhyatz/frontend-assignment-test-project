import React from "react"

// shadcn ui components
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

// mock data
import artistData from "@/data/artists.json"

export function Page() {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-fit overflow-x-auto">
                {/* shadcn UI table component */}
                <Table className="min-w-[600px]">
                    <TableCaption>A list of all artist submissions.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {/* headers */}
                            <TableHead className="w-50">Name</TableHead>
                            <TableHead className="w-50">Category</TableHead>
                            <TableHead className="w-50">City</TableHead>
                            <TableHead className="w-50">Fee</TableHead>
                            <TableHead className="w-50">Button</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* mapping data from json file which contains mock data */}
                        {artistData.artists.map((artist) => (
                            <TableRow key={artist.id}>
                                <TableCell className="w-50 font-medium">{artist.name}</TableCell>
                                <TableCell className="w-50">{artist.category}</TableCell>
                                <TableCell className="w-50">{artist.location}</TableCell>
                                <TableCell className="w-50">{artist.price}</TableCell>
                                <TableCell className="w-50"><Button variant="outline">Action Button</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
export default Page