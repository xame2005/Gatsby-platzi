import React from "react"
import { StyledJumbo } from "../styles/components"
import { Image } from "./"

export default function Jumbo({ description }) {
  return (
    <>
      <StyledJumbo>
        <div>
          <h2>Bienvenido a un e-commerce creado en Gatsby</h2>
          <small>{description}</small>
        </div>
        <Image name="icon" />
      </StyledJumbo>
    </>
  )
}
