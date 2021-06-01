import React from "react"
import Layout from "./src/components/Layout"
import { CartProvider } from "./src/context.js"
import { GlobalStyles } from "./src/styles/"

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
