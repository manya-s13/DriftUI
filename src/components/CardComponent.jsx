import React from 'react'
import { ChartNoAxesCombined, TrendingUp, ChartPie, Bot, LayoutDashboard, Target } from 'lucide-react'

function CardComponent() {

    const cards = [
        {
            icon : <ChartNoAxesCombined  className='text-purple-500 w-10 h-10 mb-2' />,
            title: "AI-Driven Marketing",
            desc: "Leverage AI to enhance your marketing startegies, targeting the right audience",
        },
        {
            icon : <LayoutDashboard className='text-purple-500 w-10 h-10 mb-2' />,
            title: "User-Friendly Dashboard",
            desc: "Optimizations with single Click and manage everything at one place",
        },
        {
            icon: <TrendingUp className='text-purple-500  w-10 h-10 mb-2' />,
            title: "Data Analytics & Business",
            desc: "Gain insights from your data to drive informed decisions and future proof",
        },
        {
            icon : <ChartPie className='text-purple-500 w-10 h-10 mb-2' />,
            title: "Performance Tracking",
            desc: "Monitor key metrics with real-time dashboards that provide clear, actionable insights",
        },
        {
            icon : <Bot  className='text-purple-500 w-10 h-10 mb-2'/>,
            title: "AI Powered Workflow",
            desc: "Streamline day-to-day operations by automating repetitive tasks",
        },
        {
            icon : <Target className='text-purple-500  w-10 h-10 mb-2' />,
            title: "SEO Goal Setting",
            desc: "Helps you set and achieve SEO goals with guided assistence",
        }
    ]

  return (
    <div className='mt-40' >
    <h1 className='text-white text-5xl text-center'>Solutions for Accelerated</h1>
    <h1 className='text-white text-5xl text-center'>Business Growth</h1>
    
    <h4 className='text-gray-400 text-xl text-center mt-4 mb-8' >Harness the Power of AI to Optimize every facet of your business</h4>

    <div className='grid grid-cols-1 md:grid-cols-3 mt-5 px-24 gap-4' >

        
        {cards.map((card, i)=>(
            <div className='p-10 border border-zinc-800 rounded-xl flex flex-col items-start gap-2' >
            <div className=''>{card.icon}</div>
            <h3 className='text-2xl text-white font-semibold' >{card.title}</h3>
            <p className='text-md text-gray-500' >{card.desc}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default CardComponent