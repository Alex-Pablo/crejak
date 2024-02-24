"use client";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion ,useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Proyecto() {

  return (
    <div className={styles.container}>
      <Link href="/">
        <nav className={styles.logo}>crejak</nav>
      </Link>

      <div className={styles.wrapperMain}>
        <div className={styles.wrapperProyecCenter}  >
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            className={styles.containerProject}>

              <p className={styles.titleProjectMain}>Análisis clínica veterinaria</p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
