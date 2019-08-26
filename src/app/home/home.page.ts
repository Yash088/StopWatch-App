import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    count:number=0;
    percent:number=0;
    radius:number=120;
    fullTime:any='00:01:30';
    timer:any=false;
    progress:any=false;
    min:number=1;
    sec:any=30;
    gmin:any='00';
    gsec:any='00';
    ghr:any='00';
    time:any={
      h:'00',
      m:'00',
      s:'00'
    }
    endTime:any= false;
  startTimer(){ 
  //with the second click  
  if(this.timer){
    clearInterval(this.timer);
  }
if(!this.endTime){
  this.progressTimer();
}

this.timer=0;
this.percent=0;
this.progress=0;
this.count=0;
//time spliting
let timesplit=this.fullTime.split(':');
this.min=timesplit[1];
this.sec=timesplit[2];
//second converting
let totalsec= Math.floor(this.min*60)+parseInt(this.sec);
//radiuns convert with progress/sec
this.timer=setInterval(() => {
if(this.percent==this.radius) 
    clearInterval(this.timer);
else{
  //convert to percent 
  this.percent=Math.floor((this.progress/totalsec)*100);
  this.progress++;
  this.count++;   
}},1000)
}
progressTimer(){
let count1=new Date();
this.endTime=setInterval(()=>{
let now= new Date().getTime();
let distance=now-count1.getTime();
this.time.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
this.time.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
this.time.s = Math.floor((distance % (1000 * 60)) / 1000);
      
this.time.h = this.pad(this.time.h, 2);
this.time.m = this.pad(this.time.m, 2);
this.time.s = this.pad(this.time.s, 2);
},1000)
}
pad(num, size) {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}
stopTimer(){
  clearInterval(this.timer);
  clearInterval(this.endTime);
  this.count=0;
  this.percent=0;
  this.radius=100;
  this.fullTime='00:01:30';
  this.timer=false;
  this.progress=false;
  this.min=1;
  this.sec=30;
  this.time={
    h:'00',
    m:'00',
    s:'00'
  }
  this.endTime= false;
}
}