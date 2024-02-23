"use client";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <nav className={styles.logo} >crejak</nav>
      </Link>
      <div className={styles.wrapperMain}>
        <div className={styles.wrapperMision}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            className={styles.containerMision}
          >
            <p className={styles.titleMision}>Mision</p>
            <p className={styles.mision}>
              En la empresa informática CREJAK nuestra misión es liderar la
              vanguardia de la innovación tecnológica para empoderar a
              individuos y organizaciones. Nos comprometemos a ofrecer
              soluciones informáticas de vanguardia que no solo resuelvan los
              desafíos actuales, sino que también anticipen y aborden las
              demandas futuras del mundo digital. Estamos dedicados a brindar
              servicios y productos de calidad excepcional, fomentando la
              excelencia, la eficiencia y la confianza en cada interacción.
            </p>
          </motion.div>
        </div>

        <div className={styles.wrapperVision}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            className={styles.containerVision}
          >
            <p className={styles.titleVision}>Vision</p>
            <p className={styles.vision}>
              En la empresa informática CREJAK buscamos ser reconocidos como el
              referente global en soluciones informáticas que transforman
              positivamente la manera en que las personas viven, trabajan y se
              comunican. Visualizamos un futuro donde la tecnología no solo sea
              una herramienta, sino una fuerza impulsora para la mejora
              continua. Nos esforzamos por ser líderes en la creación de
              soluciones innovadoras y sostenibles, promoviendo la inclusión
              digital y contribuyendo al progreso y bienestar de la sociedad
            </p>
          </motion.div>
        </div>


        <div className={styles.wrapperOurTeam}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            className={styles.containerOurTeam}
          >
            <p className={styles.titleOurTeam}>Nuestro equipo</p>

            <div className={styles.wrapperTeams}>

              <div className={styles.team}>
                <p>Gela Karina Antonia Chumil Cosiguá</p>
              </div>

              <div className={styles.team}>
                <p>Alex Anibal Pablo Mendez</p>
              </div>

              <div className={styles.team}>
                <p>Jennifer María De Los Angeles Cuy Quiché</p>
              </div>

              <div className={styles.team}>
                <p>Royer Alexander Santos Tzep</p>
              </div>

              <div className={styles.team}>
                <p>Edwin Estuardo Patzan Puluc</p>
              </div>

              <div className={styles.team}>
                <p>Christian Tomas Ajanel Ajanel</p>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
}
