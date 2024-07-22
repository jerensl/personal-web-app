"use strict";(self.webpackChunkwww_jerenslensun_com=self.webpackChunkwww_jerenslensun_com||[]).push([[594],{"./src/components/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/firebase/messaging/dist/esm/index.esm.js"),esm_index_esm=__webpack_require__("./node_modules/firebase/app/dist/esm/index.esm.js");const firebaseApp_Init=async()=>(0,esm_index_esm.Wp)({apiKey:"AIzaSyAlgD74xXwIcDLkdju_zeB9ntqCiGN5xko",authDomain:"jerens-app.firebaseapp.com",projectId:"jerens-app",storageBucket:"jerens-app.appspot.com",messagingSenderId:"1009489116025",appId:"1:1009489116025:web:c64b30012bbc6a7f274da8",measurementId:"G-SNRQJJZH3L"});var index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/useMutation.mjs"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");const subscribeNotification=async({token})=>await fetch("https://api.jerenslensun.com/api/notification/subscribe",{method:"POST",mode:"cors",body:JSON.stringify({tokenID:token,updatedAt:(new Date).getTime()})}).then((res=>res.json())),unsubscribeNotification=async({token})=>await fetch("https://api.jerenslensun.com/api/notification/unsubscribe",{method:"POST",mode:"cors",body:JSON.stringify({tokenID:token,updatedAt:(new Date).getTime()})}).then((res=>res.json()));function useNotification({token}){return(0,useQuery.I)(["notification"],(()=>(async({token})=>fetch("https://api.jerenslensun.com/api/notification/status",{method:"POST",mode:"cors",body:JSON.stringify({tokenID:token})}).then((res=>res.json())))({token})),{enabled:!!token,staleTime:1e3,retry:!1,refetchOnMount:!1,refetchOnWindowFocus:!1})}var react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),constant_images=__webpack_require__("./src/constant/images.ts"),IconToggle=__webpack_require__("./src/components/buttons/IconToggle.tsx");const Notifications=({initStatus=!1})=>{const[token,setToken]=react.useState(""),[status,setStatus]=react.useState(initStatus),{data,isLoading,isError}=useNotification({token}),subsMutation=function useSubs(){const queryClient=(0,QueryClientProvider.jE)();return(0,useMutation.n)(subscribeNotification,{onMutate:async status=>{await queryClient.cancelQueries(["notification"]);const prevStatus=queryClient.getQueryData(["notification"]);return queryClient.setQueryData(["notification"],(()=>[Notification])),{prevStatus}},onError:(err,newStatus,context)=>{queryClient.setQueryData(["notification"],null==context?void 0:context.prevStatus)},onSettled:()=>{queryClient.invalidateQueries(["notification"])}})}(),unSubsMutation=function useUnsubs(){const queryClient=(0,QueryClientProvider.jE)();return(0,useMutation.n)(unsubscribeNotification,{onMutate:async status=>{await queryClient.cancelQueries(["notification"]);const prevStatus=queryClient.getQueryData(["notification"]);return queryClient.setQueryData(["notification"],status),{prevStatus}},onError:(err,newStatus,context)=>{queryClient.setQueryData(["notification"],null==context?void 0:context.prevStatus)},onSettled:()=>{queryClient.invalidateQueries(["notification"])}})}(),handleNotificationPermission=async()=>{await Notification.requestPermission(),"granted"===Notification.permission&&setStatus(!0)};return react.useEffect((()=>{if("Notification"in window)if("denied"===Notification.permission||"default"===Notification.permission)setStatus(!1);else{setStatus(!0);(async()=>{const app=await firebaseApp_Init(),messaging=(0,index_esm.dG)(app),fcm_token=await(0,index_esm.gf)(messaging,{vapidKey:"BG0EwqRxJlkmw4DrHpLrNDPMUCYUjhx1MDm9RzEtiiAmvJHpSHM_504r36f-o6qta6gvlneroQ5pBDCGQ8c_4Fo"});""===token&&setToken(fcm_token),(0,index_esm.xD)(messaging,(payload=>{var _payload_notification,_payload_notification1;(0,react_toastify_esm.oR)((0,jsx_runtime.jsx)(Notify,{title:null===(_payload_notification=payload.notification)||void 0===_payload_notification?void 0:_payload_notification.title,body:null===(_payload_notification1=payload.notification)||void 0===_payload_notification1?void 0:_payload_notification1.body}),{position:react_toastify_esm.oR.POSITION.TOP_CENTER,autoClose:1e4,hideProgressBar:!0})}))})()}}),[token,status]),status?isLoading?(0,jsx_runtime.jsx)("div",{className:"hover:bg-gray-100 dark:hover:bg-neutral-800 m-auto",children:(0,jsx_runtime.jsx)(index_es.g,{className:"animate-spin m-3",size:"lg",icon:free_solid_svg_icons.z1G,"data-testid":"loading"})}):isError?(0,jsx_runtime.jsx)(IconToggle.g,{ariaLabel:"notification error",variant:"outlined",isSelected:!1,disabled:isError,onClick:()=>{},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 m-auto",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}):(0,jsx_runtime.jsx)(IconToggle.g,{ariaLabel:data.isActive?"turn off Notification":"turn on Notification",onClick:async()=>{(null==data?void 0:data.isActive)?subsMutation.mutate({token}):unSubsMutation.mutate({token})},variant:"outlined",isSelected:data.isActive,dataTestID:data.isActive?"unsubscribe":"subscribe",children:data.isActive?(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 m-auto",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"})}):(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 m-auto",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"})})}):(0,jsx_runtime.jsx)(IconToggle.g,{ariaLabel:"Notification permission",onClick:handleNotificationPermission,variant:"outlined",isSelected:!1,children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 m-auto",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"})})})},Notify=({title,body})=>(0,jsx_runtime.jsx)("div",{className:"w-full max-w-xs p-1 text-gray-500",role:"alert",children:(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)(next_image.A,{loader:constant_images.A,src:"logo.png",alt:"Person",height:"40",width:"40",className:"object-cover w-8 h-8 rounded-full shadow-lg"}),(0,jsx_runtime.jsxs)("div",{className:"ml-3 text-sm font-normal",children:[(0,jsx_runtime.jsx)("span",{className:"mb-1 text-sm font-semibold text-gray-900 ",children:title}),(0,jsx_runtime.jsx)("p",{className:"mb-2 text-sm font-normal",children:body})]})]})}),components_Notifications=Notifications;try{Notify.displayName="Notify",Notify.__docgenInfo={description:"",displayName:"Notify",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | undefined"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notifications.tsx#Notify"]={docgenInfo:Notify.__docgenInfo,name:"Notify",path:"src/components/Notifications.tsx#Notify"})}catch(__react_docgen_typescript_loader_error){}try{Notifications.displayName="Notifications",Notifications.__docgenInfo={description:"",displayName:"Notifications",props:{initStatus:{defaultValue:{value:"false"},description:"",name:"initStatus",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notifications.tsx#Notifications"]={docgenInfo:Notifications.__docgenInfo,name:"Notifications",path:"src/components/Notifications.tsx#Notifications"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/next-themes/dist/index.mjs");const ThemeToggle=()=>{const{systemTheme,theme,setTheme}=(0,dist.D)(),[mounted,setMounted]=react.useState(!1);react.useEffect((()=>{setMounted(!0)}),[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(()=>{if(!mounted)return null;return"dark"===("system"===theme?systemTheme:theme)?(0,jsx_runtime.jsx)(IconToggle.g,{ariaLabel:"light theme toggle",onClick:()=>setTheme("light"),variant:"outlined",isSelected:!1,dataTestID:"theme-dark",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 m-auto",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})}):(0,jsx_runtime.jsx)(IconToggle.g,{ariaLabel:"dark theme toggle",onClick:()=>setTheme("dark"),variant:"outlined",isSelected:!1,dataTestID:"theme-light",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 m-auto",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})})})})()})},components_ThemeToggle=ThemeToggle;try{ThemeToggle.displayName="ThemeToggle",ThemeToggle.__docgenInfo={description:"",displayName:"ThemeToggle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeToggle.tsx#ThemeToggle"]={docgenInfo:ThemeToggle.__docgenInfo,name:"ThemeToggle",path:"src/components/ThemeToggle.tsx#ThemeToggle"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/links/StandardLink.tsx");var HighlightLink=__webpack_require__("./src/components/links/HighlightLink.tsx");const page_pageLinks=[{name:"Home",url:"/",icon:free_solid_svg_icons.v02},{name:"Blog",url:"/blog",icon:free_solid_svg_icons.jPR},{name:"Project",url:"/project",icon:free_solid_svg_icons.ruc},{name:"About",url:"/about",icon:free_solid_svg_icons.oMV}],Navbar=()=>(0,jsx_runtime.jsx)("nav",{className:"fixed w-full z-10 bg-background px-5vw",children:(0,jsx_runtime.jsxs)("div",{className:"flex text-center justify-between h-full w-full border-gray-100",children:[(0,jsx_runtime.jsx)(HighlightLink.J,{href:"/",className:"font-sans font-medium text-xl my-5 py-2",children:"Jerens"}),(0,jsx_runtime.jsxs)("div",{className:"flex text-center my-auto gap-2",children:[(0,jsx_runtime.jsx)("div",{className:"text-center relative h-full hidden md:flex",children:page_pageLinks.filter((({name})=>"Home"!==name)).map((({name,url})=>(0,jsx_runtime.jsx)(HighlightLink.J,{href:url,className:"font-sans hidden md:block font-medium text-gray-800 dark:text-white text-xl my-4 mx-5 py-2",children:name},url)))}),(0,jsx_runtime.jsx)(components_Notifications,{}),(0,jsx_runtime.jsx)(components_ThemeToggle,{})]})]})}),NavbarMobile=()=>_jsx("div",{className:"fixed flex w-full px-10 py-2 bottom-0 h-18 bg-white dark:bg-neutral-800 z-40 md:hidden",children:_jsx("div",{className:"flex justify-between w-full",children:pageLinks.map((({name,url,icon})=>_jsx("div",{className:"flex-1 group",children:_jsx(StandardLink,{className:"flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 dark:text-gray-200 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500",href:url,children:_jsxs("span",{className:"block px-1 pt-1 pb-2",children:[_jsx(FontAwesomeIcon,{className:"block",icon}),_jsx("span",{className:"text-xs pb-1 block",children:name})]})})},name)))})});try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navbar.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/components/Navbar.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}try{NavbarMobile.displayName="NavbarMobile",NavbarMobile.__docgenInfo={description:"",displayName:"NavbarMobile",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navbar.tsx#NavbarMobile"]={docgenInfo:NavbarMobile.__docgenInfo,name:"NavbarMobile",path:"src/components/Navbar.tsx#NavbarMobile"})}catch(__react_docgen_typescript_loader_error){}const Navbar_stories_queryClient=new(__webpack_require__("./node_modules/@tanstack/query-core/build/lib/queryClient.mjs").E)({defaultOptions:{queries:{staleTime:1/0,refetchOnMount:!0}}}),Navbar_stories={title:"General/Navbar",component:Navbar,tags:["autodocs"]},Basic={args:{},decorators:[Story=>(Navbar_stories_queryClient.setQueryData(["notification"],{}),(0,jsx_runtime.jsx)(QueryClientProvider.Ht,{client:Navbar_stories_queryClient,children:(0,jsx_runtime.jsx)(Story,{})}))]};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [Story => {\n    queryClient.setQueryData(['notification'], {});\n    return <QueryClientProvider client={queryClient}>\n                    <Story />\n                </QueryClientProvider>;\n  }]\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/buttons/IconToggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>IconToggle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.mjs"));const IconToggle=({onClick,variant,children,isSelected=!1,disabled,dataCy,dataTestID,ariaLabel})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button","aria-label":ariaLabel,"data-cy":dataCy,onClick,disabled,"data-testid":dataTestID,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("m-auto rounded-full text-sm font-medium w-10 h-10 disabled:text-on-surface/12 disabled:bg-on-surface-variant/12 hover:brightness-108 active:brightness-110",{"bg-surface-variant text-primary":"filled"===variant&&!isSelected,"bg-primary text-on-primary":"filled"===variant&&isSelected,"bg-surface-variant text-on-surface-variant":"filled-tonal"===variant&&!isSelected,"bg-secondary-container text-on-secondary-container":"filled-tonal"===variant&&isSelected,"border border-outline text-on-surface-variant":"outlined"===variant&&!isSelected,"bg-inverse-surface text-inverse-on-surface":"outlined"===variant&&isSelected,"text-primary":"standard"===variant}),children});try{IconToggle.displayName="IconToggle",IconToggle.__docgenInfo={description:"",displayName:"IconToggle",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"filled-tonal"'},{value:'"outlined"'},{value:'"standard"'}]}},isSelected:{defaultValue:{value:"false"},description:"",name:"isSelected",required:!1,type:{name:"boolean"}},dataCy:{defaultValue:null,description:"",name:"dataCy",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},dataTestID:{defaultValue:null,description:"",name:"dataTestID",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/IconToggle.tsx#IconToggle"]={docgenInfo:IconToggle.__docgenInfo,name:"IconToggle",path:"src/components/buttons/IconToggle.tsx#IconToggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/links/HighlightLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>HighlightLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_StandardLink__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/links/StandardLink.tsx")),tailwind_merge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const HighlightLink=({children,href,className,isExternal})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StandardLink__WEBPACK_IMPORTED_MODULE_2__.E,{href,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.QP)("relative after:content-[''] after:absolute after:h-[3px] after:w-full after:bg-on-surface after:left-0 after:bottom-[-0.2rem] after:scale-x-0 after:scale-y-100 hover:after:scale-x-100 after:transition after:duration-20",className),isExternal,children});try{HighlightLink.displayName="HighlightLink",HighlightLink.__docgenInfo={description:"",displayName:"HighlightLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/links/HighlightLink.tsx#HighlightLink"]={docgenInfo:HighlightLink.__docgenInfo,name:"HighlightLink",path:"src/components/links/HighlightLink.tsx#HighlightLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/links/StandardLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>StandardLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/next/link.js")),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),next_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/router/index.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const StandardLink=({children,className,isExternal=!1,href,...rest})=>{const router=(0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();return isExternal?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{target:"_blank",rel:"noopener noreferrer",href,...rest,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("italic no-underline",className),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{...rest,href,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.QP)("no-underline",className),"aria-current":router.pathname===href?"page":void 0,children})};try{StandardLink.displayName="StandardLink",StandardLink.__docgenInfo={description:"",displayName:"StandardLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},isExternal:{defaultValue:{value:"false"},description:"",name:"isExternal",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!1,type:{name:"string | (UrlObject & string)"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url | undefined"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/pages/building-your-application/data-fetching/get-static-props), [`getServerSideProps`](/docs/pages/building-your-application/data-fetching/get-server-side-props) or [`getInitialProps`](/docs/pages/api-reference/functions/get-initial-props).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover in pages router but not in app router. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/links/StandardLink.tsx#StandardLink"]={docgenInfo:StandardLink.__docgenInfo,name:"StandardLink",path:"src/components/links/StandardLink.tsx#StandardLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/constant/images.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function ImageLoader({src,width,quality}){return`https://ik.imagekit.io/jerensl/tr:di-project-default.webp,w-${width},q-${quality||75}/${src}`}__webpack_require__.d(__webpack_exports__,{A:()=>ImageLoader})}}]);