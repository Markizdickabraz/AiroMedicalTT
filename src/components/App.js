import { Route, Routes } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Beer from '../pages/Beer/Beer';
import GlobalStyle from './globalStyled';
import NotFoundPage from '../pages/404';

function App() {
  return (
  <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/beer" element={<Beer />} />
    </Routes>
  </>
  );
}

export default App;
