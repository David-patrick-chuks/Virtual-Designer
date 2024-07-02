import React from 'react'
import { DataBase } from '../../assets/data/DataBase'

export const Projects = () => {
    return (
        <div className='font-EpilogueRegular mt-10'>
            <div>
                {DataBase.map(db => (
                    <div className=' px-10'>
                        <h1 className='text-center mb-14 font-bold text-3xl'>{db.name}</h1>
                        {db.name == "Latest work" && <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-3  lg:gap-y-6 lg:gap-x-4 mb-10'>
                            {db.pj.map(bb => (
                                <div className=' hover:shadow-md hover:shadow-slate-100 hover:rounded-md'>
                                        <img src={bb.ProjectImage} className='w-full' />
                                        <h1 className='font-bold lg:mt-3 mt-2 text-[17px] lg:text-xl mb-1 lg:mb-2'>{bb.ProjectTitle}</h1>
                                        <h1 className='text-xs lg:text-base '>{bb.ProjectSubTitle}</h1>
                                </div> 
                            ))}
                        </div>}

                    </div>


                ))}
            </div>

        </div>
    )
}
