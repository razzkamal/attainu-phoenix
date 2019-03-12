function oddno(n){
    if(n%2!=0){
      return true;
    }else{
      return false;
    }
}


function square(){
  for(i=1;i<=100;i++){
   if(oddno(i)==true){
     square=i*i;
     console.log(i, "*", i);
  }
}
}
square();