import './Contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md'; 
import {BsMessenger} from 'react-icons/bs'; 
import {IoLogoWhatsapp} from 'react-icons/io'; 

const Contact = () => {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}
     >
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, pariatur mollitia. Hic voluptatem dolores soluta aspernatur unde eum, totam deleniti repudiandae accusantium sed expedita!
     </Header>

     <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:saadkhan88249@gmail.com" target='_blank'><MdEmail/></a>

          <a href="https://m.me/saadi" target='_blank'><BsMessenger/></a>

          <a href="https://wa.me/+923112142100" target='_blank'><IoLogoWhatsapp/></a>
        </div>
      </div>
     </section>
    
    
    </>
  )
}

export default Contact
