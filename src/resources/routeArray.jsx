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

}, {

    alias: 'Project 1',
    child: lazy(() => import('#components/pages/Project1')),
    route: '/work/project1',
    style: '',

}, {

    alias: 'Project 2',
    child: lazy(() => import('#components/pages/Project2')),
    route: '/work/project2',
    style: '',

}, {

    alias: 'Project 3',
    child: lazy(() => import('#components/pages/Project3')),
    route: '/work/project3',
    style: '',

}];