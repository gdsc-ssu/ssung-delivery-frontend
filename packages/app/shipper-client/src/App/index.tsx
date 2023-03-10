import { useState } from 'react'
import { BodyContainer, Spacer, Text } from '@common/ssung-ui'
import Header from './App.header'
import DashBox from './App.dashBox'
import ShippingList from './App.shippingList'

function App() {
  return (
    <BodyContainer>
      <Spacer height="3rem" />
      <Header />

      <Spacer height="1rem" />
      <DashBox />

      <Spacer height="3rem" />
      <ShippingList />
    </BodyContainer>
  )
}

export default App
