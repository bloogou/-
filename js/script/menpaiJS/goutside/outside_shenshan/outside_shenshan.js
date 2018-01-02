var outside_shenshanCtrl = {
    /*
    * 首先是 进入 某个buliding
    * 待选择状态 -> 行为 -> 待选择
    *
    */
    outside_shenshanHandle:function  (order){
        //... init first jump into 演武场
        switch(order){
            case -1:
            case -2:
                this.outside_shenshanDraw();
                break;
            case -3:
                where_am_i = _goutside;// 他的上一级 ，其实应该 在跳转 盏里面去取
                Refash_information();//orderHandel.js
                break;
            case 'Y':
            case 'y':
              fight(_zhouping, enemy,this.XXZY_callback);
              break;
            case 'N':
            case 'n':
                var str = "你遇到了恶霸, 并选择了逃离.\n\n\n\n\n\n\n\n\n\n";
                showViewFun(str);
                break;
            default:
                this.outside_shenshanEventHandle(order);
                break;
        }
    },



    /*
    *外出 深山 事件
    */
    outside_shenshanEventHandle:function  (order){
        switch(order){
            case '1'://行侠仗义
                this.outside_shenshanDraw_XXZY();
                break;
            default:
                break;

        }

    },



    /*
    * 外出 深山 绘画
    */
    outside_shenshanDraw: function  (){
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
    },






    /*
    * 外出 深山 行侠仗义 绘画
    */
    outside_shenshanDraw_XXZY:function  (){
        var str = where_am_i.Name + "\n";
        
        str += "  " + where_am_i.Eventlist.My_event[0].Name+"\n\n\n\n\n\n\n\n\n";
        showViewFun(str);
        var enemy = this.findEnemy();
        switch(enemy.Name){
            // case '流氓':
            // case '地痞':
            //     break;
            case '恶霸':
                if (_zhouping.Leveal <= 3){
                    str = "你遇到了恶霸，实力相差悬殊，暂时不是对手，从旁离开了.\n\n\n\n\n\n\n\n\n\n";
                    showViewFun(str);
                    return 'taoli';
                }else if (_zhouping.Leveal <= 5){
                    str += "你遇到了恶霸，实力相差不多，是否迎头痛击？\n输入‘Y’选择是,‘N’选择逃离\n";
                    showViewFun(str);
                    return 'waitY';
                }
                break;
        }

        fight(_zhouping, enemy,this.XXZY_callback);
    },

    /*
    * 行侠仗义 战斗 事件 回掉
    * attacker : 最后一次攻击的人(获胜方),
    * loser    : 战败者
    */
    XXZY_callback: function (attacker, loser){
 // switch (temp_result)
        // {
        //     case  'win': 
        //         str += "\n战斗胜利\n";
        //         str += "\n人物经验增加，技能熟练度增加！\n";
        //         str += "门派威望上升\n";
        //         str += "掌门威望上升\n";
        //         _zhouping.exp += 10;
        //         _zhouping.Skill[0].exp += 5;
        //         menpai.Fame += 1;
        //         _zhouping.Fame += 2;
        //         if (_zhouping.exp >= _zhouping.Leveal *  _zhouping.Leveal * 100){
        //             _zhouping.Leveal++;
        //             _zhouping.Physique += 2;
        //             _zhouping.Power += 2;
        //             _zhouping.Speed += 1;
        //             _zhouping.Exp = 0;
        //             str += "\n人物升级\n";
        //         }
        //         if (_zhouping.Skill[0].Exp >= _zhouping.Skill[0].ForceLev * _zhouping.Skill[0].Leveal *  _zhouping.Skill[0].Leveal * 10){
        //             _zhouping.Skill[0].Leveal++;
        //             _zhouping.Skill[0].Power += _zhouping.Skill[0].ForceLev * 2;
        //             _zhouping.Skill[0].Exp = 0;
        //             str += "\n" + _zhouping.Skill[0].Name + "升级\n";
        //         }
        //         break;
            
        //     case  'taoli':
        //         str += "你远离了敌人\n";
        //         break;
        //     case  'fail':
        //         str += "\n你被敌人击败，但及时逃离了战斗,练好武功后再来挑战！\n";
        //         break;
        //     default:
        //         break;
        // }
        // str += '\n·········\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    },


    findEnemy:function (){
        var o = null;
        switch(tools.RandomRound(3)){
            case 1:
                o = tools.CopyObj(_liumang);
                o.Exp = 10;
                break;
            case 2:
                o = tools.CopyObj(_dipi);//)//_eba)//);
                o.Exp = 20;
                break;
            case 3:
                o = tools.CopyObj(_eba);
                o.Exp = 50;
                break;
        }
        return o;
    },
}

