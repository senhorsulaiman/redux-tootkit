import React from 'react'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Model = () => {
    const dispatch=useDispatch();
  return (
    <aside className='modal-container'>
        <div className='modal'>

            <h4>

                remove all items from shopping card
            </h4>
            <div className='btn-container'>

                <button className='btn confirm-btn'  
                    onClick={()=>{

                        dispatch(clearCart());
                        dispatch(closeModal())
                    }}
                
                >
                    confirm
                </button>
                <button className='btn clear-btn'
                
                onClick={()=>dispatch(closeModal())}
                >
                   cancel
                </button>

            </div>

        </div>

       
    </aside>
  )
}

export default Model
