document.body.onload = load;
var timer ;

	/*
	* 装载
	*/
	function load() {
		initData_Human();
		initPlaces();

		// timer = requestAnimationFrame(loopFuc);

		// 先写死 初始化 where am i = _menpai;
		where_am_i = menpai;//place
		drawWelcome();//init drew
	}

	/*
	* 循环机制目前用不到
	*/
	function loopFuc () {
		//cancelAnimationFrame(timer);
	}

	/*
	* 预处理 order  
	* 包括 简单，分解与包装
	*/
	function orderInputFun (event) {
		console.log(event);
		// switch(event.key){
		// 	case 'h':
		// 		showView.value = 'hello'
		// 		break;
		// 	default:
		// 		showView.value = 'err'
		// 		break;
		// }
		checkOrder(event.key);//orderHandel
		clearOrderLine();
		// orderLine.blur();
	}

	/*
	*清空 命令输入拦
	*/
	function clearOrderLine () {
		orderLine.value = '';
	}


	/*
	*初始化数据之 人物
	*/
	function initData_Human(){
		if(!humanList_Obj){
			humanList_Obj = [] ;
		}
		for(var i=0;i<humanlist.length;i++){
			var Internal_strength =[];
			var grow = (humanlist[i][10][10])?
				{"power":humanlist[i][10][10][0],"speed":humanlist[i][10][10][1],"physique":humanlist[i][10][10][2],
				"huti":humanlist[i][10][10][3],"p":humanlist[i][10][10][4],"s":humanlist[i][10][10][5],"ph":humanlist[i][10][10][6],
				"h":humanlist[i][10][10][7],"fv":humanlist[i][10][10][8]}
				:{"power":0,"speed":0,"physique":0,"huti":0,"p":0,"s":0,"ph":0,"h":0,"fv":0}; 
			var internal_strength = new INTERNALSTRENGTH(humanlist[i][10][0],humanlist[i][10][1],humanlist[i][10][2],humanlist[i][10][3],
			humanlist[i][10][4],humanlist[i][10][5],humanlist[i][10][6],humanlist[i][10][7],humanlist[i][10][8],
			humanlist[i][10][9],grow);
			Internal_strength.push(internal_strength);
			internal_strength = grow = null;

			var Equipment = {};
			for(var j=0;j < humanlist[i][11].length;j++){
				var type = (j==0)?'CLothes':((j==1)?'Weapon':'Shoes');
				var equipment = new EQUIPMENT(humanlist[i][11][j][0],humanlist[i][11][j][1],humanlist[i][11][j][2],humanlist[i][11][j][3],humanlist[i][11][j][4],type);
				Equipment[type] = equipment;
			}

			var Skill = [];
			for(var j = 0; j < humanlist[i][12].length;j++){
				var skill = new SKILL(humanlist[i][12][j][0],humanlist[i][12][j][1],humanlist[i][12][j][2],humanlist[i][12][j][3],humanlist[i][12][j][4],humanlist[i][12][j][5]);
				Skill.push(skill);
			}

			var obj = new HUMAN(humanlist[i][0],humanlist[i][1],humanlist[i][2],humanlist[i][3],
				humanlist[i][4],humanlist[i][5],humanlist[i][6],humanlist[i][7],humanlist[i][8],
				humanlist[i][9],Internal_strength,Equipment,Skill);
			humanList_Obj.push(obj);
			obj = null;
		}
		
		//主角周平
		_zhouping = humanList_Obj[0];
		//流氓
		_liumang = tools.CopyObj(humanList_Obj[1]);

	}


	function initPlaces(){
		// menpai - Main Place
		// outsideList - Play Places	
		var outsideList = {
		  xc:outside_xiangcun,
		  ss:outside_shenshan,
		  lc:outside_lincheng,
		  ql:outside_qianlong
		}
	}



//////图形逻辑///////


/*
*开始界面
*/
function drawWelcome(){
	var welcome = "\n\n\n\n\n";
	// Sleep(2628);
	welcome += "\n\n\n\n\n\n\n\n\n\n\n";
	welcome += "\t\t\t     FREE MYSELF · 独\n";
	welcome += "\t\t\t     -----------------  \n\t\t\t   \t          门派\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n随意输入进入游戏\n\n\n\n\n\n";
	showView.value = welcome;
	return welcome;
}


/*
*结束界面
*/
function drawEnding(){
	var ending = "\n\n\n\n\n\n\n\n\n\n\n\n";
	ending += "\t\t\t   FREE OURSELVES · 独\n";
	ending += "\t\t\t   ------------------  \n";
	showView.value = ending;
	return ending;
}





//****暂时用不上的扩展*****//

//新的 游戏循环 机制

if(!window.requestAnimationFrame){
    var lastTime = 0;
    window.requestAnimationFrame = function(callback){
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0,16.7-(currTime - lastTime));
        var id  = window.setTimeout(function(){
            callback(currTime + timeToCall);
        },timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    }
}


if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}
