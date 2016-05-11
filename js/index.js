window.onload=function(){
	var anniu=document.getElementsByClassName('anniu-a');
	var banner=document.getElementsByClassName('banner-list');
    var index=0;
    var timerId;
    var kaiguan=banner[0];
    banner[0].style.display='block';
    var kai=anniu[0];
    anniu[0].style.background='#F54603'; 
//-------------------------------- 

   for(var i = 0;i<anniu.length;i++){
   	anniu[i].w=i;
   	anniu[i].onmouseover=function(e){
    index=(this.w==anniu.length)?0:this.w;
    kaiguan.style.display='none';
    banner[this.w].style.display='block';
    kaiguan=banner[this.w];
   	};
   }
var dian=document.getElementById('banner-left-lt');
var en=document.getElementById('banner-right-lt');
 en.onclick=function(){
 	index += 1;
 	if(index==banner.length){
 		index=0;
 	}
 	kaiguan.style.display='none';
 	banner[index].style.display='block';	
 	 kaiguan=banner[index];
 };


 dian.onclick=function(){
 	if(index==0){
 		index=banner.length-1;	
 	}else{
 		index -= 1;
 	}
 	kaiguan.style.display='none';
 	banner[index].style.display='block';
 	kaiguan=banner[index];
 };
  
  document.onmousedown=function(e){
    e.preventDefault();
  };
 var fn =function(){
   index += 1;
   if(index==5){
    index=0;
   }
	kaiguan.style.display='none';
	banner[index].style.display='block';
  kaiguan=banner[index];
  kai.style.background='';
 anniu[index].style.background='#F54603';	
  kai=anniu[index];
    };
    timerId=setInterval(fn,2000);

//-------------------------------
 for(var i =0;i<anniu.length;i++){ 
  anniu[i].w=i;
   anniu[i].onclick=function(){
    clearInterval(timerId);
    this.style.display='block';

  kai.style.background='';
  this.style.background='#F54603';
  kai=this;
  };
  banner[i].onmouseover=function(){
    clearInterval(timerId);
  };
  banner[i].onmouseout=function(){
    clearInterval(timerId);
    timerId=setInterval(fn,2000);
  };

 }


};