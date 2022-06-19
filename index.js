export function arrayLoop(array,cb){
    return new Promise((resolve,reject) =>{

		function iterator(params) {
			const {array,index,length} = params

			cb({index: index, element: array[index]})

			if(index+1 < length){
				setTimeout(iterator,0,{array: array, length:length,index:index+1})
			}
			else{
				resolve()
			}
		}
		setTimeout(iterator,0,{array: array, length:array.length,index:0})
	})
}