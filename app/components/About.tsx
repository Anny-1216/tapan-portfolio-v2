"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 inline-block border-b-4 border-blue-600 dark:border-blue-400 pb-2">About Me</h2>
          
          <div className="prose prose-lg text-slate-600 dark:text-slate-300 leading-loose max-w-none">
            <p className="mb-6">{personalInfo.summary}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
               <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-xl transition-colors hover:border-slate-300 dark:hover:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
                  <p>{personalInfo.location}</p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-xl transition-colors hover:border-slate-300 dark:hover:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline break-all">{personalInfo.email}</a>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
