"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EducationCard({
  logo,
  degree,
  school,
  period,
  location,
  children
}) {
  return (
    <motion.div
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:0.6 }}
      viewport={{ once:false }}
      className="max-w-4xl mx-auto my-12 border border-border rounded-2xl p-8 bg-background shadow-sm hover:shadow-md transition"
    >
      <div className="flex gap-6 items-start">

        {/* LOGO */}
        <div className="w-24 h-24 relative shrink-0">
          <Image src={logo} alt="logo" fill className="object-contain"/>
        </div>

        {/* TEXT */}
        <div className="space-y-3">

          <h3 className="text-2xl font-semibold text-foreground">{degree}</h3>

          <h4 className="text-lg font-medium text-primary">{school}</h4>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="border border-border rounded-full px-3 py-1">
              {period}
            </span>
            <span>📍 {location}</span>
          </div>

          <div className="text-muted-foreground leading-relaxed pt-2">
            {children}
          </div>

        </div>
      </div>
    </motion.div>
  );
}