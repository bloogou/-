
/*
* 首先是 进入 某个buliding
* 待选择状态 -> 行为 -> 待选择
*
*/
function outside_shenshanHandle (order){
    //... init first jump into 演武场
    switch(order){
        case -1:
        case -2:
            outside_shenshanDraw();
            break;
        case -3:
            where_am_i = _goutside;// 他的上一级 ，其实应该 在跳转 盏里面去取
            Refash_information();//orderHandel.js
            break;
        default:
            outside_shenshanEventHandle(order);
            break;
    }
}



/*
*外出 深山 事件
*/
function outside_shenshanEventHandle (order){
    switch(order){
        case '1':

            break;
        default:
            // yanwuchgDrawTest();
    }

}



/*
* 外出 深山 绘画
*/
function outside_shenshanDraw (){
    var str = where_am_i.Name 
    str+= "\n ================\n";
    for (var temp = 0; temp < where_am_i.Eventlist.My_event.length ; temp++){
        if (where_am_i.Eventlist.My_event[temp].Passive)
            str = str + " ·  " 
                + (temp + 1) + ". " 
                + where_am_i.Eventlist.My_event[temp].Name 
                + "   ·\n";
    }
    str+= "================\n";
    
  
    str += '\n·········\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    showViewFun(str);
}






/*
* 外出 深山 行侠仗义 绘画
*/
function outside_shenshanDraw_XXZY (){
    var str = where_am_i.Name;
    
    str += where_am_i.Eventlist.My_event[0].Name;
        
    var temp_result = -1//fight(_zhouping, fight_sh_xx);
        
    switch (temp_result)
    {
        case  'win': 
            str += "\n战斗胜利\n";
            str += "\n人物经验增加，技能熟练度增加！\n";
            str += "门派威望上升\n";
            str += "掌门威望上升\n";
            _zhouping.exp += 10;
            _zhouping.Skill[0].exp += 5;
            menpai.Fame += 1;
            _zhouping.Fame += 2;
            if (_zhouping.exp >= _zhouping.Leveal *  _zhouping.Leveal * 100){
                _zhouping.Leveal++;
                _zhouping.Physique += 2;
                _zhouping.Power += 2;
                _zhouping.Speed += 1;
                _zhouping.Exp = 0;
                str += "\n人物升级\n";
            }
            if (_zhouping.Skill[0].Exp >= _zhouping.Skill[0].ForceLev * _zhouping.Skill[0].Leveal *  _zhouping.Skill[0].Leveal * 10){
                _zhouping.Skill[0].Leveal++;
                _zhouping.Skill[0].Power += _zhouping.Skill[0].ForceLev * 2;
                _zhouping.Skill[0].Exp = 0;
                str += "\n" + _zhouping.Skill[0].Name + "升级\n";
            }
            break;
        
        case  'taoli':
            str += "你远离了敌人\n";
            break;
        case  'fail':
            str += "\n你被敌人击败，但及时逃离了战斗,练好武功后再来挑战！\n";
            break;
        default:
            break;
    }
    str += '\n·········\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    showViewFun(str);
}

