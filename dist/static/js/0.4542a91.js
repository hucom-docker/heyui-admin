webpackJsonp([0],{165:function(t,e,a){var i=a(19)(a(169),a(180),null,null);i.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/demo-modules/report.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),i.options.functional,t.exports=i.exports},169:function(t,e,a){"use strict";(function(t,i){function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(174),s=l(n),d=a(175),r=l(d);e.default={data:function(){return{columns:[{title:"日期",width:150,fixed:"left"},{title:"电话数",width:100},{title:"呼出数",width:100},{title:"呼出比例",width:100},{title:"呼入数",width:100},{title:"呼入比例",width:100},{title:"接通数",width:100},{title:"接通比例",width:100},{title:"平均电话时间",width:130},{title:"平均呼出电话时间",width:150},{title:"平均呼入电话时间",width:150},{title:"平均接通通话时间",width:150},{title:"最长通话时间",width:130},{title:"通话总时间",width:130}],list:[],loading:!0,search:r.default.parse({}),page:{total:0,page:1,size:10}}},mounted:function(){this.getData()},filters:{rate:function(t){return(100*t).toFixed(2)+"%"},time:function(t){var e=parseInt(t/60%60);e=(e<10?"0":"")+e;var a=parseInt(t%60),i=parseInt(t/3600);return a=(a<10?"0":"")+a,""+(i=0==i?"":(i<10?"0":"")+i+":")+e+":"+a}},methods:{resetData:function(){this.search={start:null,end:null},this.page.page=1,this.getData()},getData:function(){var e=this;this.loading=!0;var a=t.extend({pageNum:this.page.page,pageSize:this.page.size},r.default.dispose({startDate:this.search.start,endDate:this.search.end}));i.List.reportList(a).then(function(t){200==t.status&&(e.list=s.default.parse(t.body),e.page.page=t.meta.page,e.page.total=t.meta.total),e.loading=!1})},currentChange:function(t){this.page.page=t.cur,this.page.size=t.size,this.getData()}}}}).call(e,a(13),a(20))},174:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=new t({date:{type:t.DATE,format:"YYYY-MM-DD 星期w"},callCount:0,callOutCount:0,callOutRate:0,callInCount:0,callInRate:0,callEffectiveCount:0,callEffectiveRate:0,avgBillSec:0,avgOutBillSec:0,avgInBillSec:0,avgEffectiveBillSec:0,maxBillSec:0,totalBillSec:0})}).call(e,a(27))},175:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=new t({startDate:{type:t.DATE,format:"k"},endDate:{type:t.DATE,format:"k"}})}).call(e,a(27))},180:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"padding",rawName:"v-padding",value:20,expression:"20"}],staticClass:"app-seat-list"},[a("div",{staticClass:"h-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"h-panel-bar"},[a("Form",{attrs:{"label-width":120,mode:"inline",readonly:!0}},[a("FormItem",{attrs:{label:"查询时间范围"}},[a("DateRangePicker",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}],attrs:{option:{paramName:{start:"startDate",end:"endDate"}}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{color:"green"},on:{click:t.getData}},[t._v("查询")]),a("Button",{attrs:{color:"red"},on:{click:t.resetData}},[t._v("重置")])],1)],1)],1),t._v(" "),a("div",{staticClass:"h-panel-body"},[a("Table",{attrs:{columns:t.columns,datas:t.list},scopedSlots:t._u([{key:"default",fn:function(e){return[a("td",[t._v(t._s(e.data.date))]),t._v(" "),a("td",[t._v(t._s(e.data.callCount))]),t._v(" "),a("td",[t._v(t._s(e.data.callOutCount))]),t._v(" "),a("td",[t._v(t._s(t._f("rate")(e.data.callOutRate)))]),t._v(" "),a("td",[t._v(t._s(e.data.callInCount))]),t._v(" "),a("td",[t._v(t._s(t._f("rate")(e.data.callInRate)))]),t._v(" "),a("td",[t._v(t._s(e.data.callEffectiveCount))]),t._v(" "),a("td",[t._v(t._s(t._f("rate")(e.data.callEffectiveRate)))]),t._v(" "),a("td",[t._v(t._s(t._f("time")(e.data.avgBillSec)))]),t._v(" "),a("td",[t._v(t._s(t._f("time")(e.data.avgOutBillSec)))]),t._v(" "),a("td",[t._v(t._s(t._f("time")(e.data.avgInBillSec)))]),t._v(" "),a("td",[t._v(t._s(t._f("time")(e.data.avgEffectiveBillSec)))]),t._v(" "),a("td",[t._v(t._s(t._f("time")(e.data.maxBillSec)))]),t._v(" "),a("td",[t._v(t._s(t._f("time")(e.data.totalBillSec)))])]}}])}),t._v(" "),a("Loading",{attrs:{loading:t.loading}})],1),t._v(" "),a("div",{directives:[{name:"padding",rawName:"v-padding",value:15,expression:"15"}]},[a("Pagination",{attrs:{cur:t.page.page,total:t.page.total,align:"right"},on:{change:t.currentChange}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-panel-bar"},[a("span",{staticClass:"h-panel-title"},[t._v("查询")])])}]},t.exports.render._withStripped=!0}});