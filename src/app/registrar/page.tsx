"use client";
import { match } from "assert";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Regisrar({
  title,
  user,
}: {
  title: string;
  user?: any;
}) {
  const router = useRouter();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: user,
  });
  const { errors } = formState;

  const fields = {
    name: register("name", 
      { required: "Escriba su nombre completo" , 
        minLength: {value:3, 
        message:"el nombre es muy corto"} }),
    email: register("email", {
      required: "Escriba su correo electronico",
      minLength: { value: 3, message: "Se necesita un correo mas largo"},
      pattern: {value: /^[^@]*@[^@]*$/, message:"Correo invalido"}
    }),
    phoneNumber: register("phoneNumber" ,{
      required: "Escriba su numero de telefono",
      pattern: {value: /^\d{8}$/, message: "Su numero de telefono es invalido"}
    }),
    area: register("area", { required: "Selecione su area" }),
  };

  async function onSubmit(data: any) {
    try {
      console.log(data);
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/entrevistaRegistroPaciente", { scroll: false });
    } catch (error: any) {
      console.log("hubo un error");
      router.push("/proyecto", { scroll: false });
    }
  }
  return (
    <div className={styles.container}>
      <Link href="/">
        <nav className={styles.logo}>Nova</nav>
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
            <Link href="/proyecto" className={styles.titleProjectMain} >
              /regresar
            </Link>

            <motion.div className={styles.wrapperGetInfomacion}>
              <p className={styles.tituloInforUser}>
                Para empezar!, proporcionanos tu informacion
              </p>

              <motion.div className={styles.wrapperformInfoUser}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <label
                        htmlFor="Nombre_Completo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                      >
                        Nombre completo
                      </label>
                      <input
                        {...fields.name}
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="juan mario Perez Lopez"
                      />
                      <div className="invalid-feedback text-red-600 text-sm font-semibold">
                        {errors.name?.message?.toString()}
                      </div>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                      <label
                        htmlFor="Correo_Electronico"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                      >
                        Correo electronico
                      </label>
                      <input
                        {...fields.email}
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="juanpers@gmail.com"
                      />
                      <div className="invalid-feedback text-red-600 text-sm font-semibold">
                        {errors.email?.message?.toString()}
                      </div>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                      <label
                        htmlFor="phone_number"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                      >
                        Numero de telefono
                      </label>
                      <input
                        type="text"
                        id="email"
                        {...fields.phoneNumber}
                        name="phoneNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="45662185"
                      />
                      <div className="invalid-feedback text-red-600 text-sm font-semibold">
                        {errors.phoneNumber?.message?.toString()}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 md:gap-6">
                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                      >
                        ¿Que area pertenece?
                      </label>
                      <select
                        {...fields.area}
                        name="area"
                        id="area"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>Personal de servicio al cliente</option>
                        <option>Personal Medico</option>
                        <option>Personal Administrativo</option>
                        <option>Personal de Mantenimiento</option>
                        <option>Personal de Enfermeria</option>
                      </select>
                      <div className="invalid-feedback text-red-600 text-sm font-semibold">
                        {errors.area?.toString()}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className={styles.btnEnviar}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Empezar encuesta
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            <div className={styles.wrapperEntrevistasCuestionarios}></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
