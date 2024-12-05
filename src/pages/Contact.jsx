import Footer from "../components/Footer";
import Contactpic from '../assets/images/contact.jpeg';

export default function Contact() {
  return (
    <div className="font-primary h-screen flex flex-col items-center">
        <h1 className="text-center font-primaryBold text-6xl pt-4">Contact</h1>
        <p className="text-center text-2xl pt-8">This will be updated with more contact methods, for now <a href="mailto:vikashpatel.d0414@gmail.com" className="bg-blue-700 text-white px-2 hover:rounded transition-all">email me!</a> will catch up🚀</p>
        <img src={Contactpic} alt="contactPic" className='h-1/2 pt-10' />
        <Footer/>
    </div>
  )
}
