import SupportChat from '../components/SupportChat';

const shots = [
  {
    title: 'Editorial Portrait',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90'
  },
  {
    title: 'Monochrome Story',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90'
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90'
];

export default function Home(){
  return (
    <main className="studioPage">
      <section id="top" className="studioHero">
        <header className="studioNav studioWrap">
          <a className="brand" href="#top" aria-label="Xposure home">Xposure</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#videos">Videos</a>
            <a className="bookLink" href="#contact">Book Now</a>
          </nav>
          <button className="studioMenu" aria-label="Open menu"><span></span><span></span></button>
        </header>

        <div className="studioWrap heroLayout">
          <div className="heroIntro" id="about">
            <p className="miniLabel">XPOSURE STUDIO</p>
            <h1>Photography<br/>Studio</h1>
            <h3>Who We Are?</h3>
            <p className="heroBody">We create portraits, campaigns and visual stories with a deliberate eye for light, emotion and detail. Xposure is built for people and brands that want imagery with character.</p>
            <a className="goldButton" href="#portfolio">READ MORE ABOUT US</a>
            <div className="heroSocials" aria-label="Social links"><span>Be</span><span>f</span><span>in</span><span>𝕏</span></div>
          </div>

          <div className="heroPortrait" aria-label="Featured Xposure portrait">
            <div className="portraitHalo"></div>
            <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1500&q=92" alt="Editorial portrait photographed by Xposure"/>
            <div className="slideCount"><strong>01</strong><i></i><span>03</span></div>
            <button className="pauseButton" aria-label="Pause slideshow">Ⅱ</button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bestShots">
        <div className="contour contourOne"></div>
        <div className="studioWrap bestLayout">
          <div className="bestCopy">
            <p className="miniLabel">SELECTED WORK</p>
            <h2>Best Shots</h2>
            <p>We do not just take pictures. We preserve mood, movement and personality, creating photographs that feel as alive as the moments themselves.</p>
            <a className="goldButton" href="#gallery">BROWSE ALL IMAGES</a>
          </div>

          <div className="shotGrid">
            {shots.map((shot, i)=><figure className={`shotCard shot${i+1}`} key={shot.title}><img src={shot.img} alt={shot.title}/><figcaption>{shot.title}</figcaption></figure>)}
            <div className="shotControls"><button aria-label="Previous image">Prev</button><span></span><button aria-label="Next image">Next</button></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallerySection">
        <div className="studioWrap">
          <div className="galleryHeading"><p className="miniLabel">XPOSURE ARCHIVE</p><h2>Stories In Frame</h2></div>
          <div className="galleryGrid">{gallery.map((src,i)=><figure key={src}><img src={src} alt={`Xposure portfolio image ${i+1}`}/></figure>)}</div>
        </div>
      </section>

      <section id="videos" className="videoBand">
        <div className="studioWrap videoBandInner"><div><p className="miniLabel">MOTION</p><h2>Stillness is only half the story.</h2></div><a className="goldButton" href="#contact">VIEW VIDEO WORK</a></div>
      </section>

      <section id="contact" className="studioContact">
        <div className="studioWrap contactGrid">
          <div><p className="miniLabel">BOOK XPOSURE</p><h2>Have a frame in mind?</h2><p>Portraits, studio sessions, events, campaigns and film production.</p></div>
          <a className="goldButton" href="mailto:hello@xposure.studio">START A PROJECT</a>
        </div>
      </section>

      <footer className="studioFooter">
        <div className="studioWrap footerInner"><a className="brand footerBrand" href="#top">Xposure</a><span>© 2026 Xposure Studio</span><div><a href="#about">About</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></div></div>
      </footer>

      <SupportChat/>
    </main>
  );
}
