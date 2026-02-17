"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* ================= TIMELINE CONTAINER ================= */

export function Timeline({ children }) {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-16 lg:py-24">

      {/* center line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700 -translate-x-1/2"/>

      {children}
    </div>
  );
}

/* ================= TIMELINE ITEM ================= */

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
      className="relative w-full my-14 lg:my-24"
    >

      {/* DOT */}
      <motion.div
        initial={{ scale:0 }}
        whileInView={{ scale:1 }}
        transition={{ duration:0.35 }}
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-20"
      />

      {/* SIDE CONTAINER */}
      <div className={`flex ${fromLeft ? "justify-start" : "justify-end"}`}>

        {/* CARD */}
        <div className={`
          w-full lg:w-1/2
          ${fromLeft ? "lg:pr-16" : "lg:pl-16"}
        `}>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">

            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              {year}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {title}
            </h3>

            {image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {children}
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}