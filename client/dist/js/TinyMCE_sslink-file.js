!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=181)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=i18n},159:function(e,t){e.exports=TinyMCEActionRegistrar},16:function(e,t){e.exports=ShortcodeSerialiser},181:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=i(r),a=n(159),l=i(a),s=n(0),u=i(s),c=n(5),d=i(c),f=n(7),p=i(f),g=n(16),m=i(g),_=n(21),k=i(_),h=n(4);l.default.addAction("sslink",{text:o.default._t("AssetAdmin.LINKLABEL_FILE","Link to a file"),onclick:function(e){return e.execCommand("sslinkfile")}}).addCommandWithUrlTest("sslinkfile",/^\[file_link/);var x={init:function(e){e.addCommand("sslinkfile",function(){(0,p.default)("#"+e.id).entwine("ss").openLinkFileDialog()})}},b="insert-link__dialog-wrapper--file",v=(0,h.loadComponent)(k.default);p.default.entwine("ss",function(e){e(".insert-link__dialog-wrapper--internal .nav-link, .insert-media-react__dialog-wrapper .breadcrumb__container a").entwine({onclick:function(e){return e.preventDefault()}}),e("textarea.htmleditor").entwine({openLinkFileDialog:function(){var t=e("#"+b);t.length||(t=e('<div id="'+b+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+b).entwine({renderModal:function(e){var t=this,n=function(){return t.close()},i=function(){return t.handleInsert.apply(t,arguments)},r=this.getOriginalAttributes(),o=tinymce.activeEditor.selection,a=o.getContent()||"",l=o.getNode().tagName,s="A"!==l&&""===a.trim();d.default.render(u.default.createElement(v,{show:e,type:"insert-link",onInsert:i,onHide:n,title:!1,bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:r,requireLinkText:s}),this[0])},buildAttributes:function(e){return{href:m.default.serialise({name:"file_link",properties:{id:e.ID}},!0)+(e.Anchor&&e.Anchor.length?"#"+e.Anchor:""),target:e.TargetBlank?"_blank":"",title:e.Description}},getOriginalAttributes:function(){var t=this.getElement().getEditor(),n=e(t.getSelectedNode()),i=(n.attr("href")||"").split("#");if(!i[0])return{};var r=m.default.match("file_link",!1,i[0]);return r?{ID:r.properties.id?parseInt(r.properties.id,10):0,Anchor:i[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}:{}}})}),tinymce.PluginManager.add("sslinkfile",function(e){return x.init(e)}),t.default=x},21:function(e,t){e.exports=InsertMediaModal},4:function(e,t){e.exports=Injector},5:function(e,t){e.exports=ReactDom},7:function(e,t){e.exports=jQuery}});