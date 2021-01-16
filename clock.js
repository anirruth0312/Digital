function updatetime(){
    var currentTime= new Date()
    var hours=currentTime.getHours()
    var minutes=currentTime.getMinutes()
    var seconds=currentTime.getSeconds()
    var zone="AM"
    if(hours>11)
    {
        zone="PM"
    }
    if(hours>12)
    {
        hours=hours-12
    }
   if(seconds<10)
   {
       seconds="0"+seconds
   }
   if(minutes<10)
   {
       minutes="0"+minutes
   }
   if(hours<10)
   {
      hours="0"+hours
   }
    document.getElementById("clock").innerHTML= hours+":"+minutes+":"+seconds + " "+ zone
   
  
}
setInterval(updatetime,1000);