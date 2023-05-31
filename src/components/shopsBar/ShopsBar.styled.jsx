import styled from "@emotion/styled";


export const BtnWrapper = styled.div`
display: flex;
justify-content: center;
gap:20px;
flex-wrap: wrap;`

export const ShopBtn = styled.button`
margin-bottom: 10px;
width: 200px;
color: #373737;
background-color: #EBD8FF;
border-radius: 10.31px;
&:focus, &:hover {
  background-color: #008080;
    cursor: pointer;
     color: #fff;
}
 &.active {
    background-color: #008080;
    cursor: pointer;
    color: #fff;
  }` 