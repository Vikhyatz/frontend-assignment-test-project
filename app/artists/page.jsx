"use client"

import * as React from "react"
import { useState } from "react"
import ArtistCard from "@/components/ArtistCard"

// mock data: this data would've been fetched if was stored on the server, using fetch or getStaticProps
import artists from "../../data/artists.json"

import FilterBlock from "@/components/FilterBlock"

// page transition using framer motion
import { AnimatePresence, motion } from 'framer-motion';

const page = () => {
    const [category, setCategory] = useState(null)
    const [location, setLocation] = useState(null)
    const [price, setPrice] = useState(artists.filters.maxPrice)

    // filtered array after applying the above filters after every render
    const filteredArtists = artists.artists
        .filter((artist) => {
            const matchesCategory = !category || artist.category == category
            const matchesLocation = !location || artist.location == location
            const matchesPrice = !price || artist.price <= price
            return matchesCategory && matchesLocation && matchesPrice
        })

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
                <section className="text-black-400 bg-neutral-50 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-col items-center">
                        <div className="flex flex-col text-center w-full mb-20">
                            {/* hero heading and description */}
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Explore Artists</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Browse our diverse pool of performing artists and find the perfect fit for your event. Use the filters below to narrow your search.</p>
                        </div>

                        {/* reusable filter block component with passed setters and values in props */}
                        <FilterBlock
                            categories={artists.filters.categories}
                            locations={artists.filters.locations}
                            maxPrice={artists.filters.maxPrice}
                            category={category}
                            setCategory={setCategory}
                            location={location}
                            setLocation={setLocation}
                            price={price}
                            setPrice={setPrice}
                        />

                        <div className="text-left md:w-[55%] w-80 mt-10">{filteredArtists.length} results found</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                            {/* mapping data from the filtered array */}
                            {
                                filteredArtists.map((artist) => (
                                    <ArtistCard
                                        key={artist.id}
                                        name={artist.name}
                                        type={artist.category}
                                        location={artist.location}
                                        price={artist.price}
                                    />
                                ))
                            }



                        </div>
                        {/* no result found edge case resolve */}
                        {filteredArtists == "" && (
                            <div className="w-full p-15 text-center bg-red">Sorry, no results found</div>
                        )}
                    </div>
                </section>
            </motion.div>
        </AnimatePresence >
    )
}

export default page