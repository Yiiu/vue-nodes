webpackJsonp([22],{132:function(t,e,o){var n,p;n=o(133),p=o(134),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),p&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=p)},133:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{name:"",profile:""}},methods:{addtype:function(){this.$http.post("/admin/addtype",{name:this.name,profile:this.profile}).then(function(t){console.log(t.data)})}}}},134:function(t,e){t.exports=" <div transition=op transition-mode=out-in> <input type=text v-model=name> <input type=text v-model=profile> <button @click=addtype></button> </div> "}});