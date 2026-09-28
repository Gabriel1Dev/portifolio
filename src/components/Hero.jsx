import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../assets/me.jpeg";
const Hero = () => {
  const socialIcons = [
    { icon: FaGithub, alt: "GitHub", link: "https://github.com/Gabriel1Dev" },
    {
      icon: FaLinkedin,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/gabriel-rodrigues-devjun/",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div
            className="lg:w-2/5 w-full flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative group">
              <div
                className="absolute inset-0 bg-lienar-to-r from-blue-400 to-blue-600 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50
                         transition-opacity duration-500"
              />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={hero}
                  alt="hero"
                  className="w-full h-full object-cover rounded-full relative
                  z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 border-2 dark:border-blue-500/30 border-gray-400 rounded-full scale-110 group-hover:scale-125
                 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 border-2 dark:border-blue-500/30 border-gray-400 rounded-full scale-125
                 group-hover:scale-150 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div
            className="lg:w-3/5 w-full flex flex-col items-center 
          lg:items-start"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Olá, meu nome é{" "}
              <span className="dark:text-white text-blue-500">Gabriel</span>
            </h1>
            <p className="text-lg text-gray-900 mb-6">
              Estudante de ADS em busca de oportunidades para aplicar meus
              conhecimentos em programação, desenvolvimento de sistemas e
              tecnologia.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
