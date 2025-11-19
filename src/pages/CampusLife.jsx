import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from './Placeholder'

export default function CampusLife() {
  return (
    <div>
      <Navbar />
      <Placeholder
        title="Campus Life"
        paragraphs={[
          'Explore our modern facilities including labs, sports complex, and library.',
          'Join student activities, clubs, and annual events that build community and leadership.',
          'Browse our galleries to see student life in action.',
        ]}
      />
      <Footer />
    </div>
  )
}
