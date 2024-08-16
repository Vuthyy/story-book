"use strict";(self.webpackChunkdata_fetching=self.webpackChunkdata_fetching||[]).push([[302],{"./components/ui/LoginForm/LoginForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyForm:()=>EmptyForm,FilledForm:()=>FilledForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoginForm_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function cov_1m1zrfngrv(){var path="C:\\Users\\user\\Desktop\\SabaiCode\\NestJS-SabaiCode\\data-fetching\\components\\ui\\LoginForm\\LoginForm.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a7fa60e4f0175fdd17b7004655fff0879ed74730"===coverage[path].hash||(coverage[path]={path:"C:\\Users\\user\\Desktop\\SabaiCode\\NestJS-SabaiCode\\data-fetching\\components\\ui\\LoginForm\\LoginForm.tsx",statementMap:{0:{start:{line:4,column:25},end:{line:61,column:1}},1:{start:{line:5,column:30},end:{line:5,column:42}},2:{start:{line:6,column:36},end:{line:6,column:48}},3:{start:{line:7,column:25},end:{line:10,column:5}},4:{start:{line:8,column:8},end:{line:8,column:27}},5:{start:{line:9,column:8},end:{line:9,column:46}},6:{start:{line:11,column:4},end:{line:60,column:7}},7:{start:{line:28,column:39},end:{line:28,column:63}},8:{start:{line:47,column:39},end:{line:47,column:66}},9:{start:{line:62,column:0},end:{line:66,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:25},end:{line:4,column:26}},loc:{start:{line:4,column:29},end:{line:61,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:7,column:25},end:{line:7,column:26}},loc:{start:{line:7,column:30},end:{line:10,column:5}},line:7},2:{name:"(anonymous_2)",decl:{start:{line:28,column:34},end:{line:28,column:35}},loc:{start:{line:28,column:39},end:{line:28,column:63}},line:28},3:{name:"(anonymous_3)",decl:{start:{line:47,column:34},end:{line:47,column:35}},loc:{start:{line:47,column:39},end:{line:47,column:66}},line:47}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0,2:0,3:0},b:{},inputSourceMap:{version:3,sources:["C:/Users/user/Desktop/SabaiCode/NestJS-SabaiCode/data-fetching/components/ui/LoginForm/LoginForm.tsx"],sourcesContent:['// LoginForm.tsx\r\nimport React, { useState } from "react";\r\n\r\nexport const LoginForm = () => {\r\n  const [email, setEmail] = useState("");\r\n  const [password, setPassword] = useState("");\r\n\r\n  const handleSubmit = (e: React.FormEvent) => {\r\n    e.preventDefault();\r\n    alert("Everything is perfect. Nice!");\r\n  };\r\n\r\n  return (\r\n    <form\r\n      onSubmit={handleSubmit}\r\n      className="max-w-sm mx-auto p-4 shadow-md rounded-md"\r\n    >\r\n      <div className="mb-4">\r\n        <label\r\n          htmlFor="email"\r\n          className="block text-sm font-medium text-gray-700"\r\n        >\r\n          Email\r\n        </label>\r\n        <input\r\n          type="email"\r\n          id="email"\r\n          data-testid="email"\r\n          value={email}\r\n          onChange={(e) => setEmail(e.target.value)}\r\n          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"\r\n          required\r\n        />\r\n      </div>\r\n      <div className="mb-4">\r\n        <label\r\n          htmlFor="password"\r\n          className="block text-sm font-medium text-gray-700"\r\n        >\r\n          Password\r\n        </label>\r\n        <input\r\n          type="password"\r\n          id="password"\r\n          data-testid="password"\r\n          value={password}\r\n          onChange={(e) => setPassword(e.target.value)}\r\n          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"\r\n          required\r\n        />\r\n      </div>\r\n      <button\r\n        type="submit"\r\n        className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\r\n        role="button"\r\n      >\r\n        Login\r\n      </button>\r\n    </form>\r\n  );\r\n};\r\n'],names:["React","useState","LoginForm","email","setEmail","password","setPassword","handleSubmit","e","preventDefault","alert","form","onSubmit","className","div","label","htmlFor","input","type","id","data-testid","value","onChange","target","required","button","role"],mappings:"AAAA,gBAAgB;;AAChB,OAAOA,SAASC,QAAQ,QAAQ,QAAQ;AAExC,OAAO,MAAMC,YAAY;IACvB,MAAM,CAACC,OAAOC,SAAS,GAAGH,SAAS;IACnC,MAAM,CAACI,UAAUC,YAAY,GAAGL,SAAS;IAEzC,MAAMM,eAAe,CAACC;QACpBA,EAAEC,cAAc;QAChBC,MAAM;IACR;IAEA,qBACE,MAACC;QACCC,UAAUL;QACVM,WAAU;;0BAEV,MAACC;gBAAID,WAAU;;kCACb,KAACE;wBACCC,SAAQ;wBACRH,WAAU;kCACX;;kCAGD,KAACI;wBACCC,MAAK;wBACLC,IAAG;wBACHC,eAAY;wBACZC,OAAOlB;wBACPmB,UAAU,CAACd,IAAMJ,SAASI,EAAEe,MAAM,CAACF,KAAK;wBACxCR,WAAU;wBACVW,QAAQ;;;;0BAGZ,MAACV;gBAAID,WAAU;;kCACb,KAACE;wBACCC,SAAQ;wBACRH,WAAU;kCACX;;kCAGD,KAACI;wBACCC,MAAK;wBACLC,IAAG;wBACHC,eAAY;wBACZC,OAAOhB;wBACPiB,UAAU,CAACd,IAAMF,YAAYE,EAAEe,MAAM,CAACF,KAAK;wBAC3CR,WAAU;wBACVW,QAAQ;;;;0BAGZ,KAACC;gBACCP,MAAK;gBACLL,WAAU;gBACVa,MAAK;0BACN;;;;AAKP,EAAE"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a7fa60e4f0175fdd17b7004655fff0879ed74730"});var actualCoverage=coverage[path];return cov_1m1zrfngrv=function(){return actualCoverage},actualCoverage}cov_1m1zrfngrv(),cov_1m1zrfngrv().s[0]++;const LoginForm=()=>{cov_1m1zrfngrv().f[0]++;const[email,setEmail]=(cov_1m1zrfngrv().s[1]++,(0,react.useState)("")),[password,setPassword]=(cov_1m1zrfngrv().s[2]++,(0,react.useState)(""));cov_1m1zrfngrv().s[3]++;return cov_1m1zrfngrv().s[6]++,(0,jsx_runtime.jsxs)("form",{onSubmit:e=>{cov_1m1zrfngrv().f[1]++,cov_1m1zrfngrv().s[4]++,e.preventDefault(),cov_1m1zrfngrv().s[5]++,alert("Everything is perfect. Nice!")},className:"max-w-sm mx-auto p-4 shadow-md rounded-md",children:[(0,jsx_runtime.jsxs)("div",{className:"mb-4",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,jsx_runtime.jsx)("input",{type:"email",id:"email","data-testid":"email",value:email,onChange:e=>(cov_1m1zrfngrv().f[2]++,cov_1m1zrfngrv().s[7]++,setEmail(e.target.value)),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-4",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,jsx_runtime.jsx)("input",{type:"password",id:"password","data-testid":"password",value:password,onChange:e=>(cov_1m1zrfngrv().f[3]++,cov_1m1zrfngrv().s[8]++,setPassword(e.target.value)),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,jsx_runtime.jsx)("button",{type:"submit",className:"w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",role:"button",children:"Login"})]})};cov_1m1zrfngrv().s[9]++,LoginForm.__docgenInfo={description:"",methods:[],displayName:"LoginForm"};const LoginForm_stories={component:LoginForm},EmptyForm={},FilledForm={play:async({canvasElement})=>{const canvas=(0,dist.ux)(canvasElement);await dist.Q4.type(canvas.getByTestId("email"),"email@provider.com"),await dist.Q4.type(canvas.getByTestId("password"),"a-random-password"),await dist.Q4.click(canvas.getByRole("button"))}},__namedExportsOrder=["EmptyForm","FilledForm"];EmptyForm.parameters={...EmptyForm.parameters,docs:{...EmptyForm.parameters?.docs,source:{originalSource:"{}",...EmptyForm.parameters?.docs?.source}}},FilledForm.parameters={...FilledForm.parameters,docs:{...FilledForm.parameters?.docs,source:{originalSource:'{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 👇 Simulate interactions with the component\n    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");\n    await userEvent.type(canvas.getByTestId("password"), "a-random-password");\n    await userEvent.click(canvas.getByRole("button"));\n\n    // 👇 Assert DOM structure\n    // await expect(\n    //   canvas.getByText("Everything is perfect. Nice!")\n    // ).toBeInTheDocument();\n  }\n}',...FilledForm.parameters?.docs?.source}}}}}]);