import React from 'react'
import {motion} from 'framer-motion'
import  {PricingCard}  from './PricingCard'

function Pricing() {

    const plans = [
        {
            title: 'Basic',
            price: 29,
            features: [
            'Basic layout presets',
            '2 Figma Imports per month',
            'Different Themes',
            'Preview your design in live browser'
    ]
        },
        {
            title: 'Basic',
            price: 79,
            features: [
            'Access to 50+ components & design templates',
            'Color system customizer',
            'Typography scale control',
            'Unlimited Figma imports',
            'Component versioning',
            'Responsive breakpoints editor',
            '5 project workspaces'
            ],
        isPopular: true
        },
        {
            title: 'Basic',
            price: 149,
            features: [
            'Unlimited components & templates',
            'Team collaboration',
            'GitHub & GitLab sync',
            'Design token management',
            'Brand kit creator',
            'AI assistant to refactor',
            'AI workflow'
            ]
        }
    ]

  return (
     <section id='price' className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5}}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-4">Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-zinc-300">
            Choose the right plan to meet your SEO needs and start optimizing today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-white">
          {plans.map((plan, index) => (
            <>
             <PricingCard
              key={index}
              {...plan}
              delay={index * 0.2}
            />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing