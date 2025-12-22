import React from 'react'

const Cards = () => {

  const cardData = [
    {
        id: 1,
        title: "Title 1",
        detail: "Description 1"
    },
    {
        id: 2,
        title: "Title 2",
        detail: "Description 2"
    },
    {
        id: 3,
        title: "Title 3",
        detail: "Description 3"
    },
    {
        id: 4,
        title: "Title 4",
        detail: "Description 4"
    }
  ]

  return (
    <>

        {cardData.map((c)=> (
        <div>
            <h1 className='bg-red-600'>{c.title}</h1>
            <p>{c.detail}</p>    
        </div> 
        ))}

    </>
  )
}

export default Cards
