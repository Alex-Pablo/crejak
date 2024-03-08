"use client";
import { match } from "assert";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function CuestionarioGestionInformacionYComunicacion({
  params,
}: {
  params: { response: String };
}) {
  const router = useRouter();
  const user: any = "e";

  const idUser = params.response;

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: user,
  });

  const { errors } = formState;

  const fields = {
    pregunta1: register("pregunta1", {
      required: "Seleciono una opcion",
    }),
    pregunta2: register("pregunta2", {
      required: "Selecione una opcion",
    }),
    pregunta3: register("pregunta3", {
      required: "Selecione una opcion",
    }),
    pregunta4: register("pregunta4", {
      required: "Selecione una opcion",
    }),
    pregunta5: register("pregunta5", {
      required: "Selecione una opcion",
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
    pregunta10: register("pregunta10", {
      required: "Elija una opcion",
    }),
  };

  async function onSubmit(data: any) {
    data.idUser = idUser;
    try {
      console.log(data);
      const response = await fetch(
        "/api/cuestionarioGestionInformacioyComuni",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
                  Cuestionario proceso gestion de la informacion y comunicacion
                </p>
              </div>
              <motion.div className={styles.wrapperformInfoUser}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Prefieres un software instalado localmente en los
                        equipos de la clínica?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta1}
                            id="pregunta1-1"
                            type="radio"
                            name="pregunta1"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta1-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta1}
                            id="pregunta1-2"
                            type="radio"
                            name="pregunta1"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta1-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta1?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Qué nivel de experiencia tienes con el uso de software
                        de gestión de información en el contexto de una clínica
                        veterinaria?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta2}
                            id="pregunta2-1"
                            type="radio"
                            name="pregunta2"
                            value="Mucha "
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta2-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Mucha
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta2}
                            id="pregunta2-2"
                            type="radio"
                            name="pregunta2"
                            value="Poca "
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta2-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Poca
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta2}
                            id="pregunta2-3"
                            type="radio"
                            name="pregunta2"
                            value="Ninguna"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta2-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Ninguna
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta2?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Crees que implementar en el sistema un apartado de
                        quejas podría mejorar la experiencia del cliente en la
                        veterinaria?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta3}
                            id="pregunta3-1"
                            type="radio"
                            name="pregunta3"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta3-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta3}
                            id="pregunta3-2"
                            type="radio"
                            name="pregunta3"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta3-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta1?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Consideras que el proceso actual de comunicación y
                        facturación con los clientes es eficiente?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta4}
                            id="pregunta4-1"
                            type="radio"
                            name="pregunta4"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta4-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta4}
                            id="pregunta4-2"
                            type="radio"
                            name="pregunta4"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta4-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta4?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Te gustaría que el software pudiera generar
                        automáticamente facturas para los servicios prestados a
                        los clientes?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta5}
                            id="pregunta5-1"
                            type="radio"
                            name="pregunta5"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta5-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta5}
                            id="pregunta5-2"
                            type="radio"
                            name="pregunta5"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta5-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta5?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Consideras importante que el software tenga la
                        capacidad de enviar encuestas de satisfacción a los
                        clientes después de sus visitas?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-1"
                            type="radio"
                            name="pregunta6"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-2"
                            type="radio"
                            name="pregunta6"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta6?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿cuál es el medio por el cual está más familiarizado
                        para enviar información a los clientes?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-1"
                            type="radio"
                            name="pregunta7"
                            value="SMS"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            SMS
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-2"
                            type="radio"
                            name="pregunta7"
                            value="Correo electrónico"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Correo electrónico
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-3"
                            type="radio"
                            name="pregunta7"
                            value="Correo electrónico"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Llamada telefónica
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta7?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Se requiere que el sistema tenga capacidades de
                        búsqueda y recuperación de información?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-1"
                            type="radio"
                            name="pregunta8"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-2"
                            type="radio"
                            name="pregunta8"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta8?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Se requiere que el sistema tenga integración con otras
                        herramientas de software utilizadas en la organización?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-1"
                            type="radio"
                            name="pregunta9"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-2"
                            type="radio"
                            name="pregunta9"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta9?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿El sistema debe ser capaz de generar facturas
                        electrónicas?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta10}
                            id="pregunta10-1"
                            type="radio"
                            name="pregunta10"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta10-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta10-2"
                            type="radio"
                            name="pregunta10"
                            value=" No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta10-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>

                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta10?.message?.toString()}
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
