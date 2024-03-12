"use client";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo  from '../../../public/logo.png'

export default function Proyecto() {



	async function handleSubmit() {
		const data = {
      name:"fewf",
      age:1
		};

		try {
      
			const response = await fetch("/api", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!response.ok) {
				throw new Error("HTTP error! status: " + response.status);
			}
			setMessageSent(true);
		} catch {
			console.log(
				"There was a problem with the fetch operation " + error.message
			);
		}
	}
  
  return (
    <div className={styles.container}>
      <Link href="/">
      <Image src={logo} alt="." width={50}/>
      </Link>

      <div className={styles.wrapperMain}>
        <div className={styles.wrapperProyecCenter}>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.containerProject}
          >
            <p className={styles.titleProjectMain}>
              Entrevista y Cuestionarios
            </p>

            <div className={styles.wrapperEntrevistasCuestionarios}>
              <Link href="/registrar">
              <motion.div className={styles.entreCitaRePaciente}>
                <p className={styles.titleCiRepaciente}>Entrevisa</p>
                <p className={styles.proCiRePaciente}>Proceso cita y registro de pacientes</p>
              </motion.div>
              </Link>

              <Link href="/registrarEG">
              <motion.div className={styles.entreCitaRePaciente}>
                <p className={styles.titleCiRepaciente}>Entrevisa</p>
                <p className={styles.proCiRePaciente}>Proceso Gestion de Inventarios</p>
              </motion.div>
              </Link>

              <Link href="/registrarEPF">
              <motion.div className={styles.entreCitaRePaciente}>
                <p className={styles.titleCiRepaciente}>Entrevisa</p>
                <p className={styles.proCiRePaciente}>Proceso Pago facturacion</p>
              </motion.div>
              </Link>
              <Link href="/registrarCDT">
              <motion.div className={styles.entreCitaRePaciente}>
                <p className={styles.titleCiRepaciente}>Cuestionario</p>
                <p className={styles.proCiRePaciente}>Proceso Diagnostico y tratamiento</p>
              </motion.div>
              </Link>

              <Link href="/registrarCGIC">
              <motion.div className={styles.entreCitaRePaciente}>
                <p className={styles.titleCiRepaciente}>Cuestionario</p>
                <p className={styles.proCiRePaciente}>Proceso Gestion de informacion y comunicacion</p>
              </motion.div>
              </Link>

              <Link href="/registrarCRR">
              <motion.div className={styles.entreCitaRePaciente}>
                <p className={styles.titleCiRepaciente}>Cuestionario</p>
                <p className={styles.proCiRePaciente}>Proceso  Recepcion registro de informacion</p>
              </motion.div>
              </Link>

              <Link href="/results">
              <motion.div className={styles.resultadosContainer}>
                <p className={styles.titleResulRepaciente}>Resultados</p>
                <p className={styles.proResulRePaciente}>Participantes de las entrevistas y cuestionarios</p>
              </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
