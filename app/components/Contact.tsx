"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="max-w-4xl mx-auto text-center"
         >
           <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Get In Touch</h2>
           <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
             Interested in discussing powertrain development, strategic planning, or new opportunities?
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center group w-full">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all shadow-sm">
                  <Mail className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words max-w-full px-2 font-medium">{personalInfo.email}</span>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="flex flex-col items-center group w-full">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all shadow-sm">
                  <Phone className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium">{personalInfo.phone}</span>
              </a>

              <div className="flex flex-col items-center group w-full">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all shadow-sm">
                  <MapPin className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center px-4 font-medium">{personalInfo.location}</span>
              </div>

              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group w-full">
                  <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:border-[#0077b5] group-hover:text-[#0077b5] transition-all shadow-sm">
                    <Linkedin className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-[#0077b5] transition-colors font-medium">Tapan Chourey</span>
                </a>
              )}
           </div>
         </motion.div>
      </div>
    </section>
  );
}
