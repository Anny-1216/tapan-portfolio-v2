"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden pt-20">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
           {/* HD Photo Placeholder */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center relative group">
             {/* 
                 TODO: Replace the source below with your actual photo path.
                 E.g. put 'profile.jpg' in 'public/images/' and set src="/images/profile.jpg"
             */}
             <Image 
               src={personalInfo.profileImage || "/images/profile.jpg"} 
               alt={personalInfo.name} 
               fill 
               className="object-cover"
               priority
               unoptimized
               // Fallback if image not found
             />
             
             {/* Fallback Text if image fails to load (visual only if img missing) */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 -z-10">
                <span className="text-slate-400 dark:text-slate-600 text-sm font-medium px-4 text-center">
                   Put &quot;profile.jpg&quot; in public/images
                </span>
             </div>
          </div>
          {/* Online badge */}
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 tracking-wide">
            Open to New Opportunities
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            {personalInfo.title}
          </p>
          
          <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto text-lg">
            {personalInfo.summary.split(".")[0]}. with over 18 years of experience in delivering high-impact solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-medium hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Me <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="/resume.pdf"
              download="Tapan_Chourey_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
            >
              Download Resume <Download className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
