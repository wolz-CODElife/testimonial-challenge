import React, { useEffect, useState } from 'react'
import { sortList, trackList } from '../data/tableHeader'


const TableHeader = (props) => {
    const { activeTrack, setActiveTrack, activeSort, setActiveSort, searchQuery, setSearchQuery, setPage, trackCounts
    } = props
    const [openTrack, setOpenTrack] = useState(false)
    const [openSort, setOpenSort] = useState(false)
    const [tracks, setTracks] = useState(null)
    const listOfTracks = tracks || trackList

    const url = `https://corsanytime.herokuapp.com/tracks`

    useEffect(() => {
         fetchTracks()
         //eslint-disable-next-line
    }, [])

    const fetchTracks = async () => {
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            setTracks([...trackList, ...data.tracks])
        })
    }
    let typingTimer
    let typingInterval = 2000

    const handleDoneTyping = (e) => {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(() => {
            setSearchQuery(e.target.value)
        }, typingInterval);
    }

    const handleTyping = () => {
        clearTimeout(typingTimer)
    }

  return (
    <div className='flex justify-between py-4 px-6 border-b-[1px] border-b-border-grey'>
        <div className='flex items-center flex-1'>
            <div className='relative'>
                <button className='flex items-center' onClick={() => setOpenTrack(!openTrack)}>
                    <img src={activeTrack.icon_url || "https://i.postimg.cc/XYzvKYLC/image.png"} alt="badge" className='h-11 w-11' />
                    <img src="https://i.postimg.cc/FKJd6Lnv/image.png" alt="arrow" className='h-[10px] w-3 ml-1' />
                </button>
                {openTrack &&
                    <div className='absolute top-[120%] z-30 w-[376px] max-h-[364px] overflow-y-auto p-2 rounded-lg bg-white shadow-[0px_4px_42px_rgba(79,114,205,0.15)]'>
                        {listOfTracks.map(item => 
                            trackCounts[item.slug] || item.title === "All" ? (    
                            <div key={item.title} onClick={() => {setActiveTrack(item); setPage(1)}} className={`flex items-center justify-around rounded-sm h-14 cursor-pointer ${activeTrack.title === item.title? "bg-form-grey": ""}`}>
                                <input type="radio" checked={activeTrack.title === item.title? true: false} disabled className="mx-6" />
                                <img src={item.icon_url} alt={item.title} className="w-9 h-11 object-contain mr-5" />
                                <p className='flex-1'>{item.title}</p>
                                <span className='rounded-full border-[1px] border-border-grey px-2 mx-6'>{trackCounts ? trackCounts[item.slug] : 0}</span>
                            </div>
                        ) : "")}
                    </div>                    
                }
            </div>
            <div className='w-[416px] h-12 flex items-center mx-6 px-5 bg-form-grey hover:bg-white hover:border-[1px] hover:border-border-grey hover:shadow-[0px_0px_5px_rgba(79,114,205,0.15)] rounded-md'>
                <img src="https://i.postimg.cc/qMPdL6ny/image.png" alt="search" className='w-6 h-6 mr-4' />
                <input type="text" placeholder='Filter by exercise title' defaultValue={searchQuery} onKeyDown={handleTyping} onKeyUp={handleDoneTyping} className='flex-1 bg-transparent border-none outline-none placeholder:text-lable-secondary' />
            </div>
        </div>
        <div className='relative'>
            <button className='flex items-center justify-between bg-form-grey px-5 rounded-md w-[348px] h-12' onClick={() => setOpenSort(!openSort)}>
                <p className='text-lable-secondary'>Sort by Most Recent</p>
                <img src="https://i.postimg.cc/FKJd6Lnv/image.png" alt="arrow" className=' h-4 w-5' />
            </button>
            {openSort &&
                <div className='absolute top-[120%] z-30 w-[376px] max-h-[364px] overflow-y-auto p-2 rounded-lg bg-white shadow-[0px_4px_42px_rgba(79,114,205,0.15)]'>
                    {sortList.map(item => (    
                        <div key={item} onClick={() => setActiveSort(item)} className={`flex items-center justify-around rounded-sm h-14 px-2 cursor-pointer ${activeSort === item? "bg-form-grey": ""}`}>
                            <p className='flex-1'>{item}</p>
                        </div>
                    ))}
                </div>                    
            }
        </div>
    </div>
  )
}

export default TableHeader