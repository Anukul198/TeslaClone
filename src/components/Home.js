import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        leftBtnText = "Custom order"
        rightBtnText = "Exisiting inventory"
        backgroundImg = "img1.jpg"
      />
      <Section 
        title = "Model y"
        description = "Order Online for Touchless Delivery"
        leftBtnText = "Custom order"
        rightBtnText = "Exisiting inventory"
        backgroundImg = "model-y.jpg"
      />
      <Section
        title = "Model 3"
        description = "Order Online for Touchless Delivery"
        leftBtnText = "Custom order"
        rightBtnText = "Exisiting inventory"
        backgroundImg = "model-3.jpg"
      />
      <Section
        title = "Model X"
        description = "Order Online for Touchless Delivery"
        leftBtnText = "Custom order"
        rightBtnText = "Exisiting inventory"
        backgroundImg = "model-x.jpg"
      />
      <Section
        title = "Lowest Cost Solar Panels in America"
        description = "Money-back guarantee"
        leftBtnText = "Order now"
        rightBtnText = "learn more"
        backgroundImg = "solar-panel.jpg"
      />
      <Section
        title = "Solar for New Roofs"
        description = "Solar Roof Costs Less Than a New Roof plus Solar Panels"
        leftBtnText = "Order now"
        rightBtnText = "learn more"
        backgroundImg = "solar-roof.jpg"
      />
      <Section
        title = "Accessories"
        leftBtnText = "Shop NOW"
        backgroundImg = "accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
   height:100vh;
   `
