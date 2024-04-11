import './Footer.css'
import logoInstagram from '../../assets/instagram.svg'
import logoGithub from '../../assets/github.svg'
import logoDiscord from '../../assets/discord.svg'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container-footer">
        <div className="side-footer-top">
          <div className="top-side-left">

            <a href="https://github.com/rpxis" className="plataform">
              <img src={logoGithub} alt="Logo do GitHub" />
            </a>


          </div>
          <div className="top-side-mid">
              <img className="image-midias" src={logoInstagram} alt="Logo do Instagram" />
            
          </div>
          <div className="top-side-right">
              <img className="image-midias" src={logoDiscord} alt="Logo do Discord" />
          </div>


        </div>
        <div className="side-footer-bottom">
          <span className='copyright'>&copy; Developed by rpxis </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer