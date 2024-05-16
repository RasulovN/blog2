import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';
import { CookiesProvider } from 'react-cookie';
// _app.js
import { PrimeReactProvider } from 'primereact/api';
import './index.css';
import './components/css/styles.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import global_en from './translations/en/global.json'
import global_uz from './translations/uz/global.json'
import global_ru from './translations/ru/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    uz: {
      global: global_uz,
    },
    ru: {
      global: global_ru,
    },
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <PrimeReactProvider> 
          <App />
      </PrimeReactProvider>
          </CookiesProvider>
      </ThemeProvider>
    </Provider>
  </PersistGate>
  </I18nextProvider>
);
