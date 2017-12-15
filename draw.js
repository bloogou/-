
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
    