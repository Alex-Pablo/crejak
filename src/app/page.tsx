"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import iconArrowIzquierda from "../../public/ArrowIzquierda.svg";
import iconArrowOutward from "../../public/ArrowOutward.svg";
import iconArrowOutwardWhite from "../../public/ArrowOutwardWhite.svg";
import { useCallback, useState } from "react";
import Link from "next/link";
import drawProgramm from '../../public/undraw_programming_re_kg9v.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.logo}>crejak</nav>
      <div className={styles.wrapperMain}>
        <div className={styles.wrapperContent}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            dragTransition={{
              min: 0,
              max: 100,
              bounceDamping: 8
            }}
            animate={{ rotate: -1 }}
            transition={{ from:180, type: 'spring', restDelta: 2 }}

            className={styles.content}
          >
            <div>
              <p className={styles.slogan1}>Somos</p>
              <p className={styles.slogan2}>tu solucion</p>
            </div>

            <div>
              <Link href="/proyecto">
              <motion.button
                className={styles.btnProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={iconArrowIzquierda} alt="" width={20} /> Ver
                Proyecto
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className={styles.wrapperImg}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            dragTransition={{
              min: 0,
              max: 100,
              bounceDamping: 8
            }}
            className={styles.containerImg}
          >
            <Image src={drawProgramm} alt="" className={styles.imgProgram} />
          </motion.div>
        </div>

        <div className={styles.wrapperAboutUs}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            dragTransition={{
              min: 0,
              max: 100,
              bounceDamping: 8
            }}
            className={styles.containerAboutUs}
          >
            <Link href="/aboutUs">
              <motion.button
                className={styles.btnProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={iconArrowOutward} alt="" width={20} />
              </motion.button>
            </Link>
            <h4 className={styles.titleAboutUs}>Sobre nosotros</h4>
          </motion.div>
        </div>

        <div className={styles.wrapperContact}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            className={styles.containerContact}
          >
            <Link href="/contact">
              <motion.button
                className={styles.btnContacto}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={iconArrowOutward} alt="" width={20} />
              </motion.button>
            </Link>
            <h4 className={styles.titleContacto}>Contacto</h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
