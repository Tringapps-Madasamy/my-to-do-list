function savedata(){
         var username=document.getElementById('username').value;
         var passw=document.getElementById('passw').value;
         
         let store={
                 "storedvalue":[]
         }
         store.storedvalue.push({
                                              "username":username,
                                              "passw": passw,
                                              "todolist":[]
                                            });
         localStorage.setItem("store",JSON.stringify(store));
         
         alert("successfully  registered");

}
