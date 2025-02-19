import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
const footerLinks = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/florian-barjon-497a27324/'
  },
  {
    title: 'Github',
    href: 'https://github.com/flowxt'
  },
]


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center'>
          <div className='text-white/40'>&copy; {currentYear} Florian Barjon. Tous droits réservés.</div>
          <nav>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.title} target="_blank"
            rel="noopener noreferrer" className='inline-flex items-center gap-1.5'>
              <span className='font-semibold'>{link.title}</span>
              <ArrowUpRightIcon className="size-4"/>
            </a>
          ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
