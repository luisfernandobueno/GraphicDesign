
import React from "react";

export default function DesignHero() {
  const whatsapp = "https://wa.me/59892783602";

  const services = [
    "Afiches publicitarios",
    "Diseños personalizados",
    "Comunicación visual",
  ];

  return (
    <section className="flex min-h-screen items-center overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14">

          {/* Fotografía personal */}
          <div className="relative mx-auto w-full max-w-md self-stretch md:max-w-none">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-violet-100" />

            <img
              src={`${import.meta.env.BASE_URL}images/IMG_20250430_155138.jpg`}
              alt="Fernando Bueno, diseñador gráfico"
              className="relative h-full min-h-[320px] w-full rounded-3xl object-cover shadow-xl md:min-h-[500px]"
            />
          </div>

          {/* Presentación */}
          <div className="flex min-w-0 flex-col items-start">
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 sm:text-sm">
              Diseño gráfico y publicidad
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Hacé que tu marca
              <span className="mt-2 block text-violet-600">
                destaque a primera vista.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
              Diseño de afiches publicitarios personalizados para
              emprendimientos, comercios, profesionales y eventos.
              Piezas visuales pensadas para comunicar tus ideas,
              captar la atención y presentar tus propuestas de
              manera clara y atractiva.
            </p>

            {/* Servicios */}
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Propuesta de valor */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Cada diseño se desarrolla teniendo en cuenta tu
              objetivo, tu público y el mensaje que querés transmitir,
              buscando un equilibrio entre estética, claridad e impacto visual.
            </p>

            {/* Contacto */}
            <div className="mt-7 flex w-full flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg"
              >
                Consultar servicios
                <span aria-hidden="true">→</span>
              </a>

              {/* <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition duration-200 hover:bg-slate-50"
              >
                Consultar servicios
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
