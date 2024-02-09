import React, { useRef, useState } from 'react'
import Card from './card'
export default function foreground() {
    const ref=useRef(null);
    const data=[
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagcolor:"green"},
    },
    {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Upload",tagcolor:"blue"},
    },
    {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagcolor:"green"},
    }
    ];
    // {desc,closeordownload,filesize,tagdetails}
    // useState();
  return (
    <>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>  
           {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
           ))} 
        </div>

    </>
  )
}
