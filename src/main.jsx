import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';
import './styles/index.css'
import ItemsContextProvider from './store/ItemsContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ItemsContextProvider>
      <App />
      </ItemsContextProvider>
    </AuthProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
);
