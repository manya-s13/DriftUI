import React from 'react'
import { motion } from 'framer-motion'
import Chart from './Chart'

function BentoGrid() {

    const cards = [
        {
            title: "SEO Goal Setting",
            desc: "Helps you set and achieve SEO goals with guided assistance.",
            span: "col-span-1 row span-1"
        },
        {
            title: "User-friendly dashboard",
            desc: "Perform complex SEO audits and optimizations with a single click.",
            value: "10.15%",
            growth: "+5.6%",
            span: "col-span-1 row-span-1",
        },
        {
            title: "Traffic",
            desc: "Visual insights into your site's Traffic.",
            growth: "+57.2%",
            chart: true,
            growth: "+45.23%",
            span: "col-span-1 row-span-1",
        },
        {
            title: "Visual reports",
            desc: "Visual insights into your site's performance.",
            value: "59.8K",
            growth: "+10.7%",
            chart: true,
            span: " col-span-1 md:col-span-2 row-span-1",
        },
        {
            title: "Visibility",
            desc: "Perform complex SEO audits and optimizations with a single click.",
            span: "col-span-1 row-span-1",
        }
    ]


  return (
    <div className='bg-black mt-10 px-20 py-2'>
    <h1 className='text-5xl text-purple-200 font-bold text-center' >Your All In One</h1>
    <h1 className='text-5xl text-purple-500 font-bold text-center' >Intelligence Hub</h1>
    <div className='bg-black grid grid-cols-1 md:grid-cols-3 gap-4 p-12' >

        

        {cards.map((card, i) => (
            <motion.div
            key={i}
            className={`bg-zinc-900 text-white p-8 rounded-2xl min-h-[220px] ${card.span}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{opacity:1 , y: 0}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            >
                <h3 className='text-xl font-semibold' >{card.title}</h3>
                <p className='text-md text-gray-400 mt-2' >{card.desc}</p>
                {card.value && (
                    <div>
                        <span className='mt-4 flex justify-between items-center' >{card.value}</span>
                        <span className='text-green-600 text-md' >{card.growth}</span>
                    </div>
                )}
                {card.chart && < Chart/>}
            </motion.div>
        ))}

    </div>
    </div>
  )
}

export default BentoGrid