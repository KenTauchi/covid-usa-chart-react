(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{155:function(t,e,a){t.exports=a(533)},159:function(t,e,a){},160:function(t,e,a){},533:function(t,e,a){"use strict";a.r(e);var n=a(2),o=a.n(n),c=a(14),r=a.n(c),s=(a(159),a(55)),i=a(56),u=a(58),l=a(57),h=(a(160),a(161),a(154)),p=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.props.chartData),o.a.createElement("div",{className:"chart"},o.a.createElement(h.Bar,{data:this.props.chartData}))}}]),a}(n.Component),d=[],b=[],v=[],m=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={chartData:{labels:d,datasets:[{label:"n/b of total cases in the US by state",data:b,backgroundColor:v}]}},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){fetch("https://finnhub.io/api/v1/covid19/us?token=".concat("btjvm0v48v6vivbo0i9g")).then((function(t){return t.json()})).then((function(t){t.map((function(t){b.push(t.case),d.push(t.state),t.case<1e5?v.push("rgba(54, 162, 235, 0.6)"):t.case>=1e5&&t.case<2e5?v.push("rgba(255, 206, 86, 0.6)"):t.case>=2e5&&t.case<3e5?v.push("rgba(153, 102, 255, 0.6)"):t.case>=3e5&&v.push("rgba(255, 99, 132, 0.6)")}))}))}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate!")}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{legendPosition:"bottom",chartData:this.state.chartData,label:"true"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.1a4e391f.chunk.js.map