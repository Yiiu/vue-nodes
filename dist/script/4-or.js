webpackJsonp([4],{44:function(o,t,e){var s,n;e(45),s=e(47),n=e(48),o.exports=s||{},o.exports.__esModule&&(o.exports=o.exports["default"]),n&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=n)},45:function(o,t,e){var s=e(46);"string"==typeof s&&(s=[[o.id,s,""]]);e(8)(s,{});s.locals&&(o.exports=s.locals)},46:function(o,t,e){t=o.exports=e(7)(),t.push([o.id,".login{box-sizing:border-box;padding:35px 45px;border:1px solid #dcdcdc;border-radius:3px}",""])},47:function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{op:"on",loading:!1}},methods:{test:function(){var o=this;this.$http.post("/login",{name:this.$els.name.value,password:this.$els.password.value}).then(function(t){o.op=t.data.op,"true"==o.op&&(window.location.href="#/admin")})}},init:function(){var o=this;this.$http.post("/log").then(function(t){"true"==t.data.op?window.location.href="#/admin":o.loading=!0})}}},48:function(o,t){o.exports=' <div class="login col-4-c" transition=op v-if=loading> <span v-if="op==\'true\'">登录成功</span> <span v-if="op==\'false\'">登录失败</span> <label> <input type=text id=name class="y block" placeholder=帐号： autocomplete=new-password v-el:name> </label> <label> <input type=password class="y block" placeholder=密码： id=password autocomplete=new-password v-el:password @keyup.enter=test> </label> <button @click=test class="btn btn-default block">on</button> </div> '}});