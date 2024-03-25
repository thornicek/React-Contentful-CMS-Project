import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Sustainable fashion axe cronut, selfies 8-bit bitters vexillologist
            williamsburg. Heirloom lo-fi ethical normcore cronut YOLO man bun
            whatever fixie meditation four dollar toast Brooklyn pop-up synth
            raw denim. Pickled yuccie cray, kickstarter freegan letterpress
            synth mlkshk chartreuse pour-over offal shabby chic. Neutra mustache
            echo park kogi, biodiesel VHS kombucha 8-bit ennui food truck
            mukbang air plant synth iceland artisan.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
      </div>
    </section>
  )
}
export default Hero