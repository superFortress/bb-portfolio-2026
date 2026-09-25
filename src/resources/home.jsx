// I M P O R T

// Modules
import metaGlobToObject from '#utils/filesystem/metaGlobToObject.js';

// S T A T I C

const shapeStore = metaGlobToObject(import.meta.glob(
    '/src/assets/vector/shape/*.svg',
    { eager: true }
));

const titleStore = {
    i: { key: 'i', src: 'titles-letter-i', width: 29, height: 137 },
    m: { key: 'm', src: 'titles-letter-m', width: 142, height: 101 },
    n: { key: 'n', src: 'titles-letter-n', width: 89, height: 101 },
    o: { key: 'o', src: 'titles-letter-o', width: 97, height: 104 },
    p: { key: 'p', src: 'titles-letter-p', width: 102, height: 128 },
    r: { key: 'r', src: 'titles-letter-r', width: 59, height: 101 },
    s: { key: 's', src: 'titles-letter-s', width: 87, height: 104 },
    t: { key: 't', src: 'titles-letter-t', width: 67, height: 127 },
    u: { key: 'u', src: 'titles-letter-u', width: 89, height: 101 },
    y: { key: 'y', src: 'titles-letter-y', width: 99, height: 134 },
    period: { key: 'period', src: 'titles-period', width: 33, height: 33 }
};

// E X P O R T

export const colorArray = [
    'var(--color-lemon)',
    'var(--color-azure)',
    'var(--color-royal)',
    'var(--color-fairy)'
];

export const shapeArray = Object.values(shapeStore);

export const titleArray = [
    { ...titleStore.p, group: 0x2, angle: 0, x: 16.8, y: 19 },
    { ...titleStore.u, group: 0x2, angle: 0, x: 30.2, y: 22.3 },
    { ...titleStore.t, group: 0x2, angle: 0, x: 41.5, y: 19.7 },
    { ...titleStore.y, group: 0x2, angle: 18, x: 59.1, y: 16.6 },
    { ...titleStore.o, group: 0x2, angle: 18, x: 71.4, y: 19.3 },
    { ...titleStore.u, group: 0x2, angle: 18, x: 83.7, y: 26.4 },
    { ...titleStore.r, group: 0x2, angle: 18, x: 94.5, y: 31.7 },
    { ...titleStore.s, group: 0x4, angle: -12, x: 5.6, y: 65.7 },
    { ...titleStore.t, group: 0x4, angle: -12, x: 15.6, y: 59.7 },
    { ...titleStore.o, group: 0x4, angle: -12, x: 26.8, y: 58.2 },
    { ...titleStore.r, group: 0x4, angle: -12, x: 37.7, y: 54 },
    { ...titleStore.y, group: 0x4, angle: -12, x: 49.1, y: 54 },
    { ...titleStore.i, group: 0x4, angle: 0, x: 62, y: 49.7 },
    { ...titleStore.n, group: 0x4, angle: 0, x: 71.4, y: 53.5 },
    { ...titleStore.m, group: 0x8, angle: 0, x: 31, y: 88.8 },
    { ...titleStore.o, group: 0x8, angle: 0, x: 47.4, y: 89.1 },
    { ...titleStore.t, group: 0x8, angle: 0, x: 58.3, y: 86.7 },
    { ...titleStore.i, group: 0x8, angle: 0, x: 66.1, y: 85.1 },
    { ...titleStore.o, group: 0x8, angle: 0, x: 75.4, y: 89.1 },
    { ...titleStore.n, group: 0x8, angle: 0, x: 88.7, y: 88.9 },
    { ...titleStore.period, group: 0x8, angle: 0, x: 97.9, y: 96.5 }
];