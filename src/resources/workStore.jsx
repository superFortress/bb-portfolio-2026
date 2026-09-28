// I M P O R T

// Assets
import LogoAgrico from '#assets/vector/logos/agrico.svg';
import LogoAmsterdam from '#assets/vector/logos/amsterdam.svg';
import LogoASNBank from '#assets/vector/logos/asn-bank.svg';
import LogoBooreiland from '#assets/vector/logos/booreiland.svg';
import LogoDataAI from '#assets/vector/logos/data-ai.svg';
import LogoErasmusMC from '#assets/vector/logos/erasmus-mc.svg';
import LogoEScienceCenter from '#assets/vector/logos/escience-center.svg';
import LogoFrieslandCampina from '#assets/vector/logos/friesland-campina.svg';
import LogoGemInc from '#assets/vector/logos/gem-inc.svg';
import LogoImagine from '#assets/vector/logos/imagine.svg';
import LogoJip from '#assets/vector/logos/jip.svg';
import LogoNoordkwartier from '#assets/vector/logos/noordkwartier.svg';
import LogoNovaCollege from '#assets/vector/logos/nova-college.svg';
import LogoPINK from '#assets/vector/logos/pink.svg';
import LogoPolygooi from '#assets/vector/logos/polygooi.svg';
import LogoRabobank from '#assets/vector/logos/rabobank.svg';
import LogoTalkThick from '#assets/vector/logos/talkthick.svg';
import LogoTavaana from '#assets/vector/logos/tavaana.svg';
import LogoVocol from '#assets/vector/logos/vocol.svg';
import LogoVORaad from '#assets/vector/logos/vo-raad.svg';

// Modules
import { lazy } from 'react';

// Resources
import role from './roleStore';

// E X P O R T

