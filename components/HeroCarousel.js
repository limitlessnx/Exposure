'use client';

import { useRef, useState } from 'react';

const slides = [
  {
    src: '/images/xposure-hero-monochrome-2026.jpeg',
    alt: 'Black-and-white Xposure studio portrait',
    category: 'Portrait / Editorial',
  },
];

const formatNumber = (value) => String(value).padStart(2, '0');

export default function HeroCarousel(){
  const [active,setActive]=useState(0);
  const touchStart=useRef(null);
  const total=slides.length;
  const canSlide=total>1;

  function move(direction){
    if(!canSlide)return;
    setActive(current=>(current+direction+total)%total);
  }

  function handleTouchEnd(event){
    if(!canSlide||touchStart.current===null)return;
    const distance=event.changedTouches[0].clientX-touchStart.current;
    if(Math.abs(distance)>42)move(distance<0?1:-1);
    touchStart.current=null;
  }

  return (
    <div className="heroPortrait heroCarousel" role="region" aria-roledescription="carousel" aria-label="Xposure featured photography" onTouchStart={event=>{touchStart.current=event.touches[0].clientX;}} onTouchEnd={handleTouchEnd}>
      <div className="portraitHalo"></div>
      <div className="heroPremiumRing" aria-hidden="true"></div>
      <div className="heroSlide" key={slides[active].src}>
        <img src={slides[active].src} alt={slides[active].alt} fetchPriority="high"/>
      </div>
      <div className="heroCategory">{slides[active].category}</div>
      <div className="heroFrameLabel" aria-label={`Slide ${active+1} of ${total}`}><strong>{formatNumber(active+1)}</strong><i></i><small>{formatNumber(total)}</small></div>
      <div className="heroCarouselRail">
        <span>{formatNumber(active+1)}</span>
        <div className="heroProgress" aria-hidden="true"><i style={{width:`${((active+1)/total)*100}%`}}></i></div>
        <span>{formatNumber(total)}</span>
        {canSlide&&<div className="heroCarouselActions"><button type="button" onClick={()=>move(-1)} aria-label="Previous image">←</button><button type="button" onClick={()=>move(1)} aria-label="Next image">→</button></div>}
      </div>
      <div className="imageCredit">SHOT BY XPOSURE</div>
    </div>
  );
}
