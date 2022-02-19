import React, { useEffect, useRef } from 'react'
import moment from 'moment';

const TableBody = (props) => {
    const {loading, testimonialList} = props
    const target = useRef(null)

    useEffect(() => {
        target.current.scrollTop = 0;
    }, [loading])
  return (
    <div ref={target}  className={`min-h-[320px] max-h-[640px] ${loading ? "overflow-y-hidden" : "overflow-y-auto"} relative`}>
        <div>
            {testimonialList.map(item => (
                <a href={`/#${item.id}`} key={item.id} className='flex items-center justify-between h-16 hover:bg-form-grey'>
                    <img src={item.track.icon_url} alt="track" title={item.track.title} className='mx-6 w-7 h-8 object-contain' />
                    <div className='flex items-center'>
                        <img src={item.mentor.avatar_url} alt={item.mentor.handle} className='h-10 w-10 object-contain rounded-full mr-4' />
                        <div>
                            <h2 className='font-semibold text-[#130B43]'>{item.mentor.handle}</h2>
                            <p className='text-lable-secondary' >{item.exercise.title}</p>
                        </div>
                    </div>
                    <p className='flex-1 text-center px-24'>{item.content.split(" ").splice(0, 13).join(" ")}{item.content.length > 13 && "..."}</p>
                    <p>{moment(item.created_at).startOf('hour').fromNow()}</p>
                    <img src="https://i.postimg.cc/d38j3M4S/image.png" alt="arrow right" className='w-8 h-8 ml-10 mr-4' />
                </a>
            ))}
        </div>
        {loading && 
            <div className='absolute z-20 bg-[#FBFCFEF2] h-[100%] w-[100%] flex items-center justify-center top-0'>
                <img src="https://i.postimg.cc/k4gV00bd/image.png" alt="loading" className='w-16 h-16 animate-spin' />
            </div>
        }
    </div>
  )
}

export default TableBody