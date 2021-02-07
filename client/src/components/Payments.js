
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleCreditToken } from '../store/actions/actions';


 const Payments = (props) =>{

   const dispatch = useDispatch();

    // debugger; // to debug the file and values 

    return(

       <StripeCheckout 
       name='Emaily'
       description='$5 for 5 email credits'
       amount={500} // money amount in cents
       token={token => dispatch(handleCreditToken(token))}
       stripeKey={process.env.REACT_APP_STRIPE_KEY}
       >
          
          
                <i className='material-icons add-credit' >add_shopping_cart</i>
           
         
                
         
           </StripeCheckout>
           

    )
 }

 export default Payments;