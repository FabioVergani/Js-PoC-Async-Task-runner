# Js-PoC-Async-Task-runner
A Dead Simple  -PoC- async Task Runner

Test:
```
async function delayed(ms,value){
	await new Promise(resolve => setTimeout(resolve, ms))
	return value
}


const results=[];

run([
	()=>'a',
	()=>delayed(1200,'b'),
	()=>'c',
	66,
	()=>delayed(600,'d'),
	null
],
result=>{
	results.push(result);
	console.log(result);
},
(exception,task)=>{
	console.warn(task,exception.message)
},
()=>{
	console.log("Done",results);
}
);
```
