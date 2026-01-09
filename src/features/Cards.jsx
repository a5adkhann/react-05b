import React from 'react'

const Cards = () => {

  const cardData = [
    {
      id: 1,
      title: "Title 1",
      detail: "Description 1",
      img_url: "./product1.jpg"
    },
    {
      id: 2,
      title: "Title 2",
      detail: "Description 2",
      img_url: "./product2.jpg"
    },
    {
      id: 3,
      title: "Title 3",
      detail: "Description 3",
      img_url: "./product3.jpg"
    },
    {
      id: 4,
      title: "Title 4",
      detail: "Description 4",
      img_url: "./product4.jpg"
    }
  ]

  return (
    <>

      <div className='grid md:grid-cols-4 grid-cols-1 gap-4 place-items-center py-20'>
        {cardData.map((c) => (
          <div className='border border-gray-300 shadow-lg w-[250px]'>
            <div id='product-banner'>
              <img src={c.img_url} className='w-[100%]' alt="" />
            </div>
            <div id="product-content" className='p-3'>
              <h1 className='font-bold'>{c.title}</h1>
              <p className='text-sm'>{c.detail}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Cards
