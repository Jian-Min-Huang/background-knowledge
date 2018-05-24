"use strict";StackExchange.mockups=function(){function e(e,t,n,i,o){function r(e,t,n){for(var i=-1,o=-1;;){if(o=t.indexOf(e,o+1),-1==o)break;(0>i||Math.abs(o-n)<Math.abs(o-i))&&(i=o)}return i}return e.replace(new RegExp("<!-- Begin mockup[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End mockup -->","g"),function(e,a,s){var c={"payload":a.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":r(e,t,s),"len":e.length};return-1===c.pos?e:(o.push(c),e+"\n\n"+n+i+"-"+(o.length-1)+"%")})}function t(){StackExchange.externalEditor.init({"thingName":"mockup","thingFinder":e,"getIframeUrl":function(e){var t="/plugins/mockups/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"UI wireframe","buttonImageUrl":"/content/Shared/Balsamiq/wmd-mockup-button.png","onShow":function(e){window.addMockupToEditor=e},"onRemove":function(){window.addMockupToEditor=null;try{delete window.addMockupToEditor}catch(e){}}})}return{"init":t}}(),StackExchange.schematics=function(){function e(){if(!window.postMessage)return i;var e=document.createElement("div");e.innerHTML="<svg/>";var t="http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI);if(!t)return i;var n=navigator.userAgent;return/Firefox|Chrome/.test(n)?a:/Apple/.test(navigator.vendor)||/Opera/.test(n)?r:o}function t(e,t,n,i,o){function r(e,t,n){for(var i=-1,o=-1;;){if(o=t.indexOf(e,o+1),-1==o)break;(0>i||Math.abs(o-n)<Math.abs(o-i))&&(i=o)}return i}return e.replace(new RegExp("<!-- Begin schematic[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End schematic -->","g"),function(e,a,s){var c={"payload":a.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":r(e,t,s),"len":e.length};return-1===c.pos?e:(o.push(c),e+"\n\n"+n+i+"-"+(o.length-1)+"%")})}function n(){var n;StackExchange.externalEditor.init({"thingName":"schematic","thingFinder":t,"getIframeUrl":function(e){var t="/plugins/schematics/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"Schematic","buttonImageUrl":"/content/Sites/electronics/img/wmd-schematic-button.png?v=1","checkSupport":function(){var t=e();switch(t){case a:return!0;case r:return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");case o:return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");case i:return alert("Sorry, your browser does not support all the necessary features for the schematics editor."),!1}},"onShow":function(e){var t=$("<div class='popup' />").css("z-index",1111).text("Loading editor").appendTo("body").show().addSpinner({"marginLeft":5}).center({"dy":-200});$("<div style='text-align:right;margin-top: 10px' />").append($("<button>cancel</button>").click(function(){t.remove(),e()})).appendTo(t),n=function(n){if(n=n.originalEvent,"https://www.circuitlab.com"===n.origin){n.data||e();var i=$.parseJSON(n.data);if(i&&"success"===i.load)return t.remove(),void 0;if(i&&i.edit_url&&i.image_url){i.fkey=StackExchange.options.user.fkey;var o=$("<div class='popup' />").css("z-index",1111).appendTo("body").show(),r=function(){o.text("Storing image").addSpinner({"marginLeft":5}).center(),$.post("/plugins/schematics/save",i).done(function(t){o.remove(),e(t.img)}).fail(function(e){if(409===e.status){var t="Storing aborted";e.responseText.length<200&&(t=e.responseText),o.text(t+", will retry shortly").addSpinner({"marginLeft":5}).center(),setTimeout(r,1e4)}else o.remove(),alert("Failed to upload the schematic image.")})};r()}}},$(window).on("message",n)},"onRemove":function(){$(window).off("message",n)}})}var i=0,o=1,r=2,a=3;return{"init":n}}(),StackExchange.externalEditor=function(){function e(e){function t(e,t){function h(t){function i(){StackExchange.helpers.closePopups(v.add(o)),u()}var o,s=m||b.caret(),c=b[0].value||"",p=t?t.pos:s.start,d=t?t.len:s.end-s.start,h=c.substring(0,p),f=c.substring(p+d);m=null;var g=function(t,o){if(!t)return setTimeout(i,0),b.focus(),void 0;StackExchange.navPrevention.start();var r=void 0===o?n(t):o,a=h.replace(/(?:\r\n|\r|\n){1,2}$/,""),c=a+r+f.replace(/^(?:\r\n|\r|\n){1,2}/,""),l=s.start+r.length-h.length+a.length;setTimeout(function(){e.textOperation(function(){b.val(c).focus().caret(l,l)}),i()},0)},v=null;if(r){var y=r(t?t.payload:null);v=$("<iframe>",{"src":y})}else{var w=a(t?t.payload:null);v=$(w)}v.addClass("esc-remove").css({"position":"fixed","top":"2.5%","left":"2.5%","width":"95%","height":"95%","background":"white","z-index":1001}),$("body").loadPopup({"html":v,"target":$("body"),"lightbox":!0}).done(function(){$(window).resize(),l(g)})}$('<style type="text/css"> .wmd-'+i+"-button span { background-position: 0 0; } .wmd-"+i+"-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");var f,g,m,v=e.getConverter().hooks,b=$("#wmd-input"+t);b.on("keyup",function(e){var t=e.keyCode||e.charCode;if(8===t||46===t){var n=b.caret().start;b.caret(n,n)}}),v.chain("preConversion",function(e){var t=(e.match(/%/g)||[]).length,n=b.length?b[0].value||"":"";return f=new Array(t+2).join("%"),g=[],o(e,n,f,i,g)}),v.chain("postConversion",function(e){return e.replace(new RegExp(f+i+"-(\\d+)%","g"),function(e,t){return"<sup><a href='#' class='edit-"+i+"' data-id='"+t+"'>"+p+"</a></sup>"})});var y="The "+i+" editor does not support touch devices.",w=!1;$("#wmd-preview"+t).on("touchend",function(){w=!0}).on("click","a.edit-"+i,function(){return w?(alert(y),w=!1,!1):(w=!1,(!d||d())&&h(g[$(this).attr("data-id")]),!1)}),$("#wmd-input"+t).keyup(function(e){e.shiftKey||e.altKey||e.metaKey||!e.ctrlKey||77!==e.which||(!d||d())&&h()}),setTimeout(function(){var e=($("#wmd-button-bar"+t),$("#wmd-image-button"+t)),n=$("<li class='wmd-button wmd-"+i+"-button' id='wmd-"+i+"-button"+t+"' title='"+s+" Ctrl-M' />").insertAfter(e),o=!1,r=$("<span />").css({"backgroundImage":"url("+c+")"}).appendTo(n).on("touchend",function(){o=!0}).click(function(){return o?(alert(y),o=!1,void 0):(o=!1,(!d||d())&&h(),void 0)});$.browser.msie&&r.mousedown(function(){m=b.caret()})},0)}function n(e){return('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}]('+e+")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g,i)}var i=e.thingName,o=e.thingFinder,r=e.getIframeUrl,a=e.getDivContent,s=e.buttonTooltip,c=e.buttonImageUrl,l=e.onShow,u=e.onRemove||function(){},p=e.editLabel||"edit the above "+i,d=e.checkSupport;StackExchange.MarkdownEditor.creationCallbacks.add(t)}return{"init":e}}();