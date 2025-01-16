import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

const ChechOutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit =  (e) =>{
            e.preventDefault()

            if(!stripe || !elements){
                return
            }

            const card = elements.getElement(CardElement)

            if(card ==null){
                return
            }
    }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style:{
                            base:{
                                fontSize:'16px',
                                color:'#424270',
                                '::placeholder':{
                                    color:'#aab7c4'
                                },
                            },
                            invalid:{
                                color:'#9e2146'
                            },
                        },
                    }}
                >

                </CardElement>
                <button type='submit' disabled={!stripe}>Pay</button>
            </form>
    </div>
  )
}

export default ChechOutForm
