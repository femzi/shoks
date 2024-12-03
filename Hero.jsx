import {  Element,Link as Linkscroll } from "react-scroll";
import Button from './Button.jsx';
import React from 'react';
function Hero() {
    return(
<section className="relative border-2 border pt-60 pb40 max-lg:pt-52 max-lg:pb-36 max-md: pt-36 max-md: pb-32  ">

 <div className="container">
<div className="relative z-2 max-w-512 max-lg:max-w-380"></div>
<div className="text-p3 caption small-2 uppercase ">
BETTER PRICES 
</div>
<h1 className="mb-6 h1 tgext-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">Amazing Deals</h1>
<p className="max-w-440 mb-14 body-1 max-mb:mb-10 ">We bring amazing deals at XORA and prioritize our customers happiness and satisfaction   </p>
<Linkscroll to="features"  offset={-100} spy smooth   >
 
 <Button icon="/images/zap.svg">    </Button>
 
</Linkscroll>
 </div>
<div className="absolute -top-32 left-2/3   left-[calc(50%-400px)]w-[1230px] pointer-events-none hero-img_res">
<img src="/images/hero.png"className="size-1230 max-lg:h-auto hero-img_res" />
</div>
</section>
 
    );
}
export default Hero