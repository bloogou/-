/*
* 工具函数 或包装 api
*/
function tools (){
	/*
	* 返回 随机 (n , m] 的整数
	* n:0 , m:1
	*/
	function RandomRound(m=100,n=0){
		return Math.round(n + 0.5 + Math.random(m));
	}
	

	/*
	* 简单 的 对象 复制
	* s:数据源(要拷贝的对象)
	*/
	function CopyObj(s){
		var o={};
		for(var atr in s){
			o[atr] = s[atr];
		}
		return o;
	}
	














	return {
		'RandomRound':RandomRound,
		'CopyObj':CopyObj
	}
}