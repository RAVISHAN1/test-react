// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
// import './i18n';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Suspense>
            <Provider store={store}>
                <App />
                {/* <RouterProvider router={router} /> */}
            </Provider>
        </Suspense>
    </React.StrictMode>
);

