import React from 'react'
import styles from './style';
import { Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer} from './components';
import './index.css';

const App = () => {
  return (
    <div className=" w-full bg-gray-950 overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-gray-950 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-gray-950  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

      
    </div>
  )
}

export default App
