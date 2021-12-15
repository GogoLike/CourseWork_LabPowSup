//CopyRight 2004-2007 RadioBox (C)
//self.onError=null;
        
Kf = 1;
deltaY = 0;
DomY = "";
whichIt = null;           
lastScrollY = 0;
summator = 0;
otstup = 115;
curyear = 2007;
tmDelta = 0;

NS = (document.layers) ? 1 : 0;
IE = (document.all) ? 1 : 0;
DOM = (document.getElementById) ? 1 : 0;
DOM = (DOM && !IE);
NS6 = document.getElementById && !document.all;


function Interval() {
	if(NS6) deltaY = self.pageYOffset;
	else if(IE || DOM) {
		deltaY = document.body.scrollTop;
	}

        if(deltaY > otstup) deltaY -= otstup;
	else deltaY = 0;
        if(deltaY != lastScrollY) {
		if (deltaY > lastScrollY) Kf = .3;
		else Kf = .8
		percent = Kf * (deltaY - lastScrollY);
		if(percent > 0)	percent = Math.ceil(percent);
		else		percent = Math.floor(percent);
		if(IE) document.all.mnu.style.pixelTop += percent;
		if(NS) document.mnu.top += percent; 
		if(DOM) {
			DomY = document.getElementById("mnu").style.top;
			document.getElementById("mnu").style.top=parseInt(DomY.substr(0,DomY.length-2))+percent;
		 }
                lastScrollY = lastScrollY + percent;
	}
}

function ImgLink(name,w,h) {

 var x = screen.availWidth;
 var y = screen.availHeight;
 var ifsc = Number(x < w || y < h);
 var top = 0;
 var left = 0;
 x = Math.min(x,w);
 y = Math.min(y,h);
 top = Math.round((screen.availHeight - y)/2);
 left = Math.round((screen.availWidth - x)/2);
 newimg=window.open("","Image","Width="+x+", Height="+y+", Toolbar=0, Status=0, Menubar=0, Scrollbars="+ifsc+", Resizable=0, Top="+top+",Left="+left);
 newimg.resizeTo(x+14,y+36);
 newimg.document.open();
 newimg.document.write('<html><body TOPMARGIN=0 LEFTMARGIN=0><img src='+name+' width='+w+' height='+h+'></body>')
 newimg.focus();
 newimg.document.close();
}

function retsert(arrsert) {
var retstr = "";
	for (var i=0; i <= arrsert.length-1; i++) {
		retstr = retstr + '<img src="../../sert/'+arrsert[i]+'.gif"';
	}
return retstr;
}

function getTop(element) { 
   result = element.offsetTop; 
   if (element.offsetParent) result += getTop(element.offsetParent); 
   return result; 
}

function stime() {
   d=new Date();
   Offset=-60*d.getTimezoneOffset();
   ltime=d.getHours()*3600+d.getMinutes()*60+d.getSeconds();
   et=NS6? document.getElementById("etime") : document.all("etime");
   if (tmDelta == 0) {
      rtime=et.bgColor.substring(1,3)*3600+et.bgColor.substring(3,5)*60+Number(et.bgColor.substring(5,7));
      lxtime=ltime-Offset;
      if (rtime-lxtime>43200) lxtime += 86400;
      else if (lxtime-rtime>43200) rtime += 86400;
      tmDelta = rtime - lxtime;
   }
   Offset = ltime + tmDelta;
   if (Offset > 86400) Offset -= 86400;
   else if (Offset < 0) Offset += 86400;
   rHours = Math.floor(Offset/3600);
   if (rHours < 10) rHours = "0" + rHours;
   Offset -= rHours*3600;
   rMinutes = Math.floor(Offset/60);
   if (rMinutes < 10) rMinutes = "0" + rMinutes;
   Offset -= rMinutes*60;
   rSeconds = Offset;
   if (rSeconds < 10) rSeconds = "0" + rSeconds;
   rtime = rHours + ":" + rMinutes + ":" + rSeconds;
   if (et.bgColor) window.status = rtime;
}

function nurl(url) {
window.location.href=url;
return;
}
