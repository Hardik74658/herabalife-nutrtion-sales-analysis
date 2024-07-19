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
                            SQL
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
                        {item?.image2 && (
                            <Image
                            src={item.image2}
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
        title: "1.Lifetime Sales of Customers ",
        description: (
            <>
                <h1 className="text-lg font-bold my-8 underline">Lifetime Sales of Customers Summary</h1>
                <p className="text-justify">The analysis of lifetime sales shows that ALAKH PANDYA is the top customer, with total sales amounting to 638603.33, followed by SONALBEN VASAVA with 450842.9, and RAJENDRA BHATTJI with 131913.24. The data highlights the most valuable customers based on their total spending, which is crucial for targeted marketing and sales strategies to enhance customer loyalty and revenue.
                </p>
            </>
        ),
        badge: "React",
        image:"/images/sql/1.png",
    },
    {
        title: "2. Average Order Value by Month",
        description: (
            <>
                <h1 className="text-lg font-bold my-8 underline">Average Order Value by Month Summary:</h1>
                <p className="text-justify">The average order value varies significantly across months, with August 2022 showing a peak of ₹6781.29 and June 2023 having another high at ₹7923.38.
                The data indicates seasonal trends and fluctuations in order values, which can help in planning marketing and sales strategies.
                </p>
            </>
        ),
        badge: "React",
        image:"/images/sql/2.png",
    },
    {
        title: "3. Customer who ordered more than once",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/sql/3.png",
    },
    {
        title: "4. Monthly Sales Performance",
        description: (
            <>
                <h1></h1>
            </>
        ),
        badge: "React",
        image:"/images/sql/4.png",
    },
    {
        title: "5.Product Sales Analysis",
        description: (
            <>
                <h1></h1>
        
            </>
        ),
        badge: "React",
        image:"/images/sql/5.png",
    },
    {
        title: "6. Sales by City",
        description: (
            <>
            </>
        ),
        badge: "React",
        image:"/images/sql/6.png",
    },
    {
        title: "7. High-Value Customers",
        description: (
            <>
            </>
        ),
        badge: "React",
        image:"/images/sql/7.png",
    },
    {
        title: "8. Average Discount by Customer",
        description: (
            <>
            </>
        ),
        badge: "React",
        image:"/images/sql/8_1.png",
        image2:"/images/sql/8_2.png"
    },
    // {
    //     title: "9. Perform Recency, Frequency, Monetary (RFM) analysis to segment customers based on their purchasing behavior.",
    //     description: (
    //         <>
    //             <h1 className="text-lg font-bold mb-4 underline">
    //                 RFM Analysis 
    //             </h1>
    //             <ul className="list list-disc list-inside text-justify">
    //                 <span className="block font-bold">
    //                     Recency (R):
    //                 </span> 
    //                 <li>
    //                     How recently a customer made a purchase. Customers who have purchased recently are more likely to purchase again.
    //                 </li>
    //                 <span className="block font-bold">
    //                     Frequency(F):
    //                 </span> 
    //                 <li>
    //                     How often has a customer made a purchase?
    //                 </li>
    //                 <span className="block font-bold">
    //                     Monetary(M):
    //                 </span> 
    //                 <li>
    //                     How much has a customer spent in total?
    //                 </li>
    //             </ul>
    //             <hr className="my-8"/>
    //             <h1 className="text-lg font-bold mb-4 underline">Conclusions</h1>
    //             <ul className="list list-disc list-inside text-justify">
    //                 <span className="block font-bold mb-2">
    //                     Customer Value:
    //                 </span> 
    //                 <li>
    //                     Alakh Pandya is the highest value customer with frequent purchases and the highest spending amount.
    //                 </li>
    //                 <li>
    //                     Aniruddhsinh Dhummad has potential for increased engagement with moderate frequency and spending.
    //                 </li>
    //                 <span className="block font-bold mb-2 mt-6">
    //                     Customer Segmentation:
    //                 </span> 
    //                 <li>
    //                     Aarti Pandya: Very infrequent purchases (Recency: 495 days), moderate frequency (4 times), high spending (₹16455.11).
    //                 </li>
    //                 <li>
    //                     Ahesan Sabirali Saiyad: Recent purchaser (Recency: 9 days), low frequency (3 times), moderate spending (₹5856.93).
    //                 </li>
    //                 <li>
    //                     Alakh Pandya: Frequent and high spender (Recency: 27 days, Frequency: 116, Monetary: ₹638603.33).
    //                 </li>
                    
    //             </ul>
    //         </>
    //     ),
    //     badge: "React",
    //     image:"/images/ph_7.png",
    // },

];
export default page;
