import React from "react";
import { motion } from "framer-motion";

export default function MotionTitle() {
  return (
    <>
      <motion.h1
        className="flex justify-center text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ x: [50, 50, 0], opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        Our menus
      </motion.h1>
      
    </>
  );
}
