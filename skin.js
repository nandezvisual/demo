// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: 01.ggsk
// Generated 2025-10-20T18:55:36

function pano2vrSkin(player,base) {
	player.addVariable('var_color', 1, 0, { ignoreInState: 0  });
	player.addVariable('gallery_show_hide', 2, false, { ignoreInState: 0  });
	player.addVariable('gallery_pictures', 1, 0, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._fb_icon=document.createElement('div');
		el.ggId="FB_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fb_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fb_icon.onmouseenter=function (e) {
			me._fb_icon.style.transition='none';
			me._fb_icon.style.opacity='1';
			me._fb_icon.style.visibility=me._fb_icon.ggVisible?'inherit':'hidden';
			me._fb_icon.style.transition='none';
			me._fb_icon.ggParameter.sx=1.1;me._fb_icon.ggParameter.sy=1.1;
			me._fb_icon.style.transform=parameterToTransform(me._fb_icon.ggParameter);
			skin.updateSize(me._fb_icon);
			me.elementMouseOver['fb_icon']=true;
		}
		me._fb_icon.onmouseleave=function (e) {
			me._fb_icon.style.transition='none';
			me._fb_icon.style.opacity='0.8';
			me._fb_icon.style.visibility=me._fb_icon.ggVisible?'inherit':'hidden';
			me._fb_icon.style.transition='none';
			me._fb_icon.ggParameter.sx=1;me._fb_icon.ggParameter.sy=1;
			me._fb_icon.style.transform=parameterToTransform(me._fb_icon.ggParameter);
			skin.updateSize(me._fb_icon);
			me.elementMouseOver['fb_icon']=false;
		}
		me._fb_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZmFjZWJvb2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgd2lkdGg9IjI0Ij4KIDxwYXRoIGQ9Ik0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwIDEgMS0xaDN6Ii8+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._fb_icon.appendChild(me._svg_5);
		me.divSkin.appendChild(me._fb_icon);
		el=me._ig_icon=document.createElement('div');
		el.ggId="IG_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ig_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ig_icon.onmouseenter=function (e) {
			me._ig_icon.style.transition='none';
			me._ig_icon.style.opacity='1';
			me._ig_icon.style.visibility=me._ig_icon.ggVisible?'inherit':'hidden';
			me._ig_icon.style.transition='none';
			me._ig_icon.ggParameter.sx=1.1;me._ig_icon.ggParameter.sy=1.1;
			me._ig_icon.style.transform=parameterToTransform(me._ig_icon.ggParameter);
			skin.updateSize(me._ig_icon);
			me.elementMouseOver['ig_icon']=true;
		}
		me._ig_icon.onmouseleave=function (e) {
			me._ig_icon.style.transition='none';
			me._ig_icon.style.opacity='0.8';
			me._ig_icon.style.visibility=me._ig_icon.ggVisible?'inherit':'hidden';
			me._ig_icon.style.transition='none';
			me._ig_icon.ggParameter.sx=1;me._ig_icon.ggParameter.sy=1;
			me._ig_icon.style.transform=parameterToTransform(me._ig_icon.ggParameter);
			skin.updateSize(me._ig_icon);
			me.elementMouseOver['ig_icon']=false;
		}
		me._ig_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItaW5zdGFncmFtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCI+CiA8cmVjdCBoZWlnaHQ9IjIwIiB5PSIyIiByeT0iNSIgcng9IjUiIHg9IjIiIHdpZHRoPSIyMCIvPgogPHBhdGggZD0iTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3oiLz4KIDxsaW5lIH'+
			'gxPSIxNy41IiB5Mj0iNi41IiB4Mj0iMTcuNTEiIHkxPSI2LjUiLz4KPC9zdmc+Cg==';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me._ig_icon.appendChild(me._svg_7);
		me.divSkin.appendChild(me._ig_icon);
		el=me._info_icon=document.createElement('div');
		el.ggId="INFO_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_icon.onclick=function (e) {
			me._disclaimer.ggVisible = !me._disclaimer.ggVisible;
			var flag=me._disclaimer.ggVisible;
			me._disclaimer.style.transition='none';
			me._disclaimer.style.visibility=((flag)&&(Number(me._disclaimer.style.opacity)>0||!me._disclaimer.style.opacity))?'inherit':'hidden';
		}
		me._info_icon.onmouseenter=function (e) {
			me._info_icon.style.transition='none';
			me._info_icon.style.opacity='1';
			me._info_icon.style.visibility=me._info_icon.ggVisible?'inherit':'hidden';
			me._info_icon.style.transition='none';
			me._info_icon.ggParameter.sx=1.1;me._info_icon.ggParameter.sy=1.1;
			me._info_icon.style.transform=parameterToTransform(me._info_icon.ggParameter);
			skin.updateSize(me._info_icon);
			me.elementMouseOver['info_icon']=true;
		}
		me._info_icon.onmouseleave=function (e) {
			me._info_icon.style.transition='none';
			me._info_icon.style.opacity='0.8';
			me._info_icon.style.visibility=me._info_icon.ggVisible?'inherit':'hidden';
			me._info_icon.style.transition='none';
			me._info_icon.ggParameter.sx=1;me._info_icon.ggParameter.sy=1;
			me._info_icon.style.transform=parameterToTransform(me._info_icon.ggParameter);
			skin.updateSize(me._info_icon);
			me.elementMouseOver['info_icon']=false;
		}
		me._info_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItaW5mbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iMjQiPgogPGNpcmNsZSBjeT0iMTIiIGN4PSIxMiIgcj0iMTAiLz4KIDxsaW5lIHgxPSIxMiIgeTI9IjEyIiB4Mj0iMTIiIHkxPSIxNiIvPgogPGxpbmUgeDE9IjEyIiB5Mj0iOCIgeDI9IjEyLjAxIiB5MT0iOCIvPgo8L3N2Zz4K';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._info_icon.appendChild(me._svg_8);
		me.divSkin.appendChild(me._info_icon);
		el=me._video_icon=document.createElement('div');
		el.ggId="VIDEO_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_icon.onclick=function (e) {
			if (me._video_1.ggVideoNotLoaded) {
				me._video_1.ggInitMedia(me._video_1.ggVideoSource);
			}
			me._video_1.style.transition='none';
			me._video_1.style.visibility=(Number(me._video_1.style.opacity)>0||!me._video_1.style.opacity)?'inherit':'hidden';
			me._video_1.ggVisible=true;
		}
		me._video_icon.onmouseenter=function (e) {
			me._video_icon.style.transition='none';
			me._video_icon.style.opacity='1';
			me._video_icon.style.visibility=me._video_icon.ggVisible?'inherit':'hidden';
			me._video_icon.style.transition='none';
			me._video_icon.ggParameter.sx=1.1;me._video_icon.ggParameter.sy=1.1;
			me._video_icon.style.transform=parameterToTransform(me._video_icon.ggParameter);
			skin.updateSize(me._video_icon);
			me.elementMouseOver['video_icon']=true;
		}
		me._video_icon.onmouseleave=function (e) {
			me._video_icon.style.transition='none';
			me._video_icon.style.opacity='0.8';
			me._video_icon.style.visibility=me._video_icon.ggVisible?'inherit':'hidden';
			me._video_icon.style.transition='none';
			me._video_icon.ggParameter.sx=1;me._video_icon.ggParameter.sy=1;
			me._video_icon.style.transform=parameterToTransform(me._video_icon.ggParameter);
			skin.updateSize(me._video_icon);
			me.elementMouseOver['video_icon']=false;
		}
		me._video_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdmlkZW8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgd2lkdGg9IjI0Ij4KIDxwb2x5Z29uIHBvaW50cz0iMjMgNyAxNiAxMiAyMyAxNyAyMyA3Ii8+CiA8cmVjdCBoZWlnaHQ9IjE0IiB5PSI1IiByeT0iMiIgcng9IjIiIHg9IjEiIHdpZHRoPSIxNSIvPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 22px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._video_icon.appendChild(me._svg_6);
		me.divSkin.appendChild(me._video_icon);
		el=me._phone_icon=document.createElement('div');
		el.ggId="PHONE_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 13px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._phone_icon.onmouseenter=function (e) {
			me._phone_icon.style.transition='none';
			me._phone_icon.style.opacity='1';
			me._phone_icon.style.visibility=me._phone_icon.ggVisible?'inherit':'hidden';
			me._phone_icon.style.transition='none';
			me._phone_icon.ggParameter.sx=1.1;me._phone_icon.ggParameter.sy=1.1;
			me._phone_icon.style.transform=parameterToTransform(me._phone_icon.ggParameter);
			skin.updateSize(me._phone_icon);
			me.elementMouseOver['phone_icon']=true;
		}
		me._phone_icon.onmouseleave=function (e) {
			me._phone_icon.style.transition='none';
			me._phone_icon.style.opacity='0.8';
			me._phone_icon.style.visibility=me._phone_icon.ggVisible?'inherit':'hidden';
			me._phone_icon.style.transition='none';
			me._phone_icon.ggParameter.sx=1;me._phone_icon.ggParameter.sy=1;
			me._phone_icon.style.transform=parameterToTransform(me._phone_icon.ggParameter);
			skin.updateSize(me._phone_icon);
			me.elementMouseOver['phone_icon']=false;
		}
		me._phone_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItcGhvbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgd2lkdGg9IjI0Ij4KIDxwYXRoIGQ9Ik0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExID'+
			'JoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyeiIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 21px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._phone_icon.appendChild(me._svg_2);
		me.divSkin.appendChild(me._phone_icon);
		el=me._map_pin_icon=document.createElement('div');
		el.ggId="MAP PIN_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 13px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_pin_icon.onclick=function (e) {
			me._map.ggVisible = !me._map.ggVisible;
			var flag=me._map.ggVisible;
			if (me._map.ggVisible) {
				if (me._map.ggMapNotLoaded && me._map.ggInitMap) {
					me._map.ggInitMap(false);
					me._map.ggInitMapMarkers(true);
				}
			} else {
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			me._map.style.transition='none';
			me._map.style.visibility=((flag)&&(Number(me._map.style.opacity)>0||!me._map.style.opacity))?'inherit':'hidden';
		}
		me._map_pin_icon.onmouseenter=function (e) {
			me._map_pin_icon.style.transition='none';
			me._map_pin_icon.style.opacity='1';
			me._map_pin_icon.style.visibility=me._map_pin_icon.ggVisible?'inherit':'hidden';
			me._map_pin_icon.style.transition='none';
			me._map_pin_icon.ggParameter.sx=1.1;me._map_pin_icon.ggParameter.sy=1.1;
			me._map_pin_icon.style.transform=parameterToTransform(me._map_pin_icon.ggParameter);
			skin.updateSize(me._map_pin_icon);
			me.elementMouseOver['map_pin_icon']=true;
		}
		me._map_pin_icon.onmouseleave=function (e) {
			me._map_pin_icon.style.transition='none';
			me._map_pin_icon.style.opacity='0.8';
			me._map_pin_icon.style.visibility=me._map_pin_icon.ggVisible?'inherit':'hidden';
			me._map_pin_icon.style.transition='none';
			me._map_pin_icon.ggParameter.sx=1;me._map_pin_icon.ggParameter.sy=1;
			me._map_pin_icon.style.transform=parameterToTransform(me._map_pin_icon.ggParameter);
			skin.updateSize(me._map_pin_icon);
			me.elementMouseOver['map_pin_icon']=false;
		}
		me._map_pin_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin=document.createElement('div');
		els=me._map_pin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWFwLXBpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iMjQiPgogPHBhdGggZD0iTTIxIDEwYzAgNy05IDEzLTkgMTNzLTktNi05LTEzYTkgOSAwIDAgMSAxOCAweiIvPgogPGNpcmNsZSBjeT0iMTAiIGN4PSIxMiIgcj0iMyIvPgo8L3N2Zz4K';
		me._map_pin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="MAP PIN";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 22px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin_icon.appendChild(me._map_pin);
		me.divSkin.appendChild(me._map_pin_icon);
		el=me._prev_next_buttons=document.createElement('div');
		el.ggId="PREV- NEXT BUTTONS";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : 11px;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((107px + 2px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 107px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._prev_next_buttons.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._prev_next_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._prev_icon=document.createElement('div');
		el.ggId="PREV_ICON";
		el.ggDx=-24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 2px) / 2) - 24px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._prev_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._prev_icon.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._prev_icon.onmouseenter=function (e) {
			me._prev_icon.style.transition='none';
			me._prev_icon.style.opacity='1';
			me._prev_icon.style.visibility=me._prev_icon.ggVisible?'inherit':'hidden';
			me._prev_icon.style.transition='none';
			me._prev_icon.ggParameter.sx=1.1;me._prev_icon.ggParameter.sy=1.1;
			me._prev_icon.style.transform=parameterToTransform(me._prev_icon.ggParameter);
			skin.updateSize(me._prev_icon);
			me.elementMouseOver['prev_icon']=true;
		}
		me._prev_icon.onmouseleave=function (e) {
			me._prev_icon.style.transition='none';
			me._prev_icon.style.opacity='0.8';
			me._prev_icon.style.visibility=me._prev_icon.ggVisible?'inherit':'hidden';
			me._prev_icon.style.transition='none';
			me._prev_icon.ggParameter.sx=1;me._prev_icon.ggParameter.sy=1;
			me._prev_icon.style.transform=parameterToTransform(me._prev_icon.ggParameter);
			skin.updateSize(me._prev_icon);
			me.elementMouseOver['prev_icon']=false;
		}
		me._prev_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYXJyb3ctbGVmdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iMjQiPgogPGxpbmUgeDE9IjE5IiB5Mj0iMTIiIHgyPSI1IiB5MT0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE5IDUgMTIgMTIgNSIvPgo8L3N2Zz4K';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._prev_icon.appendChild(me._svg_4);
		me._prev_next_buttons.appendChild(me._prev_icon);
		el=me._next_icon=document.createElement('div');
		el.ggId="NEXT_ICON";
		el.ggDx=19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 2px) / 2) + 19px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._next_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._next_icon.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._next_icon.onmouseenter=function (e) {
			me._next_icon.style.transition='none';
			me._next_icon.style.opacity='1';
			me._next_icon.style.visibility=me._next_icon.ggVisible?'inherit':'hidden';
			me._next_icon.style.transition='none';
			me._next_icon.ggParameter.sx=1.1;me._next_icon.ggParameter.sy=1.1;
			me._next_icon.style.transform=parameterToTransform(me._next_icon.ggParameter);
			skin.updateSize(me._next_icon);
			me.elementMouseOver['next_icon']=true;
		}
		me._next_icon.onmouseleave=function (e) {
			me._next_icon.style.transition='none';
			me._next_icon.style.opacity='0.8';
			me._next_icon.style.visibility=me._next_icon.ggVisible?'inherit':'hidden';
			me._next_icon.style.transition='none';
			me._next_icon.ggParameter.sx=1;me._next_icon.ggParameter.sy=1;
			me._next_icon.style.transform=parameterToTransform(me._next_icon.ggParameter);
			skin.updateSize(me._next_icon);
			me.elementMouseOver['next_icon']=false;
		}
		me._next_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYXJyb3ctcmlnaHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgd2lkdGg9IjI0Ij4KIDxsaW5lIHgxPSI1IiB5Mj0iMTIiIHgyPSIxOSIgeTE9IjEyIi8+CiA8cG9seWxpbmUgcG9pbnRzPSIxMiA1IDE5IDEyIDEyIDE5Ii8+Cjwvc3ZnPgo=';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
			player.openNext("","");
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._next_icon.appendChild(me._svg_3);
		me._prev_next_buttons.appendChild(me._next_icon);
		me.divSkin.appendChild(me._prev_next_buttons);
		el=me._titles=document.createElement('div');
		el.ggId="TITLES";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 244px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 265px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._titles.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._titles.ggUpdatePosition=function (useTransition) {
		}
		el=me._los_sabores_perdidos=document.createElement('div');
		els=me._los_sabores_perdidos__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="LOS SABORES PERDIDOS";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 18px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 183px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._los_sabores_perdidos.ggUpdateText=function() {
			var params = [];
			var hs = player._("Los Sabores Perdidos - Int.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._los_sabores_perdidos.ggUpdateText();
		el.appendChild(els);
		me._los_sabores_perdidos.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._los_sabores_perdidos.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._los_sabores_perdidos.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._los_sabores_perdidos.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._los_sabores_perdidos.style.transition='background-color 0s, color 0s';
				if (me._los_sabores_perdidos.ggCurrentLogicStateBackgroundColor == 0) {
					me._los_sabores_perdidos.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._los_sabores_perdidos.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._los_sabores_perdidos.logicBlock_backgroundcolor();
		me._los_sabores_perdidos.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._los_sabores_perdidos.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._los_sabores_perdidos.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._los_sabores_perdidos.style.transition='background-color 0s, color 0s';
				if (me._los_sabores_perdidos.ggCurrentLogicStateTextColor == 0) {
					me._los_sabores_perdidos.style.color="rgba(0,0,0,1)";
				}
				else {
					me._los_sabores_perdidos.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._los_sabores_perdidos.logicBlock_textcolor();
		me._los_sabores_perdidos.onclick=function (e) {
			player.setVariableValue('var_color', Number("3.00"));
			player.openNext("{node4}","");
		}
		me._los_sabores_perdidos.onmouseenter=function (e) {
			player.setVariableValue('var_color', Number("3.00"));
			me.elementMouseOver['los_sabores_perdidos']=true;
		}
		me._los_sabores_perdidos.onmouseleave=function (e) {
			player.setVariableValue('var_color', Number("0.00"));
			me.elementMouseOver['los_sabores_perdidos']=false;
		}
		me._los_sabores_perdidos.ggUpdatePosition=function (useTransition) {
		}
		me._titles.appendChild(me._los_sabores_perdidos);
		el=me._vista_interior=document.createElement('div');
		els=me._vista_interior__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="VISTA INTERIOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 18px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._vista_interior.ggUpdateText=function() {
			var params = [];
			var hs = player._("Los Sabores Perdidos", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._vista_interior.ggUpdateText();
		el.appendChild(els);
		me._vista_interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vista_interior.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("2")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vista_interior.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vista_interior.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vista_interior.style.transition='background-color 0s, color 0s';
				if (me._vista_interior.ggCurrentLogicStateBackgroundColor == 0) {
					me._vista_interior.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vista_interior.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._vista_interior.logicBlock_backgroundcolor();
		me._vista_interior.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("2")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._vista_interior.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._vista_interior.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._vista_interior.style.transition='background-color 0s, color 0s';
				if (me._vista_interior.ggCurrentLogicStateTextColor == 0) {
					me._vista_interior.style.color="rgba(0,0,0,1)";
				}
				else {
					me._vista_interior.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._vista_interior.logicBlock_textcolor();
		me._vista_interior.onclick=function (e) {
			player.setVariableValue('var_color', Number("2.00"));
			player.openNext("{node5}","");
		}
		me._vista_interior.onmouseenter=function (e) {
			player.setVariableValue('var_color', Number("2.00"));
			me.elementMouseOver['vista_interior']=true;
		}
		me._vista_interior.onmouseleave=function (e) {
			player.setVariableValue('var_color', Number("0.00"));
			me.elementMouseOver['vista_interior']=false;
		}
		me._vista_interior.ggUpdatePosition=function (useTransition) {
		}
		me._titles.appendChild(me._vista_interior);
		el=me.__2da_vista_area=document.createElement('div');
		els=me.__2da_vista_area__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2DA VISTA A\xc9REA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 18px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2da_vista_area.ggUpdateText=function() {
			var params = [];
			var hs = player._("Vista A\xe9rea Secundaria", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2da_vista_area.ggUpdateText();
		el.appendChild(els);
		me.__2da_vista_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2da_vista_area.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("4")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2da_vista_area.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2da_vista_area.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2da_vista_area.style.transition='background-color 0s, color 0s';
				if (me.__2da_vista_area.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2da_vista_area.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__2da_vista_area.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__2da_vista_area.logicBlock_backgroundcolor();
		me.__2da_vista_area.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("4")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2da_vista_area.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2da_vista_area.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2da_vista_area.style.transition='background-color 0s, color 0s';
				if (me.__2da_vista_area.ggCurrentLogicStateTextColor == 0) {
					me.__2da_vista_area.style.color="rgba(0,0,0,1)";
				}
				else {
					me.__2da_vista_area.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2da_vista_area.logicBlock_textcolor();
		me.__2da_vista_area.onclick=function (e) {
			player.setVariableValue('var_color', Number("4.00"));
			player.openNext("{node2}","");
		}
		me.__2da_vista_area.onmouseenter=function (e) {
			player.setVariableValue('var_color', Number("4.00"));
			me.elementMouseOver['_2da_vista_area']=true;
		}
		me.__2da_vista_area.onmouseleave=function (e) {
			player.setVariableValue('var_color', Number("0.00"));
			me.elementMouseOver['_2da_vista_area']=false;
		}
		me.__2da_vista_area.ggUpdatePosition=function (useTransition) {
		}
		me._titles.appendChild(me.__2da_vista_area);
		el=me._vista_principal=document.createElement('div');
		els=me._vista_principal__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="VISTA PRINCIPAL";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 18px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._vista_principal.ggUpdateText=function() {
			var params = [];
			var hs = player._("Vista A\xe9rea Principal", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._vista_principal.ggUpdateText();
		el.appendChild(els);
		me._vista_principal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vista_principal.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("1")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vista_principal.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vista_principal.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vista_principal.style.transition='background-color 0s, color 0s';
				if (me._vista_principal.ggCurrentLogicStateBackgroundColor == 0) {
					me._vista_principal.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vista_principal.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._vista_principal.logicBlock_backgroundcolor();
		me._vista_principal.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("1")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._vista_principal.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._vista_principal.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._vista_principal.style.transition='background-color 0s, color 0s';
				if (me._vista_principal.ggCurrentLogicStateTextColor == 0) {
					me._vista_principal.style.color="rgba(0,0,0,1)";
				}
				else {
					me._vista_principal.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._vista_principal.logicBlock_textcolor();
		me._vista_principal.onclick=function (e) {
			player.setVariableValue('var_color', Number("1.00"));
			player.openNext("{node3}","");
		}
		me._vista_principal.onmouseenter=function (e) {
			player.setVariableValue('var_color', Number("1.00"));
			me.elementMouseOver['vista_principal']=true;
		}
		me._vista_principal.onmouseleave=function (e) {
			player.setVariableValue('var_color', Number("0.00"));
			me.elementMouseOver['vista_principal']=false;
		}
		me._vista_principal.ggUpdatePosition=function (useTransition) {
		}
		me._titles.appendChild(me._vista_principal);
		me.divSkin.appendChild(me._titles);
		el=me._home_icon=document.createElement('div');
		el.ggId="HOME_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._home_icon.onclick=function (e) {
			me._titles.ggVisible = !me._titles.ggVisible;
			var flag=me._titles.ggVisible;
			me._titles.style.transition='none';
			me._titles.style.visibility=((flag)&&(Number(me._titles.style.opacity)>0||!me._titles.style.opacity))?'inherit':'hidden';
		}
		me._home_icon.onmouseenter=function (e) {
			me._home_icon.style.transition='none';
			me._home_icon.ggParameter.sx=1.1;me._home_icon.ggParameter.sy=1.1;
			me._home_icon.style.transform=parameterToTransform(me._home_icon.ggParameter);
			skin.updateSize(me._home_icon);
			me._home_icon.style.transition='none';
			me._home_icon.style.opacity='1';
			me._home_icon.style.visibility=me._home_icon.ggVisible?'inherit':'hidden';
			me.elementMouseOver['home_icon']=true;
		}
		me._home_icon.onmouseleave=function (e) {
			me._home_icon.style.transition='none';
			me._home_icon.ggParameter.sx=1;me._home_icon.ggParameter.sy=1;
			me._home_icon.style.transform=parameterToTransform(me._home_icon.ggParameter);
			skin.updateSize(me._home_icon);
			me._home_icon.style.transition='none';
			me._home_icon.style.opacity='0.8';
			me._home_icon.style.visibility=me._home_icon.ggVisible?'inherit':'hidden';
			me.elementMouseOver['home_icon']=false;
		}
		me._home_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._home=document.createElement('div');
		els=me._home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1My43OSA1NC41OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0ibW9vbiI+CiA8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjkuNS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogMi4xLjAgQnVpbGQgMTM3KSAgLS0+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5zdDAgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjZmJmYmVmOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKIC'+
			'AgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMS41cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4wNSwxOS43MkwyNy40NSwzLjg1bDIwLjQsMTUuODd2MjQuOTNjMCwyLjUtMi4wMyw0LjUzLTQuNTMsNC41M0gxMS41OGMtMi41LDAtNC41My0yLjAzLTQuNTMtNC41M3YtMjQuOTNaIi8+CiA8cG9seWxpbmUgcG9pbnRzPSIyMC42NSA0OS4xOSAyMC42NSAyNi41MiAzNC4yNSAyNi41MiAzNC4yNSA0OS4xOSIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._home__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="HOME";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		me._home_icon.appendChild(me._home);
		me.divSkin.appendChild(me._home_icon);
		el=me._close_icon=document.createElement('div');
		el.ggId="CLOSE_ICON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_icon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_icon.onclick=function (e) {
			me._titles.style.transition='none';
			me._titles.style.visibility='hidden';
			me._titles.ggVisible=false;
			player.openNext("{node3}","");
		}
		me._close_icon.onmouseenter=function (e) {
			me._close_icon.style.transition='none';
			me._close_icon.ggParameter.sx=1.1;me._close_icon.ggParameter.sy=1.1;
			me._close_icon.style.transform=parameterToTransform(me._close_icon.ggParameter);
			skin.updateSize(me._close_icon);
			me._close_icon.style.transition='none';
			me._close_icon.style.opacity='1';
			me._close_icon.style.visibility=me._close_icon.ggVisible?'inherit':'hidden';
			me.elementMouseOver['close_icon']=true;
		}
		me._close_icon.onmouseleave=function (e) {
			me._close_icon.style.transition='none';
			me._close_icon.ggParameter.sx=1;me._close_icon.ggParameter.sy=1;
			me._close_icon.style.transform=parameterToTransform(me._close_icon.ggParameter);
			skin.updateSize(me._close_icon);
			me._close_icon.style.transition='none';
			me._close_icon.style.opacity='0.8';
			me._close_icon.style.visibility=me._close_icon.ggVisible?'inherit':'hidden';
			me.elementMouseOver['close_icon']=false;
		}
		me._close_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB3aWR0aD0iMjQiPgogPGxpbmUgeDE9IjE4IiB5Mj0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeDE9IjYiIHkyPSIxOCIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.openNext("{node3}","");
			me._titles.style.transition='none';
			me._titles.style.visibility='hidden';
			me._titles.ggVisible=false;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._close_icon.appendChild(me._svg_1);
		me.divSkin.appendChild(me._close_icon);
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'googleroadmap';
		el.ggId="MAP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : 66px;';
		hs+='height : 39.6296%;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 28.78%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map);
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if (me._video_1__vid) {
				me._video_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('video');
			me._video_1__vid.className='ggskin ggskin_video';
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_1__vid.setAttribute('controlsList', 'nodownload');
			me._video_1__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_1__vid.setAttribute('autoplay', '');
			me._video_1__vid.muted = true;
			me._video_1__vid.volume = 0.0;
			me._video_1__source=document.createElement('source');
			me._video_1__source.setAttribute('src', media);
			me._video_1__vid.setAttribute('playsinline', 'playsinline');
			me._video_1__vid.setAttribute('style', ';');
			me._video_1__vid.style.outline = 'none';
			me._video_1__vid.appendChild(me._video_1__source);
			me._video_1.appendChild(me._video_1__vid);
			var videoEl = player.registerVideoElement('Video 1', me._video_1__vid);
			videoEl.autoplay = true;
			player.changeVolume('Video 1', 0.0);
			notifySeekbars();
			if (me._video_1.ggMediaEnded) {
				me._video_1__vid.addEventListener('ended', me._video_1.ggMediaEnded);
			}
			me._video_1.ggVideoSource = media;
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if (me._video_1__vid != null) {
				return (me._video_1__vid.paused == false && me._video_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_1.ggMediaEnded=function () {
			me._video_1.ggInitMedia('');
			me._video_1.style.transition='none';
			me._video_1.style.visibility='hidden';
			me._video_1.ggVisible=false;
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_1);
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_logo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAwCAYAAABzN7QCAAAACXBIWXMAAAhOAAAITgGMMQDsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2ESURBVHgB7V0JtFVVGf4fooKCgCKaseyapWYOaCjOPnHMTFtqLpeWOA+tSlB0manvYZbmAGrlQtNwaZKEyxxDRMEhTSvRogGK4SFgCiTILA/f3/e7/73uvod779n7DLwH73xrfWvfffa/p3POnv7973OJChQokBsaqB3AzL3hHASubmhoeJkKFNhE0YU2ENCo+oDng6PgfRssgX+gAgUKpAMa1a7gfDb4BLyUChQokB5oTJuBz3AZj1OBAp0EG2KKeBr4Netpa2ubQQUKdBLk2sAwWvWEM6Iiwy5d1lCBAp0EeY9gJ4F7uBfWrVu3ORUo0EmQdwO7JHqha9'+
			'euH1GBAp0EuTUwTA/3gXNklaB1VKBAJ0GeI9jQGteXUoECnQS5WHJg9NoRzlxwi0jQJ+DAhoaGd6idgTIOgXMleCfK86vAuJfDORMcgrj/phRAWsfAuRpsRlqvUwogrbPg7AeKpYw8gx5O8FpwGjgPfAucivxWUQCQ/i5wbgVHxZUVsgPh3AY+BtlfUEogPemwB4GXIb2lMbJNcBrBFeD74EqwVd02cCEoyrbNwO3BbuCWZGZXc5H+/dSRIRXk6phUJ85A8NfgHbQBgHye1jKNCYizsxNP8ENKCaQxXdN6g1IA8bcE17A/PgLvlX3KgDxu17jPeciOVtkl4OcpBRB/e6fcg2Jk9+D0aKSM0JUyBgono+KQKkEzwXOqyB4Byot6rF6eh+vXohf5mPJFjxBhlGl/OE+C/fWSdBapemakeSqc3dU7CP5+qPdCSoY+ZHph'+
			'wSvgbCdMnrPUV0a1L4G9wG3Ai8mYrB1PfrAa4O08ZN9XV0bTCajbMajbPEqGXZ3fH5I/niAzKkkZZJTqq67Uvzu4GhSlm8ysllBZP9BCHRW4kUdW6RH+AvZyZDYHTwZfqdGDDKKcgTymaF4/85A9BFzmlO8mygBI5/lIvROP3ojb20nn9BjZ3diMXhYXkV8ezSr/Hw/Z6yJ1m8HGyDsYMqI46ZRiZEuO7GG0qQGVGu9UsAW8ms1IJWG9wG/JA+L6+DnlDOTxR83r5hi5/cGPVXYBm5Esi/wHOvWdpq5M2/pSAkg8J70zPeNMUfmZnvK2gc3xkL2wynN9mhKAKxtY/xhZ9z400qYENmuUNvBv4KVcblifAYexmY/7QKaJW1KOQPqval6j68icpvURvAvuSxmBy2u5OeC24Er130YJwGZW0KppXOAZZ7Bzz0se8tfYMn'+
			'vInq6yUqYbnHxup0BwZQPrGyO7STewO9n09juoX6zoRzoPPgQHU45A+pM0nzE1wi9yyjIH3JsyAtLax0l7iF6zo4N0QkmnUi2axjWe8js55TjUQz6kgbmNohv4lOM/lgIQSat3jGx/R7aR2hmZ7YOhMrJoPo+MWvYDfSFl6jGMkilTvk35YkWtAJRd6nGfekVZcCzqNI2ywxXqtoAP6W8ZSUVtLi/QUEoGVtfrfqNO7zneL3pECTEScO+vKBZEwfWB+u/DPd6W8kHmirs0yHKj+XvgVuAt6pe9nURzboUoQbpRfqiqRdTGZffF/goOxovotUbxAZup2FnqvQVpf9oo4IrWzWolL4dcEptNW6fFPsJcqUya5RHF7j/5rBMrGpjuXZ2t/hIoU/Re5Ad3ubBRWQJl0sBwo0RFPBy8R3p6+KU33Br8ASXHZ8GvUH5Yr6dj'+
			's4FsG9c/wVNQn7mULU4ko+6WbYjoftJ4dWUU81Wdu7Ad0mpP+cvUbUE9X/WQty+3zyixngzyeBHODerdE3wW99wnLbez6XynMXCTbgaXg9upf4xMEXXu/Q4nx72UE5D2OM3jEfU3OfnOZo9Ff4I85fDpHM2j1trvNQ2P3cytEvddjTvMQ7bk1Pd88gDkzlX5RR6yhznp7xgJa3bCYvcSIXOmysZ2HJKXk3YjtTNSj2CohIw00vOPRg/1P/jleEofGclA6W2ep+Q4hfObJi5TVzSfohRoVr+MXDItbKHsIevKkv6utZdmR7HjOFzZYTfn6069kO4X4ExRr6zDfkt+sM9ihYdszZEJ97aZytPh77AqeuqgZ0C+7gjnbaWSF7JYEF5HpqGOVL80thud8AfBqygZRBt5AOgzfQmFXXN8GbQbkrLmOkHXQ3mgSd1xyKPWmu'+
			'dB8Kdk7DhF2dFM/pC1lzSe4/HSRsOkI5TnLY1Epqnb6PXhKIvPi0uUrQJB3hPRXA4ARfv8JsoxvYbs1ur6TA9dGRlxD4+ESx1EwdJd/dLRyr2ejfwTbZHkBhR+Tzb7RHer/3PgCxEZmSZO5eT4JeUALm+ErgYX6u8V4G6UA5DueU6d9oqRtdNXmRF4v9SQ/TOHYSl7WnFo+sM03nwPWVe1vmMNGZmm2r3ROVxjxOaw7YG+nBx7UMZI2yPJSCU9xk/Uf6Xz+1PINJFNo9uPkuHriN8d6fgu3H3hLthFmybGtv3AicjvcOQX+xIFwi7uxyLtv8fI3gWeQaanlW+ajCM/2Bd0MZU1iTJiSV3FxlEs6kUhZTfMZSopKvND4A5FueIOw9qRpJXCUPU9k2k4m/WffAipBD5Apr5RhGgOXe2waH/t6NxbyyF+a4NoyyYjmEyV'+
			'Y03ANhhwYw7QVj9S/TuAk/W3WED8CbyfzfcQ9+R0OIIyBpcX7Kz+A7lsjf4CqxVK1nnJfYuEiSnWSRyxOOeyGdOUgHzsRnOzh6xsdru2kA97xLHKCZ+R5Bgn7VKM7PWO7E1Vwi/QsFhjYe5gG82JgcJPBleB/dQ/CjxSfy9yKik9pBylCJ2+uPA+UhJQ/pOc9Hvotcuca7dSRkBaEzTNNyPXmyL1PNcJGxz6orDR5Aq+S55g89wsDo2RDWlgJzvp9veQH+vIHxwJs89qiUc6vUPvW4cDlw1V7egl1tnPOeFLbQ3b2trEQFYa2I2cHGIZ4rsp6VuH45z0uznX3fNeTZQSXKkOH+JcP7RKPSvMpPD7X3o9dhSDTFcnnVPIExrProNuipENaWDfVFkxk4udDbBpGLNs+qzmdhpmR8PYqWnkfjdSOyOpml42QWVn3lptXO'+
			'78Fjxpf+i8XubQYyn5LryMkplYsTvYSd11up1gIVYWU/W3vFA3UDqcqK6sf9wDp9U20aVxuZbwduRu5PgjPO7aw1crKM9HnslT6h0QIx7y/Kwac421Vokph7xP1ki5BD7iBNsOsEOZQfkgaQOTM1T7yuFAPPid8Xs3/H7JCZcpyj3g78FrECYH2qTXe5uS4wzKBxUPDWVdDudo0H4KYATqmMSqwsJuUTwasf2rZSGywPktx3assiKTM2g1YBvA1jFyIZ8YsI28BxtLn1joO2RV5UdzeS1pTbPWUmcDboK8gL7nj0ZwcszkgOPtHmWxavpVNcJLXLa6WAdeQYHgynXI4EjYFrz+gdNnq6TR7IQPqJOX94HLKnFf1HjjY+QuVblQa/oSBQDyjzlxm8Cr9LePksO9D1+ljR2oxG3Rl6eO7O6c7OiKQNZyW1BGcF6WhXVk'+
			'ZG05xylDM4Xl8brGm1EjvDsbDaN8v2I4uFUVmW3ADzWdiXXyctdgQX+uwWYvUDA0Ri6pqVSJAgD5nmxOwVvY75bENmyNbxHU0XRItLa2ih2ibwOTXvsNToasG5h9WVpj5GQkm+SU48fkl/7eTpxzKAW4chTbq47ceypzHXmCK4/27x0j63XPVDbxCKbxxaZwduQdiG3YGtfibGpnpLZF7NKlS5uvLObYMoeeSB0LdRfOapN4AvgbvXQt+xkhX6muWKo/ROkg/6lmj4oMryNnbRG9lAFsRqwfqXdCwJm3UGXDykB5e3xHzJxanMvbcYBlC1Va4bcLUmtl0MBC0xDtkBxj2Wi+US9KGjzYC8kYj4qy5WI2ezsnqwKnAmy2FOz0JPX3RUQTizTFukO2DYbg9/UxX2jal8t7aqIhlS8xSecm9odiHSJfXZbevZ/KyNTrEo'+
			'pHyLN2Zb21mi5QxwVaj5fsJTLa0prfRWTd01R012tSFvtFqTXW1pTN5we6Rcq3DOHeg0bu4IA1mMo3cPmDMyHIa4rIvr0imynuHU68mTXkmjjF9KhGmrJ4t/tVI6qEy1GY5RwOMRjYybMM9p75HBv5hs2AUoIrP6TUI0a2D6fDfznhJxuqIYsDl0F2abon4m3+kyNa1J2ue0GxkCkuKFM/+4LX0mpabd/DWR170X2iu9Q7v0q4jKSzPZKSEa2FzB7bUYg3OLJ9UA92y2B6gKxPmeLwfTJlfjTO8h/hYu3xGiXHDpQhUtvbsVn0T9bTqr5xxEj4egqDvAS76DouE0hPFfcZ5jpx5U/cp1eLz2bUEvvJxwOOgvjmO6Dep8fT1Mkzf9nwnoU8FnvIiumcnAsM+VhoJmAzhZejOzIFlM7HHQhkaiijcLW14SKU9x/UUcBG'+
			'HSvHUa4NmGokMZuSrxK1+wG6AgXaBWw2VcWC/lY2p5zryfo2MDlr9gRHLNALFOi0YGOYKUqMu7nG4UWPBraWzaedMz8AV6DAJgE258VkWvc78MBIWK0GtpjNV2C9ppoFCnR6oLHsAj4APgMexEZNH21gYgojZ7F6UoECBcLB5jPNYuwrhw9f1ob1Fngqh+3OFyhQoBbQmOT4gnz3/SgqUKBAgQIFChQo0AHxf/uTGGowIxVuAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 34px;';
		hs+='opacity : 0.49999;';
		hs+='position : absolute;';
		hs+='right : 18px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo.onclick=function (e) {
			player.openUrl("https:\/\/kabine.com.co\/","");
		}
		me._logo.onmouseenter=function (e) {
			me._logo.style.transition='none';
			me._logo.style.opacity='1';
			me._logo.style.visibility=me._logo.ggVisible?'inherit':'hidden';
			me.elementMouseOver['logo']=true;
		}
		me._logo.onmouseleave=function (e) {
			me._logo.style.transition='none';
			me._logo.style.opacity='0.5';
			me._logo.style.visibility=me._logo.ggVisible?'inherit':'hidden';
			me.elementMouseOver['logo']=false;
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._logo);
		el=me._disclaimer=document.createElement('div');
		els=me._disclaimer__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="DISCLAIMER";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 204px;';
		hs+='left : calc(50% - ((492px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((204px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 492px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._disclaimer.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h3>Disclaimer.<\/h3>\n<p>Las im\xe1genes fueron tomadas en la ubicaci\xf3n real de la propiedad y buscan ayudar a visualizar su entorno y orientaci\xf3n. Aunque muestran vistas reales, pueden\nvariar seg\xfan la unidad, altura o \xe1ngulo.<\/p>\n<p>Factores como iluminaci\xf3n, clima, vegetaci\xf3n o construcciones vecinas pueden\ncambiar con el tiempo y est\xe1n fuera del control del desarrollador o\npropietario. Estas im\xe1genes son solo de referencia y no constituyen una\ngarant\xeda ni representaci\xf3n contractual de las vistas o condiciones finales.<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._disclaimer.ggUpdateText();
		el.appendChild(els);
		me._disclaimer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._disclaimer.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._disclaimer);
		me.elementMouseOver['fb_icon']=false;
		me.elementMouseOver['ig_icon']=false;
		me.elementMouseOver['info_icon']=false;
		me.elementMouseOver['video_icon']=false;
		me.elementMouseOver['phone_icon']=false;
		me.elementMouseOver['map_pin_icon']=false;
		me.elementMouseOver['prev_icon']=false;
		me.elementMouseOver['next_icon']=false;
		me._los_sabores_perdidos.logicBlock_backgroundcolor();
		me._los_sabores_perdidos.logicBlock_textcolor();
		me.elementMouseOver['los_sabores_perdidos']=false;
		me._vista_interior.logicBlock_backgroundcolor();
		me._vista_interior.logicBlock_textcolor();
		me.elementMouseOver['vista_interior']=false;
		me.__2da_vista_area.logicBlock_backgroundcolor();
		me.__2da_vista_area.logicBlock_textcolor();
		me.elementMouseOver['_2da_vista_area']=false;
		me._vista_principal.logicBlock_backgroundcolor();
		me._vista_principal.logicBlock_textcolor();
		me.elementMouseOver['vista_principal']=false;
		me.elementMouseOver['home_icon']=false;
		me.elementMouseOver['close_icon']=false;
		me._map.ggMarkerInstances=[];
		me._map.ggLastNodeId=null;
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggLastLat = 0.0;
		me._map.ggLastLng = 0.0;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ff0000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggSetLayer=function(layerIndex) {
			if (Array.isArray(me._map.ggMapLayers) && layerIndex >= 0 && layerIndex < me._map.ggMapLayers.length) {
				me._map.ggMap.setMapTypeId(me._map.ggMapLayers[layerIndex]);
			}
		}
		me._map.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (!me._map.ggMapId) return;
			if (!me._map.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(me._map.ggLastLat, me._map.ggLastLng);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					mapOptions.restriction = {
						strictBounds: false,
						latLngBounds: {
							north: parseFloat(mapDetails['maplimits'][0]),
							east: parseFloat(mapDetails['maplimits'][1]),
							south: parseFloat(mapDetails['maplimits'][2]),
							west: parseFloat(mapDetails['maplimits'][3]),
						}
					}
				}
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'googlemap') {
					if (mapDetails.hasOwnProperty('googlelayerstyles')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['googlelayerstyles'].length; layerIndex++) {
							let layerStyle = mapDetails['googlelayerstyles'][layerIndex];
							if (layerStyle.indexOf('/') != -1) {
								var mapTypeId = 'custom' + layerIndex;
								me._map.ggMapLayers.push(mapTypeId);
								me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = layerStyle;
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: 19,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['googlelayernames'][layerIndex]
								})) ;
							} else {
								me._map.ggMapLayers.push(layerStyle);
							}
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.setMapTypeId(mapDetails['mapstyle']);
					}
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
							var mapTypeId = 'mapbox' + layerIndex;
							me._map.ggMapLayers.push(mapTypeId);
							me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
									if (!layerStyle.startsWith('mapbox:')) {
											if (layerStyle == 'satellite') {
												var urlString = 'https://api.mapbox.com/v4/mapbox.' + layerStyle +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
											} else {
												var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
											}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} else {
										layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7)
										var urlString = 'https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} 
								},
								maxZoom: 18,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['mapboxlayernames'][layerIndex]
							}));
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								if (mapDetails['styleurl'] == '') {
									if (mapDetails['mapstyle'] == 'satellite') {
										var urlString = 'https://api.mapbox.com/v4/mapbox.' + mapDetails["mapstyle"] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
									} else {
										var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails["mapstyle"] +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
									}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								} else {
									var styleurlstring = mapDetails['styleurl'];
									styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
									var urlString = 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								}
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: 18
						}));
					}
				}
				if (mapTypeId == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var mapTypeId = 'custom' + layerIndex;
							me._map.ggMapLayers.push(mapTypeId);
							me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = mapDetails['customlayerurltemplates'][layerIndex];
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex]),
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['customlayernames'][layerIndex]
							}));
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								var urlString = mapDetails['mapurltemplate'];
								urlString = urlString.replace('{s}', 'a');
								urlString = urlString.replace('{z}', zoom);
								urlString = urlString.replace('{x}', coord.x);
								urlString = urlString.replace('{y}', coord.y);
								return urlString;
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: mapDetails['mapmaxzoom']
						}));
					}
				}
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function(){
					me._map.ggRadar.update();
				});
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				me._map.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
					me._map.ggRadar.update();
				});
			}
			me._map.ggMapNotLoaded = false;
		}
		me._map.ggClearMap=function() {
		me._map.ggClearMapMarkers();
		me._map.ggMap = null;
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map.ggGoogleMarkerArray=[];
		}
		me._map.ggCenterNode=function(nodeId) {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMapNotLoaded) return;
			if (!me._map.ggMap) return;
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						me._map.ggMap.setZoom(18);
					} else {
						me._map.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map.ggMap) return;
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map.ggGoogleMarkerArray[id] = marker;
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map.ggMapId = mapId;
			if (!me._map.ggMapNotLoaded) {
				me._map.ggLastZoom = me._map.ggMap.getZoom();
				me._map.ggLastLat = me._map.ggMap.getCenter().lat();
				me._map.ggLastLng = me._map.ggMap.getCenter().lng();
				me._map.ggClearMap();
				me._map.ggInitMap(true);
				me._map.ggInitMapMarkers(false);
			}
		}
		me._map.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map.mapHeightInDeg = me._map.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map.mapWidthInDeg = me._map.mapHeightInDeg * mapAR;
			}
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map.mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				var xMargin = (me._map.clientWidth * pixelInDeg - me._map.mapWidthInDeg) / 2;
				if (x < me._map.mapWidthInDeg / 2 - xMargin) x = me._map.mapWidthInDeg / 2 - xMargin;
				if (x > me._map.mapWidthInDeg / 2 + xMargin) x = me._map.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map.mapWidthInDeg - xOffset) x = me._map.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map.mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				var yMargin = (me._map.clientHeight * pixelInDeg - me._map.mapHeightInDeg) / 2;
				if (y < -me._map.mapHeightInDeg / 2 - yMargin) y = -me._map.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map.mapHeightInDeg / 2 + yMargin) y = -me._map.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map.mapHeightInDeg + yOffset) y = -me._map.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map.ggInCheckBounds = false;
		}
		me._video_1.ggInitMedia('media/KABIN.mp4');
		player.stopAutorotate();
		me.elementMouseOver['logo']=false;
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('HT-1')) {
				for(var i = 0; i < hotspotTemplates['HT-1'].length; i++) {
					hotspotTemplates['HT-1'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-2')) {
				for(var i = 0; i < hotspotTemplates['HT-2'].length; i++) {
					hotspotTemplates['HT-2'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-3')) {
				for(var i = 0; i < hotspotTemplates['HT-3'].length; i++) {
					hotspotTemplates['HT-3'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-4')) {
				for(var i = 0; i < hotspotTemplates['HT-4'].length; i++) {
					hotspotTemplates['HT-4'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-5')) {
				for(var i = 0; i < hotspotTemplates['HT-5'].length; i++) {
					hotspotTemplates['HT-5'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-6')) {
				for(var i = 0; i < hotspotTemplates['HT-6'].length; i++) {
					hotspotTemplates['HT-6'][i].ggEvent_changenode();
				}
			}
			me._los_sabores_perdidos.logicBlock_backgroundcolor();
			me._los_sabores_perdidos.logicBlock_textcolor();
			me._vista_interior.logicBlock_backgroundcolor();
			me._vista_interior.logicBlock_textcolor();
			me.__2da_vista_area.logicBlock_backgroundcolor();
			me.__2da_vista_area.logicBlock_textcolor();
			me._vista_principal.logicBlock_backgroundcolor();
			me._vista_principal.logicBlock_textcolor();
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (!me._map.ggMapNotLoaded) {
				me._map.ggCenterNode();
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
			me._map.ggRadar.update();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('HT-1')) {
				for(var i = 0; i < hotspotTemplates['HT-1'].length; i++) {
					hotspotTemplates['HT-1'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-2')) {
				for(var i = 0; i < hotspotTemplates['HT-2'].length; i++) {
					hotspotTemplates['HT-2'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-3')) {
				for(var i = 0; i < hotspotTemplates['HT-3'].length; i++) {
					hotspotTemplates['HT-3'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-4')) {
				for(var i = 0; i < hotspotTemplates['HT-4'].length; i++) {
					hotspotTemplates['HT-4'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-5')) {
				for(var i = 0; i < hotspotTemplates['HT-5'].length; i++) {
					hotspotTemplates['HT-5'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-6')) {
				for(var i = 0; i < hotspotTemplates['HT-6'].length; i++) {
					hotspotTemplates['HT-6'][i].ggEvent_configloaded();
				}
			}
			me._los_sabores_perdidos.logicBlock_backgroundcolor();
			me._los_sabores_perdidos.logicBlock_textcolor();
			me._vista_interior.logicBlock_backgroundcolor();
			me._vista_interior.logicBlock_textcolor();
			me.__2da_vista_area.logicBlock_backgroundcolor();
			me.__2da_vista_area.logicBlock_textcolor();
			me._vista_principal.logicBlock_backgroundcolor();
			me._vista_principal.logicBlock_textcolor();
			if (me._map.ggVisible) {
				me._map.ggClearMap();
				me._map.ggInitMap(false);
				me._map.ggInitMapMarkers(true);
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map.ggRadar.update();
		});
		player.addListener('varchanged_var_color', function(event) {
			if (hotspotTemplates.hasOwnProperty('HT-1')) {
				for(var i = 0; i < hotspotTemplates['HT-1'].length; i++) {
					hotspotTemplates['HT-1'][i].ggEvent_varchanged_var_color();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-2')) {
				for(var i = 0; i < hotspotTemplates['HT-2'].length; i++) {
					hotspotTemplates['HT-2'][i].ggEvent_varchanged_var_color();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-3')) {
				for(var i = 0; i < hotspotTemplates['HT-3'].length; i++) {
					hotspotTemplates['HT-3'][i].ggEvent_varchanged_var_color();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-4')) {
				for(var i = 0; i < hotspotTemplates['HT-4'].length; i++) {
					hotspotTemplates['HT-4'][i].ggEvent_varchanged_var_color();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-5')) {
				for(var i = 0; i < hotspotTemplates['HT-5'].length; i++) {
					hotspotTemplates['HT-5'][i].ggEvent_varchanged_var_color();
				}
			}
			if (hotspotTemplates.hasOwnProperty('HT-6')) {
				for(var i = 0; i < hotspotTemplates['HT-6'].length; i++) {
					hotspotTemplates['HT-6'][i].ggEvent_varchanged_var_color();
				}
			}
			me._los_sabores_perdidos.logicBlock_backgroundcolor();
			me._los_sabores_perdidos.logicBlock_textcolor();
			me._vista_interior.logicBlock_backgroundcolor();
			me._vista_interior.logicBlock_textcolor();
			me.__2da_vista_area.logicBlock_backgroundcolor();
			me.__2da_vista_area.logicBlock_textcolor();
			me._vista_principal.logicBlock_backgroundcolor();
			me._vista_principal.logicBlock_textcolor();
		});
	};
	function SkinHotspotClass_ht6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht6=document.createElement('div');
		el.ggId="HT-6";
		el.ggDx=-182;
		el.ggDy=-175;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 182px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 175px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht6.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht6.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht6.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._los_sabores_perdidos_ht6.style.transition='none';
			me._los_sabores_perdidos_ht6.style.visibility=(Number(me._los_sabores_perdidos_ht6.style.opacity)>0||!me._los_sabores_perdidos_ht6.style.opacity)?'inherit':'hidden';
			me._los_sabores_perdidos_ht6.ggVisible=true;
			me.elementMouseOver['ht6']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht6.onmouseleave=function (e) {
			me._los_sabores_perdidos_ht6.style.transition='none';
			me._los_sabores_perdidos_ht6.style.visibility='hidden';
			me._los_sabores_perdidos_ht6.ggVisible=false;
			me.elementMouseOver['ht6']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht6.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht6.appendChild(me._lottie_2);
		el=me._los_sabores_perdidos_ht6=document.createElement('div');
		els=me._los_sabores_perdidos_ht6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="LOS SABORES PERDIDOS_HT6";
		el.ggDx=105;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 7px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 29px;';
		hs+='left : calc(50% - ((130px + 14px) / 2) + 105px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((29px + 14px) / 2) + 3px);';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._los_sabores_perdidos_ht6.ggUpdateText=function() {
			var params = [];
			var hs = player._("Los Sabores Perdidos\nVista A\xe9rea", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._los_sabores_perdidos_ht6.ggUpdateText();
		el.appendChild(els);
		me._los_sabores_perdidos_ht6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._los_sabores_perdidos_ht6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._los_sabores_perdidos_ht6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._los_sabores_perdidos_ht6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._los_sabores_perdidos_ht6.style.transition='background-color 0s, color 0s';
				if (me._los_sabores_perdidos_ht6.ggCurrentLogicStateBackgroundColor == 0) {
					me._los_sabores_perdidos_ht6.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._los_sabores_perdidos_ht6.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._los_sabores_perdidos_ht6.logicBlock_backgroundcolor();
		me._los_sabores_perdidos_ht6.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._los_sabores_perdidos_ht6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._los_sabores_perdidos_ht6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._los_sabores_perdidos_ht6.style.transition='background-color 0s, color 0s';
				if (me._los_sabores_perdidos_ht6.ggCurrentLogicStateTextColor == 0) {
					me._los_sabores_perdidos_ht6.style.color="rgba(0,0,0,1)";
				}
				else {
					me._los_sabores_perdidos_ht6.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._los_sabores_perdidos_ht6.logicBlock_textcolor();
		me._los_sabores_perdidos_ht6.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
		}
		me._los_sabores_perdidos_ht6.ggUpdatePosition=function (useTransition) {
		}
		me._ht6.appendChild(me._los_sabores_perdidos_ht6);
		me.elementMouseOver['ht6']=false;
		me._los_sabores_perdidos_ht6.logicBlock_backgroundcolor();
		me._los_sabores_perdidos_ht6.logicBlock_textcolor();
			me.ggEvent_changenode=function() {
				me._los_sabores_perdidos_ht6.logicBlock_backgroundcolor();
				me._los_sabores_perdidos_ht6.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function() {
				me._los_sabores_perdidos_ht6.logicBlock_backgroundcolor();
				me._los_sabores_perdidos_ht6.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_var_color=function() {
				me._los_sabores_perdidos_ht6.logicBlock_backgroundcolor();
				me._los_sabores_perdidos_ht6.logicBlock_textcolor();
			};
			me.__div = me._ht6;
	};
	function SkinHotspotClass_ht5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht5=document.createElement('div');
		el.ggId="HT-5";
		el.ggDx=-184;
		el.ggDy=-105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 184px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 105px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht5.onclick=function (e) {
			player.openNext("{node3}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht5.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht5.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._kabine_ht5.style.transition='none';
			me._kabine_ht5.style.visibility=(Number(me._kabine_ht5.style.opacity)>0||!me._kabine_ht5.style.opacity)?'inherit':'hidden';
			me._kabine_ht5.ggVisible=true;
			me.elementMouseOver['ht5']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht5.onmouseleave=function (e) {
			me._kabine_ht5.style.transition='none';
			me._kabine_ht5.style.visibility='hidden';
			me._kabine_ht5.ggVisible=false;
			me.elementMouseOver['ht5']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht5.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_20=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_20.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_20.ggUpdatePosition=function (useTransition) {
		}
		me._ht5.appendChild(me._lottie_20);
		el=me._kabine_ht5=document.createElement('div');
		els=me._kabine_ht5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="KABINE_HT5";
		el.ggDx=60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 7px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((42px + 14px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 14px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._kabine_ht5.ggUpdateText=function() {
			var params = [];
			var hs = player._("Kabine", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._kabine_ht5.ggUpdateText();
		el.appendChild(els);
		me._kabine_ht5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._kabine_ht5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._kabine_ht5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._kabine_ht5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._kabine_ht5.style.transition='background-color 0s, color 0s';
				if (me._kabine_ht5.ggCurrentLogicStateBackgroundColor == 0) {
					me._kabine_ht5.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._kabine_ht5.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._kabine_ht5.logicBlock_backgroundcolor();
		me._kabine_ht5.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._kabine_ht5.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._kabine_ht5.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._kabine_ht5.style.transition='background-color 0s, color 0s';
				if (me._kabine_ht5.ggCurrentLogicStateTextColor == 0) {
					me._kabine_ht5.style.color="rgba(0,0,0,1)";
				}
				else {
					me._kabine_ht5.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._kabine_ht5.logicBlock_textcolor();
		me._kabine_ht5.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
		}
		me._kabine_ht5.ggUpdatePosition=function (useTransition) {
		}
		me._ht5.appendChild(me._kabine_ht5);
		me.elementMouseOver['ht5']=false;
		me._kabine_ht5.logicBlock_backgroundcolor();
		me._kabine_ht5.logicBlock_textcolor();
			me.ggEvent_changenode=function() {
				me._kabine_ht5.logicBlock_backgroundcolor();
				me._kabine_ht5.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function() {
				me._kabine_ht5.logicBlock_backgroundcolor();
				me._kabine_ht5.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_var_color=function() {
				me._kabine_ht5.logicBlock_backgroundcolor();
				me._kabine_ht5.logicBlock_textcolor();
			};
			me.__div = me._ht5;
	};
	function SkinHotspotClass_ht4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht4=document.createElement('div');
		el.ggId="HT-4";
		el.ggDx=-184;
		el.ggDy=-105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 184px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 105px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht4.onclick=function (e) {
			player.openNext("{node3}","");
			player.setVariableValue('var_color', Number("3.00"));
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht4.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht4.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._kabine_ht4.style.transition='none';
			me._kabine_ht4.style.visibility=(Number(me._kabine_ht4.style.opacity)>0||!me._kabine_ht4.style.opacity)?'inherit':'hidden';
			me._kabine_ht4.ggVisible=true;
			me.elementMouseOver['ht4']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht4.onmouseleave=function (e) {
			me._kabine_ht4.style.transition='none';
			me._kabine_ht4.style.visibility='hidden';
			me._kabine_ht4.ggVisible=false;
			me.elementMouseOver['ht4']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht4.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_21=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_21.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_21.ggUpdatePosition=function (useTransition) {
		}
		me._ht4.appendChild(me._lottie_21);
		el=me._kabine_ht4=document.createElement('div');
		els=me._kabine_ht4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="KABINE_HT4";
		el.ggDx=62;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 7px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((42px + 14px) / 2) + 62px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 14px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._kabine_ht4.ggUpdateText=function() {
			var params = [];
			var hs = player._("Kabine", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._kabine_ht4.ggUpdateText();
		el.appendChild(els);
		me._kabine_ht4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._kabine_ht4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._kabine_ht4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._kabine_ht4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._kabine_ht4.style.transition='background-color 0s, color 0s';
				if (me._kabine_ht4.ggCurrentLogicStateBackgroundColor == 0) {
					me._kabine_ht4.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._kabine_ht4.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._kabine_ht4.logicBlock_backgroundcolor();
		me._kabine_ht4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._kabine_ht4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._kabine_ht4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._kabine_ht4.style.transition='background-color 0s, color 0s';
				if (me._kabine_ht4.ggCurrentLogicStateTextColor == 0) {
					me._kabine_ht4.style.color="rgba(0,0,0,1)";
				}
				else {
					me._kabine_ht4.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._kabine_ht4.logicBlock_textcolor();
		me._kabine_ht4.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
		}
		me._kabine_ht4.ggUpdatePosition=function (useTransition) {
		}
		me._ht4.appendChild(me._kabine_ht4);
		me.elementMouseOver['ht4']=false;
		me._kabine_ht4.logicBlock_backgroundcolor();
		me._kabine_ht4.logicBlock_textcolor();
			me.ggEvent_changenode=function() {
				me._kabine_ht4.logicBlock_backgroundcolor();
				me._kabine_ht4.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function() {
				me._kabine_ht4.logicBlock_backgroundcolor();
				me._kabine_ht4.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_var_color=function() {
				me._kabine_ht4.logicBlock_backgroundcolor();
				me._kabine_ht4.logicBlock_textcolor();
			};
			me.__div = me._ht4;
	};
	function SkinHotspotClass_ht3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht3=document.createElement('div');
		el.ggId="HT-3";
		el.ggDx=-184;
		el.ggDy=-105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 184px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 105px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht3.onclick=function (e) {
			player.openNext("{node3}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht3.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht3.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._kabine_ht3.style.transition='none';
			me._kabine_ht3.style.visibility=(Number(me._kabine_ht3.style.opacity)>0||!me._kabine_ht3.style.opacity)?'inherit':'hidden';
			me._kabine_ht3.ggVisible=true;
			me.elementMouseOver['ht3']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht3.onmouseleave=function (e) {
			me._kabine_ht3.style.transition='none';
			me._kabine_ht3.style.visibility='hidden';
			me._kabine_ht3.ggVisible=false;
			me.elementMouseOver['ht3']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht3.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_22=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_22.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_22.ggUpdatePosition=function (useTransition) {
		}
		me._ht3.appendChild(me._lottie_22);
		el=me._kabine_ht3=document.createElement('div');
		els=me._kabine_ht3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="KABINE_HT3";
		el.ggDx=62;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 7px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((42px + 14px) / 2) + 62px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 14px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._kabine_ht3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Kabine", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._kabine_ht3.ggUpdateText();
		el.appendChild(els);
		me._kabine_ht3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._kabine_ht3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._kabine_ht3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._kabine_ht3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._kabine_ht3.style.transition='background-color 0s, color 0s';
				if (me._kabine_ht3.ggCurrentLogicStateBackgroundColor == 0) {
					me._kabine_ht3.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._kabine_ht3.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._kabine_ht3.logicBlock_backgroundcolor();
		me._kabine_ht3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._kabine_ht3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._kabine_ht3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._kabine_ht3.style.transition='background-color 0s, color 0s';
				if (me._kabine_ht3.ggCurrentLogicStateTextColor == 0) {
					me._kabine_ht3.style.color="rgba(0,0,0,1)";
				}
				else {
					me._kabine_ht3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._kabine_ht3.logicBlock_textcolor();
		me._kabine_ht3.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
		}
		me._kabine_ht3.ggUpdatePosition=function (useTransition) {
		}
		me._ht3.appendChild(me._kabine_ht3);
		me.elementMouseOver['ht3']=false;
		me._kabine_ht3.logicBlock_backgroundcolor();
		me._kabine_ht3.logicBlock_textcolor();
			me.ggEvent_changenode=function() {
				me._kabine_ht3.logicBlock_backgroundcolor();
				me._kabine_ht3.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function() {
				me._kabine_ht3.logicBlock_backgroundcolor();
				me._kabine_ht3.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_var_color=function() {
				me._kabine_ht3.logicBlock_backgroundcolor();
				me._kabine_ht3.logicBlock_textcolor();
			};
			me.__div = me._ht3;
	};
	function SkinHotspotClass_ht2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht2=document.createElement('div');
		el.ggId="HT-2";
		el.ggDx=-182;
		el.ggDy=-175;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 182px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 175px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht2.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht2.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._los_sabores_perdidos_ht2.style.transition='none';
			me._los_sabores_perdidos_ht2.style.visibility=(Number(me._los_sabores_perdidos_ht2.style.opacity)>0||!me._los_sabores_perdidos_ht2.style.opacity)?'inherit':'hidden';
			me._los_sabores_perdidos_ht2.ggVisible=true;
			me.elementMouseOver['ht2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht2.onmouseleave=function (e) {
			me._los_sabores_perdidos_ht2.style.transition='none';
			me._los_sabores_perdidos_ht2.style.visibility='hidden';
			me._los_sabores_perdidos_ht2.ggVisible=false;
			me.elementMouseOver['ht2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht2.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_23=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_23.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_23.ggUpdatePosition=function (useTransition) {
		}
		me._ht2.appendChild(me._lottie_23);
		el=me._los_sabores_perdidos_ht2=document.createElement('div');
		els=me._los_sabores_perdidos_ht2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="LOS SABORES PERDIDOS_HT2";
		el.ggDx=104;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 7px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 29px;';
		hs+='left : calc(50% - ((130px + 14px) / 2) + 104px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((29px + 14px) / 2) + 9px);';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._los_sabores_perdidos_ht2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Los Sabores Perdidos\nInterior\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._los_sabores_perdidos_ht2.ggUpdateText();
		el.appendChild(els);
		me._los_sabores_perdidos_ht2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._los_sabores_perdidos_ht2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._los_sabores_perdidos_ht2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._los_sabores_perdidos_ht2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._los_sabores_perdidos_ht2.style.transition='background-color 0s, color 0s';
				if (me._los_sabores_perdidos_ht2.ggCurrentLogicStateBackgroundColor == 0) {
					me._los_sabores_perdidos_ht2.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._los_sabores_perdidos_ht2.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._los_sabores_perdidos_ht2.logicBlock_backgroundcolor();
		me._los_sabores_perdidos_ht2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._los_sabores_perdidos_ht2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._los_sabores_perdidos_ht2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._los_sabores_perdidos_ht2.style.transition='background-color 0s, color 0s';
				if (me._los_sabores_perdidos_ht2.ggCurrentLogicStateTextColor == 0) {
					me._los_sabores_perdidos_ht2.style.color="rgba(0,0,0,1)";
				}
				else {
					me._los_sabores_perdidos_ht2.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._los_sabores_perdidos_ht2.logicBlock_textcolor();
		me._los_sabores_perdidos_ht2.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
		}
		me._los_sabores_perdidos_ht2.ggUpdatePosition=function (useTransition) {
		}
		me._ht2.appendChild(me._los_sabores_perdidos_ht2);
		me.elementMouseOver['ht2']=false;
		me._los_sabores_perdidos_ht2.logicBlock_backgroundcolor();
		me._los_sabores_perdidos_ht2.logicBlock_textcolor();
			me.ggEvent_changenode=function() {
				me._los_sabores_perdidos_ht2.logicBlock_backgroundcolor();
				me._los_sabores_perdidos_ht2.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function() {
				me._los_sabores_perdidos_ht2.logicBlock_backgroundcolor();
				me._los_sabores_perdidos_ht2.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_var_color=function() {
				me._los_sabores_perdidos_ht2.logicBlock_backgroundcolor();
				me._los_sabores_perdidos_ht2.logicBlock_textcolor();
			};
			me.__div = me._ht2;
	};
	function SkinHotspotClass_ht1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht1=document.createElement('div');
		el.ggId="HT-1";
		el.ggDx=-450;
		el.ggDy=-175;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 450px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 175px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht1.onclick=function (e) {
			player.openNext("{node5}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._los_sabores_perdidos_ht1.style.transition='none';
			me._los_sabores_perdidos_ht1.style.visibility=(Number(me._los_sabores_perdidos_ht1.style.opacity)>0||!me._los_sabores_perdidos_ht1.style.opacity)?'inherit':'hidden';
			me._los_sabores_perdidos_ht1.ggVisible=true;
			me.elementMouseOver['ht1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht1.onmouseleave=function (e) {
			me._los_sabores_perdidos_ht1.style.transition='none';
			me._los_sabores_perdidos_ht1.style.visibility='hidden';
			me._los_sabores_perdidos_ht1.ggVisible=false;
			me.elementMouseOver['ht1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht1.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_1=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_1.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 1";
		el.ggDx=6;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 6px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht1.appendChild(me._lottie_1);
		el=me._los_sabores_perdidos_ht1=document.createElement('div');
		els=me._los_sabores_perdidos_ht1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="LOS SABORES PERDIDOS_HT1";
		el.ggDx=109;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 7px solid rgba(0,0,0,0);';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 29px;';
		hs+='left : calc(50% - ((130px + 14px) / 2) + 109px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((29px + 14px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._los_sabores_perdidos_ht1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Los Sabores Perdidos\nVista A\xe9rea", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._los_sabores_perdidos_ht1.ggUpdateText();
		el.appendChild(els);
		me._los_sabores_perdidos_ht1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._los_sabores_perdidos_ht1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('var_color') == Number("3")))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._los_sabores_perdidos_ht1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._los_sabores_perdidos_ht1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._los_sabores_perdidos_ht1.style.transition='color 0s';
				if (me._los_sabores_perdidos_ht1.ggCurrentLogicStateTextColor == 0) {
					me._los_sabores_perdidos_ht1.style.color="rgba(0,0,0,1)";
				}
				else {
					me._los_sabores_perdidos_ht1.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._los_sabores_perdidos_ht1.logicBlock_textcolor();
		me._los_sabores_perdidos_ht1.onclick=function (e) {
			player.openNext("{node4}","");
			skin._titles.style.transition='none';
			skin._titles.style.visibility='hidden';
			skin._titles.ggVisible=false;
		}
		me._los_sabores_perdidos_ht1.ggUpdatePosition=function (useTransition) {
		}
		me._ht1.appendChild(me._los_sabores_perdidos_ht1);
		me.elementMouseOver['ht1']=false;
		me._los_sabores_perdidos_ht1.logicBlock_textcolor();
			me.ggEvent_changenode=function() {
				me._los_sabores_perdidos_ht1.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function() {
				me._los_sabores_perdidos_ht1.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_var_color=function() {
				me._los_sabores_perdidos_ht1.logicBlock_textcolor();
			};
			me.__div = me._ht1;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='HT-1') {
				hotspot.skinid = 'HT-1';
				hsinst = new SkinHotspotClass_ht1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='HT-2') {
				hotspot.skinid = 'HT-2';
				hsinst = new SkinHotspotClass_ht2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='HT-3') {
				hotspot.skinid = 'HT-3';
				hsinst = new SkinHotspotClass_ht3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='HT-4') {
				hotspot.skinid = 'HT-4';
				hsinst = new SkinHotspotClass_ht4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='HT-5') {
				hotspot.skinid = 'HT-5';
				hsinst = new SkinHotspotClass_ht5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'HT-6';
				hsinst = new SkinHotspotClass_ht6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};