export default {

    agrico: {
        alias: <>Agrico</>,
        brand: LogoAgrico,
        brief: <>Showcasing how Agrico brings their potatoes from the lab to farms across the world.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/agrico/thumb.jpg',
        ratio: 1.75,
        roles: [role.illustrate, role.storyboard]
    },

    cloud: {
        alias: <>Cloud&shy;Teams</>,
        brand: LogoBooreiland,
        brief: <>The story of user and developer bonding over their shared love for apps.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/cloud/thumb.jpg',
        ratio: 1.25,
        roles: [role.animate, role.storyboard]
    },

    creamy: {
        alias: <>Creamy Creations</>,
        brand: LogoFrieslandCampina,
        brief: <>Finally, the Netherlands has their own cream liqueur &mdash; sourced from Dutch cows.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/creamy/thumb.jpg',
        ratio: 1.5,
        roles: [role.animate, role.storyboard]
    },

    eread: {
        alias: <>Erasmus MC EREAD</>,
        brand: LogoErasmusMC,
        brief: <>A visual overview of proposed renovations to the Netherland&rsquo;s largest medical institution.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/eread/thumb.jpg',
        ratio: 1.75,
        roles: [role.graphic, role.write]
    },

    escience: {
        alias: <>eScience Center</>,
        brand: LogoEScienceCenter,
        brief: <>Complex processes and technologies expressed in simple graphics.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/escience/thumb.jpg',
        ratio: 1.5,
        roles: [role.graphic]
    },

    guardian: {
        alias: <>Phone Guardian</>,
        brand: LogoDataAI,
        brief: <>A practical VPN explained explained to practical people.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/guardian/thumb.jpg',
        ratio: 1.5,
        roles: [role.animate, role.illustrate, role.storyboard]
    },

    hoofd: {
        alias: <>Hoofd&shy;kamer</>,
        brand: LogoVORaad,
        brief: <>Heads of secondary schools join heads and learn from one another.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/hoofd/thumb.jpg',
        ratio: 1.5,
        roles: [role.animate, role.storyboard]
    },

    jip: {
        alias: <>Jipchain</>,
        brand: LogoJip,
        brief: <>A novel idea: what if you entrusted your administration to a dog?</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/jip/thumb.jpg',
        ratio: 1.75,
        roles: [role.animate, role.illustrate, role.storyboard]
    },

    monster: {
        alias: <>Monsterpop</>,
        brand: LogoImagine,
        brief: <>The lead animation for Imagine&rsquo;s 2013 film festival.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/monster/thumb.jpg',
        ratio: 1.5,
        roles: [role.animate, role.direct, role.storyboard]
    },

    noord: {
        alias: <>Noord&shy;kracht</>,
        brand: LogoNoordkwartier,
        brief: <>It takes a community &mdash; teachers, parents, and students all work together.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/noord/thumb.jpg',
        ratio: 1.75,
        roles: [role.illustrate, role.storyboard]
    },

    nova: {
        alias: <>Onderwijs Logistiek</>,
        brand: LogoNovaCollege,
        brief: <>Let teachers manage their students, and let us manage their timetables.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-fairy)',
        image: '/assets/images/work/nova/thumb.jpg',
        ratio: 1.75,
        roles: [role.animate, role.illustrate, role.storyboard]
    },

    opa: {
        alias: <>My Polish Grandfather</>,
        brand: LogoPolygooi,
        brief: <>A heartfelt portrait of a Polish refugee, soldier, and grandfather.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/opa/thumb.jpg',
        ratio: 1.5,
        roles: [role.illustrate]
    },

    pink: {
        alias: <>PINK!</>,
        brand: LogoPINK,
        brief: <>Same green ideals. New PINK! logo.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/pink/thumb.jpg',
        ratio: 1.5,
        roles: [role.graphic]
    },

    pool: {
        alias: <>Gebiedspool</>,
        brand: LogoAmsterdam,
        brief: <>The glue that holds the different departments of Amsterdam&rsquo;s municipality together.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/pool/thumb.jpg',
        ratio: 1.5,
        roles: [role.animate, role.illustrate, role.storyboard]
    },

    rabo: {
        alias: <>Jaarverslag 2017</>,
        brand: LogoRabobank,
        brief: <>Looking back at Rabobank&rsquo;s successes and their plans moving forward.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/rabo/thumb.jpg',
        ratio: 1.75,
        roles: [role.animate, role.graphic, role.storyboard]
    },

    rinkel: {
        alias: <>Rinkel</>,
        brand: LogoASNBank,
        brief: <>A young squirrel teaches how to invest in both yourself and your environment.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/rinkel/thumb.jpg',
        ratio: 2,
        roles: [role.animate, role.concept, role.storyboard]
    },

    talkthick: {
        alias: <>TalkThick</>,
        brand: LogoTalkThick,
        brief: <>When your opinion is worth listening to, you should state it bold and proud.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/talkthick/thumb.jpg',
        ratio: 1.75,
        roles: [role.frontend, role.graphic]
    },

    traffic: {
        alias: <>Traffic</>,
        brand: LogoTavaana,
        brief: <>A young girl seeks happiness on the streets of Tehran.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-coral)',
        image: '/assets/images/work/traffic/thumb.jpg',
        ratio: 1.75,
        roles: [role.animate, role.illustrate, role.storyboard]
    },

    vocol: {
        alias: <>Vocol</>,
        brand: LogoVocol,
        brief: <>With so much of our speech filtered, set free your words with filters of your own.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/vocol/thumb.jpg',
        ratio: 1.5,
        roles: [role.frontend, role.graphic]
    },

    year: {
        alias: <>Year in Review</>,
        brand: LogoGemInc,
        brief: <>We witness the drama that only an Excel sheet can accurately express.</>,
        child: lazy(() => import('#components/pages/Portfolio')),
        color: 'var(--color-white)',
        image: '/assets/images/work/year/thumb.jpg',
        ratio: 1.25,
        roles: [role.animate, role.graphic]
    }

};