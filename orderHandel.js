/*
*专门用作 处理 输入逻辑 
* -dispatcher-
* 分析: 首先 这个是转发器 ，为啥呢，对于输入，进过预处理后 都要从这里进，然后被分发给 对应的脚本 去处理
* 这也是 和过去不同的一部分，不再是 每个function 各自占用全部逻辑 ，其实也没那么 。。对吧
* 不过是将一些通用命令 交给独立层处理
* 又或则说，这几个其实属于则个独立层嘛～
*/
function checkOrder(order){
	//字母 意味着 独立命令 -这层可以独立出去，具体看操作了～
	if(order >= 'a' && order <='z' || order >= 'A' && order <='Z'){
		indieace_OrderHandler(order);
	}
	if(order >= '0' && order <='9'){
		//这意味着 是 独立界面的 建筑 进入命令
		dispatcher(order);
	}
}


/*
*  处理较为独立的 部分input 指令
*/
function indieace_OrderHandler (order){
	switch (order){
		// case 'q':order_Exit(1);
		case 'r':Refash_information(); break;//刷新当前place 操作信息
		case 'w':Character_information(); break; 
		case 's':Kungfu_information(); break;
		case 'e':turn_Back(); break;
		default:
	}
}

/*
*   指令分发器 
* 根据 主角 当前所处 place & buliding 将指令分发给 对应 脚本去接受
*/
function dispatcher (order){
	//switch (where_am_i) ->
	//先 以起始 位置为 门派 place界面 show -> menpaiJS.js 
	menpai_JShandler(order);//menpaiJS
	// showPlace();
}





// /*
// * 处理 门派场景建筑跳转 事件触发  逻辑
// */
// function place_Change (order){
	 
// }




/*
*   展示 主角的 基本信息
*/
function turn_Back (){
	//-1指令即为 各个界面 信息的初始化
	dispatcher(-3);
}


/*
*   展示 主角的 基本信息
*/
function Refash_information (){
	//-1指令即为 各个界面 信息的初始化
	dispatcher(-1);
}

/*
*   展示 主角的 基本信息
*/
function Character_information (){
	drawCharacter_information();
}


/*
*   展示 主角的 基本信息
*/
function Kungfu_information (order){
	drawKungfu_information();
}






/*
*handel exit game event
* 处理 退出游戏 逻辑
*/
function order_Exit (EXIT_SUCCESS){

}