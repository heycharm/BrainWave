import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import PricingList from './PricingList'
import {LeftLine, RightLine} from './design/Pricing'
import Heading from './Heading'

const Pricing = ({className,title, text, tag}) => {
  return (
   <Section className="overflow-hidden" id="pricing">
<div className='container relative z-2'>
<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
<img src={smallSphere} className='relative z-1' 
width={255} height={255} alt="Sphere" />

</div>
<div className='absolute top-1/2 left1/2 w-[60rem] translate'>
<img src={stars} className='w-full' width={950} height={400} alt="stars" />
</div>
<Heading tag="Get started with Brainwave" 
title="Pay Once, Use Forever" />
<div className='relative'>
<PricingList />
<LeftLine/>
<RightLine />
</div>
</div>

   </Section>
  )
}

export default Pricing