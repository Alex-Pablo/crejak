"use client";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import iconInternet from '../../../public/IconoirInternet.svg'
import iconEmial  from '../../../public/MdiEmail.svg'
import iconCall from '../../../public/MaterialSymbolsCall.svg'
import iconLocation from '../../../public/MaterialSymbolsLightLocationOn.svg'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <nav className={styles.logo}>crejak</nav>
      </Link>

      <div className={styles.wrapperMain}>
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
            <p className={styles.titleContacto}>Contacto</p>

            <div className={styles.wrapperInfoContact}>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1306.1719362282042!2d-91.1830790769488!3d14.770293386520963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sgt!4v1708727609961!5m2!1ses!2sgt"
                  width="250"
                  height="200"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className={styles.wrapperInformation}>
                <div className={styles.information}>
                  <Image src={iconLocation} alt="" width={20} />
                  <p>Sololá, Sololá Guatemala</p>
                </div>

                <div className={styles.information}>
                  <Image src={iconCall} alt="" width={20} />
                  <p>45 78 45 12</p>
                </div>

                <div className={styles.information}>
                  <Image src={iconInternet} alt="" width={20} />
                  <p>https://crejak.vercel.app</p>
                </div>

                <div className={styles.information}>
                  <Image src={iconEmial} alt="" width={20} />
                  <p>crejak@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
