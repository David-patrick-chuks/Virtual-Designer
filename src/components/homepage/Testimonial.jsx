import React from 'react'
import { DataBase } from '../../assets/data/DataBase'
import { BsStarFill } from 'react-icons/bs'

export const Testimonial = () => {
    return (

        <div className='font-EpilogueRegular mt-14 lg:mt-24'>
            <div>
                {DataBase.map(db => (
                    <div className=' px-10'>
                        <h1 className=' font-EpilogueMedium text-center mb-10  font-bold text-3xl'>{db.nameTest}</h1>
                        {db.nameTest == "Testimonial" && <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-3 gap-x-3  lg:gap-y-6 lg:gap-x-4 mb-10'>
                            {db.Post.map(cm => (
                                <div className='flex flex-col rounded-md bg-[#F3F3F3] justify-between py-5 px-9 h-[220px] lg:h-[280px] hover:shadow-md hover:shadow-slate-200 hover:rounded-md'>
                                    <h1 className='text-xs lg:text-lg font-bold'>{cm.comment}</h1>
                                    <div className='flex w-full gap-3 items-start'>
                                        <img src={cm.commentImag} className=' object-contain ' />
                                        <div>
                                            <span className='flex gap-1 mb-1'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
                                            <h1 className='font-bold  text-[17px] lg:text-base '>{cm.commentName}</h1>
                                            <h1 className='leading-4 font-thin text-xs'>Google</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}

                    </div>


                ))}
            </div>

        </div>
    )
}
