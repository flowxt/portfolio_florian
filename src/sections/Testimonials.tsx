import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Dubois",
    position: "Responsable Marketing @ TechStartups",
    text: "Florian a joué un rôle clé dans la transformation de notre site web en un puissant outil marketing. Son attention aux détails et sa capacité à comprendre notre marque sont exceptionnelles. Nous sommes ravis des résultats !",
    avatar: memojiAvatar1,
  },
  {
    name: "Cyrielle Schepens",
    position: "CEO @ En Scènes Acting",
    text: "Travailler avec Florian a été un véritable plaisir. Son expertise en développement frontend a donné vie à nos designs d'une manière que nous n'aurions jamais imaginée. Le site a dépassé nos attentes.",
    avatar: memojiAvatar2,
  },
  {
    name: "John Doe",
    position: "PDG @ InnovateCo",
    text: "La capacité de Florian à créer des expériences utilisateur fluides est inégalée. Notre site a connu une augmentation significative des conversions depuis le lancement du nouveau design. Nous ne pourrions pas être plus heureux.",
    avatar: memojiAvatar3,
  },
  {
    name: "Kristel Feron",
    position: "PDG @ KrisLaVoixDesAnges",
    text: "Florian est un véritable magicien du frontend. Il a transformé notre produit complexe en une interface utilisateur intuitive et engageante. Nous recevons déjà des retours positifs de nos clients.",
    avatar: memojiAvatar4,
  },
  {
    name: "Brandon Johnson",
    position: "Directeur IT @ MegaCorp",
    text: "Le travail de Florian sur notre site web a été exceptionnel. C'est un développeur talentueux qui est aussi un excellent communicateur. Nous le recommandons vivement.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
  <div className="container">
    <SectionHeader eyebrow='Clients satisfaits' title="Ce que mes clients disent de moi" description="Ne vous fiez pas seulement à mes dires. Découvrez ce que mes clients pensent de mon travail." />
  
    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
{[...new Array(2)].fill(0).map((_, index) => (
  <Fragment key={index}>
    {testimonials.map((testimonial) => (
  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
    <div className="flex gap-4 items-center">
      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
        <Image 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="max-h-full" 
        />
      </div>
      <div>
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-sm text-white/40">{testimonial.position}</div>
      </div>
    </div>
    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
  </Card>
))}
</Fragment>
))}
</div>
      </div>
  </div>
  </div>
  );
};
