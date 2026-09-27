// I M P O R T

// Modules
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// E X P O R T

export default [{

    alias: 'Home',
    child: lazy(() => import('#components/pages/Home')),
    route: '/',
    style: ''

}, {

    alias: '',
    child: () => <Navigate to="/" replace />,
    route: '*',
    style: ''

}, {

    alias: 'Portfolio',
    child: lazy(() => import('#components/pages/Portfolio')),
    route: '/work',
    style: '',

}];