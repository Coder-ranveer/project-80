var names=[];
function submit()
  {
  var input1= document.getElementById("input1").value;
  names.push(input1);
  document.getElementById("displayarray").innerHTML=names;
  }  
  function show()
  {
      var r=names.join("<br>");
      document.getElementById("listofnames").innerHTML=r;
  }
  function sort()
  {
    names.sort();
    var r=names.join("<br>");
    document.getElementById("Sortedlist").innerHTML=r;
  }
  function search()
  {
      var times=0;
      var k= document.getElementById("input2").value;
      for(i=0; i<names.length; i++)
      {
        if(k==names[i])
        {
        times=times+1;
        }
      }
      document.getElementById("Search").innerHTML="name found"+times+"times";
  }
