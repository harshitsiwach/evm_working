"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface images {
    src : String,
    alt : String,
    id: Number
}

const images = [
  { src: '/Team/7984686.jpg', alt: 'Description 1', id: 1 },
  { src: '/Team/7984686.jpg', alt: 'Description 2', id: 2},
  { src: '/Team/7984686.jpg', alt: 'Description 2', id: 3 },
  { src: '/Team/7984686.jpg', alt: 'Description 2', id: 4 },
  { src: '/Team/7984686.jpg', alt: 'Description 2', id: 5 },
];

const Gallery = () => {
  
  const [expandedImageId, setExpandedImageId] =  useState(images[0].id);

  const toggleExpand = (id) => {
    setExpandedImageId(expandedImageId === id ? null : id);
  };

  return (
    <div className='h-screen flex justify-center items-center gap-5'>
      {images.map((image) => (
        <div
          key={image.id}
          className={`h-[500px] w-[100px] ${expandedImageId === image.id ? 'w-[500px]' : 'w-[100px]'} ease-in-out duration-300 cursor-pointer bg-red-800`}
          onClick={() => toggleExpand(image.id)}
        >
          <Image
            className="object-cover h-full"
            src={image.src}
            alt={image.alt}
            height={500}
            width={500}
          />
          {expandedImageId === image.id && (
            <div className="opacity-0 hover:opacity-100 ml-5 ease-in-out duration-300 h-full relative overflow-hidden bottom-[450px]">
              Artist <br />
              HAZARD
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
