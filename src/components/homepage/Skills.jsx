import React from 'react'
import PinkShape from "../../assets/images/pink.png"
import PinkArrow from "../../assets/images/pink arrow.png"
import GreenShape from "../../assets/images/green.png"
import GreenArrow from "../../assets/images/green arrow.png"
import OrangeShape from "../../assets/images/orange.png"
import OrangeArrow from "../../assets/images/orange arrow.png"


export const Skills = () => {

  //skill card template
  const SkillCard  = ({ logo, arrow, title,arrStyle, desp }) => (
    <div className='font-EpilogueRegular gap-4 px-5 py-10 justify-center items-center flex flex-col text-center lg:w-[30%]'>
      <div className='relative '>
        <img src={arrow} className={arrStyle} />
        <img src={logo} />
      </div>
      <p className='font-bold text-xl'>{title}</p>
      <p>{desp}</p>
    </div>
  )

  return (
    <div className='lg:flex lg:flex-wrap justify-between items-center py-10 '>
            <SkillCard arrStyle=" absolute " arrow={PinkArrow} title="Product Design" logo={PinkShape} desp="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <SkillCard arrStyle=" absolute " arrow={OrangeArrow} title="Virtual Design" logo={OrangeShape} desp="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <SkillCard arrStyle=" absolute " arrow={GreenArrow} title="Art Direction" logo={GreenShape} desp="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />

    </div>
  )
}
