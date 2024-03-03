import './footer.css';
import logoJuice from './juicelogo.jpg';

function Footer(){
    return(
        <>
            <footer>
                <div className="footerContainer">
                    <div className="innerFooterContainer">
                        <div className="logocontainer">
                            <div className="logo">
                                <figure>
                                    <img src={logoJuice} alt='logo'></img>
                                </figure>
                            </div>
                            <div className="logoName">
                                <h1>Juice Bar</h1>
                            </div>
                        </div>
                        <br></br>
                        <div className="footerText">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                        </div>
                        <br></br>
                        <div className="menuBar">
                            <ul>
                                <li><a href=''>About</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><a href=''>History</a></li>
                                <li><a href=''>Services</a></li>
                                <li><a href=''>Projects</a></li>
                                <li><a href=''>Blogs</a></li>
                            </ul>
                        </div>
                        <br></br>
                        <div className="footerIcons">
                            <ul>
                            <li><a href=''>Face</a></li>
                                <li><a href=''>Insta</a></li>
                                <li><a href=''>Twiter</a></li>
                                <li><a href=''>Gib</a></li>
                                <li><a href=''>Worleb</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;