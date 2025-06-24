import React from "react";

import { cn } from "@/lib/utils"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Slider } from "@/components/ui/slider"

const FilterBlock = ({ categories, locations, maxPrice, category, setCategory, location, setLocation, price, setPrice }) => {
  return (
    <div className="flex justify-between md:w-[60%] w-full outline-2 outline-gray-200 p-10 flex-col gap-5 shadow-xl">
      <div>
        <p>Filters</p>
      </div>

      <div className="flex justify-between md:flex-row gap-5 flex-col">
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[180px] shadow-md">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((category, index) => (
                <SelectItem key={index} value={category}>{category}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setLocation(value)}>
          <SelectTrigger className="w-[180px] shadow-md">
            <SelectValue placeholder="Select a Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Locations</SelectLabel>
              {locations.map((location, index) => (
                <SelectItem key={index} value={location}>{location}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="md:w-1/2 w-full">
          <p>Price range: $0 - ${price}</p>
          <Slider
            onValueChange={(value) => setPrice(value)}
            defaultValue={[maxPrice]}
            max={maxPrice}
            min={10}
            step={1}
            className={cn("py-2")}
          />
        </div>
      </div>
    </div>
  );
};
export default FilterBlock;