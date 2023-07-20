import { Route, Routes } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Beer from '../pages/Beer/Beer';
import GlobalStyle from './globalStyled';
import NotFoundPage from '../pages/404';
import { Container } from './AppStyled';

function App() {
  return (
  <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
          <Route path="/beer" element={<Beer />} />
          <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Container>
  );
}

export default App;
