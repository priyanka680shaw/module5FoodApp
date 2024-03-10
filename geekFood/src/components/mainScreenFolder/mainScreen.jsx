import './mainScreen.css'
import Navbar from '../navbarFolder/navbar';
import About from '../aboutFolder/about';
import Testimonial from '../testimonialFolder/testimonial';
import Footer from '../footerFolder/footer';
import QuoteScreen from '../quote/quoteMainScreen';
import ResturentCard from '../Resturents/ResturentCard';
import ResturentScreenDisplay from '../Resturents/ResturentScreenDisplay';
function MainScreen(){
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                {/* <div className="backgroundImage">
                    <Navbar/>
                </div> 
                    <About/> */}
                    {/* <Testimonial/> */}
                      
                     {/* <QuoteScreen/> */}
                     
                     <ResturentScreenDisplay/>

            </main>
           
            <footer>
                <Footer/>
            </footer>
          
        </>
    );
}
 export default MainScreen;