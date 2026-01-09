"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  viewportOptions,
} from "@/lib/animation-variants";

interface pageHeadTypes {
  bgImg: string;
  prevPage: string;
  prevLink: string;
  currPage: string;
}

const PageHead = ({ bgImg, prevPage, prevLink, currPage }: pageHeadTypes) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="cover min-h-[40vh] flex flex-col gap-3 items-center justify-center md:min-h-[60vh]">
        <motion.h3
          variants={fadeInUp}
          className="text-white text-2xl md:text-3xl"
        >
          {currPage}
        </motion.h3>
        <motion.div
          variants={fadeInUp}
          className="breadcrumbs text-white/70"
        >
          <Link href={prevLink} className="hover:text-white transition-colors">
            {prevPage}
          </Link>{" "}
          - <span className="text-white">{currPage}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageHead;
