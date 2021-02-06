let x=JSON.parse(localStorage.getItem("addCart"))
console.log(x)
if(x==null){
  document.getElementById("quantity_1").innerHTML=`Not Yet Added`
}
else{
    function loadData(){
        var total=0,output="";
        for(var i=0;i<x.length;i++){
            total+=x[i][0].selected*x[i][0].quantity
            output+=`<tr><td>${x[i][0].name}</td>
                    <td>::</td>
                    <td>${x[i][0].quantity}*${x[i][0].selected}</td>
                    <td>::</td>
                    <td>${x[i][0].selected*x[i][0].quantity}</td>
                    <td><button class="reduce_button" onclick="reduceQuantity(this)" id=${x[i][0].id}>-</button></td>
                    <td><button onclick="increaseQuantity(this)" id=${x[i][0].id}>+</button></td></tr>`
        }
        document.getElementById("quantity_1").innerHTML=`${output}</hr>
        <tr class="tr_top"><td>Total Monthly Rent</td><td>::</td><td></td><td></td><td>${total}</td></tr>`
        localStorage.setItem("total_amount",total)
}
}

let increaseQuantity=(event)=>{
    id1=event.id
    for(var j=0;j<x.length;j++){
      if(x[j][0].id==id1){
        x[j][0].quantity+=1;
        loadData();
      }
    }
  }
  
  // DECREASE QUANTITY
  
  
  let reduceQuantity=(event)=>{
    id1=event.id
    for(var j=0;j<x.length;j++){
      if(x[j][0].id==id1){
        if(x[j][0].quantity>0){
          x[j][0].quantity-=1;
          loadData();
        }
      }
    }
  }
  loadData();