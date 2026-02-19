"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 inline-block border-b-4 border-blue-600 dark:border-blue-400 pb-2">Core Competencies</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {personalInfo.coreCompetencies.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-6 rounded-xl text-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 transition-colors"
               >
                 <span className="font-semibold text-slate-800 dark:text-slate-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
