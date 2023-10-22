const cpt1WtAndIndex = {
    0: 0,
    100: -1.6 ,
    200: -2.3 ,
    300: -3.5 ,
    400: -4.6 ,
    500: -5.8,
    600: -6.9,
    700: -8.1,
    800: -9.3,
    900: -10.4,
    1000: -11.6,
    2000: -23.1
} 
const cpt2WtAndIndex = {
  0: 0,
  100: -0.7 ,
  200: -1.5 ,
  300: -2.2 ,
  400: -2.9 ,
  500: -3.7,
  600: -4.4,
  700: -5.2,
  800: -5.9,
  900: -6.6,
  1000: -7.4,
  2000: -14.7,
  3000: -22.1
} 
const cpt3WtAndIndex = {
  0: 0,
  100: 0.7 ,
  200: 1.4 ,
  300: 2.0 ,
  400: 2.7 ,
  500: 3.4,
  600: 4.1,
  700: 4.7,
  800: 5.4,
  900: 6.1,
  1000: 6.8,
  2000: 13.5
} 
const cpt4WtAndIndex = {
  0: 0,
  100: 1.0 ,
  200: 2.0 ,
  300: 3.0 ,
  400: 4.0 ,
  500: 5.0,
  600: 6.0,
  700: 7.0,
  800: 8.0,
  900: 9.0,
  1000: 10.0,
  2000: 20.0
} 
const cpt5WtAndIndex = {
  0: 0,
  100: 1.3 ,
  200: 2.6 ,
  300: 4.0 ,
  400: 5.3 ,
  500: 6.6,
  600: 7.9,
  700: 9.2,
  800: 10.6,
  900: 11.9,
  1000: 13.2
} 
const zoneA ={
  0: 0,
  1: -1.1,
  2: -2.2,
  3: -3.3,
  4: -4.4,
  5: -5.5,
  6: -6.6,
  7: -7.7,
  8: -8.8,
  9: -9.9,
  10: -11.1
}
const zoneB ={
  0: 0,
  1: -0.3,
  2: -0.6,
  3: -0.9,
  4: -1.2,
  5: -1.5,
  6: -1.8,
  7: -2.1,
  8: -2.4,
  9: -2.6,
  10: -2.9,
  20: -5.9,
  30: -8.8,
  40: -11.8,
  50: -14.7,
  60: -17.6,
  70: -20.6,
  80: -23.5,
  90: -26.5
}
const zoneC ={
  0: 0,
  1: 0.8,
  2: 1.6,
  3: 2.4,
  4: 3.2,
  5: 4.0,
  6: 4.8,
  7: 5.6,
  8: 6.4,
  9: 7.2,
  10: 8.0,
  20: 16.0,
  30: 24.0,
  40: 32.0,
  50: 40.0,
  60: 47.9,
  70: 55.9
}

const tofAndToi = {
  0:0,
  1000: -1.1,
  2000: -2.3,
  3000: -3.3,
  4000:-4.2,
  5000:-5.1,
  6000:-5.8,
  7000:-6.5,
  8000:-7.0,
  9000:-7.1,
  10000:-6.7,
  11000:-5.8,
  12000:-4.3,
  13000:-2.0,
  14000:-3.3,
  15000:-4.8,
  16000:-6.3,
  17000:-9.5,
  18000:-11.0,
  19000:-11.1,
  19500:-11.9,
  20000:-11.1,
  20500:-9.0,
  21000:-6.8,
  21500:-4.6,
  22000:-2.5,
  22174:-1.7
}
let cpt1Index = document.getElementById("cpt1Index").innerHTML;
let cpt2Index = document.getElementById("cpt2Index").innerHTML;
let cpt3Index = document.getElementById("cpt3Index").innerHTML;
let cpt4Index = document.getElementById("cpt4Index").innerHTML;
let cpt5Index = document.getElementById("cpt5Index").innerHTML;
let CptIndexes = document.getElementById("cptIndexs");
let DOI = document.getElementById("DOI");
let DOIIndex = 0.0;
let paxIndexes = document.getElementById("paxIndexs");
let TofIndex = document.getElementById("TOFIndex");
let LIZFW = document.getElementById("LIZFW");
let LITOW = document.getElementById("LITOW");
let ZFWeight = document.getElementById("ZFWeight");
let TOWeightInput = document.getElementById("TOWeight");
let TOWeight = 0;

