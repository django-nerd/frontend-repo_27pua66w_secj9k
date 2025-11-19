import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from './Placeholder'

export default function Research() {
  return (
    <div>
      <Navbar />
      <Placeholder
        title="Research & Innovation"
        paragraphs={[
          'Discover innovation initiatives like our science exhibition and student research projects.',
          'Collaborations that inspire creativity and problem-solving.',
        ]}
      />
      <Footer />
    </div>
  )
}
