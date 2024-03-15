"use client";
import { match } from "assert";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Results() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responsen = await fetch("/api/user", {
        method: "GET",
      });
      const { message } = await responsen.json();
      setData(message);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="." width={50} />
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
            <Link href="/proyecto" className={styles.titleProjectMain}>
              /regresar
            </Link>

            <motion.div className={styles.wrapperGetInfomacion}>
              
              <p className={styles.tituloInforUser}>
                Participantes en las entrevistas y cuestionarios
              </p>

              <motion.div className={styles.wrapperformInfoUser}>
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        Nombre
                      </th>
                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        Email
                      </th>
                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        Telefono
                      </th>
                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        Area
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr key={item._id} className="font-normal">
                        <td className="text-sm">{item.name}</td>
                        <td className="text-sm">{item.email}</td>
                        <td className="text-sm">{item.phoneNumber}</td>
                        <td className="text-sm">{item.area}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

            </motion.div>

            <div className={styles.wrapperEntrevistasCuestionarios}></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
