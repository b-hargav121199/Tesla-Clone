import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function section(props) {
    console.log(props);
    return (<Wrap bgImage={props.backgroungImg}>
        <Fade bottom>
        <ItemText>
            <h1>
                {props.title}
            </h1>
            <p>{props.description}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtntext}
                </LeftButton>
                {props.rightBtntext &&
                <RightButton>
                {props.rightBtntext}
                </RightButton>
                }
                
            </ButtonGroup>
        </Fade>
            <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>

    </Wrap>);
}



export default section;

const Wrap = styled.div`
z-index:10;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between; // vartical
align-items:center; // horizontal
background-image:${props=>`url('/images/${props.bgImage}')`};

`
const ItemText = styled.div`
padding-top:10vh;
text-align:center;
z-index:-1;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom:30px;
@media(max-width:768px)
{
    flex-direction:column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size:12px;
  cursor:pointer;
  margin:20px;

`
const RightButton = styled(LeftButton)`

background:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`

height:40px;
animation: animateDown  infinite 1.5s;
overflow-x:hidden;

`

const  Buttons=styled.div`

`