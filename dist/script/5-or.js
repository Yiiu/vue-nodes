webpackJsonp([5],{70:function(e,t,i){var o,l;o=i(71),l=i(72),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)},71:function(e,t){"use strict";e.exports={data:function(){return{$file:null,file:null,url:null}},ready:function(){this.$file=this.$el.querySelector('input[type="file"]')},methods:{preview:function(e){var t=e.target.files[0],i=["image/jpg","image/jpeg","image/png"];this.url=URL.createObjectURL(t),t&&i.indexOf(t.type)>=0?this.file=t:(alert("文件格式只支持：jpg、jpeg 和 png"),this.clearFile()),console.log(this.url)},clearFile:function(){this.$file.value="",this.file=null},submitFile:function(e){this.$http.post("/upload",{file:this.url}).then(function(e){console.log(e)})}}}},72:function(e,t){e.exports=' <div> <form name=formFile method=post action=/upload> <img id=preview :src="file && url"> <input type=file name=photo @change=preview> <input type=submit value=提交> </form> </div>'}});