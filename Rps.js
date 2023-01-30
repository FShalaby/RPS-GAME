var x =gen();
 function rock(){
   let image = document.getElementById("image");
 
   image.src="rock.png"
 
   document.getElementById("rock").style.display = "none";
   document.getElementById("paper").disabled=true;
   document.getElementById("sci").disabled=true;
   com();
   final();
            

   
}
function paper(){
   let img= document.getElementById("image");
   img.src="paper.png"
   document.getElementById("paper").style.display="none";
   document.getElementById("rock").disabled=true;
   document.getElementById("sci").disabled=true;
   com();
   final2();
}

function sci(){
   let img3= document.getElementById("image");
   img3.src="scissors.png"
   document.getElementById("sci").style.display="none";
   document.getElementById("rock").disabled=true;
   document.getElementById("paper").disabled=true;
   com();
   final3();
   
}

function com()
{
   let image2=document.getElementById("image2");
   if(x==1)
   {
      image2.src="rock2.jpg"
      
   }
   else if(x==2){
      image2.src="scissors2.jpg"
   }
   else if(x==3){
      image2.src="paper2.jpg"
   }
   
   }


function gen()
{
   var num=Math.floor(Math.random()*3)+1;
   return num;
}

function final()
{
   if(x==1)
      {
         document.getElementById("head").innerHTML="Draw"
         }
      else if(x==2){
         document.getElementById("head").innerHTML="Player Wins"
      }
       else if(x==3){
         document.getElementById("head").innerHTML="COM Wins"
      }
}
function final2(){
   if(x==1)
      {
         document.getElementById("head").innerHTML="Player Wins"
         }
      else if(x==2){
         document.getElementById("head").innerHTML="COM Wins"
      }
       else if(x==3){
         document.getElementById("head").innerHTML="Draw"
      }
}
function final3(){
   if(x==1)
      {
         document.getElementById("head").innerHTML="COM Wins"
         }
      else if(x==2){
         document.getElementById("head").innerHTML="Draw"
      }
       else if(x==3){
         document.getElementById("head").innerHTML="Player Wins"
      }
}
function refresh(){
   window.location.reload();
}