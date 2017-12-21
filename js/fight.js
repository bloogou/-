/*
* 战斗逻辑
*/
function fight(memebrList,data) {
    var temp_fight = {};
    var str = '';

   
   
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

