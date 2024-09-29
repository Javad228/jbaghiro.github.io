"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";
import { MacbookScroll } from "../../components/ui/macbook-scroll";

const MacbookScrollDemo: React.FC = () => {
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
            and molecular map refinement, which is now being used by over{" "}
                        <b style={{ fontSize: "1.25em", fontWeight: "bold" }}>450 users</b>{" "}
                        with over{" "}
                        <b style={{ fontSize: "1.25em", fontWeight: "bold" }}>
              3100 submissions
            </b>
          </span>
                }
            />
        </div>
    );
};

const Badge: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                fill="#00AA45"
            ></path>
            {/* Remaining paths */}
        </svg>
    );
};

const EMSuiteDemo: React.FC = () => {
    return (
        <div className="space-y-8 dark:bg-[#0B0B0F]">
            <MacbookScrollDemo />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-2/4 mb-[30px] mx-auto">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
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
export default EMSuiteDemo;
