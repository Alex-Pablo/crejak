"use client";
import { match } from "assert";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import user from "../../../Model/User";

export default function EntrevistaRegistroPaciente({
  params,
}: {
  params: { response: String };
}) {
  const router = useRouter();
  const user: any = "e";

  const idUser = params.response

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: user,
  });

  const { errors } = formState;

  const fields = {
    pregunta1: register("pregunta1", {
      required: "Este campo es requerido",
      minLength: { value: 10, message: "Necesitamos mas informacion" },
    }),
    pregunta2: register("pregunta2", {
      required: "Este campo es requerido",
      minLength: { value: 10, message: "Necesitamos mas informacion" },
    }),
    pregunta3: register("pregunta3", {
      required: "Este campo es requerido",
      minLength: { value: 10, message: "Necesitamos mas informacion" },
    }),
    pregunta4: register("pregunta4", {
      required: "Este campo es requerido",
      minLength: { value: 10, message: "Necesitamos mas informacion" },
    }),
    pregunta5: register("pregunta5", {
      required: "Este campo es requerido",
      minLength: { value: 10, message: "Necesitamos mas informacion" },
    }),
    pregunta6: register("pregunta6", {
      required: "Elija una opcion",
    }),
    pregunta7: register("pregunta7", {
      required: "Elija una opcion",
    }),
    pregunta8: register("pregunta8", {
      required: "Elija una opcion",
    }),
    pregunta9: register("pregunta9", {
      required: "Elija una opcion",
    }),
  };

  async function onSubmit(data: any) {
    data.idUser = idUser
    try {
      console.log(data);
      const response = await fetch("/api/entrevistaRegistroPaciente", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/proyecto");
    } catch (error: any) {
      console.log("hubo un error");
      router.push("/");
    }
  }

  return (
    <div className={styles.container}>
      <p>
        <nav className={styles.logo}>Nova</nav>
      </p>

      <div className={styles.wrapperMain}>
        <div className={styles.wrapperProyecCenter}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.containerProject}
          >
            <motion.div className={styles.wrapperGetInfomacion}>
              <div className={styles.wrapperTituloProcess}>
                <p className={styles.tituloInforUser}>
                  Proceso registro de paciente y asignacion de cita
                </p>
              </div>
              <motion.div className={styles.wrapperformInfoUser}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-9">
                    <label
                      htmlFor="pregunta1"
                      className="block mb-2 text-base font-bold text-gray-900"
                    >
                      ¿Cómo describiría el proceso actual de registro de
                      pacientes en la clínica veterinaria?
                    </label>
                    <textarea
                      {...fields.pregunta1}
                      id="pregunta1"
                      name="pregunta1"
                      className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-green-900 focus:border-green-900 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta1?.message?.toString()}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label
                      htmlFor="pregunta2"
                      className="block mb-2 text-base font-bold text-gray-900"
                    >
                      ¿Cuáles son los desafíos más comunes que enfrenta el
                      personal al registrar la información de los pacientes?
                    </label>
                    <textarea
                      {...fields.pregunta2}
                      id="pregunta2"
                      name="pregunta2"
                      className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta2?.message?.toString()}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label
                      htmlFor="pregunta3"
                      className="block mb-2 text-base font-bold text-gray-900"
                    >
                      ¿Cómo manejan la información confidencial de los pacientes
                      en términos de privacidad y seguridad?
                    </label>
                    <textarea
                      {...fields.pregunta3}
                      id="pregunta3"
                      name="pregunta3"
                      className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta3?.message?.toString()}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label
                      htmlFor="pregunta4"
                      className="block mb-2 text-base font-bold text-gray-900"
                    >
                      ¿Cuál es la importancia que asignan a la precisión y
                      actualización de los registros de los pacientes?
                    </label>
                    <textarea
                      {...fields.pregunta4}
                      id="pregunta4"
                      name="pregunta4"
                      className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta4?.message?.toString()}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label
                      htmlFor="pregunta5"
                      className="block mb-2 text-base font-bold text-gray-900"
                    >
                      ¿Cuáles son las áreas específicas en las que cree que se
                      podrían realizar mejoras en el sistema de registro actual?
                    </label>
                    <textarea
                      {...fields.pregunta5}
                      id="pregunta5"
                      name="pregunta5"
                      className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta5?.message?.toString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Utilizan actualmente un sistema informático para el
                        registro de pacientes en la clínica?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-1"
                            type="radio"
                            name="pregunta6"
                            value="Sí, contamos con un sistema informático integral."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, contamos con un sistema informático integral.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-2"
                            type="radio"
                            name="pregunta6"
                            value="No, utilizamos principalmente registros en papel."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No, utilizamos principalmente registros en papel.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-3"
                            type="radio"
                            name="pregunta6"
                            value="Estamos en proceso de implementar un sistema informático."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Estamos en proceso de implementar un sistema
                            informático.
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta6?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿El personal está capacitado regularmente en el manejo
                        de registros y sistemas de registro?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-1"
                            type="radio"
                            name="pregunta7"
                            value="Sí, el personal recibe capacitación periódica."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, el personal recibe capacitación periódica.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-2"
                            type="radio"
                            name="pregunta7"
                            value="No, la capacitación es limitada o poco frecuente.."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No, la capacitación es limitada o poco frecuente.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-3"
                            type="radio"
                            name="pregunta7"
                            value=" La capacitación varía según el puesto de trabajo."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            La capacitación varía según el puesto de trabajo.
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta7?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Se realiza alguna auditoría periódica para verificar la
                        exactitud de la información de los registros?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-1"
                            type="radio"
                            name="pregunta8"
                            value="Sí, realizamos auditorías regularmente."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, realizamos auditorías regularmente.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-2"
                            type="radio"
                            name="pregunta8"
                            value=" No, las auditorías son poco frecuentes o inexistentes"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No, las auditorías son poco frecuentes o
                            inexistentes
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-3"
                            type="radio"
                            name="pregunta8"
                            value=" Solo se realizan auditorías en casos específicos."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Solo se realizan auditorías en casos específicos.
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta8?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Cuánto tiempo, en promedio, dedica el personal a
                        completar la información de un nuevo paciente en los
                        registros?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-1"
                            type="radio"
                            name="pregunta9"
                            value=" Menos de 5 minutos."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Menos de 5 minutos.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-2"
                            type="radio"
                            name="pregunta9"
                            value="Entre 5 y 10 minutos."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Entre 5 y 10 minutos.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-3"
                            type="radio"
                            name="pregunta9"
                            value="Más de 10 minutos"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Más de 10 minutos.
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta9?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <motion.button
                    type="submit"
                    className={styles.btnEnviar}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Enviar entrevista
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
