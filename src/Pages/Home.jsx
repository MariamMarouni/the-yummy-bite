import { Link } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="home">
          <span className="sweet sweet-one" aria-hidden="true">🍓</span>
          <span className="sweet sweet-two" aria-hidden="true">🧁</span>
          <span className="sweet sweet-three" aria-hidden="true">💕</span>

          <div className="home-text">
            <h1>The Perfect Baked Cake Every Day</h1>
            <p>Every cake we bake is a little celebration: handcrafted, heartfelt, and made to make moments sweeter.</p>
            <Link to="/menu" className="btn-explore">Explore Our Sweets</Link>
          </div>
        </div>
      </section>

      <section className="welcome">
        <h2>Welcome To Our Store</h2>
        <p>Here, the scent of fresh bread and sweet pastries fills the air, and everything is made with care and love. Whether you want a morning treat or something special to share, we are happy to have you with us.</p>
      </section>
    </div>
  )
}

export default Home