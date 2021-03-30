import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}