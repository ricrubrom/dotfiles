"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7704],{10786:(e,t,s)=>{s.r(t),s.d(t,{SKELETON_CARDS_COUNT:()=>It,SKELETON_SHELVES_COUNT:()=>Et,SKELETON_SHORTCUTS_COUNT:()=>_t,default:()=>wt});var n=s(59496),a=s(84875),r=s.n(a),o=s(74834),i=s(8949),c=s(99302),l=s(57014),u=s(89181),d=s(21612),m=s(60071),h=s(23608),p=s(55993),g=s(13596),x=s(57210),f=s(87137),j=s(56662),y=s(87615),v=s(93017),C=s(16918),S=s(25702),k=s(44577),b=s(39220),N=s(92729),_=s(74854),E=s(57528),I=s(34703);const P="view-homeShortcutsGrid-shortcuts",T="view-homeShortcutsGrid-grid",w="view-homeShortcutsGrid-shortcutLink",D="view-homeShortcutsGrid-shortcut",M="view-homeShortcutsGrid-draggable",B="view-homeShortcutsGrid-imageContainer",L="view-homeShortcutsGrid-imageWrapper",A="view-homeShortcutsGrid-image",O="view-homeShortcutsGrid-main",H="view-homeShortcutsGrid-nameWrapper",U="view-homeShortcutsGrid-name",F="EzRmGRncgnv1zFgF4dqE",J="bPmmKmSPLKMhtJSaUJRX",R="vpQWUBWS_lXRLZMRJT7w",q="GSv7K805J9Jw7LB9tn2A",W="view-homeShortcutsGrid-PlayButtonContainer",z="s9c9x_mJq197U2hBzGtV";var Y=s(4637);const Z=(0,n.memo)((function({item:e}){const t=(0,_._)(e.uri),s=e.duration_ms??0,{isPlaying:n,isActive:a}=(0,I.$o)(e.uri),[r]=(0,E.z)(1e4,(t=>t.item?.uri===e.uri)),o=e.resume_point?.resume_position_ms??0,i=n||a?r:o,c=Math.round(100/(s/i)),l=t===N.Om.YES,u=s&&i>0;return l||u?(0,Y.jsxs)("div",{className:R,children:[l?(0,Y.jsx)(k.E,{iconSize:16,semanticColor:"textSubdued"}):null,u?(0,Y.jsx)(b.k,{className:q,value:c,semanticColor:"essentialBase"}):null]}):null}));var $=s(13841),V=s(51005),G=s(72482),K=s(90378),Q=s(46356),X=s(17246),ee=s(92499),te=s(69849),se=s(6284),ne=s(95543);const ae=(0,n.memo)((function({images:e=[],fallbackIcon:t=x.U}){const s=(0,ne.X)(e);return(0,Y.jsx)("div",{className:B,children:(0,Y.jsx)("div",{className:L,children:(0,Y.jsx)(se.E,{className:A,src:s?.url,loading:"lazy",testid:"shortcut-image",children:(0,Y.jsx)(t,{"aria-hidden":!0})})})})}));var re=s(38941),oe=s(17946),ie=s(47570),ce=s(91608);const le=n.memo((function({index:e,item:t,fallbackIcon:s,showPlayButton:a,extraContent:o,playInsteadOfNavigating:i=!1,onContextMenu:c=(()=>{}),onTouchStart:l=(()=>{}),onTouchEnd:u=(()=>{})}){const d=(0,$.s0)(),m=(0,ie.o)(),{setColorFromUri:h,resetColor:p,clearColor:x}=(0,g.WQ)(),f=(0,Q.G3)(t.uri,t.release_date,t.resume_point?.resume_position_ms,t.resume_point?.fully_played),{spec:j,logger:y}=(0,ee.fU)(G.createDesktopShortcutsPlayNavCardEventFactory,{data:{position:e,uri:t.uri}}),{isPlaying:C,isActive:S,togglePlay:k}=(0,X.n)({uri:t.uri},{featureIdentifier:"home",referrerIdentifier:"home"}),b=(0,v.EC)(t.uri),N=(0,oe.k)({type:"link",uri:t.uri}),_=(0,n.useCallback)((()=>{m({targetUri:t.uri,intent:C?"pause":"play",type:"click"});const e=j.playButtonFactory();let s;s=C?e.hitPause({itemToBePaused:t.uri}):S?e.hitResume({itemToBeResumed:t.uri}):e.hitPlay({itemToBePlayed:t.uri});const n=y.logInteraction(s);k({loggingParams:n})}),[S,C,t.uri,y,m,j,k]),E=(0,n.useCallback)((()=>{m({targetUri:t.uri,intent:"navigate",type:"click"});const e=j.hitUiNavigate({destination:t.uri});y.logInteraction(e)}),[t.uri,y,m,j]),I=(0,n.useCallback)((()=>{if(i)return void _();let e;E(),b&&(e=b.toURLPath(!0));const t=N?(0,te.is)(e||""):e;t&&d(t)}),[i,E,b,N,_,d]),P=(0,n.useCallback)((()=>{h(t.uri)}),[t.uri,h]);(0,n.useEffect)((()=>()=>{x()}),[x]);const T=(0,ee.Wi)(j),B=(0,re.O)([t.uri],t.name);return(0,Y.jsx)("div",{ref:T,className:D,onContextMenu:c,onTouchStart:l,onTouchEnd:u,onMouseEnter:P,onMouseLeave:p,children:(0,Y.jsxs)("div",{className:M,draggable:!0,onDragStart:B,children:[(0,Y.jsx)(ae,{images:t.images,fallbackIcon:s}),(0,Y.jsxs)("div",{className:O,children:[(0,Y.jsxs)("div",{className:H,children:[(0,Y.jsxs)("div",{className:U,children:[f&&(0,Y.jsx)(Q.Rd,{className:J}),(0,Y.jsx)(ce.Link,{to:t.uri,onClick:E,title:t.name,children:(0,Y.jsx)(V.D,{as:"p",variant:"balladBold",className:F,children:t.name})})]}),o||null]}),a&&(0,Y.jsx)("div",{className:r()(W,{[z]:C}),children:(0,Y.jsx)(K.f,{isPlaying:C,onClick:_})})]}),(0,Y.jsx)("div",{onClick:I,className:w})]})})}));var ue=s(8327),de=s(34463),me=s(49502),he=s(94998),pe=s(66137);const ge=n.memo((function(e){return(0,v.zO)(e.item.uri)?(0,Y.jsx)(le,{...e,fallbackIcon:x.U,showPlayButton:e.showPlayButton}):(0,C.xn)(e.item.uri)?(0,Y.jsx)(S._,{menu:(0,Y.jsx)(C.XL,{}),children:(0,Y.jsx)(le,{...e,fallbackIcon:x.U,playInsteadOfNavigating:!0})}):(0,Y.jsx)(S._,{menu:(0,Y.jsx)(he.X,{uri:e.item.uri}),children:(0,Y.jsx)(le,{...e,fallbackIcon:x.U})})})),xe=n.memo((function(e){return(0,Y.jsx)(S._,{menu:(0,Y.jsx)(ue.Y,{uri:e.item.uri}),children:(0,Y.jsx)(le,{...e,fallbackIcon:f.c})})})),fe=n.memo((function(e){return(0,Y.jsx)(S._,{menu:(0,Y.jsx)(de.m,{uri:e.item.uri}),children:(0,Y.jsx)(le,{...e,fallbackIcon:j.a})})})),je=n.memo((function(e){return(0,Y.jsx)(S._,{menu:(0,Y.jsx)(pe.M,{uri:e.item.uri}),children:(0,Y.jsx)(le,{...e,fallbackIcon:y.J,showPlayButton:!1})})})),ye=n.memo((function(e){return e.item.podcast?(0,Y.jsx)(je,{index:e.index,shouldSetBackgroundColor:e.shouldSetBackgroundColor,item:e.item.podcast,showPlayButton:e.showPlayButton}):(0,Y.jsx)(S._,{menu:(0,Y.jsx)(me.k,{uri:e.item.uri}),children:(0,Y.jsx)(le,{...e,fallbackIcon:y.J,extraContent:(0,Y.jsx)(Z,{...e})})})}));var ve=s(91125),Ce=s(36364);const Se="J6UEDIqMSJhYlwGoeUZB",ke="ZjFf4lVC48DSryAjP9qB",be=n.memo((function(e){const t=(0,Ce.x)(),s={...e.item,...t};return(0,Y.jsx)(le,{...e,item:s,fallbackIcon:()=>(0,Y.jsx)("div",{className:Se,children:(0,Y.jsx)(ve.P,{iconSize:32,className:ke})})})}));var Ne=s(72484),_e=s(78475);const Ee=24,Ie=270,Pe=200,Te=600,we=3*Ie+2*Ee,De=80,Me=64,Be=16,Le=12;function Ae(e){if(null===e)return{cssProperties:{"--min-column-width":`${Ie}px`,"--item-height":`${De}px`,"--column-gap":`${Ee}px`,"--row-gap":`${Be}px`},showPlayButton:!0};const t=e.offsetWidth,s=t<Te?Pe:Ie;const n=Math.min(Math.floor((t+Ee)/(s+Ee)),3),a=t>=we?De:Me;return{cssProperties:{"--min-column-width":`${s}px`,"--item-height":`${a}px`,"--column-gap":`${Ee}px`,"--row-gap":`${a===Me?Le:Be}px`},showPlayButton:(t-(n-1)*Ee)/n>=Ie}}function Oe(){const e=(0,n.useRef)(null),[t,s]=(0,n.useState)(Ae(null)),a=(0,n.useCallback)((()=>{null!==e.current&&s(Ae(e.current))}),[]),r=(0,n.useCallback)((t=>{e.current=t,a()}),[a]);return(0,d.a)((()=>a())),[t,r]}const He=e=>{if(null!==e&&"object"==typeof e){const{type:t,name:s}=e;return t===p.p.YOUR_EPISODES&&"string"==typeof s}return!1},Ue=n.memo((function({title:e,tagline:t,items:s}){const{fetchMultipleColors:a}=(0,g.WQ)(),r=!(0,Ne.k)(),o=e??(()=>{const e=(new Date).getHours();let t=c.ag.get("home.evening");return e>=5&&e<12?t=c.ag.get("home.morning"):e>=12&&e<18&&(t=c.ag.get("home.afternoon")),t})(),[i,l]=Oe();return(0,n.useEffect)((()=>{const e=s?.map(g.lh)||[];a(e)}),[s,a]),r||!s?.length?null:(0,Y.jsxs)("section",{className:P,"aria-label":o,ref:l,children:[(0,Y.jsx)(_e.r,{title:o,titleVariant:"alto",tagline:t}),(0,Y.jsx)("div",{className:T,style:i.cssProperties,children:s.filter(((e,t)=>He(e)||!e.error)).filter(((e,t)=>t<6)).map(((e,t)=>{if(He(e))return(0,Y.jsx)(be,{index:t,item:e,showPlayButton:i.showPlayButton,shouldSetBackgroundColor:0===t},`${t}-${e.uri}`);const s=function(e){const t=((0,v.EC)(e)||{}).type;switch(t){case v.JM.ARTIST:return fe;case v.JM.ALBUM:case v.JM.COLLECTION_ALBUM:return xe;case v.JM.PLAYLIST:case v.JM.PLAYLIST_V2:return ge;case v.JM.SHOW:return je;case v.JM.EPISODE:return ye;case v.JM.COLLECTION:return ge;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),je}}(e.uri);return(0,Y.jsx)(s,{index:t,item:e,showPlayButton:!(0,m.T)(e.formatListAttributes)&&i.showPlayButton,shouldSetBackgroundColor:0===t},`${t}-${e.uri}`)}))})]})})),Fe=e=>(0,Y.jsx)(u.L,{onError:e=>{(0,h.vK)(e,"HomeShortcutsGrid")},children:(0,Y.jsx)(Ue,{...e})});var Je=s(18507),Re=s(47233);const qe="zUf7jtv9GPOKC1jYO5TO",We="T8QLel3PoQTgJUpGYj7Q",ze=(0,n.memo)((({isLoading:e})=>{const t=(0,Je.h)("shimmer");return(0,Y.jsx)("div",{className:B,children:(0,Y.jsx)("div",{ref:t,className:r()(L,{[We]:e})})})})),Ye=(0,n.memo)((({isLoading:e})=>(0,Y.jsx)("div",{className:r()(D,qe),"data-testid":"skeleton-shortcut",children:(0,Y.jsxs)("div",{className:M,children:[(0,Y.jsx)(ze,{isLoading:e}),(0,Y.jsx)("div",{className:O,children:(0,Y.jsx)(Re.C,{as:"p",variant:"balladBold",className:F,isLoading:e})})]})}))),Ze="v7dc5ekmeBiAYnLzV8oT",$e=(0,n.memo)((({shortcutCount:e})=>{const[t,s]=Oe();return(0,Y.jsxs)("section",{className:P,ref:s,children:[(0,Y.jsx)(Re.C,{as:"h2",variant:"alto",className:Ze,charCount:25,isLoading:!0}),(0,Y.jsx)("div",{className:T,style:t.cssProperties,children:[...new Array(e).keys()].slice(0,6).map(((e,t)=>(0,Y.jsx)(Ye,{isLoading:!0},t)))})]})}));var Ve=s(68368),Ge=s(35941),Ke=s(65022),Qe=s(46790),Xe=s(27445),et=s(46407),tt=s(71146),st=s(23085);const nt=JSON.parse('{"uri":"spotify:section:0JQ5DAVAaDNAlq7hOF3StH","data":{"__typename":"HomeYourDJSectionData","title":{"text":"Meet DJ"}},"sectionItems":{"items":[{"uri":"spotify:playlist:37i9dQZF1EYkqdzj48dyYq","content":{"__typename":"PlaylistResponseWrapper","data":{"__typename":"Playlist","uri":"spotify:playlist:37i9dQZF1EYkqdzj48dyYq","name":"DJ","images":{"items":[{"sources":[{"url":"https://lexicon-assets.spotifycdn.com/DJ-Beta-CoverArt-300.jpg","width":null,"height":null}],"extractedColors":{"colorDark":{"hex":"#0858B8","isFallback":false}}}]},"description":"All kinds of music, picked by your own AI DJ.","ownerV2":{"data":{"__typename":"User","name":"Spotify"}}}},"data":null}],"totalCount":1}}');var at=s(3893),rt=s(67852),ot=s(74027),it=s(79939),ct=s(58362),lt=s(78159),ut=s(11988);const dt=({spec:e,section:t,index:s})=>{const a=(0,o.W6)(at.tyH,{loadingValue:!1})?ct.N:lt.q;return(0,n.useMemo)((()=>t.sectionItems.items.some((e=>(0,ut.d)(e.content)))),[t.sectionItems])?(0,Y.jsx)(ee.Nh,{spec:e.shelvesFactory(),children:(0,Y.jsx)(a,{total:t.sectionItems.totalCount,seeAllUri:t.uri,pageId:t.uri,title:t.data.title?.text??"",index:s,id:t.uri,children:t.sectionItems.items.map(ut.x).filter((e=>!!e))})}):null};var mt=s(9273);const ht=({spec:e,section:t,index:s})=>(0,Y.jsx)(ee.Nh,{spec:e.shelvesFactory(),children:(0,Y.jsx)(mt.default,{title:t.data.title?.text??void 0,showAll:!1,index:s})});var pt=s(12932);const gt=({spec:e,greeting:t,section:s})=>(0,Y.jsx)(ee.Nh,{spec:e.shortcutsFactory(),children:(0,Y.jsx)(Fe,{items:s.sectionItems.items.map(pt.lh),title:t??void 0})});var xt=s(55541);const ft=({spec:e,greeting:t,section:s,index:n})=>{const a=(0,C._n)();switch(s.data?.__typename){case"HomeGenericSectionData":return(0,Y.jsx)(dt,{spec:e,section:(0,xt.f)(s,s.data),index:n});case"HomeShortsSectionData":return(0,Y.jsx)(gt,{spec:e,greeting:t,section:(0,xt.f)(s,s.data)});case"HomeRecentlyPlayedSectionData":return(0,Y.jsx)(ht,{spec:e,section:(0,xt.f)(s,s.data),index:n});case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case"HomeOnboardingSectionDataV2":return null;case"HomeYourDJSectionData":{if(!a)return null;const e=(0,xt.f)(s,s.data),{data:t,sectionItems:n}=e,r=n.items[0];if("PlaylistResponseWrapper"===r.content.__typename&&"Playlist"===r.content.data.__typename){const{data:e}=r.content;return(0,Y.jsx)(C.KE,{uri:C.rv,shelfTitle:t.title?.text??"",title:e.name,description:e.description??""})}return null}case"HomeFeatureActivationSectionDataV2":return(0,Y.jsx)(ot.ZP,{features:(0,ot.rJ)(s.sectionItems.items),showAll:!1,uri:s.uri});case"HomeFeatureActivationSectionData":case null:case void 0:return null;default:return(0,it._)(s.data),null}},jt=({spec:e,greeting:t,container:s})=>{const{spec:a,logger:r}=(0,ee.fU)(st.createDesktopHomeFeatureActivationShelfEventFactory,{}),i=((e,t)=>t?[e.sections.items[0],nt,...e.sections.items.slice(1)]:e.sections.items)(s,(0,o.W6)(at.iiT,{loadingValue:!1}));return(0,n.useEffect)((()=>{(0,rt.wW)()&&r.logImpression(a.impressionElementFactory().impression())}),[a,r]),(0,Y.jsx)(Y.Fragment,{children:i.map(((s,n)=>(0,Y.jsx)(ft,{spec:e,greeting:t,section:s,index:n},`${n}-${s.uri}`)))})};var yt=s(72367),vt=s(12765);const Ct=(0,n.memo)((({cardCount:e})=>(0,Y.jsx)(vt.X,{isLoading:!0,children:[...new Array(e).keys()].map(((e,t)=>(0,Y.jsx)(yt.A,{isLoading:!0},t)))})));var St=s(8667),kt=s(12725);const bt=()=>(0,o.W6)(at.Jw1)===at.pFI.ONHOME?(0,Y.jsx)(kt.w,{children:(0,Y.jsx)(St.M,{onSearch:!1})}):null;var Nt=s(5e3);const _t=6,Et=6,It=6,Pt=(0,n.memo)((({shortcutCount:e,shelfCount:t,cardCount:s})=>(0,Y.jsx)("section",{"data-testid":"home-page",children:(0,Y.jsx)("div",{className:Nt.Z.home,children:(0,Y.jsxs)("div",{className:r()(Nt.Z.content,"contentSpacing"),children:[(0,Y.jsx)($e,{shortcutCount:e}),[...new Array(t).keys()].map(((e,t)=>(0,Y.jsx)(Ct,{cardCount:s},t)))]})})}))),Tt=({spec:e})=>{(0,Ge.z)("home");const{data:t,error:s,loading:n}=(0,et.b3)({timeZone:(0,tt.L7)()},{cacheTime:tt.us,staleTime:tt.fS});if(n)return(0,Y.jsx)(Pt,{shortcutCount:_t,shelfCount:Et,cardCount:It});if(null!==s)return(0,Y.jsx)(Ve.h,{hasError:!0,errorMessage:c.ag.get("error.generic")});const a=t?.home;return"HomeResponsePayload"!==a?.__typename||0===a.sectionContainer.sections.totalCount||0===a.sectionContainer.sections.items.length?(0,Y.jsx)(Ve.h,{hasError:!0,errorMessage:c.ag.get("error.generic")}):(0,Y.jsx)("section",{"data-testid":"home-page",children:(0,Y.jsx)("div",{className:Nt.Z.home,children:(0,Y.jsx)("div",{className:r()(Nt.Z.content,"contentSpacing"),children:(0,Y.jsx)(jt,{spec:e,greeting:a.greeting?.text??null,container:a.sectionContainer})})})})},wt=()=>{const{spec:e}=(0,ee.fU)(i.createDesktopHomeEventFactory,{data:{identifier:"home",uri:"spotify:home"}}),t=(0,o.W6)(at.ygs),s=(0,Qe.S)(t),a=(0,oe.k)({type:"locale",uri:"home"});return(0,Y.jsx)(ee.Nh,{spec:e,children:(0,Y.jsxs)(Ke.q,{config:s,children:[(0,Y.jsx)(l.$,{children:(0,Xe.nW)({i18n:c.ag,shouldLocalize:a})}),(0,Y.jsx)(n.Suspense,{fallback:null,children:(0,Y.jsx)(bt,{})}),(0,Y.jsx)(Tt,{spec:e})]})})}},10894:(e,t,s)=>{s.d(t,{Pd:()=>o,Wm:()=>r,i9:()=>a});var n=s(99302);const a=["artists","albums","episodes","genres","playlists","podcasts","audiobooks","tracks","users","topResults","podcastAndEpisodes"],r={artists:()=>n.ag.get("search.title.artists"),albums:()=>n.ag.get("search.title.albums"),playlists:()=>n.ag.get("search.title.playlists"),podcasts:()=>n.ag.get("search.title.shows"),episodes:()=>n.ag.get("search.title.episodes"),audiobooks:()=>n.ag.get("search.title.audiobooks"),users:()=>n.ag.get("search.title.profiles"),genres:()=>n.ag.get("search.title.genres-and-moods"),tracks:()=>n.ag.get("search.title.tracks"),podcastAndEpisodes:()=>n.ag.get("search.title.podcast-and-shows"),topResults:()=>n.ag.get("search.row.top-results")},o=["artists","albums","playlists","podcasts","episodes","audiobooks","users","genres"]},8667:(e,t,s)=>{s.d(t,{M:()=>P});var n=s(59496),a=s(84875),r=s.n(a),o=s(55411),i=s(13841),c=s(85830),l=s(24768),u=s(51005),d=s(74675),m=s(53037),h=s(91543),p=s(93017),g=s(99302),x=s(42515),f=s(73652),j=s(92499),y=s(89778),v=s(37937);const C="main-topBar-searchBar",S="x-searchInput-searchInputSearchIcon",k="x-searchInput-searchInputInput",b="x-searchInput-searchInputOnSearch",N="x-searchInput-searchInputClearButton",_="x-searchInput-searchInputIconContainer",E="x-searchInput=searchInputClearIcon";var I=s(4637);const P=n.memo((function({isSearchChipsEnabled:e=!1,onSearch:t=!0,onClick:s}){const a=(0,i.TH)(),P=(0,i.s0)(),T=(0,n.useRef)(null),w=(0,n.useRef)(null),D=(0,o.I0)(),[{category:M,query:B},L]=(0,v.l)(),[A,O]=(0,n.useState)(B),H=!!M,U=(0,f.Mi)(),F=a.pathname.startsWith("/recent-searches"),J=H||F,{spec:R,logger:q}=(0,j.fU)(h.createDesktopSearchInputEventFactory,{}),W=(0,c.y1)(((t,s,n)=>{let a;if(n){const{interactionId:e}=q.logInteraction(n);a=e}e?L(t,M,!1,a):L(t,null,s,a),U.current&&(U.current.scrollTop=0)}),200),z=(0,n.useCallback)(((e=!1)=>{T.current!==document.activeElement&&(w.current=document.activeElement,T.current&&T.current.focus()),e&&T.current?.select()}),[]);(0,x.eY)(x.O4.SHOW_SEARCH,(()=>z(!0)));const Y=a.pathname.startsWith("/search");(0,n.useEffect)((()=>{!J&&t&&Y&&(e&&B||z())}),[B,z,a.key,t,Y,J,e]),(0,n.useEffect)((()=>{O(Y?B:"")}),[Y,B]);return(0,I.jsxs)("div",{className:r()(C,{[b]:!t}),children:[(0,I.jsx)("form",{onSubmit:e=>{e.preventDefault(),A&&q.logInteraction(R.keyStrokeSearch());const t=(0,p.EC)(A);if(t?.type===p.JM.AD){const e=(0,p.HB)(t.id);if(t.id===e)return;D((0,y.HI)(t.id))}else t?P(t.toURLPath(!0),{state:{preventMoveFocus:!0}}):A||P("/search",{state:{preventMoveFocus:!0}});A&&U.current?.querySelector("h1, h2, h3, h4")?.focus()},role:"search",children:(0,I.jsx)(u.D,{variant:"mesto",as:"input",style:{color:l.Snx},ref:T,className:r()(k),value:A,maxLength:800,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const t=e.currentTarget.value,s=R.keyStrokeChangeSearchQuery({searchQueryString:t});O(t),W(t,J,s)},onKeyDown:e=>{if("Escape"===e.key)if(A){const e=R.hitTextClear();O(""),W("",J,e)}else T.current&&T.current.blur(),w.current instanceof HTMLElement&&w.current.focus()},placeholder:t?g.ag.get("search.search-for-label"):g.ag.get("navbar.search"),onFocus:()=>{e||!J&&t||W(A,J,null)},"data-testid":"search-input",onClick:s})}),(0,I.jsxs)("div",{className:_,children:[(0,I.jsx)("span",{className:S,children:(0,I.jsx)(d.j,{className:E,"aria-hidden":!0,iconSize:16})}),A&&(0,I.jsx)("button",{className:N,onClick:()=>{T.current&&T.current.focus();const e=R.hitTextClear();O(""),W("",J,e)},"aria-label":g.ag.get("search.a11y.clear-input"),children:(0,I.jsx)(m.k,{className:E,iconSize:16})})]})]})}))},37937:(e,t,s)=>{s.d(t,{l:()=>i});var n=s(59496),a=s(13841),r=s(10894);const o=e=>r.i9.find((t=>t===e));function i(){const e=(0,a.s0)(),t=(0,a.bS)("/search/:query"),s=(0,a.bS)("/search/:query/:category"),r=(0,n.useCallback)((function(t,s,n,a){const r=a?{interactionId:a,preventMoveFocus:!0}:{preventMoveFocus:!0},o=["/search"];t&&(o.push(encodeURIComponent(t)),s&&o.push(s));const i=o.join("/");e(i,n?{state:r}:{state:r,replace:!0})}),[e]);return[{query:function(e){try{return decodeURIComponent(e)}catch{return e}}(t?.params.query??s?.params?.query??""),category:o(s?.params.category)},r]}},36364:(e,t,s)=>{s.d(t,{x:()=>n.x});var n=s(93546)}}]);
//# sourceMappingURL=home-v2.js.map