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
                            Probability & Hypothesis Testing 
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
        title: "1. Calculate mean, median, standard deviation, and variance for amount, discount, and MRP.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph_1.png",
    },
    {
        title: "2. Plot histograms and boxplots for amount, discount, and MRP to understand their distributions.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph_2.png",
    },
    {
        title: "3. Calculate the probability of an order being canceled. This can be done by dividing the number of canceled orders by the total number of orders.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph_3.png",
    },
    {
        title: "4. Calculate the probability of an order being canceled given different conditions, such as high discount rates or specific states",
        description: (
            <>
                <h1>.</h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph_4.png",
        image2:"/images/ph_4_2.png",
    },
    {
        title: "5 Compute the correlation matrix to identify relationships between amount, discount, MRP, and quantity.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph_5.png",
    },
    {
        title: "6. Use a chi-square test to examine the relationship between categorical variables, such as state and order cancellation status.",
        description: (
            <>
                <h2>
                    H0 = State And Order Cancellation are not related.
                </h2>
                <h2>
                    Ha = State And Order Cancellation are related.
                </h2>
                <h2>
                    p=0.9952
                </h2>
                <h2>
                    alpha=0.05
                </h2>
                <h2>
                    Hense, Failed to Reject H0.Sate And Order Cancelling Status Are Not Related.   
                </h2>

                

            </>
        ),
        badge: "React",
        // image:"/images/ph_1.png",
    },
    {
        title: "8> Conduct an ANOVA to determine if there are significant differences in the average order amount across different states or cities.",
        description: (
            <>
                <h1>
                    h0 = "Amount paid & state are not associated"
                </h1>
                <h1>
                    ha = "Amount paid & state are associated"
                </h1>
                <h1>
                    alpha = 0.05
                </h1>
                <h1>
                    h0 = "Amount paid & state are not associated"
                </h1>
                <h1>
                    h0 = "Amount paid & state are not associated"
                </h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph_5.png",
    },
    {
        title: "6. Use a chi-square test to examine the relationship between categorical variables, such as state and order cancellation status.",
        description: (
            <>
                <h2>
                    H0 = State And Order Cancellation are not related.
                </h2>
                <h2>
                    Ha = State And Order Cancellation are related.
                </h2>
                <h2>
                    p=0.9952
                </h2>
                <h2>
                    alpha=0.05
                </h2>
                <h2>
                    Hense, Failed to Reject H0.Sate And Order Cancelling Status Are Not Related.   
                </h2>

                

            </>
        ),
        badge: "React",
        // image:"/images/ph_1.png",
    },

];
export default page;
