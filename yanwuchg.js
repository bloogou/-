
/*
* 首先是 进入 某个buliding
* 待选择状态 -> 行为 -> 待选择
*
*/
function yanwuchgHandle (order){
    //... init first jump into 演武场
    if(order == -1){
        yanwuchgDraw();
    }else{
        yanwuchgEventHandle(order);
    }
}






/*
*处理 演武场内事件
*/
function yanwuchgEventHandle (order){
    switch(order){
        case "0"://退回门派 场景
            where_am_i = menpai;//place
            drawMenPai();//drew
            break;
        default:
            yanwuchgDrawTest();
    }

}


