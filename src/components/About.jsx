import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Programação",
      description:
        "Desenvolvimento de soluções utilizando boas práticas de programação.",
    },
    {
      icon: FaLaptopCode,
      title: "Técnologia",
      description:
        "Interesse em desenvolvimento web, sistemas e novas tecnologias.",
    },
    {
      icon: FaLightbulb,
      title: "Aprendizado",
      description:
        "Aprimorando constantemente meus conhecimentos através de estudos e projetos práticos.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            Sobre <span className="text-blue-700 dark:text-white ">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-white mx-auto rounded-full"></div>
        </div>

        <div
          className="max-w-3xl mx-auto text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-900">
            Sou estudante de Análise e Desenvolvimento de Sistemas e técnico de
            informática, com interesse em desenvolvimento de software e
            tecnologia. Busco minha primeira oportunidade na área para aplicar
            meus conhecimentos. Tenho facilidade para aprender, gosto de
            resolver problemas e estou sempre buscando evoluir
            profissionalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full
                           bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white
                           transition-colors duration-300"
              >
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
