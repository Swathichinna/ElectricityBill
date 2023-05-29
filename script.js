oldReading = document.getElementById("oldReading");
currReading = document.getElementById("currReading");
billDate = document.getElementById("billDate");
let usedunits;
let costPerUsedunits = 0;
let d = new Date();
let c = new Date().toJSON().slice(0, 10);
function readingCost() {
  event.preventDefault();
  usedunits = parseInt(currReading.value) - parseInt(oldReading.value);
  let alertmsg = "Current Reading cannot be lessthan OldReading";
  console.log(usedunits);
  // console.log(d);
  // console.log(billDate.value);
  if (billDate.value > c) {
    alert("Billing date cannot be greater than current date");
  }
  if (currReading.value < oldReading.value) {
    alert(alertmsg); 
  } else if (usedunits < 100) {
    costPerUsedunits = usedunits * 10;
  } else if (usedunits < 200) {
    costPerUsedunits = usedunits * 15;
  } else if (usedunits <= 300) {
    costPerUsedunits = usedunits * 20;
  } else {
    costPerUsedunits = usedunits * 25;
  }
  console.log(costPerUsedunits);
  return costPerUsedunits;
}
//create date
// let d=new Date();
// function dateFunc(){
// event.preventDefault();
// console.log(d);
// console.log(billDate.value);
//     let c= new Date().toJSON().slice(0,10);
//     console.log(c);
//     if(billDate.value>c){
//         alert("Billing date cannot be greater than current date");
//     }
// }
