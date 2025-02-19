import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/livre.png";  
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/carte74.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies =[
  {
    title: 'Cinema',
    emoji: '🎬' 
  },
  {
    title: 'Randonnée',
    emoji: '🥾'
  },
  {
    title: 'Voyages',
    emoji: '✈️'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Cuisine',
    emoji: '🍳'
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️'
  },
  {
    title: 'Lecture',
    emoji: '📚'
  },
]

export const AboutSection = () => {
  return (
  <div className="py-20">
    <div className="container">
    <SectionHeader 
    eyebrow='A propos de moi' 
    title="Un aperçu de mon univers" 
    description="Découvrez qui je suis, ce que je fais et ce qui me motive."
    />
    <div className="mt-20 flex flex-col gap-8">
      <Card className="h-[320px]">
        <CardHeader title="Mes lectures" description="Explorez les livres qui influencent ma manière de penser" />
   
<div className="w-40 mx-auto mt-8">
<Image src={bookImage} alt="livre de karine giebel" />
</div>
      </Card>
      
      <Card className="h-[320px] p-0">
        <CardHeader 
        title="Ma boîte à outils" 
        description="Decouvrez les technologies et outils qui me permettent de concevoir des expériences numériques de qualité"
        className="px-6 pt-6"
        />
<ToolboxItems items={toolboxItems} className="mt-6" />
<ToolboxItems items={toolboxItems} className="mt-6 "
itemsWrapperClassName="-translate-x-1/2"
/>
      </Card>
      <Card>
        <CardHeader title="Mes passions" description="Explorez mes passions et inspirations au delà du digital" />

<div>
  {hobbies.map(hobby => (
    <div key={hobby.title} className="inline-flex gap-2 px-6">
      <span>{hobby.title}</span>
      <span>{hobby.emoji}</span>
</div>
  ))}
</div>

      </Card>
      <Card>
<Image src={mapImage} alt="carte du 74800" />
<Image src={smileMemoji} alt="memoji souriant" />
      </Card>
      </div>
    </div>
  </div>
  
  )
};

