"use client";
 
import Image from "next/image";
import React from "react";
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
        image:"/images/ph/ph_1.png",
    },
    {
        title: "2. Plot histograms and boxplots for amount, discount, and MRP to understand their distributions.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph/ph_2.png",
    },
    {
        title: "3. Calculate the probability of an order being canceled. This can be done by dividing the number of canceled orders by the total number of orders.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph/ph_3.png",
    },
    {
        title: "4. Calculate the probability of an order being canceled given different conditions, such as high discount rates or specific states",
        description: (
            <>
                <h1>.</h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph/ph_4.png",
        image2:"/images/ph/ph_4_2.png",
    },
    {
        title: "5 Compute the correlation matrix to identify relationships between amount, discount, MRP, and quantity.",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/ph/ph_5.png",
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
        title: "7. Conduct an ANOVA to determine if there are significant differences in the average order amount across different states or cities.",
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
        image:"/images/ph/ph_5.png",
    },
    {
        title: "8. Analyze trends in the order data over time by plotting orderd_date against amount",
        description: (
            <>
                <h2>
                    Linearly Increasing Growth 
                </h2>

            </>
        ),
        badge: "React",
        image:"/images/ph/ph_6.png",
    },
    {
        title: "9. Perform Recency, Frequency, Monetary (RFM) analysis to segment customers based on their purchasing behavior.",
        description: (
            <>
                <h1 className="text-lg font-bold mb-4 underline">
                    RFM Analysis 
                </h1>
                <ul className="list list-disc list-inside text-justify">
                    <span className="block font-bold">
                        Recency (R):
                    </span> 
                    <li>
                        How recently a customer made a purchase. Customers who have purchased recently are more likely to purchase again.
                    </li>
                    <span className="block font-bold">
                        Frequency(F):
                    </span> 
                    <li>
                        How often has a customer made a purchase?
                    </li>
                    <span className="block font-bold">
                        Monetary(M):
                    </span> 
                    <li>
                        How much has a customer spent in total?
                    </li>
                </ul>
                <hr className="my-8"/>
                <h1 className="text-lg font-bold mb-4 underline">Conclusions</h1>
                <ul className="list list-disc list-inside text-justify">
                    <span className="block font-bold mb-2">
                        Customer Value:
                    </span> 
                    <li>
                        Alakh Pandya is the highest value customer with frequent purchases and the highest spending amount.
                    </li>
                    <li>
                        Aniruddhsinh Dhummad has potential for increased engagement with moderate frequency and spending.
                    </li>
                    <span className="block font-bold mb-2 mt-6">
                        Customer Segmentation:
                    </span> 
                    <li>
                        Aarti Pandya: Very infrequent purchases (Recency: 495 days), moderate frequency (4 times), high spending (₹16455.11).
                    </li>
                    <li>
                        Ahesan Sabirali Saiyad: Recent purchaser (Recency: 9 days), low frequency (3 times), moderate spending (₹5856.93).
                    </li>
                    <li>
                        Alakh Pandya: Frequent and high spender (Recency: 27 days, Frequency: 116, Monetary: ₹638603.33).
                    </li>
                    
                </ul>
            </>
        ),
        badge: "React",
        image:"/images/ph/ph_7.png",
    },

];
export default page;
