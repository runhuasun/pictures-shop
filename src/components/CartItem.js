import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"
import PropTypes from "prop-types"

function CartItem({item}) {

  const [hovered, ref] = useHover()
  const {removeFromCart} = useContext(Context)
  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="cart-item">
      <i 
          className={iconClassName} 
          onClick={() => removeFromCart(item.id)}
          ref={ref}
      >
      </i>
      <img src={item.url} width="130px" alt="item-img-missing" />
      <p>$5.99</p>
    </div>
  )
}

CartItem.PropTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem