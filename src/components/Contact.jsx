import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaWhatsapp,
  FaTiktok,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const PHONE = "593991031784";

const channels = [
  {
    Icon: AiOutlineMail,
    title: "Correo",
    text: "info@inigualitysoft.com",
    cta: "Escríbenos",
    href: "mailto:info@inigualitysoft.com",
    color: "from-sky-500 to-blue-600",
  },
  {
    Icon: FaWhatsapp,
    title: "WhatsApp",
    text: "Chatea en tiempo real",
    cta: "Iniciar chat",
    href: "https://wa.link/3nnc8b",
    color: "from-green-400 to-emerald-600",
  },
  {
    Icon: FaTiktok,
    title: "TikTok",
    text: "Contenido y tecnología",
    cta: "Descúbrenos",
    href: "https://www.tiktok.com/@iniguality?is_from_webapp=1&sender_device=pc",
    color: "from-slate-700 to-slate-900",
  },
];

const inputClass =
  "w-full px-4 py-3 transition border rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-sky-100 outline-none";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", servicio: "", mensaje: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Abre WhatsApp con el mensaje ya redactado
  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Hola InigualitySoft, soy ${form.nombre}.${
      form.servicio ? ` Me interesa: ${form.servicio}.` : ""
    } ${form.mensaje}`;
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Contacta con Nosotros - InigualitySoft</title>
        <meta
          name="description"
          content="Contáctanos a través de nuestras redes sociales o envíanos un correo. ¡Estamos aquí para ayudarte!"
        />
        <meta
          name="keywords"
          content="contacto, email, whatsapp, instagram, tiktok, InigualitySoft"
        />
        <link rel="canonical" href="https://www.inigualitysoft.com/contactos" />
      </Helmet>

      {/* Encabezado */}
      <section className="relative px-6 pt-40 pb-40 text-center bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900">
        <div className="absolute rounded-full pointer-events-none -top-24 -right-24 w-96 h-96 bg-cyan-500/25 blur-3xl animate-blob" />
        <div className="absolute rounded-full pointer-events-none -bottom-24 -left-24 w-96 h-96 bg-indigo-500/25 blur-3xl animate-blob [animation-delay:-7s]" />
        <div className="relative z-10">
          <SectionTitle
            light
            eyebrow="Contacto"
            title="Hablemos de tu"
            highlight="proyecto"
            subtitle="Elige el canal que prefieras. Te respondemos lo antes posible."
          />
        </div>
      </section>

      {/* Tarjetas de canales (superpuestas al encabezado) */}
      <section className="relative z-10 px-6 -mt-28">
        <div className="grid max-w-6xl gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ Icon, title, text, cta, href, color }, i) => (
            <motion.a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${cta} - ${title}`}
              className="flex flex-col items-center p-7 text-center transition-all duration-300 bg-white shadow-xl group rounded-3xl hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <span
                className={`inline-flex items-center justify-center w-16 h-16 mb-4 text-3xl text-white shadow-lg rounded-2xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform`}
              >
                <Icon />
              </span>
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-1 mb-4 text-sm text-slate-500 break-all">
                {text}
              </p>
              <span className="mt-auto text-sm font-bold text-primary group-hover:underline">
                {cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Formulario + información */}
      <section className="px-6 py-20">
        <div className="grid max-w-5xl gap-8 mx-auto lg:grid-cols-5">
          <motion.div
            className="relative p-8 overflow-hidden text-white shadow-xl lg:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute rounded-full pointer-events-none -bottom-16 -right-16 w-60 h-60 bg-cyan-400/25 blur-3xl" />
            <h3 className="relative mb-3 text-2xl font-extrabold">
              ¿Tienes una idea?
            </h3>
            <p className="relative mb-8 text-sky-100">
              Cuéntanos qué necesitas y te ayudamos a hacerlo realidad con
              tecnología a la medida.
            </p>
            <ul className="relative space-y-5 text-left">
              <li className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/10">
                  <FaPhoneAlt />
                </span>
                <a href="tel:+593991031784" className="hover:underline">
                  +593 99 103 1784
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/10">
                  <AiOutlineMail />
                </span>
                <a
                  href="mailto:info@inigualitysoft.com"
                  className="break-all hover:underline"
                >
                  info@inigualitysoft.com
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="p-8 space-y-5 text-left bg-white border shadow-xl lg:col-span-3 rounded-3xl border-slate-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="nombre" className="block mb-1 text-sm font-semibold text-slate-700">
                Tu nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                value={form.nombre}
                onChange={onChange}
                placeholder="Ej. María Pérez"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="servicio" className="block mb-1 text-sm font-semibold text-slate-700">
                ¿Qué te interesa?
              </label>
              <select
                id="servicio"
                name="servicio"
                value={form.servicio}
                onChange={onChange}
                className={inputClass}
              >
                <option value="">Selecciona una opción</option>
                <option>ISPMAX (sistema para ISP)</option>
                <option>FactuCash (facturación)</option>
                <option>Página web personalizada</option>
                <option>Hotspot personalizado</option>
                <option>Diseño gráfico / rebranding</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="block mb-1 text-sm font-semibold text-slate-700">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                required
                value={form.mensaje}
                onChange={onChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 font-bold text-white transition rounded-xl bg-gradient-to-r from-primary to-relevo hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]"
            >
              <FaPaperPlane /> Enviar por WhatsApp
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
