function oddno(x){
    if(x%2!=0){
      return true;
    }else{
      return false;
    }
}


function oddsq(){
  for(i=1;i<=100;i++){
   if(oddno(i)==true){
     square=i*i;
     console.log(i*i);
  }
}
}
oddsq();