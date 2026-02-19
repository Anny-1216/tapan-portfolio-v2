"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CompanyLogo = ({ company, logoPath, color }: { company: string, logoPath?: string, color?: string }) => {
  const [imageError, setImageError] = useState(false);

  // If we have a local logo path and it hasn't errored out yet, try showing it
  if (logoPath && !imageError) {
    return (
      <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center border border-slate-200 dark:border-slate-700">
        <Image 
          src={logoPath} 
          alt={`${company} logo`}
          width={64}
          height={64}
          className="w-full h-full object-contain p-1" 
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback to Initials + Color Background
  return (
    <div className={cn(
      "w-full h-full rounded-full flex items-center justify-center text-white shadow-lg",
      color || "bg-slate-700"
    )}>
       <span className="font-bold text-xl">{company.charAt(0)}</span>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 inline-block border-b-4 border-blue-600 dark:border-blue-400 pb-2">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
            Over 18+ years of engineering leadership in the automotive sector.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 md:pl-24"
            >
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center z-10 transition-transform hover:scale-110 duration-200">
                 <CompanyLogo company={exp.company} logoPath={exp.logoPath} color={exp.logoColor} />
              </div>

              {/* Content Card */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    {/* Mobile Logo */}
                    <div className="md:hidden w-12 h-12 mb-4">
                        <CompanyLogo company={exp.company} logoPath={exp.logoPath} color={exp.logoColor} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {exp.website ? (
                        <a 
                          href={exp.website.startsWith("http") ? exp.website : `https://${exp.website}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group"
                        >
                          {exp.company}
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : (
                         <span className="text-xl font-medium text-blue-600 dark:text-blue-400">{exp.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap bg-slate-100 dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm inline-block w-fit">
                    {exp.period}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-slate-600 dark:text-slate-300 mb-6 italic border-l-4 border-slate-200 dark:border-slate-600 pl-4 py-1">
                    {exp.description}
                  </p>
                )}

                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" /> Key Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
