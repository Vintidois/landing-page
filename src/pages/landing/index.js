import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import * as S from './styled';
//import { useHistory } from 'react-router-dom';
import P1 from '../../assets/shrek.jpg'
function Landing() {

  const [email, setEmail] = useState("");
  const [listaEmail, setListaEmail] = useState([]);
  const valor = 2;

  function handleSubmit() {
    setListaEmail([...listaEmail, email])

  }
  useEffect(() => {
    localStorage.setItem('emails', JSON.stringify(listaEmail));
  }, [listaEmail])

  return (
    <>
      <S.Header>

        <S.Title>
          INSTRUMENTOS MUSICAIS EM PROMOÇÃO!!!
        </S.Title>

      </S.Header>


      <S.Flex>
        <S.HomeItem background={P1}>
        </S.HomeItem>
        <S.Desc>Encomende já o seu!</S.Desc>

        <S.Input placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)}></S.Input>
        <S.Button onClick={handleSubmit}> Inscreva-se aqui</S.Button>
        <S.Footer>
          <S.FooterItem>Copyright</S.FooterItem>

          <S.FooterItem><a href="https://www.linkedin.com/in/vitor-guimar%C3%A3es-860884101/">Linkedin</a></S.FooterItem>
          <S.FooterItem><a href="https://github.com/Vintidois">GitHub</a></S.FooterItem>
        </S.Footer>

      </S.Flex>
    </>
  )

}

export default Landing
