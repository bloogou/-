/*
*各种 程序中 用到的结构～
*/

//武功
function SKILL (NAME,LEVEL,EXP,POWER,FORCE_VALUE,SorM,TYPE){
  this.Name		= (NAME)?NAME:'无名招式';
  this.Leveal 	= (LEVEL)?LEVEL:0;
  this.Exp		= (EXP)?EXP:0;
  this.Power		= (POWER)?POWER:1;
  this.Forcevalue = (FORCE_VALUE)?FORCE_VALUE:0;//forcevalue;
  this.SorM 		= (SorM)?SorM:'Single';//    s_or_m;
  this.Type     = (TYPE)?TYPE:'attackSlill';//attack\defence
};

// SKILL.prototype.attack = function() {
//   alert(this.POWER);
// };
// var SKILL = new SKILL("red",4,23);



//内功
function INTERNALSTRENGTH (NAME,LEVEL,EXP,POWER,TYPE,HUTI,PHYSIQUE,SPEED,FORCE_VALUE,BONE,GROW){
	this.Name		= (NAME)?NAME:'无名内功';
  this.Leveal 	= (LEVEL)?LEVEL:0;
  this.Exp		= (EXP)?EXP:0;
  this.Power		= (POWER)?POWER:0;
	this.Type 		= (TYPE)?TYPE:'Neutral';//forceLev Yin \ Yang \ Neutral
  this.Huti 		= (HUTI)?HUTI:0;//huti;//==?也许要抽出来 单独成 一套逻辑
  this.Physique 	= (PHYSIQUE)?PHYSIQUE:0;//physique;//体质
  this.Speed 		= (SPEED)?SPEED:0;//speed;
	this.Forcevalue = (FORCE_VALUE)?FORCE_VALUE:0;//forcevalue;
  this.Bone 		= (BONE)?BONE:0;//bone;//根骨
	this.Grow 		= (GROW)?GROW:{"power":0,"speed":0,"physique":0,"huti":0,"p":0,"s":0,"ph":0,"h":0,"fv":0};//grow[9]; //={power,speed,physique,huti,p+,s+,ph+,h+,fv+}
};  

//装备
function EQUIPMENT (NAME,PHYSIQUE,POWER,SPEED,INTELLIGENT,TYPE){
  this.Name = (NAME)?NAME:'无名装备' ;//name;
//    LEVEAL  level;
//    EXP     exp;
  this.Physique 	= (PHYSIQUE)?PHYSIQUE:0;//physique;//体质
  this.Power		= (POWER)?POWER:0;
  this.Speed 		= (SPEED)?SPEED:0;//speed;
  this.Intelligent=  (INTELLIGENT)?INTELLIGENT:0;//intelligent ;//悟性
  this.Type 		=  (TYPE)?TYPE:'CLothes';//CLothes / Weapon / Shoes
    //export ：特性/装备技
};  

// //人 NPC? -->> HUMAN.class
// function HUMAN (NAME,LEVEL,EXP,AGE,SEX,PHYSIQUE,POWER,SPEED,INTELLIGENT,BONE,INTERNALSTRENGTH,EQUIPMENT,SKILL,FAME){
//  	this.Name 				= (NAME)?NAME:'无名者' ;//name;
//   this.Leveal 			= (LEVEL)?LEVEL:0;
//   this.Exp				= (EXP)?EXP:0;
//  	this.Age 				= (AGE)?AGE:0;//age;
//  	this.Sex 				= (SEX)?SEX:'Man';//;Man/Woman
//  	this.Physique 			= (PHYSIQUE)?PHYSIQUE:0;//physique;//体质
//   this.Power				= (POWER)?POWER:0;
// 	this.Speed 				= (SPEED)?SPEED:0;//speed;
//   this.Intelligent 		= (INTELLIGENT)?INTELLIGENT:0;//intelligent ;//悟性
//   this.Bone 				= (BONE)?BONE:0;//bone;//根骨
// 	this.Internal_strength 	= (INTERNALSTRENGTH)?INTERNALSTRENGTH:null  ;//internal_strength;//内功
// 	this.Equipment			= (EQUIPMENT)?EQUIPMENT:null ;//clothes, arms, shoes; //装备列表
// 	this.Skill 				= (SKILL)?SKILL:null;//skill_1, skill_2, skill_3, skill_4, skill_5;//技能列表
//   this.Fame         = (FAME)?FAME:0;
//   this.Fight = Fight;
//  //  STANDBY          standby_1, standby_2, standby_3, standby_4, standby_5;//备用
// };//occupation!



