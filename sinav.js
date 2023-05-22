const battin= document.getElementById("change");
const vizee=document.getElementById("amount");
const tiel=document.getElementById("ra");



battin.addEventListener("click",cevir);
function cevir(){
  const finall=5000-( vizee.value*40) ;
  const almangerek=finall/60
  console.log(almangerek);
  tiel.value=almangerek;

}
