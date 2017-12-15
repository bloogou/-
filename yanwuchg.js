
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