/* *************************************************************************************** */

function MY_EVENT(PASSIVE,NAME,TYPE,PASSIVE){
  this.Passive 		= (PASSIVE)?PASSIVE:'no' ;//passive;//是否被动事件
  this.Name 			= (NAME)?NAME:'defaultEvent'  ;//eventname;
  this.Type 			= (TYPE)?TYPE:-1;//eventType;//机制，将根据事件类型，发动事件-->因为面向过程,所以直接函数实现
  this.Passive 		= (PASSIVE)?PASSIVE:true;
};	



function EVENTLIST(MAX,MY_EVENT){
  this.Max 			= (MAX)?MAX:10000 ;//       listthis.MAXthis.:'',//;
  this.My_event		= (MY_EVENT)?MY_EVENT:null ;//  event_list[10];
};


function EVENTLIST_big(MAX,MY_EVENT){
  this.Max 			= (MAX)?MAX:10000 ;//       listthis.MAXthis.:'',//;
  this.My_event		= (MY_EVENT)?MY_EVENT:null ;//  event_list[10];
};

function CHARACTERLIST(MAX,MY_EVENT){
  this.Max 			= (MAX)?MAX:10000 ;//       listthis.MAXthis.:'',//;
  this.My_event		= (MY_EVENT)?MY_EVENT:null ;//  event_list[10];
};


//建筑
function BULIDING(LEVEL,NAME,CHARACTERLIST,EVENTLIST,NODE,PASSIVE){
  this.Leveal 			= (LEVEL)?LEVEL:0;
  this.Name 				= (NAME)?NAME:'无名建筑' ;//name;
  this.Character_list 	= (CHARACTERLIST)?CHARACTERLIST:[]  ;// character_list;
	this.Eventlist 			= (EVENTLIST)?EVENTLIST:[] ;//     event_list;
	this.Node 				= (NODE)?NODE:'';
	this.Passive 			= (PASSIVE)?PASSIVE:true;
};


function BULIDINGLIST(MAX,BULIDINGLIST){
  this.Max 				= (MAX)?MAX:0 ;//       listthis.MAXthis.:'',//;
  this.Buildinglist 		= (BULIDINGLIST)?BULIDINGLIST:[];//  bulidinglist[10];
};

function NEIGHBORLIST(MAX,NAMES){
  this.Max 				= (MAX)?MAX:0 ;//       listthis.MAXthis.:'',//;
  this.Names 				= (NAMES)?NAMES:'';//	  neighborlist[5];
};

function PLACE (NAME,FAME,BULIDINGLIST,NEIGHBORLIST){//地点
 this.Name 			= (NAME)?NAME:'无名场景' ;//             this.NAMEthis.:'',//;
 this.Fame 			= (FAME)?FAME:0 ;//             f_S, f_M;
 this.Buildinglist 	= (BULIDINGLIST)?BULIDINGLIST:'';//List     T_bulidinglist;
//   CHARACTERLIST    T_character_list;
//   EVENTLIST        T_event_list;
  this.Neighborlist 	= (NEIGHBORLIST)?NEIGHBORLIST:[] ;//     T_neighborlist;
//   STANDBY          standby_1, standby_2, standby_3, standby_4, standby_5;     
};

function OUTSIDE(NAME,FAME,EVENTLIST_big){
	this.Name 			= (NAME)?NAME:''  ;//             this.NAMEthis.:'',//;
	this.Fame			= (FAME)?FAME: 0 ;//           f_S, f_M;
	this.Eventlist_big  = (EVENTLIST_big)?EVENTLIST_big:'' ;//     T_event_list;
};

function TEMP_FIGHT(NAME,HP,MP,ATTACKREADY,SPEED,SKILL,POWER){
  this.Name 			= (NAME)?NAME:'' ;//             this.NAMEthis.:'',//;
	this.Hp				= (HP)?HP:0 ;//   xue;
	this.Mp				= (MP)?MP:0 ;//  nei;
	this.AttackReady 	= (ATTACKREADY)?ATTACKREADY:false;//  kechuzhao;//if (this.speed * time>=CHUZHAOTIMESIZE) kechuzhao=yes;subOs()={kechuzhao = no;}
	this.Speed 			= (SPEED)?SPEED:0 ;//  speed;
	this.Skill 			= (SKILL)?SKILL:null ;//  shill;
	this.Power 			= (POWER)?POWER:0;//  power;


	//差不多了似乎
};







/*
* 战斗
* adv : 对手
*/
function Fight (adv){

} 
