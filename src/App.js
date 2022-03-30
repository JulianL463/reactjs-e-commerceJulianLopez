import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar.js';
import GlobalStyles from './components/styles/Global.styled.js';
import { StyledItemListContainer } from './components/styles/ItemListContainer.styled.js';

const theme = {
  colors: {
      main: 'white',
      primary: 'rgb(0,165,212)',
      primary: 'rgb(0,82,106)',
      secondary: 'rgb(65,65,67)',

      transparent: {
        main: 'rgba(255, 255, 255, 0.2)',
        lightblue: 'rgba(208, 247, 255, 0.2)',
        primary: 'rgb(0,165,212,0.5)',
        secondary: 'rgb(65,65,67,0.2)',
      }
  }
}

const user = {name:'Carlos', surname:'Perez', alias:' CarlosP_22'}

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <StyledItemListContainer user={user.alias} />
      </>
    </ThemeProvider>
  );
}

export default App;
