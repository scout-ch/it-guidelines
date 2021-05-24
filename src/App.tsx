import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/NewProjectPage'
import FooterImage from './images/footer.svg'

const Footer = styled.footer`
  background-image: url(${FooterImage});
  background-repeat: repeat-x;
  height: 236px;

`

function App() {
  return <>
    <NewProjectPage></NewProjectPage>
    <Footer></Footer>
  </>
}

export default App;
