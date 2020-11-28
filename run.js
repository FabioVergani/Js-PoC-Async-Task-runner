function run(tasks,report,handle,done){
	const next = async ()=>{
		const i=tasks.length;
		if(i){
			const task=tasks.shift();
			try{
				report(await task())
			}catch(exception){
				handle(exception,task)
			}finally{
				next()
			}
		}else{
			done?.()
		}
	};
	next()
}
