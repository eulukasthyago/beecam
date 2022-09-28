import styled from 'styled-components';

interface Props{
  show: boolean;
}

export const WebCam = styled.video<Props>`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0);
  opacity: ${({ show }) => show ? 1 : 0};
`;