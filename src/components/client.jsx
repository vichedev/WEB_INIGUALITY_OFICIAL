import SectionTitle from "./SectionTitle";

const logos = [
  "/img/clientes/red.webp",
  "/img/clientes/inter.webp",
  "/img/clientes/fiber.webp",
  "/img/clientes/covirnet.webp",
  "/img/clientes/academy.webp",
];

const Client = () => (
  <section className="py-24 overflow-hidden bg-white">
    <div className="px-6">
      <SectionTitle
        eyebrow="Confianza"
        title="Nuestros"
        highlight="clientes"
        subtitle="¡Nuestros clientes confían en nuestro trabajo!"
      />
    </div>

    {/* Cinta infinita (CSS) */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 z-10 w-24 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex items-center justify-center w-56 mx-4 h-28 grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
          >
            <img
              src={logo}
              alt={`Logo de cliente ${(i % logos.length) + 1}`}
              loading="lazy"
              className="object-contain w-auto max-w-full max-h-24"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Client;