let cpt1Weight = 0;
let cpt2weight = 0;
let cpt3Weight = 0;
let cpt4Weight = 0;
let cpt5weight = 0;

// change cpts weight by input field
document.querySelectorAll('.actualCptWeight').forEach(item => {
    item.addEventListener('change', event => {
      let idItem = item.id;
      let value =Number(item.value) ;
      let max = Number(item.max);
      let curentCpt = idItem.substring(0,4);
      console.log(curentCpt);

      console.log(typeof(value));
      if(value >= max){
        item.value = item.max;
      }
      document.getElementById(`${idItem}SlideRange`).value = item.value;
      
      switch(curentCpt){
        case "cpt1":
          document.getElementById("cpt1Index").innerHTML = findIndex(item.value,cpt1WtAndIndex,false);
          break;
        case "cpt2":
          document.getElementById("cpt2Index").innerHTML = findIndex(item.value,cpt2WtAndIndex,false);
          break;
        case "cpt3":
          document.getElementById("cpt3Index").innerHTML = findIndex(item.value,cpt3WtAndIndex,false);
          break;
        case "cpt4":
          document.getElementById("cpt4Index").innerHTML = findIndex(item.value,cpt4WtAndIndex,false);
          break;
        case "cpt5":
          document.getElementById("cpt5Index").innerHTML = findIndex(item.value,cpt5WtAndIndex,false);
          break;
      }
      updateIndexes();
    })

    
  })
 // change cpts weight by slide bar
document.querySelectorAll('.slideRange').forEach(item => {
    item.addEventListener('input', event => {
      let idItem = item.id;
      let curentCpt = idItem.substring(0,4);

      idItem =  idItem.replace("SlideRange","");
      document.getElementById(`${idItem}`).value = item.value;

      switch(curentCpt){
        case "cpt1":
          document.getElementById("cpt1Index").innerHTML = findIndex(item.value,cpt1WtAndIndex,false);
          break;
        case "cpt2":
          document.getElementById("cpt2Index").innerHTML = findIndex(item.value,cpt2WtAndIndex,false);
          break;
        case "cpt3":
          document.getElementById("cpt3Index").innerHTML = findIndex(item.value,cpt3WtAndIndex,false);
          break;
        case "cpt4":
          document.getElementById("cpt4Index").innerHTML = findIndex(item.value,cpt4WtAndIndex,false);
          break;
        case "cpt5":
          document.getElementById("cpt5Index").innerHTML = findIndex(item.value,cpt5WtAndIndex,false);
          break;
      }
      updateIndexes();
    })
  })
// change zones pax by input field
document.querySelectorAll('.actualPax').forEach(item => {
  item.addEventListener('change', event => {
    let idItem = item.id;
    let value =Number(item.value) ;
    let max = Number(item.max);
    let currentZone = idItem.substring(0,5);
    console.log(currentZone);

    console.log(typeof(value));
    if(value >= max){
      item.value = item.max;
    }
    document.getElementById(`${idItem}SlideRange`).value = item.value;
    
    switch(currentZone){
      case "zoneA":
        document.getElementById("zoneAIndex").innerHTML = findIndex(item.value,zoneA,true);
        break;
      case "zoneB":
        document.getElementById("zoneBIndex").innerHTML = findIndex(item.value,zoneB,true);
        break;
      case "zoneC":
        document.getElementById("zoneCIndex").innerHTML = findIndex(item.value,zoneC,true);
        break;
    }
    updateIndexes();
})
})

//change pax index with sllide bar
document.querySelectorAll('.actualPaxSlideRange').forEach(item=>{
  item.addEventListener('input', event=>{
    let idItem = item.id;
      let currentZone = idItem.substring(0,5);

      idItem =  idItem.replace("SlideRange","");
      document.getElementById(`${idItem}`).value = item.value;

      
    switch(currentZone){
      case "zoneA":
        document.getElementById("zoneAIndex").innerHTML = findIndex(item.value,zoneA,true);
        break;
      case "zoneB":
        document.getElementById("zoneBIndex").innerHTML = findIndex(item.value,zoneB,true);
        break;
      case "zoneC":
        document.getElementById("zoneCIndex").innerHTML = findIndex(item.value,zoneC,true);
        break;
    }
      updateIndexes();
  })

});

