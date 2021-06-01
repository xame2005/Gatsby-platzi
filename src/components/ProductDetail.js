import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"
import SEO from "./seo"
import Stars from "./Stars"
import {
  Tag,
  SizeButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"

export default function ProductDetail({
  unit_amount,
  id,
  product: { name, metadata },
}) {
  const formatprice = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const addToCart = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ unit_amount, name, metadata, quantity: qty, id })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatprice}</b>
        <Stars />
        {metadata.wear && <h3>Color: Azul</h3>}
        {<small>{metadata.description}</small>}

        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <Button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</Button>
          <input type="text" disabled value={qty}></input>
          <Button onClick={() => setQty(qty + 1)}>+</Button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
