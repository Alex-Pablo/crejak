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
export default function EntrevistaGestionInventario({
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
    pregunta8: register("pregunta8", {
      required: "Elija una opcion",
    }),
    pregunta9: register("pregunta9", {
      required: "Elija una opcion",
    }),
  };

  async function onSubmit(data: any) {
    data.idUser = idUser;
    try {
      console.log(data);
      const response = await fetch("/api/entrevistaGestionInventario", {
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
              <div className={styles.wrapperTituloProcess}>
                <p className={styles.tituloInforUser}>
                  Proceso gestion de inventario
                </p>
              </div>
              <motion.div className={styles.wrapperformInfoUser}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-9">
                    <label
                      htmlFor="pregunta1"
                      className="block mb-2 text-base font-bold text-gray-900"
                    >
                      ¿Cómo describiría el actual proceso de gestión de
                      inventarios en la clínica veterinaria?
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
                      ¿Cuáles son los mayores desafíos que enfrenta el personal
                      al manejar el inventario de suministros médicos y
                      productos en la clínica?
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
                      ¿Cómo se realizan las compras y reposiciones de
                      inventario? ¿Hay un proceso establecido?
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
                      ¿Cómo se aseguran de mantener actualizada la información
                      sobre las fechas de vencimiento de los productos?
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
                      ¿Cuáles son las estrategias implementadas para minimizar
                      pérdidas y desperdicios en el inventario?
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
                        ¿Utilizan un sistema informático para la gestión de
                        inventarios en la clínica?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-1"
                            type="radio"
                            name="pregunta6"
                            value="Sí, contamos con un sistema informático avanzado."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, contamos con un sistema informático avanzado.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-2"
                            type="radio"
                            name="pregunta6"
                            value="No, utilizamos métodos manuales y registros en papel"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No, utilizamos métodos manuales y registros en papel
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta6}
                            id="pregunta6-3"
                            type="radio"
                            name="pregunta6"
                            value="Estamos en proceso de evaluación para implementar un sistema informático."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta6-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Estamos en proceso de evaluación para implementar un
                            sistema informático.
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta6?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Hay un empleado designado específicamente para
                        supervisar y gestionar el inventario?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-1"
                            type="radio"
                            name="pregunta7"
                            value=" Sí, hay un empleado designado a tiempo completo para la gestión de inventarios."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, hay un empleado designado a tiempo completo para
                            la gestión de inventarios.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-2"
                            type="radio"
                            name="pregunta7"
                            value="No, la responsabilidad de la gestión de inventarios se comparte entre varios 
                            empleados."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No, la responsabilidad de la gestión de inventarios
                            se comparte entre varios empleados.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta7}
                            id="pregunta7-3"
                            type="radio"
                            name="pregunta7"
                            value=" No hay un empleado designado específicamente para esta tarea."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta7-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No hay un empleado designado específicamente para
                            esta tarea.
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
                        ¿Realizan inventarios físicos periódicos para
                        reconciliar los registros con el stock real?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-1"
                            type="radio"
                            name="pregunta8"
                            value="Sí, realizamos inventarios físicos regularmente."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, realizamos inventarios físicos regularmente.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-2"
                            type="radio"
                            name="pregunta8"
                            value=" No, solo realizamos inventarios físicos en casos excepcionales"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No, solo realizamos inventarios físicos en casos
                            excepcionales
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta8}
                            id="pregunta8-3"
                            type="radio"
                            name="pregunta8"
                            value=" No realizamos inventarios físicos para reconciliación."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta8-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No realizamos inventarios físicos para
                            reconciliación.
                          </label>
                        </div>
                        <div className="invalid-feedback text-red-600 text-sm font-semibold">
                          {errors.pregunta8?.message?.toString()}
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="mt-9">
                      <legend className={styles.tituloPregunta}>
                        ¿Tienen acuerdos establecidos con proveedores para
                        garantizar un suministro constante y oportuno?
                      </legend>

                      <div className={styles.wrapperSelectionOptions}>
                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-1"
                            type="radio"
                            name="pregunta9"
                            value="Sí, tenemos acuerdos establecidos con proveedores para garantizar suministros."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-1"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            Sí, tenemos acuerdos establecidos con proveedores
                            para garantizar suministros.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-2"
                            type="radio"
                            name="pregunta9"
                            value="No hay acuerdos específicos, pero trabajamos con proveedores confiables."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-2"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No hay acuerdos específicos, pero trabajamos con
                            proveedores confiables.
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            {...fields.pregunta9}
                            id="pregunta9-3"
                            type="radio"
                            name="pregunta9"
                            value=" No contamos con acuerdos establecidos con proveedores."
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                          />
                          <label
                            htmlFor="pregunta9-3"
                            className="block ms-2 text-sm font-medium text-gray-900"
                          >
                            No contamos con acuerdos establecidos con
                            proveedores.
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
