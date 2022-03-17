import './App.css';
import { LanguageProvider } from './Context/LanguageContext';
import { ThemeProvider } from './Context/ThemeContext';
import Form from './Form';
import NavBar from './NavBar';
import PageContent from './PageContent';

function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <PageContent>
        
          <NavBar />
          <Form />
       
     </PageContent>
     </LanguageProvider>
    </ThemeProvider>
    
  );
}

export default App;
