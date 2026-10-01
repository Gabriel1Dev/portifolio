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
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-400 to-blue-600 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50 dark:bg-[#4C8DFF]/25" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={hero}
                  alt="hero"
                  className="w-full h-full object-cover rounded-full relative
                  z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 scale-110 rounded-full border-2 border-gray-400 transition-transform duration-500 group-hover:scale-125 dark:border-[#4C8DFF]/30" />
                <div className="absolute inset-0 scale-125 rounded-full border-2 border-gray-400 transition-transform duration-500 group-hover:scale-150 dark:border-[#4C8DFF]/30" />
              </div>
            </div>
          </div>
          <div
            className="lg:w-3/5 w-full flex flex-col items-center 
          lg:items-start"
          >
            <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-[#EEF2FA] sm:text-5xl lg:text-6xl">
              Olá, meu nome é{" "}
              <span className="text-blue-500 dark:text-[#4C8DFF]">Gabriel</span>
            </h1>
            <p className="mb-6 text-lg text-gray-900 dark:text-[#A9B4CC]">
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
                  className="rounded-full bg-blue-500 p-3 text-white transition-colors duration-300 hover:bg-blue-600 dark:bg-[#4C8DFF] dark:hover:bg-blue-500"
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
