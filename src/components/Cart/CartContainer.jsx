import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { StyledCart } from './styles/Cart.styled';


const CartContainer = ({ className }) => {

    const { cart, removeFromCart, totalCantProds, totalPrice, clearCart } = useContext(CartContext)


    return (
        <>
            {cart.length !== 0 ?
                <StyledCart className={className}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    totalCantProds={totalCantProds}
                    totalPrice={totalPrice}
                    clearCart={clearCart} />

                : <div className={`${className} frosted`}>
                    <h2>No hay productos en el carrito, por favor seleccione alguno.</h2>
                    <Link className='back' to={'/'}><div className='frosted'>Volver a productos</div></Link>
                </div>
            }
        </>
    )
}

export default CartContainer