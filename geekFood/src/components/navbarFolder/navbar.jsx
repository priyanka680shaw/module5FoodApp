// import '../component.css';
import './navbar.css';
import logo from'./logo.svg';
import Button from '../bottonFolder/button';
function Navbar(){
    return(
        <>
           <nav>
                <div className='mainnavContainer'>
                    <div className='innernavContainer'>
                        <div className='logoContainer'>
                            <figure>
                                <img  src= {logo} alt='logo'></img>
                            </figure>
                            <p className='logoName'>GeekFoods</p> 
                            {/* <h2 className='logoName' style={{"color" : "blue"}}>GeekFoods</h2>  */}
                        </div> 
                        <div className='menulist'>
                            <ul>
                                <li ><a href='#' style={{"color" : "blue"}}>Home</a></li>
                                <li> <a href='#'>Quote</a></li>
                                <li> <a href='#'>Resturants</a></li>
                                <li> <a href='#'>Foods</a></li>
                                <li> <a href='#'>Contcts</a></li>
                            </ul>
                        </div>
                        <div className='button'>
                           <Button borderRadius= {8} bgColor = "blue">Get started</Button>
                        </div>
                    </div>
                </div>
           </nav>
        </>
    );
}

export default Navbar;