
/*
* 首先是 进入 某个buliding
* 待选择状态 -> 行为 -> 待选择
*
*/
function goutsideHandle (order){
    //... init first jump into 演武场
    switch(order){
        case -1:
        case -2:
            goutsideDraw();
            break;
        case -3:
            where_am_i = menpai;//
            Refash_information();//orderHandel.js
            break;
        default:
            goutsideEventHandle(order);
            break;
    }
}






/*
*处理 外出 界面选择 事件
*/
function goutsideEventHandle (order){
    switch(order){
        case '2':
            gd_outside_shenshan();
            break;
        default:
            // yanwuchgDrawTest();
    }

}


   

/*
* 处理  外出进深山
*/
function gd_outside_shenshan (order){
    where_am_i = outside_shenshan;//
    Refash_information();//outside_shenshan.js

}





/*
* 外出 事件选择界面 绘画
*/
function goutsideDraw (){
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
    str += "\n~~~~~~~~~~~~~~~~~~~~\n\n\n\n\n\n\n";
    showViewFun(str);
}


