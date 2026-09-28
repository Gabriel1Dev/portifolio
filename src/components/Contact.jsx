import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    value: "gabrieldeoliveirarodrigues825@gmail.com",
    href: "mailto:gabrieldeoliveirarodrigues825@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "GitHub",
    value: "github.com/Gabriel1Dev",
    href: "https://github.com/Gabriel1Dev",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/seu-perfil",
    href: "https://www.linkedin.com/in/gabriel-rodrigues-devjun/",
    icon: FaLinkedin,
  },
  {
    name: "Localização",
    value: "São José dos Campos, São Paulo, Brasil",
    href: "#",
    icon: FaMapMarkerAlt,
  },
];

const Contact = () => (
  <section
    id="contact"
    className="relative flex min-h-screen items-center overflow-hidden py-24 pb-32"
  >
    <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-8 lg:px-14">
      <div className="mb-12 text-center" data-aos="fade-up">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-white">
          Contato
        </p>
        <h2 className="mb-3 text-3xl font-bold text-gray-800 sm:text-4xl">
          Vamos{" "}
          <span className="text-blue-700 dark:text-white">conversar?</span>
        </h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />
        <p className="mt-5 text-gray-900">
          Estou aberto a oportunidades, colaborações e projetos interessantes.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {contactLinks.map((item, index) => {
          const Icon = item.icon;
          const isExternal = item.href.startsWith("http");

          return (
            <div
              key={item.name}
              className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300">
                <Icon size={22} />
              </div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                {item.name}
              </p>

              {item.href === "#" ? (
                <p className="max-w-full break-words text-[0.95rem] font-medium leading-tight text-gray-800 dark:text-white">
                  {item.value}
                </p>
              ) : (
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-block max-w-full break-words text-[0.95rem] font-medium leading-tight text-blue-700 transition-colors hover:text-blue-900 dark:text-blue-300 dark:hover:text-white"
                >
                  {item.value}
                </a>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="mt-12 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a
          href="mailto:gabrieldeoliveirarodrigues825@gmail.com"
          className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Enviar mensagem
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
