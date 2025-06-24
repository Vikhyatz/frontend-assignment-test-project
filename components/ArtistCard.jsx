import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const ArtistCard = ({name, type, price, location,}) => {
    return (
        <Card className={cn("w-70 hover:scale-105 transition-all duration-150 hover:shadow-2xl shadow-xl")}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{type}</CardDescription>
                <CardAction>${price}</CardAction>
            </CardHeader>
            <CardContent>
                <p>{location}</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button>Ask for Quote</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ArtistCard