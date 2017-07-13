(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.example=e():t.example=e()})(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=10)}([function(t,e){t.exports=function(t,e,i,n){var o,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var l=r.computed||(r.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:o,exports:s,options:r}}},function(t,e,i){i(6);var n=i(0)(i(2),i(9),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),o=i.n(n),s=i(4);e.default={name:"example",components:{DialogDrag:o.a},data:function(){return{dialogs:[],dialogId:1,styles:["dialog-1","dialog-2","dialog-3"],style:"",selected:null,dialogWidth:400}},created:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=this.styles[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var s=n.value,a=this.newDialog(s)-1;this.dialogs[a].options.left=a*this.dialogWidth+50*a+1}}catch(t){e=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw i}}},methods:{newDialog:function(t){return t||(t=this.randomStyle()),this.dialogs.push(this.dialog(t))},removeDialog:function(t){var e=this.findDialog(t);this.dialogs.splice(e,1),this.selected&&this.selected.id===t&&(this.selected=null)},findDialog:function(t){return this.dialogs.findIndex(function(e){return e.id===t})},dialog:function(t){var e=this.dialogId;return this.dialogId++,{id:e,name:"Dialog "+e,content:i.i(s.a)(),style:t,options:{left:30*e,top:30*e,width:this.dialogWidth}}},dialogDragEnd:function(t){var e=this.findDialog(t.id);this.$set(this.dialogs[e].options,"left",t.left),this.$set(this.dialogs[e].options,"top",t.top)},randomStyle:function(){return this.styles[Math.floor(Math.random()*this.styles.length)]},selectDialog:function(t){var e=this.findDialog(t.id);this.selected=this.dialogs[e]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dialog-drag",props:["id","title","options","events"],data:function(){return{width:0,height:0,offset:{x:0,y:0},left:0,top:0,dragEnabled:!0,drag:!0,touch:null,overEvent:null,dialog:{left:0,top:0}}},created:function(){if(this.options){var t=["left","top","width","height"],e=!0,i=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var a=o.value;this.options[a]&&this.$set(this,a,this.options[a])}}catch(t){i=!0,n=t}finally{try{!e&&s.return&&s.return()}finally{if(i)throw n}}}},mounted:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,window.addEventListener("dragover",this.dragOver)},beforeDestroy:function(){window.removeEventListener("dragover",this.dragOver)},computed:{dialogStyle:function(){var t={left:this.left+"px",top:this.top+"px"};return this.width&&(t.width=this.width+"px"),this.height&&(t.height=this.height+"px"),t}},methods:{dragOver:function(t){this.overEvent=t,this.emit("move")},close:function(){this.emit("close",this.id)},setDrag:function(){this.dragEnabled&&(this.drag=!this.drag)},dragStart:function(t){this.drag&&this.dragEnabled&&(t.dataTransfer.setData("text/plain",null),this.startMove(t))},dragEnd:function(t){this.move(t),this.emit("dragEnd")},touchStart:function(t){this.startMove(t.targetTouches[0])},touchMove:function(t){this.move(t.targetTouches[0])},touchEnd:function(t){this.emit("dragEnd")},emit:function(t,e){(void 0===this.events||void 0===this.events[t]||this.events[t])&&(e||(e={id:this.id,left:this.left,top:this.top}),this.$emit(t,e))},move:function(t){this.drag&&this.dragEnabled&&(0===t.clientX&&(t=this.overEvent),this.left=t.clientX+this.offset.x,this.top=t.clientY+this.offset.y,this.emit("move"))},startMove:function(t){var e=this.left-t.clientX,i=this.top-t.clientY;this.offset={x:e,y:i},this.emit("dragStart")}}}},function(t,e,i){"use strict";var n=["The sky was cloudless and of a deep dark blue.","Waves flung themselves at the blue evening.","All their equipment and instruments are alive.","A red flair silhouetted the jagged edge of a wing.","I watched the storm, so beautiful yet terrific."],o=function(){return n[Math.floor(Math.random()*n.length)]};e.a=o},function(t,e){},function(t,e){},function(t,e,i){i(5);var n=i(0)(i(3),i(8),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-drag",class:t.drag?"":"fixed",style:t.dialogStyle,attrs:{draggable:t.drag},on:{dragstart:function(e){e.stopPropagation(),t.dragStart(e)},touchstart:t.touchStart,touchmove:function(e){e.preventDefault(),t.touchMove(e)},touchend:function(e){e.stopPropagation(),t.touchEnd(e)},dragend:t.dragEnd,dblclick:t.setDrag}},[i("div",{staticClass:"dialog-header"},[i("div",{staticClass:"dialog-title"},[t._t("title",[t.title?i("span",[t._v(t._s(t.title))]):t._e()])],2),i("button",{staticClass:"close",on:{click:t.close,touchstart:t.close}})]),i("div",{staticClass:"dialog-body"},[t._t("default",[i("div",{staticClass:"blank-body"})])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"menu"},[i("h1",[t._v("Vue Draggable Dialog")]),i("button",{staticClass:"btn",on:{click:function(e){t.newDialog(t.style)}}},[t._v("new dialog")]),i("div",{staticClass:"set"},[i("label",[t._v("Dialog Style:  ")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.style=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("random")]),t._l(t.styles,function(e){return i("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])]),t._m(0)]),t.selected?i("div",{staticClass:"console"},[i("p",[t._v("Dialog Selected")]),i("small",[t._v(t._s(t.selected))])]):t._e(),i("div",{staticClass:"dialogs"},t._l(t.dialogs,function(e,n){return i("dialog-drag",{key:e.id,class:e.style,attrs:{id:e.id,options:e.options},on:{close:t.removeDialog,dragEnd:t.dialogDragEnd,dragStart:t.selectDialog,move:t.dialogDragEnd}},[i("span",{slot:"title"},[t._v(t._s(e.name)+"  ")]),i("p",[t._v(t._s(e.content))]),i("small",[i("strong",[t._v("Random style: "+t._s(e.style))]),i("p",[i("small",[t._v("double click to enable-disable dialog drag")])])])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"git-hub"},[i("div",{staticClass:"octicon"})])}]}},function(t,e,i){t.exports=i(1)}])});
//# sourceMappingURL=example.js.map