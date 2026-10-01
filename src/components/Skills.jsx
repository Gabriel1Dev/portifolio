import {
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaPython,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "JavaScript", icon: FaJs },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "PHP", icon: FaPhp },
      ],
    },
    {
      title: "Desenvolvimento web",
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "React", icon: FaReact },
        { name: "Spring Boot Básico", icon: FaJava },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Banco de Dados e Ferramentas",
      skills: [
        { name: "SQL", icon: FaDatabase },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Linux", icon: FaLinux },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-[#EEF2FA] sm:text-4xl">
            Minhas{" "}
            <span className="text-blue-700 dark:text-[#EEF2FA]">Skills</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-blue-500 dark:bg-[#4C8DFF]" />
          <p className="mt-5 text-gray-900 dark:text-[#A9B4CC]">
            Tecnologias e ferramentas que utilizo nos meus estudos e projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-2xl bg-white/90 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl dark:border dark:border-white/[0.08] dark:bg-[#151B2E]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-[#EEF2FA]">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-gray-700 dark:text-[#A9B4CC]"
                  >
                    <skill.icon
                      className="text-blue-600 dark:text-[#4C8DFF]"
                      size={22}
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
