import '../css/Footer.css'

const INSTAGRAM_URL = 'https://www.instagram.com/the_yummi_bite?psln=MThyeTFmOG5mczE0Yg%3D%3D&utm_source=qrhttps://www.instagram.com/your_page_name/'
const SHOP_NAME = 'The Yummy Bite'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {SHOP_NAME} 🍭🍰🍬 Baked with love.
      </p>

      <a
        href={INSTAGRAM_URL}
        className="footer-instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
        <span>The_Yummy_Bite</span>
      </a>
    </footer>
  )
}