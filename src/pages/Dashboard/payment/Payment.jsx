import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const Payment = () => {

    // Todo:add publishable key

    const stripePromise = loadStripe('')
  return (
    <div>
        <SectionTitle heading='Payment' subheading='Please pay to eat'></SectionTitle>
        <div>
            <Elements stripe={stripePromise}> 

            </Elements>
        </div>
    </div>
  )
}

export default Payment
