import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
  <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage.src})`,
         
        }}></div>
        <div className="flex flex-col md:flex-row gap-8  md:gap-16 items-center">
          <div>
    <h2 className="font-serif text-2xl md:text-3xl">Créons ton site incroyable ensemble !</h2>
    <p className="text-sm mt-2 md:text-base">Prêt à donner vie à votre prochain projet ? Discutons ensemble de la façon dont je peux vous aider à atteindre vos objectifs.</p>
    </div>
    <div>
      <a 
        href="mailto:floriandev74@gmail.com?subject=Je veux mon site incroyable !"
        className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold">Me contacter</span>
        <ArrowUpRightIcon className="size-4"/>
      </a>
    </div>
    </div>
  </div>
  </div>
  </div>
  )
};
