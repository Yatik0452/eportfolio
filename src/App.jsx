import { useState } from 'react'
import Navbar from './components/Sidebar'
import Lightbox from './components/Lightbox'
import Landing from './sections/Landing'
import Resume from './sections/Resume'
import Reflection from './sections/Reflection'
import CoverLetter from './sections/CoverLetter'

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Landing />
        <Resume onImgClick={setLightboxSrc} />
        <Reflection />
        <CoverLetter />
        <footer>
          <p>Yatik Juneja · ePortfolio 2026</p>
          <p>
            <a href="mailto:Yatik.Juneja0452@gmail.com">Yatik.Juneja0452@gmail.com</a>
            {' · '}
            <a href="https://linkedin.com/in/yatik-juneja">LinkedIn</a>
          </p>
        </footer>
      </main>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  )
}
