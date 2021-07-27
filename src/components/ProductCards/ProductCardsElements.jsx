import styled from "styled-components";;


export const CardContainer = styled.div`
width:100vw;
min-height:100vh;
padding:5rem calc((100vw - 1300px));
background:#FFF;
color:black;`

export const CardWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin: 0 auto;
`

export const Card = styled.div`
margin:0 2rem;
line-height:2;
width:300px;`

export const CardImg = styled.img`
height:300px;
min-width:300px;
max-width:100px;
box-shadow: black;

&:hover{
    transition:0.2s ease-in-out;
    transform : scale(1.05);
    cursor:pointer;

}`

export const CardHeading = styled.h1`
font-size: 12px;
text-align:center;
margin-bottom:5rem;`

export const CardTitle = styled.div`
font-weight:300px;
font-size:1.5rem;`


export const CardInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;`

export const CardDesc = styled.p`
margin-bottom:1rem;

`


export const CardButton = styled.button`
font-size:12px;
padding:1rem 4rem;
border:none;
background:#01BF71;
color:black;
transition:0.2 ease-out;

&:hover{
    background: #01BF71;
    transition:0.2s ease-in-out;
    transform : scale(1.05);
    cursor:pointer;
    color:#fff
}
;
`

