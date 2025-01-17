import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import ChechOutForm from './ChechOutForm';

const Payment = () => {

    // Todo:add publishable key

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
  return (
    <div>
        <SectionTitle heading='Payment' subheading='Please pay to eat'></SectionTitle>
        <div>
            <Elements stripe={stripePromise}> 
                  <ChechOutForm></ChechOutForm>
            </Elements>
        </div>
    </div>
  )
}

export default Payment
