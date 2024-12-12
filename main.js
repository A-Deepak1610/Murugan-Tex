this.window.addEventListener("keydown", (event) => {
  if (event.ctrlKey&&event.key == "Enter") {
    calculate();
    hifen()
    
  }
});
function calculate(){
    var inputmeters=document.getElementById("inputmeters").value
    var inputrate=document.getElementById("inputrate").value
    if(inputmeters==""){
        alert("Please enter meter")
    }
    else if(inputrate==""){
        alert("Please enter rate")
    }
    else{
    var infolding=document.getElementById("infolding")
    var intotalmeters=document.getElementById("intotalmeters")
    var inamount=document.getElementById("inamount")
    var taxableamtno=document.getElementById("taxableamtno")
    var cgstno=document.getElementById("cgstno")
    var sgstno=document.getElementById("sgstno")
    var igstno=document.getElementById("igstno")
    var totalamt=document.getElementById("totalamt")
    var amtwords=document.getElementById("amtwords")
    var baleno1=document.getElementById("baleno1").value
    var baleno2=document.getElementById("baleno2").value
    var totalbales=document.getElementById("totalbales")
    var billstate=document.getElementById("billstate").value
    let foldingless=(inputmeters*3)/100
    foldingless=foldingless.toFixed(2)
    infolding.textContent=foldingless
    let totalmeter=inputmeters-foldingless
    intotalmeters.textContent=totalmeter
    let amount=inputrate*totalmeter
    inamount.textContent=amount
    taxableamtno.textContent=amount
    let cgst=0
    let sgst=0
    let igst=0
    let totalbale=baleno2-baleno1
    console.log(totalbale)
    if(totalbale==0){
        alert("PLease enter bale numbers")
    }
    else{
        totalbales.textContent=totalbale+1
    }
    if(billstate=='STATE:TN'){
    cgst=(amount*2.5)/100
    cgst=cgst.toFixed(2)
    sgst=(amount*2.5)/100
    sgst=sgst.toFixed(2)
    cgstno.textContent=cgst
    sgstno.textContent=sgst
    amount=Number(amount)
    cgst=Number(cgst)
    sgst=Number(sgst)
    igstno.textContent='-'
    }
    else{
        igst=(amount*5)/100
        igst=igst.toFixed(2)
        igst=Number(igst)
        igstno.textContent=igst
        cgstno.textContent='-'
        sgstno.textContent='-'
        
    }
    let grandtotal=amount+cgst+sgst+igst
    grandtotal=Math.round(grandtotal)
    totalamt.textContent=grandtotal
     var finalwords=numberToWordsIndian(grandtotal)
     amtwords.textContent=finalwords
    }   
}
function numberToWordsIndian(num) {
    if (num === 0) return "zero";
    const units = [
      "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];
    const teens = [
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
      "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    const tens = [
      "", "", "twenty", "thirty", "forty", "fifty",
      "sixty", "seventy", "eighty", "ninety"
    ];
    const places = [
      "", "thousand", "lakh", "crore"
    ];
    function getBelowThousand(n) {
      let result = "";
      if (n > 99) {
        result += units[Math.floor(n / 100)] + " hundred ";
        n %= 100;
      }
      if (n > 19) {
        result += tens[Math.floor(n / 10)] + " ";
        n %= 10;
      }
      if (n > 0) {
        result += n < 10 ? units[n] : teens[n - 10];
      }
      return result.trim();
    }
    const parts = [];
    let unitIndex = 0;
    while (num > 0) {
      let chunk;
      if (unitIndex === 0) {
        chunk = num % 1000; 
        num = Math.floor(num / 1000);
      } else {
        chunk = num % 100; 
        num = Math.floor(num / 100);
      }
      if (chunk > 0) {
        parts.unshift(getBelowThousand(chunk) + (places[unitIndex] ? " " + places[unitIndex] : ""));
      }
      unitIndex++;
    }
    return parts.join(" ").trim();
  }
  function hifen(){
    var baleno1=document.getElementById("baleno1")
    var baleno2=document.getElementById("baleno2")
    if(baleno1.value.length==2){
        baleno1.style.width="2ch"
        baleno2.style.width="2ch"
    }
    else if(baleno1.value.length==4){
      baleno1.style.width="4ch"
        baleno2.style.width="4ch"
    }
  }
  function sameshipaddress(){
    var checkbox=document.getElementById("checkbox")
    var billaddress=document.getElementById("billaddress").value
    var addressbill=document.getElementById("addressbill").value
    var billgstn=document.getElementById("billgstn").value
    var billstate=document.getElementById("billstate").value
    var sbilladdress=document.getElementById("sbilladdress")
    var saddressbill=document.getElementById("saddressbill")
    var sbillgstn=document.getElementById("sbillgstn")
    var sbillstate=document.getElementById("sbillstate")
    if(checkbox.checked==true){
      sbilladdress.value=billaddress
      saddressbill.value=addressbill
      sbillgstn.value=billgstn
      sbillstate.value=billstate
    }
    else{
      sbilladdress.value=''
      saddressbill.value=''
      sbillgstn.value=''
      sbillstate.value=''
    }
  }
  function printpage(){
    window.print()
  }

// function saveData() {
//   const fields = [
//     "billaddress",
//     "addressbill",
//     "billgstn",
//     "billstate",
//     "sbilladdress",
//     "saddressbill",
//     "sbillgstn",
//     "sbillstate",
//     "baleno1",
//     "baleno2",
//     "inputmeters",
//     "inputrate",
//   ];

//   fields.forEach((field) => {
//     const element = document.getElementById(field);
//     if (element) {
//       localStorage.setItem(field, element.value);
//     }
//   });
// }
// function loadData() {
//   const fields = [
//     "billaddress",
//     "addressbill",
//     "billgstn",
//     "billstate",
//     "sbilladdress",
//     "saddressbill",
//     "sbillgstn",
//     "sbillstate",
//     "baleno1",
//     "baleno2",
//     "inputmeters",
//     "inputrate",
//   ];

//   fields.forEach((field) => {
//     const element = document.getElementById(field);
//     if (element) {
//       const storedValue = localStorage.getItem(field);
//       if (storedValue) {
//         element.value = storedValue;
//       }
//     }
//   });
// }
// function clearData() {
//   localStorage.clear();
//   location.reload();
// }
// window.addEventListener("DOMContentLoaded", () => {
//   loadData();
//   const fields = document.querySelectorAll("input, textarea");
//   fields.forEach((field) => {
//     field.addEventListener("input", saveData);
//   });
// });

  
  