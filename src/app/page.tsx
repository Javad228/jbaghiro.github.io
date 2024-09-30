"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

// Badge Categories
const badgeCategories = ["All", "Django", "REST API", "AWS", "S3", "MySQL" ,"PostgreSQL", "Python","Java", "SpringBoot", "Flutter",  "Dart"];

export default function ProjectsHub() {
    // State to manage the selected filter
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Projects data with associated categories (as an array)
    const projects = [
        {
            title: "EMSuite Server",
            description: "Interactive 3D Visualization of Proteins",
            image: "/emserverdemo.png",
            categories: ["Django", "REST API", "Python", "Node.js", "React", "MySQL"],
            link: "/emserver",
        },
        {
            title: "Workout/Exercise Logger",
            description: "Track your workouts with ease and analyze your progress over time",
            image: "/demoformainf.png",
            categories: ["Django", "REST API", "Python", "Flutter", "AWS", "S3", "Dart", "PostgreSQL"],
            link: "/workoutlog",
        },
        {
            title: "Controlled Chaos Game",
            description: "A 2D top-down video game written solely in Java.",
            image: "/ControlledChaos.png",
            categories: ["Java"],
            link: "/controlledchaos",
        },
        {
            title: "Wise Connect",
            description: "Connect with a specialist close to you and schedule and appointment",
            image: "/wiseconnectdemo.png",
            categories: ["Django", "REST API", "Python", "Flutter", "AWS", "Dart", "PostgreSQL", "S3"],
            link: "/wiseconnect",
        },
        {
            title: "Illustrating Pathfinding",
            description: "Showcasing different pathfinding algorithms in a game.",
            image: "/showcasingpathfinding.png",
            categories: ["Java"],
            link: "https://github.com/Javad228/Pathfinding-Game",
        },
        {
            title: "School Attendance Website",
            description: "Website for monitoring attendance of students using Django",
            image: "/studentattendance.png",
            categories: ["Django","Python"],
            link: "https://github.com/Javad228/djangoSchoolWebsite",
        },
        {
            title: "Kitchen Companion",
            description: "User-Friendly Platform for Discovering and Interacting with Recipes",
            image: "/kitchencompanion.png",
            categories: ["SpringBoot", "REST API", "Java", "AWS", "S3", "PostgreSQL"],
            link: "https://github.com/CS407-Kitchen-Companion",
        },
    ];

    // Filter projects based on the selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(selectedCategory));

    return (
        <div className="dark:bg-[#0B0B0F]">
            <br />
            <h1 className="text-4xl font-bold text-black dark:text-white text-center">
                My Projects
            </h1>

            {/* Badge Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 px-4">
                {badgeCategories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base rounded-full ${
                            selectedCategory === category
                                ? "bg-emerald-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="flex flex-col items-center space-y-8 py-10 dark:bg-[#0B0B0F] bg-white w-full min-h-screen">
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 max-w-8xl">
                    {/* Render filtered projects */}
                    {filteredProjects.map((project, index) => (
                        <Link href={project.link} className="mt-auto" key={index}>
                            <CardContainer className="inter-var cursor-pointer">
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        {project.title}
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                        {project.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src={project.image}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-100 object-contain rounded-xl group-hover/card:shadow-xl"
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

                    ))}
                </div>
            </div>
        </div>
    );
}