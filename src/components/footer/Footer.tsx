import './Footer.css'
import logo from '../../assets/img/logo.svg'
function footer() {
return(
     <footer>
        <div className="container footer_container">
            <img src={logo} alt=""/>
            <span>© 2026 Bolos do Jacquin. A excelência da patisserie francesa.</span>
            <nav>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
            </nav>
        </div>
    </footer>
)
}

export default footer