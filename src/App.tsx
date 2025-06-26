import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './components/Router';


export function App() {
  return (
    <Header />
    <ThemeProvider theme={defaultTheme}>
     <GlobalStyle />
     <BrowserRouter>
       <Router />
      </BrowserRouter>
     </ThemeProvider>
  );
}
