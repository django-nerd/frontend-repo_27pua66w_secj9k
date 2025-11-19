import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from './Placeholder'

export default function About() {
  return (
    <div>
      <Navbar />
      <Placeholder
        title="About Mysore International School"
        paragraphs={[
          'Our story, mission, and values guide everything we do. We are committed to academic excellence and character development.',
          'Our leadership and faculty bring decades of experience and a passion for teaching.',
          'We believe in building a community of curious, confident, and compassionate learners.',
        ]}
      />
      <Footer />
    </div>
  )
}
