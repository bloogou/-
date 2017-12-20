/*
* 战斗逻辑
*/
function fight(memebrList,data) {
    var temp_fight = {};
    var str = '';
    // var temp_diren = tools.RandomRound(3); //tools.js
    // if (temp_diren == 3){
    //     if (humanlist[_zhouping].level <= 5){
    //         str += "你遇到了恶霸，实力相差悬殊，暂时不是对手，从旁离开了.\n";
    //         return 'taoli';
    //     }else if (humanlist[_zhouping].level > 5){
    //         ORDER order;
            
    //         str += "你遇到了恶霸，实力相差不多，是否迎头痛击？\n输入‘s’选择是\n";
    //         cin >> order;
    //         if (order != 's')return taoli;
    //     }
    // }
    
    temp_fight[1].name = humanlist[_liumang].name;
    temp_fight[1].xue = (humanlist[_liumang].physique + humanlist[_liumang].bone * 3) + humanlist[_liumang].internal_strength.huti + humanlist[_liumang].clothes.physique;
    temp_fight[1].nei = humanlist[_liumang].internal_strength.forcevalue;//nei 内功value
    temp_fight[1].speed = humanlist[_liumang].speed + humanlist[_liumang].shoes.speed;
    temp_fight[1].kechuzhao = 0;//kechuzhao
    temp_fight[1].shill = humanlist[_liumang].skill_1.name;
    temp_fight[1].power = humanlist[_liumang].skill_1.power + humanlist[_liumang].power + humanlist[_liumang].arms.power;
    
    temp_fight[2].name = humanlist[_dipi].name;
    temp_fight[2].xue = (humanlist[_dipi].physique + humanlist[_dipi].bone * 3) + humanlist[_dipi].internal_strength.huti + humanlist[_dipi].clothes.physique;
    temp_fight[2].nei = humanlist[_dipi].internal_strength.forcevalue;//nei 内功value
    temp_fight[2].speed = humanlist[_dipi].speed + humanlist[_dipi].shoes.speed;
    temp_fight[2].kechuzhao = 0;//kechuzhao
    temp_fight[2].shill = humanlist[_dipi].skill_1.name;
    temp_fight[2].power = humanlist[_dipi].skill_1.power + humanlist[_dipi].power + humanlist[_dipi].arms.power;
    temp_fight[3].name = humanlist[_eba].name;
    temp_fight[3].xue = (humanlist[_eba].physique + humanlist[_eba].bone * 3) + humanlist[_eba].internal_strength.huti + humanlist[_eba].clothes.physique;
    temp_fight[3].nei = humanlist[_eba].internal_strength.forcevalue;//nei 内功value
    temp_fight[3].speed = humanlist[_eba].speed + humanlist[_eba].shoes.speed;
    temp_fight[3].kechuzhao = 0;//kechuzhao
    temp_fight[3].shill = humanlist[_eba].skill_1.name;
    temp_fight[3].power = humanlist[_eba].skill_1.power + humanlist[_eba].power + humanlist[_eba].arms.power;
    
    
    cout << "\n你遇到了" << temp_fight[temp_diren].name << "\n";
    while (temp_fight[0].xue > 0 && temp_fight[temp_diren].xue > 0){
        //ziji
        if (ChuzhaoPanding(temp_fight[0].kechuzhao, temp_fight[0].speed) == yes){
            Sleep(1200);
            cout << humanlist[human_name].name << "->出手了\n";
            chuzhao(humanlist[human_name].name, temp_fight[0].shill, temp_fight[0].power);//
            if (aliveCheck(temp_fight[temp_diren].xue, temp_fight[0].power) == alive)
            {
                cout << temp_fight[temp_diren].name << "中了一招,受到" << temp_fight[0].power << "点伤害\n";
                temp_fight[temp_diren].xue -= temp_fight[0].power;
            }
            else if (aliveCheck(temp_fight[temp_diren].xue, temp_fight[0].power) == dead)
            {
                temp_fight[temp_diren].xue = 0;
                cout << temp_fight[temp_diren].name << "被这一招击杀了\n_____________________\n";
            }
        }else{
            temp_fight[0].kechuzhao += temp_fight[0].speed;
        }
        //diren
        if (temp_fight[temp_diren].xue > 0 && ChuzhaoPanding(temp_fight[temp_diren].kechuzhao, temp_fight[temp_diren].speed) == yes){
            Sleep(1200);
            cout << temp_fight[temp_diren].name << "->出手了\n";
            chuzhao(temp_fight[temp_diren].name, temp_fight[temp_diren].shill, temp_fight[temp_diren].power);//
            if (aliveCheck(temp_fight[0].xue, temp_fight[temp_diren].power) == alive){
                cout << temp_fight[0].name << "中了一招,受到" << temp_fight[temp_diren].power << "点伤害\n";
                temp_fight[0].xue -= temp_fight[temp_diren].power;
            }
            else if (aliveCheck(temp_fight[0].xue, temp_fight[temp_diren].power) == dead){
                temp_fight[0].xue = 0;
                cout << humanlist[_zhouping].name << "被这一招击杀了\n_____________________\n";
                return fail;
            }
        }else{
            temp_fight[temp_diren].kechuzhao += temp_fight[temp_diren].speed;
        }
    }
    
}

