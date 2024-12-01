import { lazy } from 'react';
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));

const routes = [
    // dashboard
    // {
    //     path: '/',
    //     element: <LoginBoxed />,
    // },
    {
        path: '/',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    // {
    //     path: '*',
    //     element: <Error />,
    //     layout: 'blank',
    // },
];

export { routes };
