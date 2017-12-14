
/*
*展示角色信息，可以做成通用的吧～暂时 主角的
*/
function Character_information(){

}





/*
*展示角色的 武功信息，可以做成通用的吧～暂时 主角的
*/
function Kungfu_information(){

}








/*
*开始界面
*/
function drawWelcome(){
	var welcome = "\n\n\n\n\n";
	// Sleep(2628);
	welcome += "\n\n\n\n\n\n\n\n\n\n\n";
	welcome += "\t\t\t     FREE MYSELF · 独\n";
	welcome += "\t\t\t     -----------------  \n\t\t\t   \t          门派\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n随意输入进入游戏\n\n\n\n\n\n";
	showView.value = welcome;
	return welcome;
}


/*
*结束界面
*/
function drawEnding(){
	var ending = "\n\n\n\n\n\n\n\n\n\n\n\n";
	ending += "\t\t\t   FREE OURSELVES · 独\n";
	ending += "\t\t\t   ------------------  \n";
	showView.value = ending;
	return ending;
}



function showViewFun(str){
	showView.value += str;
	showView.scrollTop = showView.scrollHeight;
}





/*
*门派
*/
function drawMenPai(){
	var str = where_am_i.Name 
	str += "\n->门内建筑:\n  * ———————— *\n";

    //place
    for (var temp = 0; temp < where_am_i.Buildinglist.Buildinglist.length ; temp++){
        if (where_am_i.Buildinglist.Buildinglist[temp].Passive){
            str = str + "  *  " 
                + (temp + 1) + ". " 
                + where_am_i.Buildinglist.Buildinglist[temp].Name 
                + "   *\n";
        }
    }

    str += "  *  8. 外出         *\n  * ———————— *\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

    showViewFun(str);
}









/*
* 门派内演武场 事件选择界面 绘画
*/
function yanwuchgDraw (){
    var str = where_am_i.Name 
            + '\n·········\n'
            + '· 要做些什么呢 ·'
            + '\n·········\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
            + '\n~~~~~~~~~~~~~~~~~~~~\n';
    for (var temp = 0; temp < where_am_i.Eventlist.My_event.length ; temp++){
        if (where_am_i.Eventlist.My_event[temp].Passive)
            str = str + " ·  " 
                + (temp + 1) + ". " 
                + where_am_i.Eventlist.My_event[temp].Name 
                + "   ·\n";
    }
    str += "\n~~~~~~~~~~~~~~~~~~~~\n\n\n\n\n";
    showViewFun(str);
}



/*
* 门派内演武场 test 绘画
*/
function yanwuchgDrawTest (){
    var str = where_am_i.Name 
    str += "\n尽气凝神后，一式 白云出轴 斜刺而出 \n翻身凌空 只见一招 金雁横空 接踵而至 \n又一式 有凤来仪 招招紧扣 玄妙之极\n随着一式式华山剑法在手中展开剑法熟练度在稳步增长\n";
    str +=  _zhouping.skill_1.name + " 熟练度 + 2 \n";
    humanlist[_zhouping].skill_1.exp += 2;
    if (humanlist[_zhouping].skill_1.exp > humanlist[_zhouping].skill_1.level *humanlist[_zhouping].skill_1.forceLev * 10)
    {
        humanlist[_zhouping].skill_1.level++;
        humanlist[_zhouping].skill_1.exp = 0;
        str += humanlist[_zhouping].skill_1.name << "升级！现在" << humanlist[_zhouping].skill_1.level << "级\n";
        humanlist[_zhouping].skill_1.power += humanlist[_zhouping].skill_1.forceLev * humanlist[_zhouping].skill_1.level * 2;
        str += "剑法威力上升至" << humanlist[_zhouping].skill_1.power + 0 << "点\n";
    }

    str += '\n·········\n\n\n\n\n\n\n\n\n\n\n哈哈\n\n\n\n\n\n\n\n\n\n\n\n';
    str += "\n~~~~~~~~~~~~~~~~~~~~\n";
    showViewFun(str);
}


/*
* 门派内演武场 演练剑法 绘画
*/
function yanwuchgDraw_YW (){
    var str = where_am_i.Name 
            + '\n·········\n\n\n\n\n\n\n\n\n\n\n哈哈\n\n\n\n\n\n\n\n\n\n\n\n';
            + '\n~~~~~~~~~~~~~~~~~~~~\n';
    str += "\n~~~~~~~~~~~~~~~~~~~~\n";
    showViewFun(str);
}
    