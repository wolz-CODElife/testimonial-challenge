import React from 'react'
const Pagination = (props) => {
  const {numPages, page, setPage} = props

  const handlePrev = () => {
    if(page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if(page < numPages) {
      setPage(page + 1)
    }
  }
  
  return (
    <div className='flex justify-between py-4 px-8 border-t-[1px] border-t-border-grey'>
        <button disabled={page > 1 ? false : true} className='disabled:bg-[#E0E0ED] border-[1px] border-border-grey text-lable-secondary w-28 h-10 flex items-center justify-around rounded-md' onClick={handlePrev}> <img src="https://i.postimg.cc/ry3fKvvF/image.png" alt="previous" className='w-3 h-3' /> Previous</button>
        <div>
          {numPages/numPages < numPages &&
            <button className={`py-2 px-4 hover:bg-form-grey mx-1 rounded-md border-[1px] border-border-grey ${page === numPages/numPages && "bg-border-grey hover:bg-border-grey"}`} onClick={() => setPage(numPages/numPages)}>{numPages/numPages}</button>
          }
          {numPages/numPages + 1 < numPages &&
            <button className={`py-2 px-4 hover:bg-form-grey mx-1 rounded-md border-[1px] border-border-grey ${page === numPages/numPages + 1 && "bg-border-grey hover:bg-border-grey"}`} onClick={() => setPage(numPages/numPages + 1)}>{numPages/numPages + 1}</button>
          }
          {numPages/numPages + 2 < numPages &&
            <button className={`py-2 px-4 hover:bg-form-grey mx-1 rounded-md border-[1px] border-border-grey ${page === numPages/numPages + 2 && "bg-border-grey hover:bg-border-grey"}`} onClick={() => setPage(numPages/numPages + 2)}>{numPages/numPages + 2}</button>
          }
          {numPages > 5 &&
            <>
              <span className='py-2 px-4'>...</span>
            {[numPages - 2, numPages - 1, numPages].map(item => (
              <button key={item} className={`py-2 px-4 hover:bg-form-grey mx-1 rounded-md border-[1px] border-border-grey ${page === item && "bg-border-grey"}`} onClick={() => setPage(item)}>{item}</button>
              ))}
            </>
          }
        </div>
        <button disabled={page < numPages ? false : true} className='disabled:bg-[#E0E0ED] border-[1px] border-border-grey text-lable-secondary w-20 h-10 flex items-center justify-around rounded-md' onClick={handleNext}>Next <img src="https://i.postimg.cc/qvXwDggz/image.png" alt="next" className='w-3 h-3' /></button>
    </div>
  )
}

export default Pagination