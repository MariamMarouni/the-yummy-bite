import { Link } from 'react-router-dom'
import me from '../Assets/me.jpeg'
import '../css/About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-text">
        <h1>Our story</h1>
        <p>
          Hello my cupcakes 🧁, I'm Mariam, the baker behind "The Yummy Bite". I started baking at home for
          my family and friends, and every cake I made ended up at someone's celebration.
        </p>
        <p>
          Today I still bake every cake by hand, with the same care as the first one. Tell me
          what you are celebrating and I will make it taste like the occasion.
        </p>

        <Link to="/menu" className="about-btn">See my Sweets</Link>
      </div>

      <div className="about-image">
        <img src={me} alt="Mariam,The baker behind The yummy Bite"></img>
      </div>
    </div>
  )
}

export default About