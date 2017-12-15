/*
*处理门派里面的逻辑
*/
function menpai_JShandler(order) {
    if(where_am_i != menpai){
        handlethis(order);
        return;
    }
    switch (order){
        case '1':   where_am_i = _zhmenju;   break;
        case '2':   where_am_i = _horjiqitg; break;
        case '3':   where_am_i = _cjingge;   break;
        case '4':   where_am_i = _yanwuchg;  break;
        case '5':   where_am_i = _dzjnxush;  break;
        case '6':   where_am_i = _diziju;    break;
            //  case '8':   where_am_i = _houting;   break;
        case '7':   where_am_i = _laohuju;   break;
        case '8':   where_am_i = _goutside;  break;
        case -1:
        case -2:    drawMenPai();            break;//drew
        case -3:    Refash_information();return;
        default:break;
    }

    /*初始化指令列表
    * -1:仅仅重回 基本页面 数据不刷新
    * -2: 全部刷新 页面临时变量 清空...
    */
    handlethis(-2);
}

/*
*pramer :  order 指令(-1 ~init 是否 初次跳转 )
*/
function handlethis (order){
    //...
    switch(where_am_i.Node){
        case '_yanwuchg':
            yanwuchgHandle(order);//yanwuchg
            break;
    }

}






