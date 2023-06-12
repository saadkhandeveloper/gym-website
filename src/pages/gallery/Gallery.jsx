import './Gallery.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';


const Gallery = () => {
const galleryLength = 15;
const images = [];

for(let i = 1; i<= galleryLength; i++) {
  images.push(require(`../../images/gallery${i}.jpg`))
}


  return (
<>
<Header title='our Gallery' image={HeaderImage} >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, saepe. Laudantium mollitia explicabo molestiae blanditiis nihil fugit odio facilis quisquam at, ratione voluptatum animi placeat?
</Header>

<section className='gallery'>
  <div className="container gallery__container">
    {
      images.map((image,index) => {
        return <article key={index} >
<img src={image} alt={`Gallery Image ${index +1}`} />
        </article>
      })
    }
  </div>
</section>

</>
  )
}

export default Gallery
