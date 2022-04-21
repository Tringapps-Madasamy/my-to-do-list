
function checkdata(){
          
         var username=document.getElementById('uname').value;
         var passw=document.getElementById('pword').value;

          let savedname=localStorage.getItem('store');
          let value_string=JSON.parse('savedname');
          alert("vanthuruchu");
        var count=0;
        for(var i=0;i<value_string.storedvalue.length;i++)
        {
            let newname=value_string.storedvalue[i]["username"];
            let newpw=value_string.storedvalue[i]["passw"];
            if (newname == username && newpw == passw){
                     alert("ok");
                window.open("C:\Users\Admin\Desktop\changed todolist\todolist.html");
                return true;
           }
            else{
                 count++;
             }
        }
        if(count>0){
            alert("please give correct username and password!!");
        } 
     
      return false;   
}     
