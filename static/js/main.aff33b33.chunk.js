(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(3),r=n.n(s),o=(n(14),n(4)),l=n(5),d=n(6),u=n(8),b=n(7);n(15);function j(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),n]})}var h=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(c.jsx)("div",{className:"container",children:n.map((function(e){return Object(c.jsx)("button",{type:"button",onClick:function(){return t(e)},children:e},e)}))})};var v=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,s=e.positivePercentage;return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("ul",{className:"list",children:[Object(c.jsxs)("li",{className:"item",children:["Good: ",t]}),Object(c.jsxs)("li",{className:"item",children:["Neutral: ",n]}),Object(c.jsxs)("li",{className:"item",children:["Bad: ",a]}),Object(c.jsxs)("li",{className:"item",children:["Total Feedbacks: ",i()]}),Object(c.jsxs)("li",{className:"item",children:["Positive Feedback Percentage: ",s(),"%"]})]})})};function O(e){var t=e.message;return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:t})})}var f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState(Object(o.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=Object.values(e.state).reduce((function(e,t){return e+t}),0);return Math.round(t/n*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{title:"Please leave feedback",children:Object(c.jsx)(h,{onLeaveFeedback:this.handleIncrement,options:Object.keys(this.state)})}),Object(c.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(c.jsx)(v,{good:t,neutral:n,bad:a,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(c.jsx)(O,{message:"No feedback given"})})]})}}]),n}(a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.aff33b33.chunk.js.map