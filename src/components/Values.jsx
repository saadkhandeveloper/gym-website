import { GiCutDiamond } from 'react-icons/gi'
import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import { values } from '../assets/data'
import Card from '../UI/Card'
// 2:25
const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
         <div className="values__left">
<div className="values__image">
    <img src={Image} alt="Values Image" />
</div>
         </div>
         <div className="values__right">
<SectionHeader Icon={<GiCutDiamond />} title="value" />
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem adipisci, possimus minima repellat quas cum, nulla eaque quidem, excepturi et necessitatibus porro fugiat accusamus aliquid. Pariatur dicta non temporibus fugit!
         </p>
         <div className="values__wrapper">
            {
                values.map(({id, icon, title,  desc})=> {
                    return <Card key={id} className='values__value'>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{desc}</small>
                    </Card>
                })
            }
         </div>
         </div>
        </div>
    </section>
  )
}

export default Values
