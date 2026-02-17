"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero({ name, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

      {/* PHOTOS */}
      <div className="relative h-[360px] sm:h-[400px] md:h-[420px] w-full">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:false }}
          className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-16 md:top-12 w-48 sm:w-56 md:w-64 rounded-xl overflow-hidden shadow-xl"
        >
          <Image src="/images/about/me1.JPG" alt="me" width={400} height={500}/>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:-40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.15 }}
          viewport={{ once:false }}
          className="absolute left-1/2 md:left-44 -translate-x-1/2 md:translate-x-0 top-0 w-44 sm:w-52 md:w-56 rounded-xl overflow-hidden shadow-xl"
        >
          <Image src="/images/about/me2.JPG" alt="me" width={400} height={500}/>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.3 }}
          viewport={{ once:false }}
          className="absolute left-1/2 md:left-40 -translate-x-1/2 md:translate-x-0 bottom-0 w-56 sm:w-64 md:w-72 rounded-xl overflow-hidden shadow-xl"
        >
          <Image src="/images/about/me3.JPG" alt="me" width={400} height={500}/>
        </motion.div>

      </div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity:0, x:50 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:false }}
        className="text-center md:text-left"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
          Who Am I?
        </h2>

        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-primary">
          {name}
        </h3>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
          {children}
        </div>
      </motion.div>

    </section>
  );
}