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
                            PowerBI 
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
        title: "Dashboard",
        description: (
            <>
        <div className="text-justify">
            <br />
            <hr className="timeline-horizontal " />
            <br />        
            
            <h3 className="card-title my-2">
                Summary of Key Findings:    
            </h3>
            <ul className="list-disc list-inside m-2">
                <li>
                    <span className="font-bold ">
                        Total Customers :   
                    </span>
                    <span className="pl-6 my-1 block">
                        144
                    </span>
                </li>
                <li>
                    
                    <span className="font-bold ">
                        Highest Sales by Coach :   
                    </span>
                    <span className="pl-6 my-1 block">
                        Hetalben Alakhukumar Pandya with 35.93M sales
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Most Selling Product :   
                    </span>
                    <span className="pl-6 my-1 block">
                        Afresh Energy Drink Mix-Lemon
                    </span>                    
                </li>
            </ul>
            
            <br />
            <hr className="timeline-horizontal " />
            <br />
            
            <h3 className="card-title my-2">
                Link to the Dashboard:
                Explore our interactive Power BI Dashboard to dive deeper into the data.
                Dashboard Page
                Embedded Power BI Dashboard:
                Embed your Power BI dashboard on this page for interactive exploration.
            </h3>

            <br />
            <hr className="timeline-horizontal " />
            <br />

            <h3 className="card-title my-2">
                Explanation of Each Visualization:
            </h3>

            <ul className="list-disc list-inside m-2">
                <li>
                    <span className="font-bold ">
                        Total Customers :   
                    </span>
                    <span className="pl-6 my-1 block">
                        Displays the total number of unique customers.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Coach with Highest Number of Customers: 
                    </span>
                    <span className="pl-6 my-1 block">
                        Highlights the coach with the most customers.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Sales Trend by Month:  
                    </span>
                    <span className="pl-6 my-1 block">
                        A line graph showing monthly sales trends.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Coach with Highest Sales:   
                    </span>
                    <span className="pl-6 my-1 block">
                        Displays the sales figures for top-performing coaches.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Customer with Highest Sales:   
                    </span>
                    <span className="pl-6 my-1 block">
                        Identifies the customer with the highest purchase volume.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        5 Least Selling Products:   
                    </span>
                    <span className="pl-6 my-1 block">
                        Lists products with the lowest sales.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Top 5 Most Selling Products:   
                    </span>
                    <span className="pl-6 my-1 block">
                        Highlights the best-selling products.
                    </span>
                </li>
            </ul>
            
            <br />
            <hr className="timeline-horizontal " />
            <br />

            <h3 className="card-title my-2">
                Analysis and Conclusions Page
                Detailed Analysis and Conclusions:
            </h3>
            <ul className="list-disc list-inside m-2">
                <li>
                    <span className="font-bold ">
                        Total Customers and Sales Distribution:   
                    </span>
                    <span className="pl-6 my-1 block">
                        The dashboard shows a total of 144 unique customers. Hetalben Alakhukumar Pandya has the highest sales, indicating effective customer engagement and sales strategy.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Monthly Sales Trends:  
                    </span>
                    <span className="pl-6 my-1 block">
                        Sales trends show significant spikes at various points, suggesting possible promotions or seasonal demand. Identifying these periods can help in planning future marketing strategies.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Top and Least Selling Products:
                    </span>
                    <span className="pl-6 my-1 block">
                        Afresh Energy Drink Mix-Lemon is the most popular product, indicating a strong customer preference. Conversely, products like Buzz and F1 Select Alternative Shake have the least sales, suggesting a need for reevaluation or targeted marketing.
                    </span>
                </li>
                <li>
                    <span className="font-bold ">
                        Coach Performance:
                    </span>
                    <span className="pl-6 my-1 block">
                        Hetalben Alakhukumar Pandya leads in both the number of customers and total sales, highlighting their effectiveness in customer acquisition and retention.
                    </span>
                </li>
            </ul>

            <br />
            <hr className="timeline-horizontal " />
            <br />

            



        </div>
        
      </>
    ),
    badge: "React",
    image:
    "/images/powerbi/powerbi_dashboard.png",
}];
export default page;
