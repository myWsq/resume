import{d as l,r as n,o as s,c as t,a as e,b as a,t as u,e as o,f as r,g as i,w as c,h as m,V as p}from"./vendor.844bebbc.js";!function(l=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(s){const t=new URL(l,location),e=l=>{URL.revokeObjectURL(l.src),l.remove()};self[n]=l=>new Promise(((s,a)=>{const u=new URL(l,t);if(self[n].moduleMap[u])return s(self[n].moduleMap[u]);const o=new Blob([`import * as m from '${u}';`,`${n}.moduleMap['${u}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){a(new Error(`Failed to import: ${l}`)),e(r)},onload(){s(self[n].moduleMap[u]),e(r)}});document.head.appendChild(r)})),self[n].moduleMap={}}}("/resume/assets/");const f={class:"flex flex-col sm:flex-row justify-between"},d=e("div",{class:"flex flex-col justify-center"},[e("span",{class:"text-2xl font-medium mb-2"},"王帅琪"),e("div",null,[e("label",{class:"inline-block w-18 sm:hidden"},"博客:"),e("a",{href:"https://wsq.cool",target:"_blank"},"https://wsq.cool")])],-1),h=e("div",null,[e("label",{class:"inline-block w-18"},"Github:"),e("a",{href:"https://github.com/myWsq",target:"_blank"}," github.com/myWsq ")],-1),b=e("div",null,[e("label",{class:"inline-block w-18"},"电子邮件:"),e("a",{href:"mailto:wsq961@outlook.com"}," wsq961@outlook.com ")],-1),g={key:0},w=e("label",{class:"inline-block w-18"},"手机号码:",-1);var I=l({expose:[],setup(l){const i=n(null);return s((()=>{i.value=localStorage.getItem("phone")})),(l,n)=>(r(),t("div",f,[d,e("div",null,[h,b,i.value?(r(),t("div",g,[w,a(" "+u(i.value),1)])):o("v-if",!0)])]))}});const v={},y=e("h2",null,"专业技能",-1),_=e("ul",null,[e("li",null,[e("span",null," 掌握一般前端技术、Javascript 动画、前端工程化、Node.js 服务端、容器化技术； ")]),e("li",null,[e("span",null," 懂一点设计 ")])],-1);v.render=function(l,n){return r(),t("div",null,[y,_])};const k={},U={class:"flex flex-col-reverse sm:flex-row justify-between"};k.render=function(l,n){return r(),t("div",U,[i(l.$slots,"default")])};const x={},M=e("h2",null,"教育/工作经历",-1),q=e("strong",null," 北京邮电大学/北京联合大学 (双培计划) - 计算机科学与技术 - 本科 ",-1),j=e("strong",null,"2015 - 2019",-1),S=e("ul",null,[e("li",null,"北邮蓝图工作室创始人；"),e("li",null,"优秀毕业设计。")],-1),A=e("strong",null,"小米 - 软件与体验部 - 系统安全部 - 前端平台",-1),D=e("strong",null,"2019.7 至今",-1),L=e("ul",null,[e("li",null,"2019 年度绩效 S、2020 年中绩效 S、2020 年度绩效 A；"),e("li",null,"小米 A 计划成员、Top 应届生；"),e("li",null,"MIUI 学院讲师。")],-1);x.render=function(l,n){const s=k;return r(),t("div",null,[M,e(s,null,{default:c((()=>[q,j])),_:1}),S,e(s,{class:"mt-3"},{default:c((()=>[A,D])),_:1}),L])};const R={},F=e("h2",null,"项目经历",-1),W=e("strong",null,[a(" MIUI 12.5 - "),e("a",{href:"https://home.miui.com",target:"_blank"},"miui.com"),a(" ｜ MIUI 12 官网 - "),e("a",{href:"https://home.miui.com/miui12",target:"_blank"}," miui.com/miui12 ")],-1),G=e("ul",null,[a(" 用户感知 MIUI 第一门户。 "),e("li",null,[e("span",null," 负责：技术选型、搭建开发框架、设计开发规范、构建工作流、提供复杂动画实现方案、兼容性优化、性能优化以及部分页面开发； ")]),e("li",null,[e("span",null," 难点：单页内容非常多，对开发效率、性能、兼容性要求高，复杂动画多； ")]),e("li",null,[e("span",null," 成绩：过亿 PV，相比往年访问量增长率\b 50%+，整套方案辐射至 MIUI +、MIUI 国际、小米隐私等多个产品站，获小米年度前端技术三等奖。 ")])],-1),K=e("strong",null," 前端工程质量体系 ",-1),$=e("ul",null,[a(" 项目开发的基石。 "),e("li",null,[e("span",null," 负责：制定并参与开发整个体系，包括 Git 工作流设计、项目搭建规范、发版流程、错误报警、性能监控； ")]),e("li",null,[e("span",null," 难点：从零到一，需要平衡质量与效率，链路长且涉及到的技术和基础设施多，覆盖项目类型多； ")]),e("li",null,[e("span",null," 成绩：覆盖\b部门全部 100+ 项目，为多个兄弟部门提供工程化支持，获小米年度前端技术一等奖。 ")])],-1),O=e("strong",null," Folme.js 物理动画引擎 ",-1),P=e("ul",null,[a(" MIUI 光锥物理动画引擎 Web 版 "),e("li",null,[e("span",null," 负责：全部研发工作及文档撰写； ")]),e("li",null,[e("span",null," 难点：从零到一，API 易用性优化、兼容插值器动画； ")]),e("li",null,[e("span",null," 成绩：在 MIUI 官网、游戏空间、小爱同学、应用商店等多个项目中落地，作为 MIUI 动画专项的一部分，获小米集团年度技术大奖二等奖。 ")])],-1),E=e("strong",null,[a(" 小米字体服务 - "),e("a",{href:"https://font.sec.miui.com",target:"_blank"},"font.sec.miui.com")],-1),J=e("ul",null,[a(" 受 Google Fonts 启发, 做小米自己的在线字体服务。 "),e("li",null,[e("span",null," 负责：项目发起人、负责人、负责全部前后端开发工作； ")]),e("li",null,[e("span",null," 难点：从零到一、作为基础设施对稳定性、性能要求高、对中文字符集进行特殊优化； ")]),e("li",null,[e("span",null," 成绩：广泛用于需要自定义字体的业务，如 MIUI 官网、各种系统内嵌页，小米账号登陆页。因为客户端会缓存，实际访问量无法估计，目前累计被访问 3 亿次 +。 ")])],-1),N=e("strong",null," Jamstick 前端统一部署平台 ",-1),T=e("ul",null,[a(" 受 Netlify 启发，做更适合企业开发团队的前端部署平台。 "),e("li",null,[e("span",null," 负责：项目发起人、负责人、UI 设计、前后端主要开发者； ")]),e("li",null,[e("span",null," 难点：从零到一，作为基础设施对稳定性、性能要求高；")]),e("li",null,[e("span",null," 一期迭代结束，已完成核心功能和大部分附加功能，目前部门内测中 ")])],-1),V=e("strong",null," 其他 ",-1),B=e("ul",null,[e("li",null,[e("span",null," 各类 Node.js SDK：小米对象存储 SDK、小米消息队列 SDK、小米团队管理 SDK、小米安全网关 SDK …… ")]),e("li",null,[e("span",null," MIUI 文档 Gatsby Theme：完整的 Gatsby 主题，符合 MIUI 设计风格，扩展 Markdown 语法； ")]),e("li",null,[e("span",null," 数万字文档和技术文章输出。")])],-1);R.render=function(l,n){const s=k;return r(),t("div",null,[F,e(s,null,{default:c((()=>[W])),_:1}),G,e(s,{class:"mt-10"},{default:c((()=>[K])),_:1}),$,e(s,{class:"mt-10"},{default:c((()=>[O])),_:1}),P,e(s,{class:"mt-10"},{default:c((()=>[E])),_:1}),J,e(s,{class:"mt-10"},{default:c((()=>[N])),_:1}),T,e(s,{class:"mt-10"},{default:c((()=>[V])),_:1}),B])};const C={},z=m('<h2>开源项目</h2><ul><li><span><a href="https://github.com/myWsq/processor" target="_blank"> Processor </a> - A simple and lightweight JavaScript data processing tool. Live Demo: <a href="https://mywsq.github.io/processor" target="_blank"> https://mywsq.github.io/processor </a></span></li><li><span><a href="https://github.com/myWsq/scroom" target="_blank"> Scroom </a> - A smart library for cool scrolling effects, based on Intersection Observer. Docs: <a href="https://scroom.wsq.cool" target="_blank">https://scroom.wsq.cool</a></span></li><li><span><a href="https://github.com/myWsq/fast-raf" target="_blank"> Fast Raf </a> - A better requestAnimationFrame. Example: <a href="https://mywsq.github.io/fast-raf/example/" target="_blank"> https://mywsq.github.io/fast-raf/example </a></span></li></ul>',2);C.render=function(l,n){return r(),t("div",null,[z])};const H={},Q={class:"prose-sm prose-cyan max-w-safe mx-auto space-y-8 divide-y py-8 px-5"};H.render=function(l,n){const s=I,a=v,u=x,o=R,i=C;return r(),t("article",Q,[e(s),e(a),e(u),e(o),e(i)])},p(H);