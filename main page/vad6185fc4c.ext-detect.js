!function(){"use strict";var e,t,n,i,o,a,r,s,l,c,d,u,m,p,f,h,v,w,b,g,y,O,_;function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i;i=n[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let C=e=>e&&"object"==typeof e&&e.constructor===Object,j=e=>C(e)&&Object.keys(e).length>0,S=e=>"string"==typeof e||e instanceof String,$=e=>"number"==typeof e&&Number.isFinite(e),D=e=>"function"==typeof e,P="dataLayer";function T(e){return[-1,1].includes(e)}globalThis[P]=globalThis[P]||[];let k={photo:"u-p-channels",video:"u-v-channels",story:"u-s-channels",pornstar:"u-c-channels"};(l||(l={})).ID={name:"UID",isEssential:!0},(c||(c={})).Retarget={name:"xhl",ttl:7,isEssential:!0},(d||(d={})).HidePWABanner={name:"hide_pwa_banner",ttl:30},(u||(u={})).searchMirrorsEnabled={name:"search_mirrors_enabled"},(m||(m={})).videoTitlesTranslation={name:"video_titles_translation",isEssential:!0},(e=p||(p={})).DevMain={name:"dev_main"},e.DevPort={name:"dev_port"},e.DevPrId={name:"dev_pr_id"},e.CountryCode={name:"COUNTRY_CODE"},(f||(f={})).XSubscribedChannels={name:"x_subscr_chn"},(t=h||(h={})).Retarget={name:"retarget_p",ttl:30,isEssential:!0},t.Seen={name:(null===(n=globalThis.initials)||void 0===n?void 0:n.popunderCookieName)||"popSeen"},(i=v||(v={})).Shown={name:"dyltv-shown",ttl:1,isEssential:!0},i.ShowCounter={name:`${i.Shown.name}-counter`,ttl:365},(o=w||(w={})).History={ttl:30,build:e=>x(E({},o.History),{name:`stats_h_v4_${e}`}),isEssential:!0},o.ClickData={name:"stats_cd",isEssential:!0},o.Uid={name:"stats_uid",isEssential:!0},(a=b||(b={})).AfterSignup={name:"after_signup_step"},a.AfterEmailVerified={name:"after_email_verify_step"},a.LoginOrigin={name:"login_origin"},(r=g||(g={})).ThumbSizePreference={name:"thumb_less",ttl:30,isEssential:!0,validate:T},r.VideoPreview={name:"video_preview",ttl:30,isEssential:!0,validate:T},(s=y||(y={})).Message={ttl:30,isEssential:!0,build:e=>x(E({},s.Message),{name:`pr-msg-${e}`})},s.MessageClosed={ttl:30,isEssential:!0,build:e=>x(E({},s.Message),{name:`pr-msg-closed-${e}`})},(O||(O={})).Filters={name:"x_notifications:filters",ttl:30};let M=e=>{if(!(e in k))throw Error("Cookie name is not allowed");return x(E({},M),{name:k[e]})};(_||(_={})).Filters={name:"x_news:filters:tpl3",ttl:30,isEssential:!0};let U={name:"settings",ttl:365,isEssential:!0},I=e=>x(E({},I),{name:`${e}-contest-announcement-hidden`}),N=e=>x(E({},N),{name:`x_${e}`}),R=e=>{if(!["ca-xhl","ca-xlivesex","ca-xhp","ca-xham"].includes(e))throw Error(`Cookie name ${e} is not allowed`);return x(E({},R),{name:e})},L=e=>x(E({},L),{name:"xhpremium",ttl:e,isEssential:!0});document.addEventListener("DOMContentLoaded",()=>{let e=function(){try{var e;let t,n;return JSON.parse(window.atob((t=(null==U?void 0:U.name)||U,(n=null===(e=globalThis.document)||void 0===e?void 0:e.cookie.match(RegExp(`(?:^|; )${t.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")}=([^;]*)`)))?decodeURIComponent(n[1]):void 0)))}catch(e){return{}}}(),t=void 0!==window.ethereum,n=void 0!==window.BinanceChain,i=void 0!==window.solana;if(e.extDetectedV2=t||n||i,e.expires=x(E({},e.expires),{extDetectedV2:Math.floor(new Date().getTime()/1e3)}),function(e,t,n={}){var i,o,a,r;if(!(null==e?void 0:e.name))throw Error("Cookie is undefined");if(D(null==e?void 0:e.validate)&&!(null==e?void 0:e.validate(t))&&-1!==n.expires)throw TypeError(`Invalid value "${t}" for cookie "${e.name}"`);let s={path:"/",domain:`.${null===(r=window)||void 0===r?void 0:null===(a=r.location)||void 0===a?void 0:null===(o=a.hostname)||void 0===o?void 0:null===(i=o.split)||void 0===i?void 0:i.call(o,".").slice(-2).join(".")}`,expires:7},l=null==e?void 0:e.name,c=E({},s,n),{expires:d}=c;if(!("expires"in n)&&"ttl"in e&&(d=e.ttl),0!==d){if(d instanceof Date)c.expires=d.toUTCString();else if($(d)){let e=new Date;e.setTime(e.getTime()+864e5*d),c.expires=e.toUTCString()}}((null==e?void 0:e.isEssential)||window.initials.acceptedCookies.nonEssential||!(d>0))&&(document.cookie=Object.keys(c).reduce((e,t)=>{let n=c[t],i=function(e){if(!S(e))throw TypeError("Input must be a string");return e.charAt(0).toLocaleUpperCase()+e.slice(1)}(t);return!1===n?e:!0===n?`${e}; ${i}`:`${e}; ${i}=${n}`},`${l}=${encodeURIComponent(t)}`))}(U,window.btoa(JSON.stringify(e))),e.extDetectedV2){let e=document.createElement("meta");e.name="keywords",e.content="80fps",document.getElementsByTagName("head")[0].appendChild(e),function(e,t=window[P]){t.length>0?t[0]=E({},t[0],e):function(e,t=window[P]){if(j(e))return t.push(E({},e))}(e,t)}({dimension72:[t?"metamask":null,i?"phantom":null,n?"binance":null].filter(e=>e).join("_")})}fetch(window.initials.urls.proxifiedStatsCollect,{method:"POST",headers:new Headers({"content-type":"application/json"}),credentials:"include",cache:"no-cache",body:JSON.stringify([{action:"write",key:"ext_detection",data:{ethereum:t,BinanceChain:n,solana:i}}])}).catch(e=>console.warn(e))})}();