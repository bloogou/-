/*
* 战斗逻辑
*/
function fight(o1,o2) {
    var temp_fight = {};
    var str = '';
    // 一些 血呀 出招 。。。 算作 战斗临时变量吧～
    o1.Init();
    o2.Init();
    str += o1.Name + "遇到了" + o2.Name + "\n";

    showViewFun(str);

    var fightCircle = setInterval(function(){
        //如果 没有人倒下 继续战斗
        //每 888 毫秒 轮巡一次判定 (还有些有意思的事，你如出招随机性 时间上)
     
        //简单 o1开始查 谁 先 "可以" 出手
        var skill = null 
        var attackO = null;
        var attackA = null
        var indexFight = 1;
        if(!o1.saveAttack()){
            attackO = o1;
            attackA = o2;
        }else if(!o2.saveAttack()){
            attackO = o2;
            attackA = o1;
        }else {
            showViewFun("\n\n");
        }
        //如果有人出招 
        if(attackO && attackA){
            skill = attackO.Fight(attackA);
            if(skill.skill){
                var str_inLine = attackO.Name + "->出手了\n"
                    + "使出一招 " + skill.skill.Name + " 杀向敌人 \n"+
                    attackA.Name +"中了一招 受到伤害 "+ skill.power +"\n\n";
                showViewFun(str_inLine);
            }else{
                var str_inLine = attackO.Name + "->内功不足\n"
                    + "使出一招 普攻  \n"+
                    attackA.Name +"中了一招 受到伤害 "+ skill.power +"\n\n";
                showViewFun(str_inLine);
            }

            if(!o1.isAlive() || !o2.isAlive()){ 
                //战斗结束 ...
                var str_inLine = "战斗结束 ...\n"+
                attackA.Name + "被这一招击杀了\n_____________________\n"
                attackO.Name + "获胜\n\n";
                showViewFun(str_inLine);
                if(o1 == _zhouping && o1.isAlive()){
                    var temp_Str = "";
                    _zhouping.addExp(o2.Exp);
                    _zhouping.Fame += 2;
                    menpai.Fame += 1;
                    temp_Str += "掌门威望上升\n";
                    temp_Str += "门派威望上升\n\n";
                    showViewFun(temp_Str);
                }
                window.clearInterval(fightCircle);
            }else{
                showViewFun("\n\n");
            }
        }
    },388);

}

