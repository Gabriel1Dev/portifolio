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
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            Minhas <span className="text-blue-700 dark:text-white">Skills</span>
          </h2>
          <div className="w-20 h-1 dark:bg-white bg-blue-500 mx-auto rounded-full" />
          <p className="mt-5 text-gray-900">
            Tecnologias e ferramentas que utilizo nos meus estudos e projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                  >
                    <skill.icon
                      className="text-blue-600 dark:text-blue-400"
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
