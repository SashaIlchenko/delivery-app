import styled from "@emotion/styled";

export const Item = styled.li`
padding-bottom:36px;
width: 380px;
list-style: none;
background-image: linear-gradient(to bottom, #008080
0%, #008080 69%, #E0FFFF 100%);
 box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);
 border-radius: 21px;`


export const Wrapper = styled.div`
margin-bottom: 16px;
padding: 20px;
width:340px;
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),
inset 0 3px 3px 0 rgba(251, 248, 255, 0.06),
inset 0 -2px 3px 0 rgba(174, 123, 227, 0.25);
 `

export const Photo = styled.img`
width:200px;
height:150px;
border-radius:16px;
margin-left: auto;
margin-right:auto;
border:8px solid #EBD8FF;
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),
inset 0 3px 3px 0 rgba(251, 248, 255, 0.06),
inset 0 -2px 3px 0 rgba(174, 123, 227, 0.25); 
`
export const FoodInfo = styled.p`
margin-bottom:16px;
text-align: center;
text-transform: uppercase;
font-size: 20px;
line-height:1.2;
color:#EBD8FF;
`

export const OrderBtn = styled.button`
margin-bottom: 10px;
width: 100px;
margin-left: auto;
margin-right: auto;
color: #373737;
background-color: #EBD8FF;
border-radius: 10.31px;
&:focus, &:hover {
  background-color: #008080;
    cursor: pointer;
     color: #fff;
};
 &.active {
    background-color: #5CD3A8;
  }
`