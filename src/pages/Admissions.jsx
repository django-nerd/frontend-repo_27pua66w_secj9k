import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from './Placeholder'

export default function Admissions() {
  return (
    <div>
      <Navbar />
      <Placeholder
        title="Admissions"
        paragraphs={[
          'Learn about our application process, eligibility, and required documents.',
          'We welcome international students and provide assistance for admissions and onboarding.',
        ]}
      />
      <Footer />
    </div>
  )
}
