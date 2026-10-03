// I M P O R T

// Modules
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Resources
import workStore from './workStore';

// E X P O R T

export default [{

    alias: 'Home',
    child: lazy(() => import('#components/pages/Home')),
    route: '/'

}, {

    alias: '',
    child: () => <Navigate to="/" replace />,
    route: '*'

}, {

    alias: 'Portfolio',
    child: lazy(() => import('#components/pages/Portfolio')),
    route: '/work'

},

...Object.entries(workStore).map(([key, work]) => ({
    alias: work.alias.props.children,
    child: work.child,
    route: `/work/${key}`
}))

];