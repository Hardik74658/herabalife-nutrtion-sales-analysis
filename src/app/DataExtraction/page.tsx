"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";

function page() {
  return (    
        <HeroHighlight className="h-full" containerClassName="h-full py-12 pt-36 ">  
            <TracingBeam className="p-12">
                <div className="max-w-2xl mx-auto antialiased  relative">
                    <h1 className="text-lg md:text-xl text-center font-sans font-bold mb-24 text-white">
                        <Highlight className="text-black px-8 dark:text-white text-lg md:text-4xl text-center font-sans font-bold mb-8">
                            Data Extraction 
                        </Highlight>
                    </h1>  

                    {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <p className={twMerge( "text-white text-xl mb-4")}>
                        {item.title}
                        </p>

                        <div className="text-sm text-white  prose prose-sm dark:prose-invert">
                        {item?.image && (
                            <Image
                            src={item.image}
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                            />
                        )}
                        {item.description}
                        </div>
                    </div>
                    ))}
                </div>
            </TracingBeam>
        </HeroHighlight>
    )
}


const dummyContent = [
    {
        title: "Format Of Data",
        description: (
            <>
        <p className="text-justify">
          Our Data Was In The Fprm Of PDFs As Shown Above So We Wrote a Python Script To Extract Data From This PDFs Using Libraries Like PyMuDf , Pandas, re and OS. The Main Logic Behind The Script Was Extracting Particular Data And Adding Them Into Appropriate Columns For That We Have To Write Really Complex Regular Expressions Specifically Designed For This PDFs Which Took Us 2 Days To Find Out Which Regular Expressions Should Be Used Here As After Extracting Data From PDFs Its Format Got Completely Changed Also All PDFs Did Not Have Same Format Sometimes, It Was Really Big Task And We Learned So Much In Doing This.
        </p>
        
      </>
    ),
    badge: "React",
    image:
    "/images/image copy.png",
},
{
    title: "Script Of DataExtraction",
    description: (
        <>
        <p className="text-justify">
            Above Shown Function Was The Main Part Of Our Code To extract Data From This PDFs Of Orders Which Include Really Complex And Specifically Designed Regular Expressions For This PDFs.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
    "/images/data_extraction_script.png",
},
{
    title: "Manual Data Entry",
    description: (
        <>
        <p className="text-justify">
            After Doing All These our Script Wasn't Able To Extract Data Like Ship To Field And Delivery Charges From Some Orders So We Unfortunately Have To Do Manual Entry Of Those Data. 
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
    "/images/DataEntry.jpg",
},
{
    title: "Cleaning Data",
    description: (
        <>
        <p className="text-justify">
            After Collecting All The Raw Data We Have To Remove Fields Which Are Redudant Or Not Important For Our Analysis, Also We Have To Extract City , Pincode , State and Customer Name Like Fields From Single Field Named Ship To, Then We Also Have To Convert The Data Types Of All Columns, Have To Capitalize All Product And Customer Names So It Will Not Conflict With Other Data We Have And Hense It Does Not Understand Different Cases Same Names Different For Doing All These Tasks We Used Power Query.   
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
    "/images/power_query.png",
}
];
export default page;
