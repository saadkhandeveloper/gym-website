import { BsFillPatchQuestionFill } from "react-icons/bs"
import SectionHeader from "./SectionHeader"
import { faqs } from "../assets/data"
import FAQ from "./FAQ"


const FAQs = () => {
  return (
  <section className="faqs">
    <div className="container faqs__container">
        <SectionHeader Icon={<BsFillPatchQuestionFill />} title="FAQS" />
  <div className="faqs__wrapper">
    {
        faqs.map(({id, question, answer})=> {
            return (
<FAQ key={id} question={question} answer={answer}/>
            )
        })
    }
  </div>
    </div>
  </section>
  )
}

export default FAQs
