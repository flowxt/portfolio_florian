import ecranFront from "@/assets/images/ecran-front2.png";
import kris from "@/assets/images/kris.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import sportSee from "@/assets/images/sportsee.png";

const portfolioProjects = [
  {
    company: "En Scènes Acting",
    year: "2025",
    title: "En Scènes Acting",
    results: [
      { title: "Expérience utilisateur améliorée de 60%" },
      { title: "Vitesse du site augmentée de 40%" },
      { title: "Trafic mobile accru de 45%" },
    ],
    link: "https://cyrielle-app.vercel.app/",
    image: ecranFront,
  },
  {
    company: "Kris LaVoixDesAnges",
    year: "2025",
    title: "Kris La Voix Des Anges",
    results: [
      { title: "Expension des clients de 20%" },
      { title: "Augmentation des ventes de 35%" },
      { title: "Visibilité de la marque accrue de 55%" },
    ],
    link: "https://krisnextjs.vercel.app/",
    image: kris,
  },
  {
  company: "OpenClassrooms",
  year: "2024",
  title: "App fitness",
  results: [
    { title: "Amélioration de l'expérience utilisateur de 40%" },
    { title: "Augmentation de la vitesse du site de 50%" },
    { title: "Augmentation du trafic mobile de 35%" },
  ],
  link: "https://sport-see-oc.vercel.app/",
  image: sportSee,
},
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
  <div>
    <div className="container">
      <SectionHeader eyebrow='Un impact réel' title="Projets à la une" description="Découvrez ma façon de transformer des idées en expériences digitales immersives." />
   
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
           key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
           style={{
            top: `calc(64px + ${projectIndex * 40}px`
           }}
           > 

             <div className="lg:grid lg:grid-cols-2 lg:gap-16">
<div className="lg:pb-16">

              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
              </div>
            
          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>     
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map(result =>(
              <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckCircleIcon className='size-5 md:size-6'  />
                <span>{result.title}</span>
                </li>
            ))}
          </ul>
          <a href={project.link}>
          <button className="bg-white text-gray-950 h-12 w-full  md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
            <span>Accéder au site</span>
<ArrowUpRightIcon className='size-4' />
            </button>
          </a>
          </div>
          <div className="relative">
          <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
          </div>
          </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
  </section>
  );
};
