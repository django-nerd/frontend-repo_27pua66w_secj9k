import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from './Placeholder'

export default function Academics() {
  return (
    <div>
      <Navbar />
      <Placeholder
        title="Academics"
        paragraphs={[
          'CBSE curriculum with a strong foundation in math, science, languages, and humanities.',
          'Innovative programs like robotics, coding, and design thinking.',
          'Experienced faculty and continuous professional development.',
        ]}
      />
      <Footer />
    </div>
  )
}