document.getElementById("TOF").addEventListener("change",function(){
      let value =Number(this.value) ;
      let max = Number(this.max);
      let takeOfWeight;
      console.log(this.value);

      console.log(typeof(value));
      if(value >= max){
        this.value = this.max;
      }
      if(this.value <= 21249){
        takeOfWeight = Math.round(this.value/1000)*1000;
      }else if(this.value <= 2749){
        takeOfWeight = 21500;
      }else if(this.value <= 22087){
        takeOfWeight = 22000;
      }else{
        takeOfWeight = 22174;
      }
      console.log(takeOfWeight);
      
      TofIndex.innerHTML = tofAndToi[takeOfWeight];
      updateIndexes();
}
)

DOI.addEventListener('change',function(){
  let value =Number(this.value);
  console.log(this.value);
  DOIIndex = value;

  updateIndexes();
})

TOWeightInput.addEventListener('change',function(){
  let value =Number(this.value);
  console.log(this.value);
  TOWeight = value;

  updateIndexes();
})

function findIndex( num , cptNum ,isPax){
  if(isPax == false){
    let thousand = 0;
    let houndred = 0;
    //in case we need
    var optinalNum = 0;
    let thisCptIndex = 0;
    thousand =Math.floor(num/1000)*1000;
    houndred = num - thousand;
  
    houndred = Math.round(houndred / 100) * 100;
  
    thisCptIndex = cptNum[thousand] + cptNum[houndred];
    thisCptIndex = thisCptIndex.toFixed(2);
    return thisCptIndex;
  }else{
    let ten = 0;
    let one = 0;
    let thisCptIndex = 0;
    ten =Math.floor(num/10)*10;
    if(ten >= 90){
      ten = 90;
    }
    one = num - ten;
    if(one >=10){
      one = 10;
    }
    optinalNum = num - ten - one;

  
  
    thisCptIndex = cptNum[ten] + cptNum[one] + cptNum[optinalNum];
    thisCptIndex = thisCptIndex.toFixed(2);
    return thisCptIndex;
  }
}


function updateIndexes(){
  //cpt indexs
  cpt1Index = document.getElementById("cpt1Index").innerHTML;
  cpt2Index = document.getElementById("cpt2Index").innerHTML;
  cpt3Index = document.getElementById("cpt3Index").innerHTML;
  cpt4Index = document.getElementById("cpt4Index").innerHTML;
  cpt5Index = document.getElementById("cpt5Index").innerHTML;
  let newCptIndex = Number(cpt1Index) + Number(cpt2Index) + Number(cpt3Index) + Number(cpt4Index) + Number(cpt5Index);
  CptIndexes.innerHTML = Number(newCptIndex).toFixed(2);

  //zone indexs
  let zoneAIndex = document.getElementById("zoneAIndex").innerHTML;
  let zoneBIndex = document.getElementById("zoneBIndex").innerHTML;
  let zoneCIndex = document.getElementById("zoneCIndex").innerHTML;
  let newZonesIndex = Number(zoneAIndex) + Number(zoneBIndex) + Number(zoneCIndex);
  paxIndexes.innerHTML = Number(newZonesIndex).toFixed(2);

  //zfw index
  let LIZFWLocal = Number(CptIndexes.innerHTML) + Number(paxIndexes.innerHTML) + Number(DOIIndex);
  LIZFW.innerHTML = Number(LIZFWLocal).toFixed(2);

  //tof index
  let LITOWLocal = LIZFWLocal + Number(TofIndex.innerHTML);
  LITOW.innerHTML = Number(LITOWLocal.toFixed(2));

   
  drawIndexLine(LITOWLocal,TOWeight);
}


// chart canvas

var c = document.getElementById("chartCanvas");
var ctx = c.getContext("2d");
function drawIndexLine(indexTF , wieghtTF){
  ctx.canvas.width = ctx.canvas.width;
  ctx.lineWidth = "3";
  ctx.strokeStyle = "blue";
  resultTFI = 74.2 + Number(((indexTF-10))*12.68);
  wieghtTF = 591.6 -  Number(((wieghtTF-45000)/1000)*10.15);
  ctx.moveTo(resultTFI,35);
  ctx.lineTo(resultTFI,590);
  ctx.moveTo(75,wieghtTF);
  ctx.lineTo(1215,wieghtTF);
  ctx.stroke();
}

