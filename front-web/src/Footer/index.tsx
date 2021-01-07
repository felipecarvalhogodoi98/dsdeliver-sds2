import './styles.css'
import {ReactComponent as YouTubeLogo} from './Youtube.svg'
import {ReactComponent as LinkedinLogo} from './Linkedin.svg'
import {ReactComponent as InstagramLogo} from './Instagram.svg'

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeLogo/></a>
                <a href="https://www.linkedin.com/in/felipe-carvalho-godoi-164a05189" target="_new">
                    <LinkedinLogo/></a>
                <a href="https://www.instagram.com/felipecgodoi/?hl=pt-br" target="_new">
                    <InstagramLogo/></a>
            </div>
        </footer>
    )
}

export default Footer;