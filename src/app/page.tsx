"use client";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";

export default function ProjectsHub() {
    return (
        <div className="flex flex-col items-center space-y-8 py-10 dark:bg-[#0B0B0F] bg-white w-full min-h-screen">
            <h1 className="text-4xl font-bold text-black dark:text-white">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-5xl">
                {/* Clickable EMSuite Server Project Link */}
                <Link href="/emserver">
                    <CardContainer className="inter-var cursor-pointer">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                EMSuite Server
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                Interactive 3D Visualization of Proteins
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/emserverdemo.png"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                    More Info -{">"}
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </Link>

                {/* Clickable Workout Logger Project Link */}
                <Link href="/workoutlog">
                    <CardContainer className="inter-var cursor-pointer">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                Workout/Exercise Logger
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                Track your workouts with ease and analyze your progress over time
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/demoformainf.png"
                                    height="1000"
                                    width="1000"
                                    className="h-61 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-8">
                                <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                    More Info -{">"}
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </Link>
            </div>
        </div>
    );
}
