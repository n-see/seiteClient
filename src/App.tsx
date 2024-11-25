// import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "./components/ui/accordion"
import NavbarComponent from './Components/Navbar';
import FooterComponent from './Components/Footer';
import './index.css';
import ContactForm from './Pages/ContactUs';
import ThankYouPage from './Pages/ThankYou';



const App = () => {
  return (
    <>
  <NavbarComponent/>
  <ContactForm/>
  {/* <ThankYouPage/> */}
  <FooterComponent/>

    </>
  )
}

export default App