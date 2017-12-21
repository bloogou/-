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



/*
*   刷新 至 当前建筑/场景选择信息界面
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
*   展示 功夫信息
*/
function Kungfu_information (order){
	drawKungfu_information();
}


/*
*   回退上一层
*/
function turn_Back (){
	//-1指令即为 各个界面 信息的初始化
	dispatcher(-3);
}





/*
*handel exit game event
* 处理 退出游戏 逻辑
*/
function order_Exit (EXIT_SUCCESS){

}












/*
*展示角色信息，可以做成通用的吧～暂时 主角的
*此子系统意在召唤“鄙人”之 -> 属性！
*/
function drawCharacter_information(){
    var str = "掌门属性";

    str += "\n-------------------------\n";
    str += "姓名：\t" + _zhouping.Name + "\t\t\t |\n";
    str += "年龄：\t" + _zhouping.Age + "\t\t\t |\n";
    str += "称号：\t游侠"  +"\t\t\t |\n";// 无名小卒 // 游侠 // 大侠 // 掌门
    str += "等级：\t" + _zhouping.Leveal + "\t\t\t |\n";
    str += "经验：\t" + _zhouping.Exp + "\t\t\t |\n";
    str += "力量：\t" + _zhouping.Power + "\t\t\t |\n";
    str += "体质：\t" + _zhouping.Physique + "\t\t\t |\n";
    str += "速度：\t" + _zhouping.Speed + "\t\t\t |\n";
    str += "根骨：\t" + _zhouping.Bone + "\t\t\t |\n";
    str += "悟性：\t" + _zhouping.Intelligent + "\t\t\t |\n";
    str += "内力：\t" + _zhouping.Internal_strength[0].Forcevalue + "\t\t\t |\n-------------------------\n";
    // Kungfu_information(who);
    str += "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
    showViewFun(str);
}





/*
*展示角色的 武功信息，可以做成通用的吧～暂时 主角的
*此子系统意在召唤“鄙人”之 -> 武功！
*/
function drawKungfu_information(){
    var str = "掌门武功";
    str += "\n__________________________\n";
    str += "内功：\t\t  " + _zhouping.Internal_strength[0].Name + "|\n";
    str += "内功等级：\t\t      " + _zhouping.Internal_strength[0].Leveal + "|\n";
    str += "内功护体：\t\t      " + _zhouping.Internal_strength[0].Huti + "|\n";
    str += "__________________________\n";
    var colorArr = ['pink','yellow','green','rad'];
    
    for(var i=0;i<_zhouping.Skill.length;i++){
        var infoArr = [ "武功招式 : \t" + _zhouping.Skill[i].Name + "   |\n",
                    "武功招式等级:\t\t\t" + _zhouping.Skill[i].Leveal + "|\n",
                    "武功招式熟练度:\t\t" + _zhouping.Skill[i].Exp + "|\n",
                    "武功招式威力: \t\t\t" + _zhouping.Skill[i].Power + "|\n",
                    "__________________________\n"]
        if (_zhouping.Skill[i] && _zhouping.Skill[i].Name != "") {
            for(var j = 0;j<infoArr.length;j++){//4 ->欲输出 字段行数
            //     var oFont=document.createElement("FONT"); 
            //     var oText=document.createTextNode(infoArr[j]); 
            //     oFont.style.color = colorArr[j/4]; 
            //     oFont.appendChild(oText); 
                str+=infoArr[j];
            }
        }
    }
    str +='\n\n\n\n';
    showViewFun(str);
}




