webpackJsonp([11],{139:function(t,e,o){var n,p;n=o(140),p=o(141),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),p&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=p)},140:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{name:"",profile:""}},methods:{addtype:function(){this.$http.post("/admin/addtype",{name:this.name,profile:this.profile}).then(function(t){console.log(t.data)})}}}},141:function(t,e){t.exports=" <div transition=op> <input type=text v-model=name> <input type=text v-model=profile> <button @click=addtype></button> </div> "}});