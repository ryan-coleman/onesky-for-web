var adsLo;
try {adsLo=top.location.href}
catch (e){}
if (!adsLo||adsLo==null){
try {adsLo=window.location.href}
catch (e){}
}
adsLo=adsLo||"";
var adsUAC=adsLo.search(/atwUAC=/i),adsUACD=adsLo.search(/atwUACD=/i),adsUACH,atwInfo=0;
if (adsLo.search(/atwInfo=/i)>-1)atwInfo=1;
function adsLoadUAC(){
	var u,x;
	if (adsUAC>0)x=adsLo.substring(adsUAC+7,adsLo.length).replace(/&.*$/,'').split(/\||;/)
	else if (adsUACD>0)x=adsLo.substring(adsUACD+8,adsLo.length).replace(/&.*$/,'').split(/\||;/);
	if (x[1]&&x[1]=='b')adsUACH='//browsertest.web.aol.com/ads/'
	else if (x[1]&&x[1]=='s')adsUACH='//s.aolcdn.com/ads/'
	else adsUACH='https://scdn.uc.atwola.com/ads/';
	u=unescape(x[0]);
	if (/^[A-Za-z]+$/.test(unescape(u))){
   		if (adsUACD>0){
			var z=document.createElement('script');
			z.src=adsUACH+u+'.js';
			document.body.appendChild(z);
		} 
		else if (adsUAC>0){
			document.write('<script type="text/javascript" src="'+adsUACH+u+'.js"></scr','ipt>')
	   	}
	}	
}
if ((adsUAC>0||adsUACD>0)&&!window.adsUACH)adsLoadUAC()
else if (window.adsIn!=1){
adsIn=1;
window.atwUAC=window.atwUAC||{};
atwUAC.adsInfo=atwUAC.adsInfo||{};
var adsGUID=1,adsSecure=(location.protocol=='https:')?1:0,adsHt="",adsNt='5113.1',adsPl='221794',adsESN='',adsTp='J',
adsATOth='',adsTacOK=1,adsD=new Date(),aolAdFdBkStr='',adsAddOn=1,adsAJAXAddOn=0,adsCo='us',
adsVal='',adsCp=0,adsMNS,adsTPS,adsExcV='',adsLNm=0,adsKV,adsSz,adsPing,adsFileless=0,adsInVParm='',
adsUA=navigator.userAgent.toLowerCase(),adsIE,adsIEGT9=0,adsIELT10=0,
adsTile=1,adsPage='',adsDivs=[],adsCA,adsCF=[],adsCW=[],adsCH=[],adsCAd=[],adsChn='',adsScr=(window.s_265&&window.s_265.prop55)?window.s_265.prop55:adsD.getTime()%0x3b9aca00,adsRRDevil='',adsRRCalled='',
adsDev=(typeof window.onorientationchange!='undefined')?'1':'2',atwLoaded=0,atwReset=0,atwAdBlock=0;
if ((adsUA.indexOf('mobile')>-1)||(/android|iphone|ipad|playbook|hp-tablet|kindle|silk|webos|blackberry|opera mini/i).test(navigator.appVersion))adsDev='1';
if (!adsDev)adsDev='2';
if (!window.ATW3_AdObj){
try {
if (parent.window.ATW3_AdObj){
var ATW3_AdObj=parent.window.ATW3_AdObj;
adsScr=ATW3_AdObj.scr;
}else{
var ATW3_AdObj=new Object();
ATW3_AdObj.scr=adsScr;
ATW3_AdObj.tile=0;
parent.window.ATW3_AdObj=ATW3_AdObj; 
}}
catch (e){
var ATW3_AdObj=new Object();
ATW3_AdObj.scr=adsScr;
ATW3_AdObj.tile=0;
}}
else{
adsScr=ATW3_AdObj.scr;
}
atwUAC.browsInV=0;
atwUAC.rSetup=0;
atwUAC.focus=1;
function atwListen(v,e,f){
	if (v.addEventListener)v.addEventListener(e,f,false);
	else if (v.attachEvent)v.attachEvent(e,f);
}
function atwVisCh() {
	if (document[atwUAC.hidden])atwUAC.browsInV=1;
	else atwUAC.browsInV=0;
}
function atwGetVisiblePct(d) {
    var nH=d.offsetHeight,
        r=d.getBoundingClientRect(),
        aW=r.right-r.left,
        aH=r.bottom-r.top,
        vH=(r.top>=0&&(Math.min(window.innerHeight,r.bottom)-r.top)),
        vW=(r.left>=0&&(Math.min(window.innerWidth,r.right)-r.left));
    vH=vH||r.bottom;
    vW=vW||r.right;
    if (0>vH||0>vW||0===nH){
        return 0;
    }
    if (aH===0||aW===0){
        return 0;
    }
    return (100*vW*vH)/(aW*aH);
}
function adsReloadServer(dv){
	try {
	if (dv.rMN&&atwUAC.browsInV==0&&atwUAC.focus==1&&dv.mouseIn!=1&&atwGetVisiblePct(dv)>=50){
		var s=unescape(dv.adURL);
		if (s){
			s=s.replace(/alias=(.*?);/,"alias="+dv.rMN+";").replace(/kvmn=(.*?);/,"kvmn="+dv.rMN+";");
			if (dv.keepSize&&adsDevilAd.ad[dv.adNum+1]&&adsDevilAd.ad[dv.adNum+1].width&&adsDevilAd.ad[dv.adNum+1].height){
				if (s.indexOf('allowedSizes=')!=-1){
					s=s.replace(/allowedSizes=.*?;/,"size="+ adsDevilAd.ad[dv.adNum+1].width +"x"+ adsDevilAd.ad[dv.adNum+1].height +";");
				}
				else if (s.indexOf('size=')==-1){
					s=s.replace(/\/0\/-1\//, "\/0\/-1\/size="+ adsDevilAd.ad[dv.adNum+1].width +"x"+ adsDevilAd.ad[dv.adNum+1].height+";");
				}
			}
			dv.rTimes++;
			dv.adURL=s;
			dv.LoadAd();
		}
	}
	if (dv.rMN&&dv.rTimes<=dv.rMax)dv.timeout=setTimeout(function(){adsReloadServer(dv)},dv.rTime);
	}
	catch(e){}
}
function adsRotateMult(d,t,m,r){
	var dv=adsGetObj(d);
	if (dv){
		if (adsRotateTime)dv.rTime=parseInt(adsRotateTime)*1000;
		else if (t)dv.rTime=parseInt(t)*1000;
		else dv.rTime=30000;
		if (m)dv.rMax=parseInt(m);
		else dv.rMax=5;
		if (r)dv.keepSize=1;
		if (!dv.rTimes)dv.rTimes=1;
		if (dv.timeout){
			clearTimeout(dv.timeout);
			if (dv.rTimes<=dv.rMax){
				dv.timeout=setTimeout(function(){adsReloadServer(dv)},dv.rTime);
			}
		}
	}
}
function adsDisableGUID(){adsGUID=0}
var adsFilelessFlag='';
function adsDisableFileless(v){adsFilelessFlag=v};
function adsGUIDFn(e){
if (e.origin==='http://cdn.at.atwola.com'||e.origin==='https://cdn.at.atwola.com'){
	try {
		var x=e.data.toString().split('='),l;
		if (x.length==2&&x[0]=='guid'){
			l=localStorage.getItem('adsGUID');
			if ((x[1].indexOf('xxxyz')<0)||(!l)){
				x[1]=x[1].replace(/xxxyz/,'');
				localStorage.setItem('adsGUID', x[1]);
			}
		}
	}
 	catch(e){}
}
}
if (window.addEventListener)window.addEventListener("message",adsGUIDFn,false);
function adSetMOAT(v,r){
if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
else {
if (v&&v!='0'){
window.moatConfig=r||{};
var d=document,s=d.createElement("script"),h=d.getElementsByTagName("head")[0];
s.src='//o.aolcdn.com/os/moat/prod/moatuac.js';
h.appendChild(s); 
}
}
}
var adsLoadSync=0,adsSyncTime='',adsSyncDelay=0,adsAddOnMQ='',adsRePo='0',adsEAN=1,adsEANArr={};
function adsResizePortrait(v){
if (adsUACH&&adsUACD>0){
	var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments);
}
else {
	adsRePo=v;
}
}
function adSetSpaceId(v){
if (v)atwUAC.spaceid=v;
}
function adSetAddOnPl(v){
if (v)adsAddOnMQ=v;
}
function adSetSyncDelay(v){
 if (v)adsSyncDelay=parseInt(v)
 else adsSyncDelay=200;
} 
function adsLoadedSync(){
 var z=adsDivs.length,v;
 for (var i=0;i<z;i++){
  v=adsGetObj(adsDivs[i]);
  if (v.textAd!=1&&v.iframe!=1&&v.delayed)v.LoadAd();
 }
 adsLoadSync=1;
}
function atwInfoFn(){
try {
var df,sz,id,mnum,ft,sq,st,oth,mn,tt,fw,fh,da,di,c='',td='</td><td>',adId,bId;
var s='<style>table,.tableClass{border:solid 1px;}</style><table class="tableClass" width="100%" border=1><tr align="left"><th>Ad #</th><th>Magic Number</th><th>Orig Width</th><th>Orig Ht</th><th>Dyn Size</th><th>Actual Width</th><th>Actual Ht</th><th>AdId</th><th>MNUM</th><th>Format</th><th>SeqId</th><th>timeStamp</th><th>Devil Flag</th><th>Ad Call Type</th><th>Parms Sent</th><th>Div Name</th><th>InView</th></tr>';
for (var i=1;i<adsTile;i++){
df='n/a';sz='n/a';id='n/a';mnum='n/a';ft='n/a';sq='n/a';st='n/a';oth='n/a';mn='n/a';
tt='n/a';fw='n/a';fh='n/a',dn='n/a',iv='n/a';
if (atwUAC.adsInfo[i]){
 di=atwUAC.adsInfo[i];
 if (di.sz)sz=di.sz;
 if (di.ttype)tt=di.ttype
 if (di.other)oth=di.other
 if (adsDevilAd.ad[i]){
	da=adsDevilAd.ad[i];
 	if (da.adId)id=da.adId;
	if (da.mnum)mnum=da.mnum;
	if (da.aolFormat)ft=da.aolFormat;
	if (da.seqId)sq=da.seqId;
	if (da.timeStamp)st=da.timeStamp;
	if (da.width)fw=da.width;
	if (da.height)fh=da.height;
	if (da.aolDevilFlag&&da.aolDevilFlag!="undefined")df=da.aolDevilFlag;
 }
 dn=atwUAC.adsInfo[i].dv;
 iv=atwUAC.adsInfo[i].inV;
 s+='<tr><td>'+i+td+di.mn+td+di.origW+td+di.origH+td+sz+td+fw+td+fh+td+id+td+mnum +td+ft+td+sq+td+st+td+df+td+tt+td+oth+td+dn+td+iv+'</td></tr>';
}
}
s+='</table><div align="left">';
for (var i=1;i<adsTile;i++){
	adId='',bId='';
	if (atwUAC.adsInfo[i]){
		di=atwUAC.adsInfo[i];
		c=di.url.replace(/addyn/,'adiframe');
		if (adsDevilAd.ad[i]){
			da=adsDevilAd.ad[i];
			if (da.adId)adId=da.adId.split('|')[0];
			bId=da.bId;
			if (adId&&bId){
				c=c.replace(/;grp=/,';adid='+adId+';bnid='+bId+';grp=');
			}
		}
		s+='URL for Ad '+i+' '+c+' <a href="'+c+'" target=_blank>Click to View Ad</a><P>';
	}
}
s+='</div>';
var w=window.open('','atwInfoWin','resizable=yes,status=no,toolbar=no,location=no,menubar=no,status=no,titlebar=no,scrollbar=yes');
w.document.write(s);
}
catch (e){}
}
var atwSizeMsgFn,atwSizeMsgCount=0;
function atwSizeMsg(o){
	var z=0,m,w=0,h=0,x,m;
	if (!o){
		if (atwSizeMsgCount>10){
			clearInterval(atwSizeMsgFn);
		}
		else {
			atwSizeMsgCount++;
			z=1;
		}
	}
	if (o||z==1){
		try{
			if (document&&document.documentElement){
				w=document.documentElement.clientWidth;
				h=document.documentElement.clientHeight;
			}
		}
		catch(e){}
		m='aolResize;width='+w+';height='+h+';counter='+atwSizeMsgCount;
		if (o)m+=';reorient';
		for (var i=0;i<adsTile;i++){
			x=document.getElementById('adsF'+i);
			if (x&&x.width==1200&&x.height==800){
				x=x.contentWindow;
				x.postMessage(m,'*');
			}
		}
	}
}
function adsTacFn(){
if (atwUAC.gdprRet=='noCall'){
	atwUAC.tacFn='call';
}
else {
atwUAC.tacFn='called';
var d=document,r=d.referrer,q=0,i,i1,p='';
atwLoaded=1;
var t2='//cdn.at.atwola.com/_media/uac/tcode3.html';
if (adsDev=='1')atwSizeMsgFn=setInterval(atwSizeMsg,1000);
if (atwInfo)x=setTimeout("atwInfoFn()",3000);
if (adsGUID){
	i=d.createElement('iframe');
	i.style.display="none";
	i.id="atwLocalStorage";
	i.name=i.id;
	i.style.width='0px';
	i.style.height='0px';
	i.setAttribute("itemscope","");
	i.setAttribute("itemtype","https://schema.org/WPAdBlock");
	i.src='//cdn.at.atwola.com/_media/uac/guid.html';
	d.body.appendChild(i);
}
try {
	if (top.location.href!=location.href){
		if (parent.window.adsIn==1)q=1
	}
}
catch (e){}
if (q!=1){
	i=d.createElement('iframe');
	i.setAttribute("itemscope","");
	i.setAttribute("itemtype","https://schema.org/WPAdBlock");
	i.style.display="none";
	i.id="adTacFr";
	i.name=i.id;
	i.style.width='0px';
	i.style.height='0px';
	var x='';
	if (window.tacProp){
		for (var t in tacProp){
			x+="&"+t+"="+tacProp[t];
		}
	}
	p+=x;
	if ((typeof(r)!='undefined')&&(r!='')){
		if (r.indexOf('mapquest')!=-1)r=r.replace(/[?#].*$/,'')
			p+="&tacref="+r;
	}
	if (adsATOth){
		var xx=adsATOth.replace(/;/g,'&');
		p+='&'+xx;
	}
	p+=adsESN;
	if (adsTacOK!=1){
		p+='&adsTacOK='+adsTacOK;
	}
	if ((atwUAC.gdprRet.toString().indexOf('noC')==-1)&&(atwUAC.gdpr=='0'||atwUAC.gdpr=='1')){
		p+='&gdpr='+atwUAC.gdpr;
		if (atwUAC.gdprC&&atwUAC.gdprC!=undefined){p+='&gdprC='+atwUAC.gdprC;}
	}
	i1=(p)?t2+"#"+p:t2;
	if (i1){
		i.src=i1
		d.body.appendChild(i)
	}
}
}
}
function adsDisableTacoda(v){
if (v&&v.indexOf('aolws')!=-1)adsTacOK=2
else if (v&&v.indexOf('rtb')!=-1)adsTacOK=3
else adsTacOK=0
}
function atwGDPRDelay(v,t0){
	clearTimeout(atwUAC.GDPRTimeout);
	if (v&&v=='timeout'&&atwUAC.GDPRT&&atwUAC.gdprRet=='noCall'){
		atwUAC.GDPRTimeout=setTimeout(function(){atwGDPRDelay('timeout2')},atwUAC.GDPRT);
	}
	else {
		if (v&&v.indexOf('timeout')>-1&&atwUAC.gdprRet=='noCall'){
			atwUAC.gdprRet='noCallTimeout';
		}
		if (atwUAC.tacFn=='call'){
			adsTacFn();
		}
		var z=adsDivs.length,d,c='',t2=0,gdpr='';
		if (t0){
			var t1=new Date().getTime(),t2=parseInt(t1-t0);
			if (t2<50)c='1'
			else if (t2<100)c='2'
			else if (t2<300)c='3'
			else if (t2<500)c='4'
			else c='5';
		}
		else {
			c='no';
		}
		if (atwUAC.gdpr=='1'){
			c+=',EU';
		}
		gdpr='kvgdprstatus='+atwUAC.gdprRet+','+c+';';
		if ((atwUAC.gdprRet.toString().indexOf('noC')==-1)&&(atwUAC.gdpr=='0'||atwUAC.gdpr=='1')){
			gdpr+='gdpr='+atwUAC.gdpr+';';
			if (atwUAC.gdpr&&atwUAC.gdpr!='0'){
				if (atwUAC.gdprC!=undefined)gdpr+='euconsent='+atwUAC.gdprC+';'
			}
		}
		var zz=0;
		for (var i=0;i<z;i++){
			d=adsGetObj(adsDivs[i]);
			if (d.adLoaded!=1){
				zz++;
				d.adURL=d.adURL.replace(/noperf=1;/,'noperf=1;'+gdpr);
				d.LoadAd();
			}
		}
	}
}
function atwGDPRSetTimeout(v){
	if (v)atwUAC.GDPRT=parseInt(v)*1000;
}
function atwGDPR(){
	atwUAC.gdprRet='noCall';
	try {
		if (window.__cmp){
			atwUAC.GDPRTimeout=setTimeout(function(){atwGDPRDelay('timeout')},500);
			var t0=new Date().getTime();
			window.__cmp('getConsentData',null,function(r,s){
				if (s){
					atwUAC.gdpr=r.gdprApplies?'1':'0';
					atwUAC.gdprC=r.consentData;
					atwUAC.gdprRet='success';
					atwGDPRDelay('1',t0);
				}
				else {
					atwUAC.gdprRet='noCMPFail';
					atwGDPRDelay('2',t0);
				}				
			});
		}
		else {
			atwUAC.gdprRet='noCMP';
			atwGDPRDelay();
		}
	}
	catch(e){
		atwUAC.gdprRet='noCMPCatch';
		atwGDPRDelay();
	}
}
function adUACInit(){
var w=window,t;
atwGDPR();
try {
if (document.readyState&&document.readyState=='complete'){
	adsTacFn();
}
else {
	if (w.addEventListener)w.addEventListener("load",adsTacFn,false);
	else if (w.attachEvent)w.attachEvent("onload",adsTacFn);
	t=setTimeout(function(){atwLoaded=1;},4000);
}
}
catch(e){}
try{
	if (w.addEventListener){
		w.addEventListener("orientationchange",function(){atwSizeMsg('1')},false);
	}
	else if (w.attachEvent){
		w.attachEvent("onorientationchange",function(){atwSizeMsg('1')});
	}
}
catch (e){}
try {
if (/(^|;)?RSP_COOKIE=.*?&name=(.*?)(&|;|$)/i.test(document.cookie))adsESN='&ESN='+RegExp.$2;
}
catch (e){}
var at=adsLo.search(/atwcrpr=/i),ip,l=adsLo.toLowerCase();
adsIE=((navigator.appName=="Microsoft Internet Explorer")||(adsUA.indexOf("trident/")>-1));
if (adsIE){
	var mo=document.documentMode;
	if (mo&&mo>9)adsIEGT9=1;
	if (mo&&mo<=9)adsIELT10=1;
}
if (adsLo.search(/atwdistcode/i)>0)adsDisableTacoda()
if (at>0){
adsCA=adsLo.substr(at+8).split(/\||;/);
adsCp=1;
var z=adsCA.length;
for (var i=0,k=0;i<z;i=i+4,k++){adsCF[k]=adsCA[i];adsCW[k]=adsCA[i+1];adsCH[k]=adsCA[i+2];adsCAd[k]=adsCA[i+3]}
}
adsMNS=(/(\?|&)atwmn=(.*?)(&|$)/.test(l))?(RegExp.$2).split(/\||;/):'';
if (!(/^[0-9A-Za-z,-.]+$/.test(unescape(adsMNS))))adsMNS='';
adsPing=(/(\?|&)atwping=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
if (!(/^[0-9]+$/.test(unescape(adsPing))))adsPing='';
adsTPS=(/(\?|&)atwtp=(.*?)(&|$)/.test(l))?(RegExp.$2).split(/\||;/):'';
if (!(/^[0-9A-Za-z,-]+$/.test(unescape(adsTPS))))adsTPS='';
adsKV=(/(\?|&)atwkv=(.*?)(&|$)/.test(l))?escape(RegExp.$2):'';
if (!(/^[0-9A-Za-z,;=-_]+$/.test(unescape(adsKV))))adsKV='';
if (adsKV&&adsKV[adsKV.length-1]!=';')adsKV+=';'
if (adsKV)adsATOth+=adsKV;
adsExcV=(/(\?|&)atwexc=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
ip=(/(\?|&)atwip=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
if (ip&&(/^[0-9\.]+$/.test(unescape(ip))))adsATOth+='ip='+ip+';';
adsSZ=(/(\?|&)atwsz=(.*?)(&|$)/.test(l))?(RegExp.$2).split(/\||;/):'';
if (!(/^[0-9A-Za-z,]+$/.test(unescape(adsSZ))))adsSZ='';
adsFileless=(/(\?|&)atwfileless=(.*?)(&|$)/.test(l))?1:0;
adsInVParm=(/(\?|&)atwinview=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
adsRotateTime=(/(\?|&)atwrotatetime=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
}
adUACInit();
function adsCkCol(f,d,xx){
try {
var dv=document.getElementById(f.divName),i=d.getElementById('adDiv').innerHTML,z,nc=0;
if (xx=='timeout'&&i.indexOf('aolAdId')<0){nc=1}
if (!nc&&f.id[f.id.length-1]==adsPing-1) { 
  z=document.createElement('script');
  z.src='//o.aolcdn.com/ads/blank.js';
  document.body.appendChild(z);
}
var x=((i.indexOf('AOL - HTML - Blank HTML Ad')!=-1)||(i.indexOf('ATCollapse.gif')!=-1)),x2=(i.indexOf('<\/script>\n<\/td><\/tr><\/tbody><\/table>')!=-1);
if (!nc&&!x){
	var v=f.parentNode;
	f.comment=1;
	if (f.ean&&f.ean!=2&&!((f.w=='61'&&f.h=='21')||(f.w=='290'&&f.h=='18')||(f.w=='386'&&f.h=='280'))){f.ean=2;adsWriteEAN(v,f,i);}
}
if (dv&&dv.col){
if (!nc&&!x){
f.width=f.w;
f.height=f.h;
f.style.display='inline';
f.style.visibility='visible';
}}
var v=dv;
if (!v.rCalled){
	v.rCalled=1;
	var m=(/RefreshMN=("|')(.*?)("|')/i.test(i))?RegExp.$2:'';
	if (m){
		v.rMN=m;
		v.timeout=setTimeout(function(){adsReloadServer(v)},v.rTime);
		v.mouseIn=0;
		atwListen(v,'mousemove',function(){v.mouseIn=1;});
		atwListen(v,'mouseover',function(){v.mouseIn=1;});
		atwListen(v,'mouseout',function(){v.mouseIn=0;});
		if (atwUAC.rSetup==0){
			atwUAC.rSetup=1;
			atwListen(window,'focus',function(){atwUAC.focus=1;});
			atwListen(window,'blur',function(){atwUAC.focus=0;});
			if (typeof document.hidden!=="undefined"){ 
				atwUAC.hidden="hidden";
				atwUAC.visCh="visibilitychange";
			}
			else if (typeof document.msHidden!=="undefined"){
				atwUAC.hidden="msHidden";
				atwUAC.visCh="msvisibilitychange";
			}
			else if (typeof document.webkitHidden!=="undefined"){
				atwUAC.hidden="webkitHidden";
				atwUAC.visCh="webkitvisibilitychange";
			}
			if (typeof document[atwUAC.hidden]!=='undefined'){
				atwListen(document,atwUAC.visCh,atwVisCh);
			}
		}
	}
}
if (x){
f.style.width="0px"
f.style.height="0px"
dv.width=0
dv.height=0 
f.style.display='none'
adsDevilObj(f.divName,'1','1',f,d,'1');
return true
}
else {
 if (!nc&&f.textAd!=1&&dv&&!dv.dynSz)adsDevilObj(f.divName,f.w,f.h,f,d,'0');
 return false
}
}
catch (e){
	return false;
}
}
function atwDisplayText(dv,t,i){
	var x=adsGetObj(dv),f=x.getElementsByTagName('iframe')[0],d=f.contentWindow.document,z;
	if (!t)t=2
	else t=parseInt(t);
	if (!i)i=100
	else i=parseInt(i);
	t=t*(1000/i);
	if ((d.readyState&&d.readyState=='complete')||(f.textAdDelay>t)){
		f.textAdDelay=0;
		adsDoOnL(f,d,'1');
	}
	else {
		f.textAdDelay++;
		z=setTimeout(function(){return atwDisplayText(dv);},i);
	}
}
function adsDoOnL(f,d,c){
if (f&&(f.textAdDelay==0||c)){
	if (!adsCkCol(f,d)&&f.divName){
		var s=d.getElementById('adDiv').innerHTML,n=s.indexOf('\<\!--'),wi,h,loc='top:0;right:0';
		if (n>0){
			var x=s.substr(n,s.length);
			var sc,z,re,arr=[],l;
			re=/aolTXT(.*?)[1-9]=["'](.*?)["']/ig;
			while (z=re.exec(x)){
				arr.push(z[1]);
				arr.push(z[2]);
			}
			l=arr.length;
			for (var i=0;i<l;i=i+2){
				if (arr[i+1]){
					if (arr[i]=='js'||arr[i]=='JS'){
						sc=document.createElement('script');
						sc.type='text/javascript';
						sc.src=arr[i+1];
						document.body.appendChild(sc);
					}
					else if (arr[i]=='imp'||arr[i]=='IMP'){
						sc=document.createElement('img');
						sc.src=arr[i+1];
					}
				}
			}
		}
		if (s.indexOf('TextVendor')<0&&s.indexOf('TextCustom')<0){
			if (n>0){
				var x=s.substr(n,s.length),p=document.getElementById(f.divName),z=f.contentWindow.adComRedirect;
				if (z){
					adSetupDiv(f.w,f.h,z,f.divName,f.src,'text',f.mn,'0','0','0',f.fileless);
					adsDivs[adsDivs.length-1].LoadAd();
				}
				else {
					var xx='',ex=0;
					x=x.replace(/\<img src=(.*?)width=\"1px\" height=\"1px\"(.*?)>/ig,'');
					if (f.ean&&!((f.w=='61'&&f.h=='21')||(f.w=='290'&&f.h=='18')||(f.w=='386'&&f.h=='280'))){
						xx+='<div style="position:relative;">';
						ex=1;
					}
					xx+=x;
					if (ex){
						if (adsEANArr[f.divName])loc=adsEANArr[f.divName];
						xx+='<a style="position:absolute;'+loc+'z-index:4999;" href="http://adinfo.aol.com/" target="_blank">';
						xx+='<img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;margin:0px;width:19px;height:15px;vertical-align:top;" border=0 alt="AdChoices">';
						xx+='</a></div>';
					}
					p.innerHTML=xx;
					adsDevilObj(f.divName,f.w,f.h,f,d,'0');
				}
			}
		}
		else{
			if (/aolsize=["']([\d]*?)\|([\d]*)["']/i.test(s)){
				wi=unescape(RegExp.$1);
				h=unescape(RegExp.$2);
			}
			else{
				wi=f.w;
				h=f.h;
			}
			if (s.indexOf('TextCustom')>-1){
				f.style.width=wi+'px';
				f.style.height=h+'px';
				f.style.display='block';
				f.style.visibility='visible';
			}
			adsDevilObj(f.divName,wi,h,f,d,'1');
		}
	}
}
}
function adSetNetId(v){adsNt=v}
function adSetPlId(v){adsPl=v}
function adSetHtNm(){}
function adSetHtNmAT(v){
var p=location.protocol;
adsHt=(/^https?/i.test(v))?v:((/^\/\//.test(v))?p+v:p+'//'+v);
if (adsHt.charAt(adsHt.length-1)=='/')adsHt=adsHt.substring(0,adsHt.length-1);
}
function adSetTarget(){}
function adSetSN(v){var c
if (v){
v=v.toString()
if ((v.indexOf('@aol.com')!=-1)||(v.indexOf('@aim.com')!=-1)){
v=v.split('@');
v=v[0];
}
if (window.btoa)c=btoa(v)
else{
var o="",c1,c2,c3,e1,e2,e3,e4,i=0,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
do {
c1=v.charCodeAt(i++)
c2=v.charCodeAt(i++)
c3=v.charCodeAt(i++)
e1=c1 >> 2
e2=((c1 & 3) << 4) | (c2 >> 4)
e3=((c2 & 15) << 2) | (c3 >> 6)
e4=c3 & 63
if (isNaN(c2))e3=e4=64
else if (isNaN(c3))e4=64
o=o+s.charAt(e1)+s.charAt(e2)+s.charAt(e3)+s.charAt(e4)
}
while (i<v.length);
c=o;
}
adsESN='&ESN='+c;}
}
function adSetOthAT(v,r){
if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
else {
if (r)adsATOth='';
if (v){
 if (v.charAt(v.length-1)!=';')v+=';'
 var x=v.split(';'),l=x.length,y;
 for (i=0;i<l-1;i++){
  if (x[i].charAt(x[i].length-1)!='='){
    y=x[i].split('=');
    adsATOth+=encodeURIComponent(y[0])+"="+encodeURIComponent(y[1])+';';  
  }
 }
}
else if (v=='')adsATOth='';
try {ATW3_AdObj.adsATOth=adsATOth;}
catch(e){}
}
}
function adSetCo(v){
if (v)adsCo=v.toLowerCase();
}
function adSetAddOn(v){
if (adsAddOn!=2)adsAddOn=parseInt(v);
}
function adSetAJAXAddOn(v){
if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
else adsAJAXAddOn=v
}
function adSetType(v){
if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
else {
if (v=='')v='J'
adsTp=v.toUpperCase()
}
}
function adSendTerms(){}
function adSetAdURL(u){
if (u=='fileless')adsFileless=1;
else if (adsFileless==1)u='fileless';
if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
else adsPage=u;
}
function adsShowDiv(d){
var v=adsGetObj(d);
v.style.display="block"
}
function adsHideDiv(d){
var v=adsGetObj(d);
v.style.display="none"
}
function adsResetPg(){
adsTile=1;
adsDivs=[];
adsD=new Date();
adsScr=adsD.getTime()%0x3b9aca00;
adsATOth='';
adsAddOn=1;
atwReset=1;
adsRRDevil='';
aol_devil_flag='';
}
function adsReloadAll(){
adsD=new Date()
var z=adsDivs.length;
for (var i=0;i<z;i++)adsReloadAd(adsDivs[i],'','all')
}
function adsReloadAd(d,m,a){
	if (a!='all')adsD=new Date();
	var v=adsGetObj(d),s=v.adURL,dt=adsD.getTime()%0x3b9aca00,max=0;
	try {
		if (v.rTimes&&v.rTimes>v.rMax)max=1;
		if (s&&!max){
			s=unescape(s);
			if (m)s=s.replace(/alias=(.*?);/,"alias="+m+";").replace(/kvmn=(.*?);/,"kvmn="+m+";");
			var i=s.indexOf(';grp='),u='';
			if (i==-1)u=s.replace(/ /, "")+" "
			else u=s.substring(0,i+5)+dt;
			u=u.replace(/kvgrp=[0-9]*;/,"kvgrp="+dt+";");
			v.adURL=u;
			v.LoadAd();
			if (v.rTimes)v.rTimes++;
		}
	}
	catch(e){}
}
function adsReloadIframe(n,m,v){
	var f='',s='';
	try {f=document.getElementById(n)}
	catch (e){}
	if (f){
		if (v!='all')adsD=new Date();
		try {s=f.src}
		catch (e){}
		if (s){
			s=unescape(s);
			if (m)s=s.replace(/alias=(.*?);/,"alias="+m+";").replace(/kvmn=(.*?);/,"kvmn="+m+";");
			var dt=adsD.getTime()%0x3b9aca00,i=s.indexOf(';grp='),u='';
			if (i==-1)u=s.replace(/ /, "")+" "
			else u=s.substring(0,i+5)+dt;
			u=u.replace(/kvgrp=[0-9]*;/,"kvgrp="+dt+";");
			try {f.src=u}
			catch(e){}
		}
	}
}
function adsReloadIframeAll(){
var n,f='';
adsD=new Date()
for (var i=0;i<adsTile;i++){
n='adsF'+i
try {f=document.getElementById(n)}
catch (e){break}
if (f)adsReloadIframe(n,'','all')}
}
function adSetOthDclk(v){}
function adSetDelay(){}
function adSetExt(){}
function adsGetAdURL(w){
var d=w.frameElement.parentNode;
return d.adURL
}
function adsDevilObj(d,w,h,f,doc,r){
var dv=document.getElementById(d),n=dv.adNum+1,i='';
try { 
	i=doc.getElementById('adDiv').innerHTML;
}
catch (e){}
if (!i){
	try{
		var cc=f.contentDocument||f.contentWindow.document;
		i==cc.body.innerHTML;
	}
	catch(e){}
}
var m=(/mnum=(.*?)\//i.test(i))?RegExp.$1:'',
a=(/aolAdId=("|')(.*?)("|')/i.test(i))?RegExp.$2:'|',
b=(/zMoatBannerID=(.*?)(\n)/i.test(i))?RegExp.$1:'',
t=(/aolFormat=("|')(.*?)("|')/i.test(i))?RegExp.$2:'',
gu=(/aolGUID=("|')(.*?)("|')/i.test(i))?RegExp.$2:'',
tx=(f.textAd)?'1':'0',
st;
st=gu.split('|');
if (f.mn)aolAdFdBkStr+=f.mn+'|'+w+'|'+h+'|'+a+'|'+m+';';
if (a=='|')a='';
f.setAttribute('banId',a);
try {
window.adsDevilAd=window.adsDevilAd||{};
window.adsDevilAd.ad=window.adsDevilAd.ad||[];
adsDevilAd.ad[n]={
 divName:f.divName,
 mn:f.mn,
 adId:a,
 aolFormat:t,
 width:w,
 height:h,
 mnum:m,
 sz:f.sz,
 textAd:tx,
 seqId:st[1],
 bId:b,
 timeStamp:st[0]
};
}
catch(e){}
try {
	adsDevilAd.ad[n].aolDevilFlag=top.aol_devil_flag;
	if (!adsRRDevil){
		if (f.sz=='300x250,300x600,300x1050'&&h!='1050')adsRRDevil='n';
		if (top.aol_devil_flag||(f.sz=='300x250,300x600,300x1050'&&h=='1050')){
			adsRRDevil='y';
			var id,dd,z=adsDivs.length;
			for (var i=0;i<z;i++){
				if (atwAdBlock){
					id="atwFrame"+i;
				}
				else {
					id="atwAdFrame"+i;
				}
				dd=document.getElementById(id);
				if (dd&&dd.inV&&dd.inV=='D'){
					dd.style.width='0px';
					dd.style.height='0px';
					dd.style.display='none';
				}
			}
		}
	}
}
catch(e){}
try {
if (window.adsDevilAd.hasOwnProperty('resized'))adsDevilAd.resized(d,w,h);
if (window.adsDevilAd.hasOwnProperty('adinfo'))adsDevilAd.adinfo(n,d,w,h);
if (window.adsDevilAd.hasOwnProperty('adinfo2'))adsDevilAd.adinfo2(n,d,w,h);
if (window.adsDevilAd.hasOwnProperty('moat'))adsDevilAd.moat(n,d,w,h,tx);
if (window.atwUAC.hasOwnProperty('adLoaded'))atwUAC.adLoaded(n,adsDevilAd.ad[n]);
if (w=='300'){
 adsDevilAd.RRWidth=w;
 adsDevilAd.RRHeight=h;
}
}catch(e){}
}
var adsWait=0,adsWaitNo=0;
function adsDisableWait(){
	adsWaitNo=1;
}
function adsLoadWait(f,v){
	var wi='',h='',z;
	try{
		wi=f.contentWindow.document.body.scrollWidth;
		h=f.contentWindow.document.body.scrollHeight;
		if (wi&&h&&wi>1&&h>1&&!(v.w==wi&&v.h==h)){
			zz=adsFindSize(v,wi,h);
			wi=zz[0];
			h=zz[1];
			f.width=wi;
			f.height=h;
			f.className="uac_"+wi+"x"+h;
			if (document.getElementById(f.id+'EAN')){
				adsMoveEAN(wi,f.id);
			}
		}
		else {
			if (adsWait++<20){
				z=setTimeout(function(){adsLoadWait(f,v);},200);
			}
		}
	}
	catch(e){
		if (adsWait++<20)z=setTimeout(function(){adsLoadWait(f,v);},200);
	}
}
function adsFindSize(v,wi,h){
	var s=v.sz.split(','),l=s.length,x,lD=100,ma=0,di,i,zz;
	for (i=0;i<l;i++){
		x=s[i].split('x');
		di=Math.abs(x[0]-wi)+Math.abs(x[1]-h);
		if (di<lD){
			lD=di;
			ma=i;
		}
	}
	return s[ma].split('x');
}
function adsRMIFOnL(w,d,xx){
var f=w.frameElement,v=f.parentNode,wi='',h='',z=0,a=0,cm=0,t,aD1='';
try {
	aD1=d.getElementById('adDiv').innerHTML;
}
catch(e){}
if (!aD1){
	try {
		var inD=f.contentDocument||f.contentWindow.document; 		
		aD1=inD.body.innerHTML;
	}
	catch(e){}
}	

if (/ACE_AR(.*?)possible_size(.*?)[,}]/i.test(aD1)){
	a=1;
}
else if (/ACE_AR(.*?)Size(.*?)['"](.*?)['"]/i.test(aD1)){
	if (unescape(RegExp.$3).indexOf(',')>0){
		a=1;
	}
}
if ((/aolSize=["']([\d]*?)\|([\d]*)["']/i.test(aD1))&&(unescape(RegExp.$2)>1)){
	cm=1;
	wi=unescape(RegExp.$1);
	h=unescape(RegExp.$2);
	if (wi=='6'&&h=='2'){
		wi='300';
		h='250';
	}
}
else{
	if (/ACE_AR(.*?)Size(.*?)[,}]/i.test(aD1)&&!a){
		cm=1;
		var as=unescape(RegExp.$2).replace(/[^\d\+]/g,"");
		wi=parseInt(as.substring(0,3),10);
		h=parseInt(as.substring(3,as.length),10);
	}
	else {
		if (xx!='timeout'){
			try{
				wi=f.contentWindow.document.body.scrollWidth;
				h=f.contentWindow.document.body.scrollHeight;
				if ((wi<1||h<1||(v.w==wi&&v.h==h))&&!a&&v.sz&&!adsWaitNo)t=setTimeout(function(){adsLoadWait(f,v);},100);
			}
			catch(e){
				t=setTimeout(function(){adsLoadWait(f,v);},100);
			}
		}
	}
}
if (wi&&h&&wi>1&&h>1&&!(v.w==wi&&v.h==h)&&v.sz){
	zz=adsFindSize(v,wi,h);
	wi=zz[0];
	h=zz[1];
}
if (!a&&wi&&h&&wi>1&&h>1&&!(v.w==wi&&v.h==h)){
	z=1;
	f.width=wi;
	f.height=h;
}
if ((a||cm==1)&&xx=='timeout'){
	f.comment=1;
}
if (cm==1||xx!='timeout'){
	adsDevilObj(v.divName,wi,h,f,d,z);
}
if (wi&&h&&f)f.className="uac_"+wi+"x"+h;
if (!(v.w==wi)&&(document.getElementById(f.id+'EAN'))){
	adsMoveEAN(wi,f.id);
}
}
function adsMoveEAN(wi,id){
	var cw=document.documentElement.clientWidth,wid;
	if (cw<wi)wid=cw
	else wid=wi;
	document.getElementById(id+'EAN').style.width=wid+'px';
	document.getElementById(id+'EANA').style.right=0+'px';
	if (wi>'728'&&adsDev=='1'){
		document.getElementById(id+'EAN').style.width='100%';
		document.getElementById(id +'EAN').style.maxWidth='970px';
		document.getElementById(id+'EAN').style.margin='2px auto';
	}
}
function adsDisableEAN(v){
if (v=='0')adsEAN=1
else adsEAN=0
}
function adsSetEAN(dv,v){
	if (v=='br')adsEANArr[dv]='right:0;'
	else if (v=='tl')adsEANArr[dv]='top:0;left:0;'
	else if (v=='bl')adsEANArr[dv]='left:0;'
	else if (v=='tr')adsEANArr[dv]='top:0;right:0;'
}
function adsWriteEAN(v,f,i){
	var c=0,wi=f.w,loc='right:0px;';
	if (f.textAd&&(i.indexOf('TextVendor')>0||i.indexOf('TextCustom')>0)){
		c=1;
		if (f.divName){
			wi=document.getElementById(f.divName).offsetWidth;
		}
	}
	if (!f.textAd||c==1){
		var ean=document.createElement('div'),eans;
		ean.style.width=wi+'px';
		ean.style.height='15px';
		ean.style.top='0px';
		ean.style.left='0px';
		ean.style.margin='0 auto';
		ean.id=f.id+'EAN';
		ean.style.position='relative';
		if (adsEANArr[v.divName])loc=adsEANArr[v.divName];
		if (c!=1){
			if (f.w<234||(f.w=='560'&&f.h=='35')){
				eans='<a id="'+f.id+'EANA" style="position:absolute;left:'+(f.w-19)+'px;z-index:4999;margin:0 auto;width:19px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>';
			}
			else {
				eans='<a id="'+f.id+'EANA" style="position:absolute;'+loc+'z-index:4999;margin:0 auto;width:77px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoices.png" style="border:none;width:77px;height:15px;vertical-align:top" alt="AdChoices"></a>';
			}
			if (f.w=='560'&&f.h=='35'){
				ean.style.position='absolute';
				ean.style.width='auto';
			}
			ean.innerHTML=eans;
			v.appendChild(ean);
		}
		else {
			eans='<a id="'+f.id+'EANAT" style="position:absolute;'+loc+'z-index:4999;margin:0 auto;width:19px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>';
			ean.innerHTML=eans;
			v.insertBefore(ean,v.firstChild);
		}
	}
}	
function adsRmChildren(o){
var f=null;
while (o.childNodes.length>0){
var c=o.childNodes[0],i=c.id
if (i){
if ((i.toString().indexOf("atwFrame")!=-1)||(i.toString().indexOf("atwAdFrame")!=-1)){
f=c
f.src="about:blank"}
c.i=""}
if (c.childNodes.length>0)adsRmChildren(c)
o.removeChild(c)}
}
function adsClrDiv(){adsRmChildren(this)}
function adsClrAd(d){
var o=adsGetObj(d);
adsRmChildren(o)
}
function adsGetObj(d){
var o;
if (typeof(d)!='object')o=document.getElementById(d)
else o=d
return o
}
function adsFilelessFn(i,u){
var i2=(i.contentWindow)?i.contentWindow:(i.contentDocument.document)?i.contentDocument.document:i.contentDocument;
i2.document.open();
var iStr='<html lang="en"><head><title>Aol Advertisement</title><script type="text/javascript">\n';
iStr+='function adsPageOnL(){adsLoaded=1;adFr=window.frameElement;\n';
iStr+=' if (adFr){if (adFr.textAd!=1){var collapse=parent.adsCkCol(adFr,document);\n';
iStr+=' if (!collapse&&adFr.divName){var parDiv=parent.document.getElementById(adFr.divName);\n';
iStr+=' if (parDiv&&(parDiv.dynSz==1)&&parent.adsRMIFOnL){parent.adsRMIFOnL(window,document)}}}else{parent.adsDoOnL(adFr,document)}}}\n';
iStr+='function adsPageTimeout(){var adFr=window.frameElement;\n';
iStr+=' if (!adsLoaded&&adFr&&adFr.comment!=1&&adFr.textAd!=1&&adFr.divName){\n';
iStr+=' var collapse=parent.adsCkCol(adFr,document,"timeout");\n';
iStr+=' if (!collapse&&adFr.divName){var parDiv=parent.document.getElementById(adFr.divName);\n';
iStr+=' if (parDiv&&(parDiv.dynSz==1)&&parent.adsRMIFOnL){parent.adsRMIFOnL(window,document,"timeout");\n';
iStr+=' var z=setTimeout(function(){adsPageTimeout()},500)\n';
iStr+='}}}}\n';
iStr+='</script></head>\n';
iStr+='<body onload=\'setTimeout("adsPageOnL()",10)\' style="overflow: visible; border:0; background-color: transparent;">\n';
iStr+='<div id="adDiv" style="overflow: visible; border:0;">\n';
iStr+='<script type="text/javascript">\n';
iStr+='var inDapIF=true,inFIF=true,adsLoaded=0;\n';
iStr+='var zz=setTimeout(function(){adsPageTimeout()},2000)\n';
iStr+='</script>\n';
iStr+="<script type='text/javascript' src='"+u+"'></script>";
iStr+='</div></body></html>';
i2.document.write(iStr);
if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(i.adNum+1,i.divName,i.w,i.h);
if (adsIELT10)var z=setTimeout(function(){i2.document.close();},1000)
else i2.document.close();
}
function adSetAdBlock(){
atwAdBlock=1;
}
function adsLoadAd(){
if (atwUAC.gdprRet!='noCall'){
this.ClearAd();
this.adLoaded=1;
var f=document.createElement('iframe');
f.setAttribute("itemscope","");
f.setAttribute("itemtype","https://schema.org/WPAdBlock");
f.textAd=this.textAd;
f.textAdDelay=this.textAdDelay;
if ((this.textAd==1)||(this.col)){
f.style.visibility='hidden';
if (adSetInV=='0')f.style.display='none';
f.width=0;  
f.height=0;
}else{
f.width=this.w
f.height=this.h
}
f.title="Ad"
f.marginWidth=0
f.marginHeight=0
f.setAttribute('allowtransparency','true')
f.frameBorder=0
f.scrolling="no"
f.w=this.w
f.h=this.h
f.mn=this.mn
f.divName=this.divName
f.sz=this.sz
f.inV=this.vis
f.adNum=this.adNum;
f.comment=0;
f.ean=adsEAN;
f.fileless=this.fileless;
this.appendChild(f);
if (this.iframe){
	f.id="adsF"+this.adNum;
	f.name=f.id;
	if (adsEAN)adsWriteEAN(this,f,'');
	if (f.inV=='0'){
		f.src=this.adURL;
	}
	else {
 		this.adURL=this.adURL.replace(/kvmn=/,"kvvis=1;kvmn=");
		f.adURL=this.adURL;
 		f.url=this.adURL;
		if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(f.adNum+1,f.divName,f.w,f.h);
 		var z=setTimeout(function(){adsDelaySonar(f,adsSonarT);},100);
	}
}
else
{
	if (atwAdBlock){
		f.id="atwFrame"+this.adNum;
	}
	else {
		f.id="atwAdFrame"+this.adNum;
	}
	f.name=f.id;
	if ((document.domain!=location.hostname)&&(this.adPage.indexOf('#')==-1))this.adPage=this.adPage+'#'+document.domain
	if (this.adPage||this.fileless==1){
		if (f.inV=='0'){
			if (this.fileless==1)adsFilelessFn(f,this.adURL)
			else f.src=this.adPage;
		}
		else{
 			f.url=this.adPage;
 			this.adURL=this.adURL.replace(/kvmn=/,"kvvis=1;kvmn=");
			f.adURL=this.adURL;
 			var z=setTimeout(function(){adsDelaySonar(f,adsSonarT);},100);
		}
	}
}
}
}
function adsDelaySonar(f,t){
if (atwLoaded&&(atwReset==0||adsRRDevil!='')){
 if (t){
  setTimeout(function(){adsDelaySonar(f,0);},t);
 }
 else if (f.inV!='D'||adsRRDevil=='n'||!adsRRCalled){
  if (adsSonar(f,function(){},{visibility:adsSonarV})){
   if (f.fileless==1)adsFilelessFn(f,f.adURL)
   else f.src=f.url;
  }
  else{ 
   adsSonar(f,function(){
    this.scrollin=false;
    if (f.inV!='D'||adsRRDevil=='n'||!adsRRCalled){
	if (f.fileless==1)adsFilelessFn(f,f.adURL)
	else f.src=f.url;
    };
    },
    {visibility:adsSonarV}
   )
  }
 }
 else {
	if (adsRRDevil=='')setTimeout(function(){adsDelaySonar(f,t);},100);
 }
}
else {
 setTimeout(function(){adsDelaySonar(f,t);},100);
}
}
function adSetupDiv(w,h,u,dv1,pg,ds,m,sz,c,v,f){
var s,d,t=0;
if (atwAdBlock){
	s="atwDiv"
}
else {
	s="adsDiv"
}
s+=adsDivs.length;
if (ds=='textd'){
	ds='text';
	t=1;
}
if (!dv1||dv1==""){
document.write("<div id='"+s+"'></div>")
d=document.getElementById(s)
dv1=s;
if (ds!='text')d.style.fontSize='0px';
}
else d=adsGetObj(dv1)
if (typeof(dv1)=='object'){
 try {
  if (dv1.id==''){
   d.divName=s;
   d.id=s;
  }
  else d.divName=dv1.id
 }
 catch(e){}
}
else {
 d.divName=dv1
}
d.LoadAd=adsLoadAd
d.adLoaded=0;
d.ClearAd=adsClrDiv
d.mn=m
if (ds=='text')d.textAd=1
else d.textAd=0;
if (ds&&ds!='text'&&ds!='iframe')d.dynSz=1
else d.dynSz=0;
if (sz)d.sz=sz
else d.sz=0;
d.w=w;d.h=h;
d.adURL=u
d.adPage=pg
d.adNum=adsDivs.length
d.col=c;
d.vis=v;
d.delayed=0;
if (t)d.textAdDelay=1
else d.textAdDelay=0;
if (ds=='iframe')d.iframe=1
else d.iframe=0;
if (f==1)d.fileless=1
else d.fileless=0;
adsDivs[adsDivs.length]=d
}
function atwLR(v,b){return (v<<b)|(v>>>(32-b))}
function atwGB(s){
	var o=[],p=0;
	for (var i=0; i<s.length;i++){
		var c=s.charCodeAt(i);
		if (c<128) {
			o[p++]=c;
		} else if (c<2048) {
			o[p++]=(c>>6)|192; 
			o[p++]=(c&63)|128;
		} else if (((c&0xFC00)==0xD800)&&(i+1)<s.length&&((s.charCodeAt(i+1)&0xFC00)==0xDC00)){
			c=0x10000+((c&0x03FF)<<10)+(s.charCodeAt(++i)&0x03FF);
			o[p++]=(c>>18)|240;
			o[p++]=((c>>12)&63)|128;
			o[p++]=((c>>6)&63)|128;
			o[p++]=(c&63)|128;
		} else {
			o[p++]=(c>>12)|224;
			o[p++]=((c>>6)&63)|128;
			o[p++]=(c&63)|128;
		}
	}
	return o;
}
function atwUTF(s) {
	var b=atwGB(s),r="";
	for (var i=0;i<b.length;i++){r+=String.fromCharCode(b[i]);}
	return r;
}
function atwSHA1(t) {
	var h=[0x67452301,0xEFCDAB89,0x98BADCFE,0x10325476,0xC3D2E1F0];
	t=atwUTF(t);
	var ml=t.length;
	t+=String.fromCharCode(0x80);
	var wl=t.length/4+2,nck=Math.ceil((32*wl)/512),ck=new Array(nck);
	for (var i=0;i<nck;i++){
		var ci=i*64;ck[i]=new Array(16);
		for (var j=0;j<16;j++){
			var idx=ci+j*4;
			ck[i][j]=0;
			if (t.length>=(idx+1)){
				ck[i][j]=(t.charCodeAt(idx)<<24)|(t.charCodeAt(idx+1)<<16)|(t.charCodeAt(idx+2)<<8)|t.charCodeAt(idx+3);
			}
		}
	}
	ck[nck-1][14]=ml>>>29;
	ck[nck-1][15]=ml<<3;
	for (var i=0;i<ck.length;i++){
		var w=new Array(80);
		for (var j=0;j<16;j++){w[j]=ck[i][j];}
		for (var j=16;j<w.length;j++){
			w[j]=atwLR((w[j-3]^w[j-8]^w[j-14]^w[j-16]),1);
		}
		var a=h[0],b=h[1],c=h[2],d=h[3],e=h[4];
		for (var j=0;j<80;j++){
			var f,kk;
			if (j<=19){
				f=(b&c)|((~b)&d);kk=0x5A827999;
			} else if (j>19&&j<=39){
				f=b^c^d;kk=0x6ED9EBA1;
			} else if (j>39&&j<=59){
				f=(b&c)|(b&d)|(c&d); kk=0x8F1BBCDC;
			} else {
				f=b^c^d;kk=0xCA62C1D6;
			}
			var tm=atwLR(a,5)+f+e+kk+w[j];
			e=d;d=c;c=atwLR(b,30);b=a;a=tm;    		
		}
		h[0]=(h[0]+a)>>>0;
		h[1]=(h[1]+b)>>>0;
		h[2]=(h[2]+c)>>>0;
		h[3]=(h[3]+d)>>>0; 
		h[4]=(h[4]+e)>>>0;
	}
	for (var i=0;i<h.length;i++){var hx=("00000000"+h[i].toString(16)).substr(-8);h[i]=hx;}
	return h[0]+h[1]+h[2]+h[3]+h[4];   
}
function atwCutURL(v,s){
	var r='',p,n;
	if (v.indexOf('ncid=')>-1){
		n=v.match(/(?:.*?)&ncid=(.*?)(?:[&#\/]|$)/);
		r+='kvncid='+escape(RegExp.$1)+';';
	}
	v=v.match(/(?:https?\:){0,1}\/\/(.*?)(?:[?#]|$)/);
	p=RegExp.$1;
	if (p.length>150)p=p.substr(0,150);
	r+=s+escape(p)+';';
	r=r.replace(/\/;$/,';');
	r=r.replace(/\//g,'%2F');
	return r;
}
function adsGetValues(){
var l=unescape(adsLo),p='',s='',t='',v,x=0,re='',le,ln,n,ad='',h,pg='',dom,pg1,lo=window.location,u;
n=(/(\?|&)atw[Nn][Tt]=(.*?)(&|$)/.test(adsLo))?(RegExp.$2):'';
if (!(/^[0-9.]+$/.test(unescape(n))))n='';
if (n){
	adsNt=n;
	if (n=='5113.1')adsHt='//at.atwola.com'
	else if (n=='1065.1')adsHt='//uk.at.atwola.com'
}
h=(/(\?|&)atw[Hh][Tt]=(.*?)(&|$)/.test(adsLo))?(RegExp.$2):'';
if (!(/^[a-zA-Z0-9.:\/]+$/.test(unescape(h))))h='';
if (h&&((/adtech.de$/.test(unescape(h)))||(/atwola.com$/.test(unescape(h))))){
	var p=location.protocol;
	adsHt=(/^https?/i.test(h))?h:((/^\/\//.test(h))?p+h:p+'//'+h);
	if (adsHt.charAt(adsHt.length-1)=='/')adsHt=adsHt.substring(0,adsHt.length-1);
}
dom=lo.hostname;
pg1=decodeURIComponent(dom+lo.pathname);
if (dom.length>48)dom=atwSHA1(dom);
if (pg1.charAt(pg1.length-1)=='/')pg1=pg1.substring(0,pg1.length-1);
pg1=atwSHA1(pg1);
pg='kvdom='+dom+';kvpage='+pg1+';';
p=atwCutURL(adsLo.toLowerCase(),'kvpg=');
try {
	u=document.referrer;
	if (u)re=atwCutURL(u,'kvrefd=');
}
catch(e){}
if (adsATOth.indexOf('kvugc')==-1){
 s='kvugc=';
 if (window.adSetUGC==0)s+='0;'
 else if (window.adSetUGC==1)s+='1;'
 else{
  if (adsATOth.indexOf('cmsid')==-1)s+='0;'
  else s+='1;'
 }
}
try {
if (/(^|;)?UNAUTHID=(.*?)[.](.*?)[.]/i.test(document.cookie))t='kvui='+unescape(RegExp.$3)+';';
}
catch(e){}
var y1,g='kvh5lsid=0;';
try {
 y1=window.localStorage.getItem('adsGUID');
 if (y1){
   g=g.replace('0','1');
   g+='GUID='+y1+';';
 }
}
catch(e){}

return p+s+t+g+re+ad+pg;
}
!function(e,t,o){"use strict";function n(t,n){var r;return function(){function l(){r=o,t.call(this)}r||(r=e.setTimeout(l,n))}}function r(t,o){return e.getComputedStyle?e.getComputedStyle(t).getPropertyValue(o):t.currentStyle?t.currentStyle[o]:void 0}function l(t,o,l){"object"==typeof o?l=o:"function"==typeof o&&(l?l.scrollin=o:l={scrollin:o});var a=l.parent;if(!a){for(var f,d=t;(d=d.parentNode)&&1===d.nodeType;)if(f=r(d,"overflow"),"auto"===f||"scroll"===f){a=d;break}a=a||e}if(l.parent=a===e?c:a,l.scrollin||l.scrollout){l.elem=t,u.push(l),s();var p=l.delay||13;a.sonarBound||(a.addEventListener?(a.addEventListener("scroll",n(s,p),!1),a.addEventListener("resize",n(s,p),!1)):e.attachEvent&&(a.attachEvent("onscroll",n(s,p)),a.attachEvent("onresize",n(s,p))),a.sonarBound=!0)}return i(t,l.distance,l.visibility,l.parent)}function i(e,n,r,l){a||(a=t.body),r||(r=0),n===o&&(n=0);var i=e,s=0,u=a.offsetHeight,f=l.clientHeight||0,d=l===c?a.scrollTop||c.scrollTop:l.scrollTop,p=e.offsetHeight||0;if(!e.sonarElemTop||e.sonarBodyHeight!==u){for(;i!==l&&i.offsetParent;)s+=i.offsetTop,i=i.offsetParent;e.sonarElemTop=s,e.sonarBodyHeight=u}return e.sonarElemTop+p-r*p>d-n&&e.sonarElemTop+r*p<d+f+n}function ff(){u=[]}function s(){var e,t,o;for(e in u)u.hasOwnProperty(e)&&(t=u[e],(t.scrollin||t.scrollout)&&(o=i(t.elem,t.distance,t.visibility,t.parent),o!==t.detected&&(o?t.scrollin&&t.scrollin.call(t,t.elem):t.scrollout&&t.scrollout.call(t,t.elem),t.detected=o)))}var a,c=t.documentElement,u=[];l.poll=s,e.adsSonar=l;e.adsSonarClear=ff;}(window,document);
var adSetInV='0',adsSonarT=0,adsSonarV=0;
function adSetInView(o,v,t){
if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
else {
if (o)adSetInV=o; 
if (v)adsSonarV=parseFloat(v);
if (t)adsSonarT=parseInt(t);
}
}
function adsATWDelay(z,a){
adsUACH='';
switch(z){
	case 'htmlAdWH':
		htmlAdWH(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);
		break;
	case 'adSetAdURL':
		adSetAdURL(a[0]);
		break;
	case 'adSetMOAT':
		adSetMOAT(a[0]);
		break;
	case 'adSetOthAT':
		adSetOthAT(a[0]);
		break;
	case 'adSetType':
		adSetType(a[0]);
		break;
	case 'adSetInView':
		adSetInView(a[0],a[1],a[2]);
		break;
	case 'adSetAJAXAddOn':
		adSetAJAXAddOn(a[0]);
		break;
	case 'adsResizePortrait':
		adsResizePortrait(a[0]);
		break;

}
}
function htmlAdWHDyn(m,s,t,dv,fn,ds){htmlAdWH(m,'','',t,dv,fn,ds,s.toString())}
function htmlAdWH(m,w,h,t,dv,fn,ds,sz){
if (adsUACH&&adsUACD>0)
{
	var ti=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
}
else {
if (m)m=m.toString()
else return 0;
var d=document,inc='',s,r=0,st="<script type='text/javascript' src='",sp1,ye=0,c=0,f=0,rr=0,wi=window,pr=location.protocol+'//',ow=w,oh=h,osz=(sz)?sz:'',cw=970,txt='text',gdpr='',gc='';
if (pr.indexOf('http')<0)pr='http://';
if (!adsVal)adsVal=adsGetValues();
if (adsInVParm=='on'){
	adSetInV='1';
}
else if (adsInVParm=='off'){
	adSetInV='0';
}
if (!adsChn&&wi.s_265&&wi.s_265.channel)adsChn='kvoch='+escape(wi.s_265.channel)+';';
if (t){
	t=t.toLowerCase();
	if (t.indexOf('c')>0){c=1;t=t.substr(0,t.length-1)}
	if (t=='textd'){txt+='d';t='text'}
	else if (t=='filelesstext'){t='text';adsFileless=1;}
	else if (t=='filelessajax'){t='ajax';adsFileless=1;}
	else if (t=='filelesstextd'){t='text';txt+='d';adsFileless=1;}
}
if (t=='fileless')adsFileless=1;
if (adsTp=='F'||t=='ajax'||t=='f'||t=='fileless')f=1;
try{if (document&&document.documentElement)cw=document.documentElement.clientWidth;}
catch(e){}
if (sz){
	sp1=sz.split(',')[0].split('x');
	w=sp1[0];
	h=sp1[1];
	if (f)ds='r';
	if (adsRePo=='1'&&cw<970&&t!='text'){
		var ss2,ss3,ss4='',ssL;
		ss2=sz.split(',');
		ssL=ss2.length;
		for (var i=0;i<ssL;i++){
			ss3=ss2[i].split('x');
			if (parseInt(ss3[0])<970)ss4+=ss2[i]+',';
		}
		if (ss4=='')return 0
		else sz=ss4.substring(0,ss4.length-1);
	}
}
else sz='';
if (adsSZ){
	var sL=adsSZ.length,ss;
	for (var i=0;i<sL;i=i+2){
		if (adsTile==adsSZ[i+1]){
			ss=adsSZ[i].split('x');
			w=ss[0];
			h=ss[1];
			break;
		}
	}
}
if (w=='RR'||w=='rr'){
	w=300;h=250;
	if (f)ds='r';
	sz='300x250,300x600,300x1050';
	rr=1;
	if (adSetInV=='0')adsRRCalled='1';
}
else if (w=='LB'||w=='lb'){
	w=728,h=90;
	if (f)ds='r';
	sz='728x90,948x250,950x252,940x230,101x1';
	if (adsRePo!='1'||cw>=970)sz+=',970x66,970x90,970x250';
}
else if (w=='MM'||w=='mm'){
	w=300,h=250;
	if (f)ds='r';
	sz='300x250,320x480,320x50';
}
else if (w>=970&&cw<970&&adsRePo=='1'&&t!='text'){
	return 0;
}
if (adsCp){
	var cl=adsCF.length;
	for (var i=0;i<cl;i++){
		if ((/http[s]{0,1}:\/\/[^\/]*?aol.com(:[0-9]*?){0,1}\//.test(adsCF[i]))&&(/^[0-9A-Za-z\/.:_\-]+$/.test(unescape(adsCF[i])))){
			if (sz){
				var sp2=sz.split(','),le=sp2.length,sp3;
				for (var j=0;j<le;j++){
					sp3=sp2[j].split('x');
					if (adsCW[i]==sp3[0]&&adsCH[i]==sp3[1])ye=1;
				}
			}
			if (ye||(adsCW[i]==w&&adsCH[i]==h)||(adsCAd[i]==adsTile)){
				if (adsTp=='I'||t=='iframe')s=adsCF[i]+'.html'
				else s=adsCF[i]+'.js';
				adsCW[i]=0;
				r=1;
				break; 
			}
		}
	}
}
if (adsMNS){
	var mL=adsMNS.length,wxh=w+'x'+h,num,all=0;
	for (var i=0;i<mL;i=i+2){
		num=adsMNS[i+1];
		if (num.indexOf('a')>0){
			num=num.replace('a','');
			all=1;
		}
		else {
			all=0;
		}
		if (num.indexOf('only')>-1){
			num=num.replace('only','');
			only=1;
		}
		else {
			only=0;
		}
		if ((adsTile==num)||(wxh==num)||(num=='RRxRR'&&rr==1)){
			m=adsMNS[i];
			if (!all)adsMNS[i+1]='';
			if (only)adsMNS[i+1]='only';
		}
		else if (only){
			m='0';
		}
	}
}
if (m=='0'){adsTile++;return 0}
var adsTpOrig=adsTp;
if (adsTPS){
	var tL=adsTPS.length;
	for (var i=0;i<tL;i=i+2){
		if (adsTile==adsTPS[i+1]){
			t=adsTPS[i].toLowerCase();
			if (t=='j'){adsTp='J';t=''}
			else if (t=='i'){adsTp='I';t=''}
			else if (t=='fileless')adsFileless=1
			else adsTp='';
			break;
		}
	}
}
if (r==0){
	var s1='',s2='';
	if (sz&&!rr)s2="allowedSizes="+sz+";"
	else if (ds!='r')s2="size="+w+"x"+h+";"
	s2+="noperf=1;";
	if (adsAddOnMQ){
		if (adsAddOnMQ=='y')s2+="noaddonpl=y;"
	}
	else {
		if ((t=='ajax'&&!adsAJAXAddOn)||adsAddOn==2){
			s2+="noaddonpl=y;";
			adsAddOn=2;
		}
		else{
			if (adsTile==1){
				if (adsAddOn==1)adsAddOn=2;
				else s2+="noaddonpl=y;";
			}
			else {
				if (adsAddOn!=1)s2+="noaddonpl=y;";
				else adsAddOn=2;
			}
		}
	}
	if (adsExcV=='blank')inc='artexc=all;'
	else if (adsExcV=='imgOnly')inc='artexc=all;artinc=art_image,art_img1x1,art_3pimg,art_rrimage,art_rrimg1x1,art_rr3pimg;';
	if ((atwUAC.gdprRet.toString().indexOf('noC')==-1)&&(atwUAC.gdpr=='0'||atwUAC.gdpr=='1')){
		gdpr='gdpr='+atwUAC.gdpr+';';
		if (atwUAC.gdpr&&atwUAC.gdpr!='0'){
			if (atwUAC.gdprC!=undefined)gdpr+='euconsent='+atwUAC.gdprC+';'
			gc=',EU';
		}
		gdpr+='kvgdprstatus=success,0'+gc+';';
	}
	else if (atwUAC.gdprRet!='noCall'){
		gdpr='kvgdprstatus='+atwUAC.gdprRet+',0;';
	}
	if (atwUAC.spaceid){
		s1='spaceid='+atwUAC.spaceid+';';
	}
	else {
		if (window.rapidConfig&&window.rapidConfig.spaceid)s1=window.rapidConfig.spaceid
		else if (window.myRapidConfig&&window.myRapidConfig.spaceid)s1=window.myRapidConfig.spaceid
		else if (window.rapidData&&window.rapidData.spaceid)s1=window.rapidData.spaceid
		else if (window.rapidParams&&window.rapidParams.spaceid)s1=window.rapidParams.spaceid;
		if (s1!=''){
			atwUAC.spaceid=s1;
			s1='spaceid='+s1+';'
		}
	}
	s1+=adsATOth.toLowerCase()+adsVal+'kvmn='+m+';kvgrp='+adsScr+';kvismob='+adsDev+';'+adsChn+"extmirroring=0;kvtile="+adsTile+";target=_blank;aduho="+(-1*adsD.getTimezoneOffset())+";";
	s2+=inc+s1+"grp="+adsScr;
	if (adsHt)s=adsHt
	else s=pr+'at.atwola.com';
	s+="/addyn/3.0/"+adsNt+"/"+adsPl+"/0/-1/";
	s+=s2.replace(/noperf=1;/,'noperf=1;'+gdpr+'alias='+m+';');
}
if (t=='return'){
	adsTile++;
	adsTp=adsTpOrig;
	return s;
}
if (t!='text' && t!='ajax' && t!='f' && t!='iframe' && t!='fileless' && adsTp)t=adsTp
var ttype=''
if (t)ttype=t
else t=adsTp;
atwUAC.adsInfo[adsTile]={
 mn:m,
 url:s,
 origW:ow,
 origH:oh,
 sz:osz,
 other:adsATOth,
 ttype:t,
 dv:dv,
 inV:adSetInV
}
if ((!adsFilelessFlag||adsFilelessFlag=='text')&&(t=='ajax'||t=='f'||t=='fileless'||adsTp=='F')){adsFileless=1;}
else if (adsFilelessFlag!='text'&&t=='text'){adsFileless=1;}
else {adsFileless=0;}
if (t=='text'||f){
	if (!fn||fn=='')fn=adsPage;
	if ((fn==''||(adsUA.indexOf('opera')>-1))&&(adsFileless!=1)){adsTp='J';t='',f=''}
}
if (t=='text'){
	adSetupDiv(w,h,s,dv,fn,txt,m,sz,c,adSetInV,adsFileless);
	adsDivs[adsDivs.length-1].LoadAd();
}
else if (t=='iframe'){
	adSetupDiv(w,h,s.replace(/addyn\/3.0/,"adiframe/3.0"),dv,fn,'iframe',m,sz,c,adSetInV,'0');
	adsDivs[adsDivs.length-1].LoadAd();
}
else if (adsTp=='F'||t=='f'||t=='fileless'||t=='ajax'){
	adSetupDiv(w,h,s,dv,fn,ds,m,sz,c,adSetInV,adsFileless);
	if (!adsSyncDelay||adsDivs.length==1||adsLoadSync)adsDivs[adsDivs.length-1].LoadAd()
	else {
		adsDivs[adsDivs.length-1].delayed=1;
		if (!adsSyncTime)adsSyncTime=setTimeout(adsLoadedSync,adsSyncDelay);
	}
}
else if (adsTp!='J'){
	d.write("<iframe title='Ad' name='adsF"+adsLNm+"' id='adsF"+adsLNm+"' src='"+s.replace(/addyn\/3.0/,"adiframe/3.0")+"' width='"+w+"' height='"+h+"'  scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>");
	var xx=document.getElementById('adsF'+adsLNm);
	if (xx){
		xx.setAttribute("itemscope","");
		xx.setAttribute("itemtype","https://schema.org/WPAdBlock");
	}
	if (adsEAN){
		if (w<234){
			d.write('<BR><a id="adsF'+adsLNm+'EANA" style="position:absolute;left:'+(w-19)+'px;z-index:4999;margin:0 auto;width:19px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>');
		}
		else {
			d.write('<BR><a id="adsF'+adsLNm+'EANA" style="position:absolute;left:'+(w-77)+'px;z-index:4999;margin:0 auto;width:77px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoices.png" style="border:none;width:77px;height:15px;vertical-align:top" alt="AdChoices"></a>');
		}
	}
	adsLNm++;
}
else if (adsTp=='J'){
	if (dv==undefined||s.indexOf('//mads')>-1){
		d.write(st+s+"'></script>");
	}
	else {
		 s=s.replace(/allowedSizes=.*?;/,"size="+w+"x"+h+";");
		 if (s.indexOf('size=')==-1)s=s.replace(/\/0\/-1\//, "\/0\/-1\/size="+w+"x"+h+";");
		 var dv1=adsGetObj(dv),img=d.createElement('img'),li=document.createElement('a');
		 li.href=s.replace(/addyn/,"adlink");
		 li.target='_blank';
		 img.src=s.replace(/addyn/,"adserv");
		 img.alt='Ad';
		 img.height=h;
		 img.width=w;
		 li.appendChild(img);
		 dv1.appendChild(li);
	}
}
adsTile++;
adsTp=adsTpOrig;
}
}
}