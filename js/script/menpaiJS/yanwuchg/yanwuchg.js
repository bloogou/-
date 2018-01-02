
/*
* 首先是 进入 某个buliding
* 待选择状态 -> 行为 -> 待选择
*
*/
function yanwuchgHandle (order){
    //... init first jump into 演武场
    switch(order){
        case -1:
        case -2:
            yanwuchgDraw();
            break;
        case -3:
            where_am_i = menpai;//
            Refash_information();//orderHandel.js
            break;
        default:
            yanwuchgEventHandle(order);
            break;
    }
}






/*
*处理 演武场内事件
*/
function yanwuchgEventHandle (order){
    switch(order){
        default:
            yanwuchgDrawTest();
    }

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
    str += '\n·········\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    str += "\n尽气凝神后，一式 白云出轴 斜刺而出 \n翻身凌空 只见一招 金雁横空 接踵而至 \n又一式 有凤来仪 招招紧扣 玄妙之极\n随着一式式华山剑法在手中展开剑法熟练度在稳步增长\n";
    str += _zhouping.skillAddExp(_zhouping.Skill[0]);
    str += "\n\n\n\n\n~~~~~~~~~~~~~~~~~~~~\n";
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
    