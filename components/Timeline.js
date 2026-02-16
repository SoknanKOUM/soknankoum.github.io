"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Timeline({ children }) {
  return (
    <div className="relative max-w-5xl mx-auto py-24">
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700 -translate-x-1/2"/>
      {children}
    </div>
  );
}

export function TimelineItem({ year, title, children, image, align = "right" }) {

  const fromLeft = align === "left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:false, amount:0.35 }}
      variants={{
        hidden:{ opacity:0, x: fromLeft ? -90 : 90 },
        visible:{ opacity:1, x:0, transition:{ duration:0.7, ease:"easeOut" } }
      }}
      className={`relative flex w-full my-24 ${fromLeft ? "justify-start" : "justify-end"}`}
    >

      {/* DOT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.8 }}
        variants={{
          hidden:{ scale:0 },
          visible:{ scale:1, transition:{ duration:0.35 } }
        }}
        className="absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-10"
      />

      {/* CARD */}
      <div className="w-[42%] bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">

        {/* YEAR */}
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          {year}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* IMAGE */}
        {image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image src={image} alt={title} width={600} height={400}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {children}
        </div>

      </div>
    </motion.div>
  );
}