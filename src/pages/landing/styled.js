import styled from 'styled-components';
import BACK from '../../assets/unnamed.jpg'
import Img from '../../assets/320453.jpg'
import Logo from '../../assets/chibs.jpg'
import P1 from '../../assets/shrek.jpg'



export const BackgroundOne = styled.div`
  background-color: #171A21;
  height: 300vh;
  width: 100%;
  display: flex;
  `;

export const Header = styled.div`
  background-image:url(${Logo});
  background-color:#d9d9d9;
  width: 10vw;
  display: flex;
  align-items: left;
  height: 140px;
`;

export const Title = styled.h1`
  padding-left: 20em;
  text-position: center;
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #171A21;
  `;
export const Desc = styled.h1`
  text-position: center;
  text-align: center;
  font-size: 2rem;
  font-family: poppins;
  color: #fff;
  `;

export const Content = styled.div`

  background-image: url(${P1});
  height: 600px;
  width: 500px;
  padding: 100px;
  display: flex;
  justify-content: center;
`;


export const HomeContainer = styled.div`
background-color: #171A21;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
padding: 0;
margin: 0;
list-style: none;
height:90vh;
flex-wrap:no-wrap;
`

export const HomeItem = styled.div`
background: url(${props => props.background}) no-repeat  
      center ;
      background-size:100% 100%;
  padding: 5px;
  width: 400px;
  height: 350px;
  margin-top: 10px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  
`;

export const Flex = styled.div`
display:flex;
height:90vh;
background-color:#171A21;
flex-direction:column;
align-items:center;
padding:20px;
`;

export const Footer = styled.div`
margin-top:20px;
text-alignt: center;
font-family:poppins;
font-size:16px;
color:#fff;
display:flex;
`;
export const FooterItem = styled.li`
list-style:none;
padding:0px 10px;
`;




export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2.5rem;
  width:371px;
  padding: 0 0.5rem;
  border-radius: .25rem 0 0 .25rem;
  font-size:16px;
  font-family:poppins;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 18px;
width: 271px;
height: 71px;
margin-top: 20px;
font-size: 22px;
text-align: center;
background: linear-gradient(90deg, #0546d6, #3f89fc);
text-decoration: none;
font-family: poppins;
color: #fff;
box-shadow: 0 15px 14px rgb(0 42 177/12%);
&:hover {
  background: linear-gradient(90deg, #dddddddf, #3388ff);
}
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;