import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from './Placeholder'

export default function News() {
  return (
    <div>
      <Navbar />
      <Placeholder
        title="News & Events"
        paragraphs={[
          'Read the latest school news, explore our event calendar, and media features.',
        ]}
      />
      <Footer />
    </div>
  )
}
