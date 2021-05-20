import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Gracias por tu compra, disfruta tus artículos!</p>
        <p>Te esperamos de vuelta pronto!!!</p>
        <span rol="img" aria-label="emoji">
          🎈
        </span>
        <Link to="/">
          <Button>Volver al inicio</Button>
        </Link>
      </Purchase>
    </div>
  )
}
