import React from 'react';
import styled from 'styled-components';
import Section from './section'
function Home ()
{
    return (<Container>
      <Section
      title="Model S"
      description="Order Online for Touchless Delivery"
      backgroungImg="model-s.jpg"
      leftBtntext="CUSTOM ORDER"
      rightBtntext="EXISTING INVENTORY"
      />

       <Section
       title="Model Y"
       description="Order Online for Touchless Delivery"
       backgroungImg="model-y.jpg"
       leftBtntext="CUSTOM ORDER"
       rightBtntext="EXISTING INVENTORY"
       />

      <Section
       title="Model 3"
       description="Order Online for Touchless Delivery"
       backgroungImg="model-3.jpg"
       leftBtntext="CUSTOM ORDER"
       rightBtntext="EXISTING INVENTORY"
      
      />

     
      <Section
      title="Solar Panels"
      description="Lowest Cost Solar Panels in America"
      backgroungImg="solar-panel.jpg"
      leftBtntext="CUSTOM ORDER"
      rightBtntext="EXISTING INVENTORY"
      />
       <Section
      title="Solar Roof"
      description="Produce Clean Energy From Your Roof"
      backgroungImg="solar-roof.jpg"
      leftBtntext="ORDER NOW"
      rightBtntext="LEARN MORE"
      />

<Section
      title="Accessories"
      description=""
      backgroungImg="accessories.jpg"
      leftBtntext="Shop Now"
      
      />

    </Container>);
}



export default Home;
const Container=styled.div`
    height:100vh;
    z-index:10;
`