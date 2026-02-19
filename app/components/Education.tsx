"use client";

import { motion } from "framer-motion";
import { education } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 inline-block border-b-4 border-blue-600 dark:border-blue-400 pb-2">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit">
                      {edu.year}
                    </span>
                  </div>
                  
                  <div className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-1">
                    {edu.institution}
                  </div>
                  
                  <div className="text-slate-500 dark:text-slate-500 text-sm">
                    Score: <span className="font-semibold text-slate-700 dark:text-slate-400">{edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
