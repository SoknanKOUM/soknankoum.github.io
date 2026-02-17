"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero({ name, children }) {
  return (
    <section className="max-w-6xl mx-auto py-24 grid md:grid-cols-2 gap-16 items-center">

      {/* PHOTOS */}
      <div className="relative h-[420px] w-full">
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:false }}
          className="absolute left-0 top-12 w-64 rounded-xl overflow-hidden shadow-xl"
        >
          <Image src="/images/about/me1.JPG" alt="me" width={400} height={500}/>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:-40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.15 }}
          viewport={{ once:false }}
          className="absolute left-44 top-0 w-56 rounded-xl overflow-hidden shadow-xl"
        >
          <Image src="/images/about/me2.JPG" alt="me" width={400} height={500}/>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.3 }}
          viewport={{ once:false }}
          className="absolute left-40 bottom-0 w-72 rounded-xl overflow-hidden shadow-xl"
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
      >
        <h2 className="text-3xl font-bold mb-4 text-foreground">Who Am I?</h2>
        <h3 className="text-xl font-semibold mb-6 text-primary">{name}</h3>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </motion.div>

    </section>
  );
}