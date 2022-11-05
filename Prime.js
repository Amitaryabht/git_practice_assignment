let N = 13;
   factor =0
 for(i=0;i<=N;i++){
 	if(N%i==1){
 		factor++;
 	}
 }if(factor==2){
 	console.log("Prime");
 }else{
 	console.log("NA");
 }