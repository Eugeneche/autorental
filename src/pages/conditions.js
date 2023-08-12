import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"

const Conditions = () => (
  <Layout>
    <Seo title="Podminky" />
    <div className={styles.contentContainer}>
      <div className={styles.gap}></div>
      <div className={styles.gap}></div>
      <h1>Car rental terms and conditions</h1>
      <h2>Welcome to our car rental service!</h2>
      <p>We're thrilled to offer you the opportunity to explore your destination with ease and comfort. Before you embark on your journey, here are the essential conditions you need to fulfill to rent a car:</p>

      <p><b>Valid Driver's License:</b> To rent a car, you must possess a valid driver's license that's recognized in the country where you'll be driving.</p>
      
      <p><b>Minimum Age Requirement:</b> Our rental vehicles are available to drivers who are at least 21 years old. However, specific age requirements may vary based on the vehicle category and location.</p>
      
      <p><b>Reservation and Booking:</b> Reserving a vehicle in advance is highly recommended to ensure availability. Online booking is quick and convenient, allowing you to choose your preferred vehicle and pickup location.</p>
      
      <p><b>Insurance Coverage:</b> While we offer insurance options, you may also be covered by your personal auto insurance or credit card. Verify coverage details before you pick up the rental.</p>

      <p><b>Rental Agreement:</b> Review and understand the rental agreement terms, including mileage limits, fuel policy, and return conditions. Ask our staff for clarification if you have any questions.</p>

      <p><b>Additional Drivers:</b> If you plan to share driving duties, additional drivers must meet the same age and license requirements. Additional fees may apply.</p>

      <p>By adhering to these conditions, you can have a smooth and enjoyable car rental experience. Feel free to contact our customer service team if you have any questions or require assistance. Safe travels!</p>
 
    </div>
  </Layout>
)
export const Head = () => <Seo title="Podminky půjčení auta" />
export default Conditions
