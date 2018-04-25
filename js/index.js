// Your code here
var num =0;
function diceroll(){
  clearscreen()
   num = Math.floor((Math.random()*6)+1);

   console.log(num);
  if (num==1){
    document.getElementById('mid').classList.add("dot")
  }
  else if (num==2){
    document.getElementById('mid-left').classList.add("dot")
    document.getElementById('mid-right').classList.add("dot")
  }
  else if (num==3){
    document.getElementById('top-left').classList.add("dot")
    document.getElementById('mid').classList.add("dot")
    document.getElementById('bot-right').classList.add("dot")
  }
  else if (num==4){
    document.getElementById('bot-left').classList.add("dot")
    document.getElementById('top-left').classList.add("dot")
    document.getElementById('top-right').classList.add("dot")
    document.getElementById('bot-right').classList.add("dot")
  }
  else if (num==5){
    document.getElementById('mid').classList.add("dot")
    document.getElementById('bot-left').classList.add("dot")
    document.getElementById('top-left').classList.add("dot")
    document.getElementById('top-right').classList.add("dot")
    document.getElementById('bot-right').classList.add("dot")
  }
  else if (num==6){
    document.getElementById('top-right').classList.add("dot")
    document.getElementById('mid-left').classList.add("dot")
    document.getElementById('mid-right').classList.add("dot")
    document.getElementById('bot-right').classList.add("dot")
    document.getElementById('bot-left').classList.add("dot")
    document.getElementById('top-left').classList.add("dot")
  }
}
function clearscreen(){
  document.getElementById('mid').classList.remove("dot")
  document.getElementById('mid-left').classList.remove("dot")
  document.getElementById('mid-right').classList.remove("dot")
  document.getElementById('top-left').classList.remove("dot")
  document.getElementById('top-right').classList.remove("dot")
  document.getElementById('top-mid').classList.remove("dot")
  document.getElementById('bot-left').classList.remove("dot")
  document.getElementById('bot-right').classList.remove("dot")
  document.getElementById('bot-mid').classList.remove("dot")
}
