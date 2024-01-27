import './App.scss';
import { LanguageProvider } from './context/LanguageContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="app">
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </div>
  );
}

export default App;
