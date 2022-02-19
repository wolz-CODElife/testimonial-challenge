import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import TableBody from '../components/TableBody'
import TableHeader from '../components/TableHeader'
import { trackList } from '../data/tableHeader'

const Testimonials = () => {
    const [activeTrack, setActiveTrack] = useState(...trackList)
    const [testimonialList, setTestimonialList] = useState([])
    const [activeSort, setActiveSort] = useState("Newest First")
    const [searchQuery, setSearchQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [numPages, setNumPages] = useState(0)
    const [trackCounts, setTrackCounts] = useState()
    const [page, setPage] = useState(1)

    const url = `api/v2/hiring/testimonials?page=${page}${activeTrack.title.toLowerCase() !== "all" ? "&track="+activeTrack.slug.toLowerCase() : ""}${searchQuery ? "&exercise="+searchQuery : ""}${activeSort === "Newest First" ? "&order=newest_first" : "&order=oldest_first"}`

    useEffect(() => {
        setLoading(true)
    }, [url])
    
    useEffect(() => {
        setTimeout(fetchData, 1000);
    //eslint-disable-next-line    
    }, [loading])

    const fetchData = async () => {
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            const result = data.testimonials.results
            setTestimonialList(result)
            setNumPages(data.testimonials.pagination.total_pages);
            setTrackCounts(data.testimonials.track_counts);
            setLoading(false)
        })
    }


  return (
    <div className='shadow-[0px_4px_42px_rgba(79,114,205,0.15)] mx-8 mb-8 rounded-lg'>
    {/* TableHeader component begins here */}
    <TableHeader 
        activeTrack={activeTrack} setActiveTrack={setActiveTrack} 
        activeSort={activeSort} setActiveSort={setActiveSort}
        searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage}
        trackCounts={trackCounts}
    />
    {/* TableHeader component ends here */}
    
    {/* TableBody component begins here */}
    <TableBody loading={loading} testimonialList={testimonialList} />
    {/* TableBody component ends here */}
    
    {/* Pagination component begins here */}
    <Pagination numPages={numPages} page={page} setPage={setPage} />
    {/* Pagination component ends here */}   
    </div>
  )
}

export default Testimonials