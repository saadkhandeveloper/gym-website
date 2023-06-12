import { useState } from "react"
import SectionHeader from "./SectionHeader"
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "../assets/data";
import Card from "../UI/Card";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";



const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const {name,quote, job, avatar} = testimonials[index];

const prevTestimonialHandler = () => {
    setIndex(prev => prev-  1);

    if (index <= 0) {
        setIndex(testimonials.length -1)
    }
}

const nextTestimonialHandler = () => {
    setIndex(prev => prev+1);
    if(index >= testimonials.length -1) {
        setIndex(0);
    }
}

  return (
   <section className="testimonials">
    <div className="container testimonial__container">
        <SectionHeader Icon={<RiDoubleQuotesL/>} title='Testimonial' className='testimonials__head'  />
        <Card className = 'testimonial'>
            <div className="testimonial__avatar">
                <img src={avatar} alt="" />
            </div>
            <p className="testimonial__qoute">{`" ${quote} "`}</p>
       <h5>{name}</h5>
<small className="testimonial__title">
    {job}
</small>
        </Card>
<div className="testimonials__btn-container">
<button className="testimonials__btn" onClick={prevTestimonialHandler}><BsFillArrowLeftCircleFill/></button>
<button className="testimonials__btn" onClick={nextTestimonialHandler}><BsFillArrowRightCircleFill/></button>

</div>

    </div>
   </section>
  )
}

export default Testimonial
