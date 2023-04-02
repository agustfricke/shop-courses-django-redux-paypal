import { NavLink } from "react-router-dom"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";

const navigation = {
   
  
    legal: [
      { name: 'Privacidad', href: '/privacidad' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/agustfricke',
        icon: (props) => (
          <AiFillGithub size={30} />
        ),
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UC86aR_jiKs0b-qHWeQzX5Xw',
        icon: (props) => (
          <AiFillYoutube size={30} />
        ),
      },
    ],
  }
  

function Footer(){

  

    return(
    <footer className="bg-gray-900/90 dark:bg-dark-bg footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
             
            
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-gilroy-semibold text-gray-300 tracking-wider uppercase">
            De Tech con Agust para el mundo
            </h3>
            
           
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-dark-second pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-gray-300 hover:text-gray-100">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <a href="/privacidad" className="mt-8 text-base text-gray-300  md:mt-0 md:order-1">
           Política de Privacidad
          </a>
         
          <p className="mt-8 text-base text-gray-300  md:mt-0 md:order-1">
            &copy; 2022 Tech con Agust, Inc
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer