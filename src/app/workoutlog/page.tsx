"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";
import {MacbookScroll} from "../../components/ui/macbook-scroll";
export function MacbookScrollDemo() {
    return (
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
            <MacbookScroll
                title={
                    <span>
            EMSuite Server <br /> Interactive 3D Visualization of Proteins.
          </span>
                }
                src={`/emserverdemo.png`}
                showGradient={true}
                endLabel={
                    <span>
            Developed a web server featuring 13 algorithms in structure modeling
            and molecular map refinement which is now being used by over{" "}
                        <b style={{ fontSize: '1.25em', fontWeight: 'bold' }}>450 users</b> with over {" "} <b style={{ fontSize: '1.25em', fontWeight: 'bold' }}>3100 submissions</b>
          </span>
                }
            />
        </div>
    );
}
export default function WorkoutLoggerDemo() {
    return (
        <div className="mx-4">
            <div className="flex flex-col overflow-hidden h-auto">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
                                Exercise <br/>
                                <span className="text-3xl md:text-5xl lg:text-[4rem] font-bold mt-1 leading-none">
                                    Logger And Tracker
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/demoappworkout.png`}
                        alt="hero"
                        height={1980}
                        width={320}
                        className="mx-auto rounded-2xl object-cover w-full"
                        draggable={true}
                    />
                </ContainerScroll>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full sm:w-3/4 md:w-2/4 mb-8 mx-auto">
                <div className="p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Track your workouts with ease</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Analyze your progress over time</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Customizable exercise routines</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Gamified Achievements</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Integration with fitness devices</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Personalized goal setting</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Detailed workout history</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Social Media aspect with workout sharing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}
