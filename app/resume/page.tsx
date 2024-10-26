"use client";

import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Emmanuel Audu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 808 1745 201",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 weeks",
    },
    {
      fieldName: "Facebook",
      fieldValue: "Emmanuel Audu (Projay)",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "projaycobest@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  items: [
    {
      company: "Jay's Enterprise",
      position: "Intern",
      duration: "2024-present",
    },
    {
      company: "Web Design Studio",
      position: "Intern",
      duration: "2024-present",
    },
    {
      company: "E-commerce",
      position: "Freelance",
      duration: "2024-present",
    },
    {
      company: "Jaysa's Academy",
      position: "Student",
      duration: "2024-present",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  items: [
    {
      institution: "FUT MINNA,NIGER",
      degree: "Microbiology",
      duration: "2022-2026",
    },
    {
      institution: "FUT MINNA,NIGER",
      degree: "Microbiology",
      duration: "2024-2026",
    },
    {
      institution: "FUT MINNA,NIGER",
      degree: "Microbiology",
      duration: "2024-2026",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "css 3",
    },
    {
      icon: <FaCss3 />,
      name: "html 5",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.ts",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value={"experience"} className="w-full">
              experience
            </TabsContent>
            {/* education */}
            <TabsContent value={"education"} className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value={"skills"} className="w-full">
              skills
            </TabsContent>
            {/* about me */}
            <TabsContent value={"about"} className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
