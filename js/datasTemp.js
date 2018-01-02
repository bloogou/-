/*
* 初版 数据
*/
var showView = document.getElementById("showView");
var orderLine = document.getElementById("orderLine");

var where_am_i = -1;//定位 玩家 位置, -1 为初始位置 以后加入存档 后 ，不仅要联系上数据库，这里当然也要 读档啦！～
var humanList_Obj = [];

var fight_Save_OneRound_Limit = 60;

//人物
var humanlist =
[
    [//1
        "周平",//name
        0,//lev
        0,//exp
        23,//age
        'Man',//sex->'Man'=1;'Woman'=0;
        16,//体质
        20,//power
        12,//speed
        6,//intelligent
        6,//bone
        [//internal_strength内功
            "华山心法",//name
            2,//1rumen2chu3zhong4gao5jue
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            0,//内力值
            0,// bone;//根骨
            [ 2,4,3,1,0,1,1,0,3 ]//[power,speed,physique,huti,p+,s+,ph+,h+,fv+]
        ],
        [[//clothes,
            "英侠服",// name;
            5,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "流云剑",// name;
            0,// physique;//体质
            10,// power;
            1,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "游侠步履",// name;
            1,// physique;//体质
            0,// power;
            1,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "华山剑法",//name;
            1,//   level;
            0,//     exp;
            5,//   power;
            2,//功法等级1入门，2初，3中，4高，5绝；
            1//    s_or_m;
        ],
        [// skill_2
            "太祖长拳",
            3,
            0,
            3,
            1,
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//2
        "流氓",//name
        3,//lev
        0,//exp
        0,//age
        'Man',//sex
        12,//体质
        13,//power
        14,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            20,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "偷袭",//name;
            1,//   level;
            0,//     exp;
            1,//   power;
            0,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "就地一滚",
            1,
            0,
            0,
            0,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//3
        "地痞",//name
        5,//lev
        0,//exp
        0,//age
        'Man',//sex
        16,//体质
        18,//power
        16,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            20,//neili
            0,// bone;//根骨
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "无赖合击",//name;
            1,//   level;
            0,//     exp;
            5,//   power;
            0,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//4
        "恶霸",//name
        10,//lev
        0,//exp
        0,//age
        'Man',//sex
        20,//体质
        25,//power
        20,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "吐纳",//name
            0,
            1,// level
            0,// exp;
            1,// power;
            0,// huti;//==?
            1,// physique;//体质
            0,// speed;
            100,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "砍刀",// name;
            0,// physique;//体质
            5,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "大刀一挥",//name;
            3,//   level;
            0,//     exp;
            10,//   power;
            0,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//5
        "罗云",//name
        8,//lev
        0,//exp
        20,//age
        'Man',//sex
        15,//体质
        18,//power
        20,//speed
        5,//intelligent
        5,//bone
        [//internal_strength内功
            "青城心法",//name
            1,
            3,// level
            0,// exp;
            1,// power;
            10,// huti;//==?
            0,// physique;//体质
            0,// speed;
            5,//neilizhi
            0,// bone;//根骨
            [ 1,1,1,1,0,0,0,0,1 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "长缨枪",// name;
            0,// physique;//体质
            12,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "罗家枪",//name;
            3,//   level;
            0,//     exp;
            16,//   power;
            2,
            2//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//6
        "虎破人",//name
        32,//lev
        0,//exp
        0,//age
        'Man',//sex
        45,//体质
        68,//power
        30,//speed
        4,//intelligent
        5,//bone
        [//internal_strength内功
            "黑虎心法",//name
            1,//
            15,// level
            0,// exp;
            20,// power;
            30,// huti;//==?
            20,// physique;//体质
            10,// speed;
            15,//forcevalue;
            0,// bone;//根骨
            [ 2,2,1,1,0,0,0,0,1 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "黑虎拳法",//name;
            5,//   level;
            0,//     exp;
            32,//   power;
            2,
            1//    s_or_m;
        ],
        [// skill_2
            "三虎合击",
            0,
            0,
            0,
            0,
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//7
        "程刚",//name
        28,//lev
        0,//exp
        0,//age
        'Man',//sex
        35,//体质
        40,//power
        18,//speed
        4,//intelligent
        4,//bone
        [//internal_strength内功
            "少林心法",//name
            2,//forceLev
            6,// level
            0,// exp;
            20,// power;
            30,// huti;//==?
            5,// physique;//体质
            5,// speed;
            18,//forcevalue;
            0,// bone;//根骨
            [ 3,3,3,1,1,0,1,0,3 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "罗汉拳",//name;
            4,//   level;
            0,//     exp;
            30,//   power;
            2,
            1//    s_or_m;
        ],
        [// skill_2
            "散花手",
            4,
            0,
            60,
            3,
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//8
        "郑喜定",//name
        25,//lev
        0,//exp
        0,//age
        'Man',//sex
        26,//体质
        36,//power
        22,//speed
        4,//intelligent
        5,//bone
        [//internal_strength内功
            "少林心法",//name
            2,//forceLev
            6,// level
            0,// exp;
            20,// power;
            30,// huti;//==?
            5,// physique;//体质
            5,// speed;
            18,//forcevalue;
            0,// bone;//根骨
            [ 3,3,3,1,1,0,1,0,3 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "虎爪手",//name;
            4,
            0,
            32,
            3,
            1
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//9
        "赵泰淼",//name
        36,//lev
        0,//exp
        40,//age
        'Man',//sex
        62,//体质
        53,//power
        44,//speed
        5,//intelligent
        6,//bone
        [//internal_strength内功
            "八卦道衍心经",//name
            4,
            5,// level
            0,// exp;
            30,// power;
            50,// huti;//==?
            35,// physique;//体质
            20,// speed;
            125,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "八卦游龙刀",//name;
            4,//   level;
            0,//     exp;
            64,//   power;
            4,//0 ：不入门
            2//    s_or_m;
        ],
        [// skill_2
            "八卦游身掌",
            1,
            0,
            8,
            4,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//10
        "冯志敏",//name
        35,//lev
        0,//exp
        40,//age
        'Man',//sex
        56,//体质
        49,//power
        48,//speed
        5,//intelligent
        6,//bone
        [//internal_strength内功
            "八卦道衍心经",//name
            4,
            5,// level
            0,// exp;
            30,// power;
            50,// huti;//==?
            35,// physique;//体质
            20,// speed;
            120,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "八卦游龙刀",//name;
            1,//   level;
            0,//     exp;
            8,//   power;
            4,//0 ：不入门
            2//    s_or_m;
        ],
        [// skill_2
            "八卦游身掌",
            4,
            0,
            64,
            4,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//11
        "刘伯伦",//name
        21,//lev
        0,//exp
        40,//age
        'Man',//sex
        32,//体质
        33,//power
        24,//speed
        5,//intelligent
        6,//bone
        [//internal_strength内功
            "八卦道衍心经",//name
            2,
            5,// level
            0,// exp;
            16,// power;
            30,// huti;//==?
            25,// physique;//体质
            10,// speed;
            30,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "八卦游龙刀",//name;
            1,//   level;
            0,//     exp;
            8,//   power;
            4,//0 ：不入门
            2//    s_or_m;
        ],
        [// skill_2
            "八卦游身掌",
            3,
            0,
            32,
            4,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//12
        "秦书武",//name
        20,//lev
        0,//exp
        0,//age
        'Man',//sex
        20,//体质
        23,//power
        24,//speed
        6,//intelligent
        5,//bone
        [//internal_strength内功
            "聚玄心经",//name
            3,
            5,// level
            0,// exp;
            20,// power;
            30,// huti;//==?
            15,// physique;//体质
            10,// speed;
            80,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "灵宝拳",//name;
            3,//   level;
            0,//     exp;
            60,//   power;
            3,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "上清拳",
            3,
            0,
            52,
            3,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//13
        "金钟国",//name
        32,//lev
        0,//exp
        0,//age
        'Man',//sex
        45,//体质
        63,//power
        44,//speed
        5,//intelligent
        7,//bone
        [//internal_strength内功
            "混元气",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            0,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "大力金刚掌",//name;
            5,//   level;
            0,//     exp;
            128,//   power;
            4,//0 ：不入门
            2//    s_or_m;
        ],
        [// skill_2
            "分筋错骨手",
            5,
            0,
            120,
            4,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//14
        "绿林好汉",//name
        13,//lev
        0,//exp
        0,//age
        'Man',//sex
        0,//体质
        0,//power
        0,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "初级心法",//name
            0,
            0,// level
            0,// exp;
            20,// power;
            20,// huti;//==?
            10,// physique;//体质
            10,// speed;
            20,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "宝剑",// name;
            0,// physique;//体质
            10,// power;
            5,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "绿林剑法",//name;
            3,//   level;
            0,//     exp;
            18,//   power;
            3,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//15
        "山匪",//name
        18,//lev
        0,//exp
        0,//age
        'Man',//sex
        0,//体质
        0,//power
        0,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "中级心法",//name
            0,
            0,// level
            0,// exp;
            30,// power;
            30,// huti;//==?
            18,// physique;//体质
            16,// speed;
            30,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "凶刀",// name;
            0,// physique;//体质
            16,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "夺命刀法",//name;
            4,//   level;
            0,//     exp;
            30,//   power;
            3,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//16
        "精英截匪",//name
        20,//lev
        0,//exp
        0,//age
        'Man',//sex
        0,//体质
        0,//power
        0,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "中级心法",//name
            0,
            0,// level
            0,// exp;
            35,// power;
            40,// huti;//==?
            28,// physique;//体质
            21,// speed;
            50,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "宝刀",// name;
            0,// physique;//体质
            20,// power;
            2,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "金刚伏虎刀法",//name;
            4,//   level;
            0,//     exp;
            42,//   power;
            3,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//17
        "截匪头目",//name
        28,//lev
        0,//exp
        0,//age
        'Man',//sex
        0,//体质
        0,//power
        0,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "高级心法",//name
            0,
            0,// level
            0,// exp;
            45,// power;
            50,// huti;//==?
            32,// physique;//体质
            23,// speed;
            80,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "金刚指",//name;
            4,//   level;
            0,//     exp;
            64,//   power;
            4,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "摧心掌",
            5,
            0,
            60,
            3,//0 ：不入门
            1
        ],
        [//  skill_3,
            "九龙鞭法",
            3,
            0,
            32,
            3,
            5
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//18
        "黑心寡妇",//name
        23,//lev
        0,//exp
        0,//age
        'Man',//sex
        0,//体质
        0,//power
        0,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "高级心法",//name
            0,
            0,// level
            0,// exp;
            26,// power;
            40,// huti;//==?
            25,// physique;//体质
            36,// speed;
            46,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "寡妇剑",// name;
            0,// physique;//体质
            10,// power;
            10,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "追魂夺命剑",//name;
            5,//   level;
            0,//     exp;
            62,//   power;
            3,//0 ：不入门
            1//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],
    [//18
        "恶女劫匪",//name
        19,//lev
        0,//exp
        0,//age
        'Man',//sex
        0,//体质
        0,//power
        0,//speed
        1,//intelligent
        1,//bone
        [//internal_strength内功
            "中级心法",//name
            0,
            0,// level
            0,// exp;
            16,// power;
            20,// huti;//==?
            15,// physique;//体质
            26,// speed;
            36,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "毒剑",// name;
            0,// physique;//体质
            10,// power;
            3,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "腐尸剑",//name;
            4,//   level;
            0,//     exp;
            31,//   power;
            3,//0 ：不入门
            2//    s_or_m;
        ],
        [// skill_2
            "恶毒剪刀脚",
            3,
            0,
            28,
            3,//0 ：不入门
            1
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]]
    ],

    // Disciple
    [//0
        "赵统",//name
        1,//lev
        0,//exp
        18,//age
        'Man',//sex
        10,//体质
        10,//power
        10,//speed
        5,//intelligent
        5,//bone
        [//internal_strength内功
            "",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            0,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "",//name;
            0,//   level;
            0,//     exp;
            0,//   power;
            0,//0 ：不入门
            0//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]],
        10
    ],
    [//1
        "卓无霜",//name
        1,//lev
        0,//exp
        16,//age
        'Woman',//sex
        8,//体质
        10,//power
        11,//speed
        6,//intelligent
        7,//bone
        [//internal_strength内功
            "",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            0,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "",//name;
            0,//   level;
            0,//     exp;
            0,//   power;
            0,//0 ：不入门
            0//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]],
        30
    ],
    [//2
        "秦凌",//name
        1,//lev
        0,//exp
        15,//age
        'Man',//sex
        14,//体质
        10,//power
        12,//speed
        7,//intelligent
        8,//bone
        [//internal_strength内功
            "",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            0,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "",//name;
            0,//   level;
            0,//     exp;
            0,//   power;
            0,//0 ：不入门
            0//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]],
        60
    ],
    [//3
        "吴朗",//name
        1,//lev
        0,//exp
        19,//age
        'Man',//sex
        16,//体质
        18,//power
        9,//speed
        5,//intelligent
        8,//bone
        [//internal_strength内功
            "",//name
            0,
            0,// level
            0,// exp;
            0,// power;
            0,// huti;//==?
            0,// physique;//体质
            0,// speed;
            0,//nielizhi
            0,// bone;//根骨
            [ 0 ]
        ],
        [[//clothes,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [//  arms,
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ],
        [// shoes;
            "",// name;
            0,// physique;//体质
            0,// power;
            0,//speed;
            0,// intelligent;//悟性
        ]],
        [[//skill_1,
            //可以考虑将技能也变成事件
            "",//name;
            0,//   level;
            0,//     exp;
            0,//   power;
            0,//0 ：不入门
            0//    s_or_m;
        ],
        [// skill_2
            "",
            0,
            0,
            0,
            0,//0 ：不入门
            0
        ],
        [//  skill_3,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [// skill_4,
            "",
            0,
            0,
            0,
            0,
            0
        ],
        [//skill_5;
            "",
            0,
            0,
            0,
            0,
            0
        ]],
        120
    ],
];



//place地点数据********************************************************//
var menpai = new PLACE("门派", 0,
    new BULIDINGLIST(7,
        [
            new BULIDING(1,"掌门居    ",
                new CHARACTERLIST(0,[ "" ]),
                new EVENTLIST(2,[ new MY_EVENT(true,"修习内功",1),new MY_EVENT(true,"睡觉",2)]),
                "_zhmenju"),
            new BULIDING(1,"浩然剑气堂    ",
                new CHARACTERLIST(0,[ "" ]),
                new EVENTLIST(3,[ new MY_EVENT(false,"收徒仪式",3),new MY_EVENT(false,"接见宾客",4),new MY_EVENT(false,"门派大会",5)]),
                "_horjiqitg"),
            new BULIDING(0,"藏经阁    ",
                new CHARACTERLIST(0,[ "" ]),
                new EVENTLIST(2,[ new MY_EVENT(true,"管理藏书",6),new MY_EVENT(true,"查阅经书",7)]),
                "_cjingge"),
            new BULIDING(0,"演武场    ",
                new CHARACTERLIST(0,[ "" ]),
                new EVENTLIST(3,[ new MY_EVENT(true,"练习武功",8),new MY_EVENT(true,"演武传功",9),new MY_EVENT(false,"召开门内比武",10)]),
                "_yanwuchg"),
            new BULIDING(0,"弟子静修室    ",
                new CHARACTERLIST(0,[ "" ]),
                new EVENTLIST(2,[ new MY_EVENT(true,"修习内功",11),new MY_EVENT(true,"闭关突破",12)]),
                "_dzjnxush"),
            new BULIDING(1,"弟子居    ",
                new CHARACTERLIST(0,[ "" ]),
                new EVENTLIST(1,[ new MY_EVENT(true,"管理弟子",13)]),
                "_diziju"),
            new BULIDING(1,"老胡居    ",
                new CHARACTERLIST(3,[ "老胡  ","刘云儿","胡慧  " ]),
                new EVENTLIST(1,[ new MY_EVENT(true,"门派物资",15)]),
                "_laohuju")
        ]),
    new NEIGHBORLIST(4,["乡村      ","城北深山  ","林城      ","千龙山    "])
);

var _zhmenju = menpai.Buildinglist.Buildinglist[0];
var _horjiqitg = menpai.Buildinglist.Buildinglist[1];
var _cjingge = menpai.Buildinglist.Buildinglist[2];   
var _yanwuchg = menpai.Buildinglist.Buildinglist[3];  
var _dzjnxush = menpai.Buildinglist.Buildinglist[4];  
var _diziju = menpai.Buildinglist.Buildinglist[5];    
var _laohuju = menpai.Buildinglist.Buildinglist[6];

var _goutside =  new BULIDING(1,"外出    ",
                new CHARACTERLIST(0,[  ]),
                new EVENTLIST(4,[ new MY_EVENT(true,"乡村      ",16), new MY_EVENT(true,"城北深山  ",17), new MY_EVENT(true,"林城      ",18), new MY_EVENT(true,"千龙山    ",19)]),
                "_goutside")
    _goutside["Neighborlist"] = menpai.Neighborlist;
     

//2.niberhod
// var outside_xiangcun = new OUTSIDE ("乡村    ",0,
//         new EVENTLIST_big(2,
//             new EVENTLIST(2,[ new MY_EVENT(true,"游走探访",21),new MY_EVENT(true,"演武招徒",22)])));
// var outside_shenshan = new OUTSIDE ("城北深山    ",0,
//         new EVENTLIST_big(3,
//             new EVENTLIST(2,[ new MY_EVENT(true,"行侠仗义",31),new MY_EVENT(true,"山中探险",32),new MY_EVENT(true,"深山之顶",33)])));
// var outside_lincheng = new OUTSIDE ("林城    ",0,
//         new EVENTLIST_big(9,
//             new EVENTLIST(2,[ new MY_EVENT(true,"秦记武馆",41),new MY_EVENT(true,"衙门",44),new MY_EVENT(true,"扬行镖局",45),
//                               new MY_EVENT(true,"八卦门林城分馆",46),new MY_EVENT(true,"茶楼",47),new MY_EVENT(true,"药馆",49),
//                               new MY_EVENT(true,"文启武定",50),new MY_EVENT(true,"有间酒楼",51),new MY_EVENT(true,"黑市",52)])));
//  // new MY_EVENT(true,"太合武馆",42),new MY_EVENT(true,"虎拳武馆",43),new MY_EVENT(true,"破庙",48)
   
// var outside_qianlong = new OUTSIDE ("千龙山    ",0,
//         new EVENTLIST_big(2,
//             new EVENTLIST(2,[ new MY_EVENT(true,"拜访",61),new MY_EVENT(true,"攻占",62)])));


var outside_xiangcun =  new BULIDING(1,"乡村    ",
                new CHARACTERLIST(0,[  ]),
                new EVENTLIST(2,[ new MY_EVENT(true,"游走探访",21), new MY_EVENT(true,"演武招徒",22)]),
                "outside_xiangcun")

var outside_shenshan =  new BULIDING(1,"城北深山    ",
                new CHARACTERLIST(0,[  ]),
                new EVENTLIST(3,[ new MY_EVENT(true,"行侠仗义",31), new MY_EVENT(true,"山中探险",32),new MY_EVENT(true,"深山之顶",33)]),
                "outside_shenshan")

 var outside_lincheng =  new BULIDING(1,"林城    ",
                new CHARACTERLIST(0,[  ]),
                new EVENTLIST(9,[new MY_EVENT(true,"秦记武馆",41),new MY_EVENT(true,"衙门",44),new MY_EVENT(true,"扬行镖局",45),
                              new MY_EVENT(true,"八卦门林城分馆",46),new MY_EVENT(true,"茶楼",47),new MY_EVENT(true,"药馆",49),
                              new MY_EVENT(true,"文启武定",50),new MY_EVENT(true,"有间酒楼",51),new MY_EVENT(true,"黑市",52)]),
                "outside_lincheng")
 // new MY_EVENT(true,"太合武馆",42),new MY_EVENT(true,"虎拳武馆",43),new MY_EVENT(true,"破庙",48)


var outside_qianlong =  new BULIDING(1,"千龙山    ",
                new CHARACTERLIST(0,[  ]),
                new EVENTLIST(3,[ new MY_EVENT(true,"拜访",61), new MY_EVENT(true,"攻占",62)]),
                "outside_qianlong")


