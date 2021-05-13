 function check ()
{
 console.log("HI !!!!");
  var l1=0;var l2=0;var l3=0;var l4=0;var l5=0;var l6=0;
  var arr=["","Android Application Developer","Cyber-Security Analyst/ Database Admin","Data Scientist","Frontend-Web Developer","Backend Web Developer","Software Developer"];
  
  var s1="";var s2="";var s4="";var s3="";
  var a=document.one.lang.value;
  var b=document.two.sw.value;
  var c=document.three.sk.value;
  var d=document.four.rs.value;
  
  
   if(a=="java"||a=="kot"){l1++;s1=arr[1];}
   if(a=="sql"){l2++;s1=arr[2];}
   if(a=="pyt"){l3++;s1=arr[3];}
   if(a=="css"){l4++;s1=arr[4];}
   if(a=="php"||a=="js"){l5++;s1=arr[5];}
   if(a=="c"){l6++;s1=arr[6];}
  
   if(b=="as"){l1++;s2=arr[1];}
   if(b=="db"){l2++;s2=arr[2];}
   if(b=="apc"){l3++;s2=arr[3];}
   if(b=="rab"){l4++;s2=arr[4];}
   if(b=="dj"){l5++;s2=arr[5];}
   if(b=="git"){l6++;s2=arr[6];}
  
   if(c=="app"){l1++;s3=arr[1];}
   if(c=="dbms"){l2++;s3=arr[2];}
   if(c=="ai"){l3++;s3=arr[3];}
   if(c=="gd"){l4++;s3=arr[4];}
   if(c=="bac"){l5++;s3=arr[5];}
   if(c=="prd"){l6++;s3=arr[6];}
  
  
   if(d=="vpn"){l1++;s4=arr[1];}
   if(d=="api"){l2++;s4=arr[2];}
   if(d=="ps"){l3++;s4=arr[3];}
   if(d=="seo"){l4++;s4=arr[4];}
   if(d=="lin"){l5++;s4=arr[5];}
   if(d=="dsa"){l6++;s4=arr[6];}
  
   var arr2=[-1,l1,l2,l3,l4,l5,l6];

  var f=-1;
  var t=-1;
  var k;
  if(s1==""&&s2==""&&s3==""&&s4==""){document.write("Kindly Select Atleast One Option");return;}

  for( k=1;k<=6;k++)
    if(arr2[k]==4)f=k;
  if(f>0){document.write(" Tech-jectory Analysis: You are 100% focussed on a particular Domain -------************"+ "Recommended Domain--------**********"+ arr[f]);return;}
   var z;
var v=-1;
  for( z=1;z<=6;z++)
    if(arr2[z]==3)v=z;
  if(v>0){document.write(" Tech-jectory Analysis: You are 75% focussed on a particular Domain -------************"+ "Recommended Domain--------**********"+ arr[v]);return;}
  var f2=0;var m=0;var n=0;
  var h;
  for( h=1;h<=6;h++)
  if(arr2[h]==2){f2++;if (f2==1)m=h;else n=h;}
  if(f2==2)
    {
      var j1="";var j2="";
      if(s3==arr[m]){j1=arr[m];j2=arr[n];}else{j2=arr[m];j1=arr[n];}
      document.write(" Tech-jectory Analysis: You are 50% focussed each of the following Domains in the respective order-------************"+ "Recommended Domains--------1.**********"+ j1+"---------------and----------2.****************"+ j2);return;
    }
   if(f2==1&&s3==arr[m])
     {

         document.write(" Tech-jectory Analysis: You are 50% focussed on the following Domain -------************"+ "Recommended Domain--------**********"+ arr[m]);return;
     }
  
    if(f2==1&&s3!==arr[m])
      {
         document.write(" Tech-jectory Analysis: You are 33 % focussed on the following Domain -------************"+ "Recommended Domain--------**********"+ arr[m]);return;
      }

  else
    {
      document.write(" Tech-jectory Analysis: You are 25% focussed on the following Domain -------************"+ "Recommended Domain--------**********"+ s3);return;
    }
  
 
  
}
  
  
  
  
  
