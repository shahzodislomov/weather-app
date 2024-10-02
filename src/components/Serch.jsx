import React from 'react'

export default function Serch({handleSearch, value, setVaue}) {
  return (
    <form className='absolute flex flex-col space-y-4 left-[50%] items-center mt-7 translate-x-[-50%]' onSubmit={handleSearch}>
      <input type="search" placeholder='Search city' className='px-2 py-1 border-none outline-none rounded' value={value} onChange={(e) => setVaue(e.target.value)}  />
    </form>
  )
}
