"use client";
import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import Image from "next/image";
import TechStackCard from './TechStackCard';

function TechStack() {
  return (
    <div className='py-12 dark:bg-transperent'>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Technology Stack</h2>
        </div> 
        <div className='w-full p-10 grid grid-flow-row grid-cols-4 gap-8 '>
            <CardContainer  className=" w-full h-1/2">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Data Extraction & Cleaning
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            
                            abc
                            
                            </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/images/DATA.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                <Link href={"/workers"}>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    See Analysis -
                                </CardItem>
                                </Link>
                                </div>
                            </CardBody>
            </CardContainer>
            <CardContainer  className=" w-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                PowerBI
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            
                            abc
                            
                            </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/images/PowerBI.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                <Link href={"/workers"}>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    See Analysis -
                                </CardItem>
                                </Link>
                                </div>
                            </CardBody>
            </CardContainer>
            <CardContainer  className=" w-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                SQL
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            
                            abc
                            
                            </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/images/SQL.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                <Link href={"/workers"}>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    See Analysis -
                                </CardItem>
                                </Link>
                                </div>
                            </CardBody>
            </CardContainer>
            <CardContainer  className=" w-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                Probability & Hypothesis
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            
                            abc
                            
                            </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/images/PH.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                <Link href={"/workers"}>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    See Analysis -
                                </CardItem>
                                </Link>
                                </div>
                            </CardBody>
            </CardContainer>
            {/* <TechStackCard></TechStackCard> */} 
        </div>
        
    </div>
  )
}

export default TechStack