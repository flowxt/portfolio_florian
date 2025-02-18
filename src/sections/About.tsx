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

export const AboutSection = () => {
  return (
  <div className="pb-96">
    <SectionHeader 
    eyebrow='A propos de moi' 
    title="Un aperçu de mon univers" 
    description="Découvrez qui je suis, ce que je fais et ce qui me motive."
    />
    <div>
      <Card>
<div>
  <StarIcon />
  <h3>Mes lectures</h3>
  <p>Explorez les livres qui influencent ma manière de penser</p>
</div>
<Image src={bookImage} alt="livre de karine giebel" />
      </Card>
      
      <Card>
<div>
  <StarIcon />
  <h3>Ma boîte à outils</h3>
  <p>Decouvrez les technologies et outils qui me permettent de concevoir des expériences numériques de qualité</p>
</div>
<div>
  {toolboxItems.map(item => (
    <div key={item.title}>
    <TechIcon component={item.iconType} />
<span>{item.title}</span>
      </div>
  ))}
</div>
      </Card>
    
    </div>
  </div>
  
  )
};

