import React from 'react';
import styled from 'styled-components';

const Conteiner = styled.div``;

const Messagem = styled.p`

`;

const Icon = styled.img``;

const LoadingMessage = () => {

  return (
    <Conteiner>
      <Icon />
      <Messagem>
        Carregando a video
      </Messagem>
    </Conteiner>
  );
}

export default LoadingMessage;