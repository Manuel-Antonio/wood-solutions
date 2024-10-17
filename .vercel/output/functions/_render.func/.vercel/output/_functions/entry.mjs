import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CmMOsyRW.mjs';
import { manifest } from './manifest_3fWv3Qbe.mjs';
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
    ["node_modules/.pnpm/astro@4.15.1_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "85ab107c-4c1e-4f0a-9779-5864651276d7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
