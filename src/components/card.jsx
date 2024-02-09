import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
export default function card({data,reference}) {
  return (
   <>
        <motion.div drag dragConstraints={reference}
         whileDrag={{ scale: 1.1 }}
         dragElastic={0.1}
         dragTransition={{bounceStiffness:100,bounceDamping:30}}
          className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white py-8 px-10 overflow-hidden">
            <FaRegFileAlt/>
            <p className='text-xm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between m-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ?<IoClose /> :<FaDownload size='1em' color="#fff"/>}
                    </span>
                </div>
                {data.tag.isOpen&&
                <div className={`tag w-full h-10 py-4 ${data.tag.tagcolor==='blue'?"bg-blue-600":"bg-green-600"} flex items-center justify-center`} >
                    <h3 className=' text-sm  font-semibold '>{data.tag.tagTitle}</h3>
                </div>
                }
            </div>
        </motion.div>
    </>
  )
}
