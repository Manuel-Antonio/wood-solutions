import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DEVzR9UW.mjs';
import { manifest } from './manifest_ClpmpK9b.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/projects/_id_.astro.mjs');
const _page4 = () => import('./pages/projects.astro.mjs');
const _page5 = () => import('./pages/question.astro.mjs');
const _page6 = () => import('./pages/services.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/projects/[id].astro", _page3],
    ["src/pages/projects.astro", _page4],
    ["src/pages/question.astro", _page5],
    ["src/pages/services.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "05d4883e-a437-4141-831a-b3e0bfb638fa",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
