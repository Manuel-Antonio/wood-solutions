import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BCe4KxbE.mjs';
import { e as decodeKey } from './chunks/astro/server_BfSrewWf.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/USER/Desktop/ASTRO%20PROJECTS/elegant-spaces/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.1_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"},{"type":"inline","content":".banner-skill[data-astro-cid-kh7btl4r]:after{content:\"\";position:absolute;top:0;left:0;z-index:-10;background-image:linear-gradient(to bottom,#fff,#fff0 30%),linear-gradient(to top,#fff,#fff0 30%),url(https://res.cloudinary.com/djsl4a5py/image/upload/v1725037409/MueblesProfesionales/adicional/fondo2_kouxek.svg);background-position:center;opacity:.1;width:100%;height:100%}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"}],"routeData":{"route":"/projects/[id]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/projects/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"}],"routeData":{"route":"/question","isIndex":false,"type":"page","pattern":"^\\/question\\/?$","segments":[[{"content":"question","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/question.astro","pathname":"/question","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"},{"type":"inline","content":".card-service[data-astro-cid-uhzbvkqe]:hover img[data-astro-cid-uhzbvkqe]{transform:scale(1.2) rotate(3deg)}.card-service[data-astro-cid-uhzbvkqe] img[data-astro-cid-uhzbvkqe]{transition:transform .3s ease}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.B2VjF6or.css"},{"type":"inline","content":".banner-hero[data-astro-cid-j7pv25f6]{position:absolute;width:100%;height:100%;overflow:hidden}.banner-hero[data-astro-cid-j7pv25f6]:before{content:\"\";position:absolute;top:0;left:0;z-index:-10;background-image:linear-gradient(to top,#fff0 70%,#fff),url(https://img.freepik.com/vector-gratis/puntos-semitono-circular-vector-fondo_1017-12226.jpg?w=826&t=st=1724524875~exp=1724525475~hmac=47461dbf3dc8c813e8cd8e9011f503715d238d617a1611f60cebe0a1fbf7bce9);background-size:100% auto;background-position:left top;background-repeat:no-repeat;transform:rotate(180deg);opacity:.1;width:100%;height:100%}.banner-started-project[data-astro-cid-j7pv25f6]:before{content:\"\";position:absolute;top:0;left:0;z-index:-10;background-image:linear-gradient(to bottom,#fff,#fff0 30%),linear-gradient(to top,#fff,#fff0 30%),url(https://res.cloudinary.com/djsl4a5py/image/upload/v1724610344/MueblesProfesionales/adicional/patron_1_ectj7l.svg);background-size:100% auto;background-position:center;opacity:.1;width:100%;height:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/projects/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/question.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/projects/[id]@_@astro":"pages/projects/_id_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/question@_@astro":"pages/question.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.1_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/node_modules/.pnpm/astro@4.15.1_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_3fWv3Qbe.mjs","C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/FormCard":"_astro/FormCard.CGiKl8HP.js","C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/Header":"_astro/Header.Cg60pOQx.js","@astrojs/preact/client.js":"_astro/client.CgN7HsXd.js","C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/ScrollToTop":"_astro/ScrollToTop.CFsSjWNw.js","C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/node_modules/.pnpm/@preact+signals@1.3.0_preact@10.23.2/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.Yf7BG63m.js","/astro/hoisted.js?q=0":"_astro/hoisted.CmkSwYHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.B2VjF6or.css","/favicon.svg","/_astro/client.CgN7HsXd.js","/_astro/FormCard.CGiKl8HP.js","/_astro/Header.Cg60pOQx.js","/_astro/hoisted.CmkSwYHY.js","/_astro/hooks.module.CXK6tdif.js","/_astro/jsxRuntime.module.5K3rFdWm.js","/_astro/preact.module.2HWAOvZb.js","/_astro/ScrollToTop.CFsSjWNw.js","/_astro/signals.module.Yf7BG63m.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Tyf6IYuIxvJFkUI3ma3O8UEbVohXTdYiPPiz7FRRi18=","experimentalEnvGetSecretEnabled":false});

export { manifest };
