"use client";
import { match } from "assert";
import styles from "./page.module.css";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo  from '../../../../public/logo.png'
export default function EntrevistaPagosoFacturacion({
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
  };

  async function onSubmit(data: any) {
    data.idUser = idUser;
    try {
      console.log(data);
      const response = await fetch("/api/entrevistaPagosoFacturacion", {
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
      <Image src={logo} alt="." width={50}/>
      </p>

      <div className={styles.wrapperMain}>
        <div className={styles.wrapperProyecCenter}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.containerProject}
          >
            <motion.div className={styles.wrapperGetInfomacion}>
              <motion.div className="md:container md:mx-auto">

              <div className={styles.wrapperTituloProcess}>
                <p className={styles.tituloInforUser}>
                  Proceso pagos o facturacion
                </p>
              </div>

              <div className={styles.inscructionsCuestions}>
                <p>
                  Instrucciones: a continuación, se presenta una serie de
                  preguntas referente a sus conocimientos y ocupación, pedimos
                  contestar con total claridad.
                </p>
              </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-9">
                    <label
                      htmlFor="pregunta1"
                      className="block mb-2 text-base font-semibold text-gray-800"
                    >
                      ¿Cómo describiría el proceso actual de facturación y pago
                      en la clínica veterinaria?
                    </label>
                    <textarea
                      {...fields.pregunta1}
                      id="pregunta1"
                      name="pregunta1"
                      className=" resize-none  mt-5 h-20  rounded-xl block p-2.5 w-full text-sm text-gray-900 bg-gray-50   focus:ring-green-900 focus:border-green-900 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta1?.message?.toString()}
                    </div>
                  </div>



                  <div className="mt-9">
                    <label
                      htmlFor="pregunta2"
                      className="block mb-2 text-base font-semibold text-gray-800"
                    >
                      ¿Cuáles son los principales desafíos que enfrenta el
                      personal al procesar facturas y gestionar los pagos de los
                      clientes?
                    </label>
                    <textarea
                      {...fields.pregunta2}
                      id="pregunta2"
                      name="pregunta2"
                      className=" resize-none mt-5 h-20  rounded-xl block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta2?.message?.toString()}
                    </div>
                  </div>




                  <div className="mt-9">
                    <label
                      htmlFor="pregunta3"
                      className="block mb-2 text-base font-semibold text-gray-800"
                    >
                      ¿Cómo manejan las discrepancias o problemas en las
                      facturas con los clientes?
                    </label>
                    <textarea
                      {...fields.pregunta3}
                      id="pregunta3"
                      name="pregunta3"
                      className=" resize-none block mt-5 h-20  rounded-xl p-2.5 w-full text-sm text-gray-900 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta3?.message?.toString()}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label
                      htmlFor="pregunta4"
                      className="block mb-2 text-base font-semibold text-gray-800"
                    >
                      ¿Cuáles son las políticas de la clínica en términos de
                      plazos de pago para los clientes?
                    </label>
                    <textarea
                      {...fields.pregunta4}
                      id="pregunta4"
                      name="pregunta4"
                      className=" resize-none block mt-5 h-20  rounded-xl p-2.5 w-full text-sm text-gray-900 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta4?.message?.toString()}
                    </div>
                  </div>

                  <div className="mt-9">
                    <label
                      htmlFor="pregunta5"
                      className="block mb-2 text-base font-semibold text-gray-800"
                    >
                      ¿Qué medidas se toman para garantizar la privacidad y
                      seguridad de la información financiera de los clientes?
                    </label>
                    <textarea
                      {...fields.pregunta5}
                      id="pregunta5"
                      name="pregunta5"
                      className=" resize-none block mt-5 h-20  rounded-xl p-2.5 w-full text-sm text-gray-900 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Comente aqui..."
                    ></textarea>
                    <div className="invalid-feedback text-red-600 text-sm font-semibold">
                      {errors.pregunta5?.message?.toString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Utilizan un sistema informático para la facturación en
                        la clínica?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-1"
                            type="radio"
                            name="pregunta6"
                            value="SI"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Si
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-2"
                            type="radio"
                            name="pregunta6"
                            value="No."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            NO
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta6?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Hay un departamento o personal específico encargado de
                        la facturación y procesamiento de pagos?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-1"
                            type="radio"
                            name="pregunta7"
                            value="Si"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Si
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-2"
                            type="radio"
                            name="pregunta7"
                            value="No"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta7?.message?.toString()}
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
