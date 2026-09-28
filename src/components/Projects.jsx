import { Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Foto1 from "../assets/WebScrapingFoto.png";
import Foto2 from "../assets/SpringBoot.png";
const projects = [
  {
    title: "Web Scraping com Python e Armazenamento de Dados",
    description:
      "Projeto em Python que utiliza web scraping para coletar dados da classificação da Fórmula 1, realizando o armazenamento das informações em JSON como backup e em um banco de dados MySQL. Desenvolvido para praticar extração, manipulação de dados com Python.",
    image: Foto1,
    imageFit: "contain",
    githubUrl: "https://github.com/Gabriel1Dev/Web-Scraping-F1",
  },
  {
    title: "CRUD com Spring Boot",
    description:
      "API REST em Java e Spring Boot para cadastro e gerenciamento de usuários, com operações completas de CRUD e persistência de dados utilizando Spring Data JPA e H2 Database.",
    image: Foto2,
    imageFit: "contain",
    githubUrl: "https://github.com/Gabriel1Dev/cadastro-usuario",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative flex min-h-screen items-center overflow-hidden py-24 pb-32"
  >
    <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-8 lg:px-14">
      <div className="mb-12 text-center" data-aos="fade-up">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-white">
          Portfólio
        </p>
        <h2 className="mb-3 text-3xl font-bold text-gray-800 sm:text-4xl ">
          Meus <span className="text-blue-700 dark:text-white">Projetos</span>
        </h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />
        <p className="mt-5 text-gray-900">
          Alguns projetos que desenvolvi e o processo por trás de cada um.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1.1fr_0.9fr] dark:border-white/10 dark:bg-slate-900"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative min-h-64 overflow-hidden bg-slate-950 md:min-h-[20rem]">
                <img
                  src={project.image}
                  alt={`Imagem do projeto ${project.title}`}
                  className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02] ${
                    project.imageFit === "contain"
                      ? "object-contain p-4 sm:p-6"
                      : "object-cover"
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-white">
                  <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
                  Projeto {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    <FaGithub size={19} aria-hidden="true" />
                    Acessar projeto no GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div
          className="mx-auto flex max-w-xl flex-col items-center py-14 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ImageIcon
            aria-hidden="true"
            className="mb-4 h-10 w-10 text-blue-600 dark:text-blue-300"
          />
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Novos projetos em breve.
          </p>
        </div>
      )}
    </div>
  </section>
);

export default Projects;
