const services = [
  ['Portrait Photography','Portraits / Editorial','https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=88'],
  ['Events & Weddings','Moments / Celebration','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=88'],
  ['Commercial & Product','Campaigns / Brands','https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=88'],
  ['Real Estate Photography','Architecture / Space','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=88'],
  ['Film & Video Production','Motion / Storytelling','https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=88'],
];

const journal = [
  ['5 Lighting Tips Every Photographer Should Know','Tips','https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=88'],
  ['Behind The Scenes: Fashion Editorial Photoshoot','Behind The Scenes','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=88'],
  ['The Best Camera Settings For Cinematic Video','Gear','https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=88'],
  ['Building A Strong Brand Through Visual Storytelling','Business','https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=88'],
];

export default function Home(){
  return <main>
    <header className="nav wrap">
      <a className="brand" href="#top"><b>X</b>POSURE</a>
      <nav><a href="#top">HOME</a><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#work">PORTFOLIO</a><a href="#journal">JOURNAL</a><a href="#studio">STUDIO</a><a href="#contact">CONTACT</a></nav>
      <a className="outlineBtn" href="#contact">BOOK A SESSION <span>→</span></a>
    </header>

    <section id="top" className="hero">
      <div className="heroShade"></div>
      <div className="wrap heroInner">
        <div className="heroCopy">
          <p className="kicker">PHOTOGRAPHY / FILM / CREATIVE DIRECTION</p>
          <h1>Every Frame<br/>Leaves An<br/><em>Impression.</em></h1>
          <p className="intro">Xposure is a photography and visual production studio creating striking imagery for people, brands and unforgettable moments.</p>
          <div className="actions"><a href="#work" className="redBtn">EXPLORE OUR WORK <span>→</span></a><a href="#contact" className="outlineBtn">BOOK A SESSION <span>→</span></a></div>
          <div className="showreel"><button>▶</button><div><b>PLAY SHOWREEL</b><small>2:45 MIN</small></div></div>
        </div>
        <div className="heroPhoto"><img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1500&q=92" alt="Photographer in studio"/></div>
      </div>
    </section>

    <section id="about" className="about wrap sectionSplit">
      <div className="aboutPhoto"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90" alt="Xposure photographer"/><span className="roundPlay">▶</span></div>
      <div className="aboutText">
        <p className="kicker">ABOUT XPOSURE</p>
        <h2>We Don’t Just Capture<br/>Moments. We Shape How<br/>They’re Remembered.</h2>
        <p>We blend creativity, technical mastery, and storytelling to create visuals that connect, inspire and leave a lasting impression. From portraits to full-scale productions, we bring your vision to life.</p>
        <div className="stats"><div><b>8+</b><span>Years Creating</span></div><div><b>500+</b><span>Projects Delivered</span></div><div><b>300+</b><span>Clients</span></div><div><b>20K+</b><span>Images Produced</span></div></div>
      </div>
    </section>

    <section id="services" className="services wrap">
      {services.map(([title,tag,img])=><article className="service" key={title} style={{backgroundImage:`linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.78)),url(${img})`}}><div><small>{tag}</small><h3>{title}</h3></div><span>→</span></article>)}
    </section>

    <section id="work" className="work wrap">
      <div className="workIntro"><p className="kicker">FEATURED WORK</p><h2>Selected<br/>Xposures</h2><p>A collection of our favourite projects across photography and film.</p><a href="#contact">VIEW ALL PROJECTS →</a></div>
      <div className="mosaic">
        <img className="m1" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=88" alt="Fashion portrait"/>
        <img className="m2" src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=88" alt="Commercial automotive work"/>
        <img className="m3" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=88" alt="Portrait campaign"/>
        <img className="m4" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=88" alt="Wedding photography"/>
        <img className="m5" src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=88" alt="Product photography"/>
        <img className="m6" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=88" alt="Film production"/>
      </div>
    </section>

    <section id="studio" className="disciplines wrap">
      {[['01','Photography','Portraits, fashion, lifestyle, products, and brand campaigns captured with precision.'],['02','Film Production','Commercials, documentaries, music videos and cinematic storytelling that connects.'],['03','Creative Direction','Concept development, styling, visual strategy and art direction from idea to final frame.'],['04','Post Production','Professional editing, retouching, color grading and finishing that elevates every detail.']].map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
    </section>

    <section className="testimonial wrap sectionSplit">
      <div><p className="kicker">CLIENT STORIES</p><h2>Seen Through<br/>Their Eyes.</h2><blockquote>“Xposure completely understood the visual direction we wanted and delivered something beyond what we imagined.”</blockquote><div className="stars">★★★★★</div><b>Sarah Johnson</b><small>Brand Director, Lumière</small></div>
      <div className="testPhoto"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=88" alt="Client portrait"/></div>
    </section>

    <section id="journal" className="journal wrap">
      <div className="journalHead"><div><p className="kicker">THE XPOSURE JOURNAL</p><h2>Insights. Stories. Inspiration.</h2></div><a href="#">VIEW ALL ARTICLES →</a></div>
      <div className="journalGrid">{journal.map(([title,cat,img],i)=><article key={title}><img src={img} alt=""/><div><small>APR {15-i*3}, 2026 &nbsp;•&nbsp; {cat}</small><h3>{title}</h3></div></article>)}</div>
    </section>

    <section id="contact" className="cta">
      <div className="wrap ctaInner"><div><h2>Ready To Create Something<br/>Unforgettable?</h2><p>Let’s bring your vision to life.</p></div><a className="redBtn" href="mailto:hello@xposure.studio">BOOK YOUR SESSION <span>→</span></a></div>
    </section>

    <footer className="footer"><div className="wrap footerGrid"><div><a className="brand big" href="#top"><b>X</b>POSURE</a><p>A creative photography and film studio passionate about creating visuals that inspire and leave a lasting impression.</p><div className="socials"><span>◎</span><span>f</span><span>▶</span><span>v</span><span>♪</span></div></div><div><h4>Quick Links</h4><a href="#top">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div><div><h4>Services</h4><a>Photography</a><a>Film Production</a><a>Creative Direction</a><a>Post Production</a><a>Real Estate</a><a>Events & Weddings</a></div><div><h4>Studio</h4><p>123 Creative Way<br/>Lagos, Nigeria</p><a href="tel:+2348012345678">+234 801 234 5678</a><a href="mailto:hello@xposure.studio">hello@xposure.studio</a></div><div><h4>Newsletter</h4><p>Get the latest updates, offers and behind the scenes stories.</p><div className="newsletter"><input placeholder="Your email address"/><button>→</button></div></div></div><div className="copyright">© 2026 Xposure Studio. All Rights Reserved.</div></footer>
  </main>
}
