import { Route, Routes } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Beer from '../pages/Beer/Beer';
import GlobalStyle from './globalStyled';

function App() {
  return (
  <>
      <GlobalStyle />
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/beer" element={<Beer />} />
    </Routes>
  </>
  );
}

export default App;
