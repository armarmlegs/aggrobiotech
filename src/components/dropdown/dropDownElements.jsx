import { Link } from 'react-router-dom';



import styled from 'styled-components';

export const Hello = styled.div`
color:red;
`;

export const DropdownContainer = styled.div`
width:200px;
position:absolute;
top:60px;
list-style:none;
text-align:start;
transition: 0.3s ease-in-out;
background:black;
  opacity: ${({ dropdown }) => (dropdown ? "100%" : "0")};
  top: ${({ dropdown }) => (dropdown ? "20" : "-100%")};

  
`










export const DropdownMenuLi = styled.div`
background: #FFF;
cursor:pointer;
display:flex;
flex-direction:column;


`;

export const dropDownMenuClicked =  styled.div`
display:none;`

export const DropdownLink = styled(Link)`
display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: space-between;
width:100%;
height:30px;
text-decoration:none;
padding:16px;
color:black;
&:hover{
    background:#01BF71;

}

`

