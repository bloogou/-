//人 NPC?
function HUMAN (NAME,LEVEL,EXP,AGE,SEX,PHYSIQUE,POWER,SPEED,INTELLIGENT,BONE,INTERNALSTRENGTH,EQUIPMENT,SKILL,FAME){
 	this.Name 				= (NAME)?NAME:'无名者' ;//name;
  this.Leveal 			= (LEVEL)?LEVEL:0;
  this.Exp				  = (EXP)?EXP:0;
 	this.Age 				  = (AGE)?AGE:0;//age;
 	this.Sex 				  = (SEX)?SEX:'Man';//;Man/Woman
 	this.Physique 		= (PHYSIQUE)?PHYSIQUE:0;//physique;//体质
  this.Power				= (POWER)?POWER:0;
	this.Speed 				= (SPEED)?SPEED:0;//speed;
  this.Intelligent 	= (INTELLIGENT)?INTELLIGENT:0;//intelligent ;//悟性
  this.Bone 				= (BONE)?BONE:0;//bone;//根骨
	this.Internal_strength 	= (INTERNALSTRENGTH)?INTERNALSTRENGTH:null  ;//internal_strength;//内功
	this.Equipment		= (EQUIPMENT)?EQUIPMENT:null ;//clothes, arms, shoes; //装备列表
	this.Skill 				= (SKILL)?SKILL:null;//skill_1, skill_2, skill_3, skill_4, skill_5;//技能列表
  this.Fame         = (FAME)?FAME:0;
 
  this.Init = init;
  this.Fight = Fight;
  this.UnderAttack = underAttack;

  /*
  * 初始化 血量内力 
  * 因为 一些 原因 不得不 将 部分 数值的 初始化 延后
  * Rad  血量, 
  * Blue 内力
  * attackState  可出招 状态 （依据speed 判断）
  */
  function init(){
    this.Rad          = this.Physique  + this.Bone * 3 + this.Intelligent[0].Huti + this.Equipment.CLothes.Physique;
    this.Blue         = this.Intelligent[0].Forcevalue;
    this.attackState  = false;
  }

  // 如果是 ARPG 的话 血量啊 什么的就相当于 基础属性了
  // 而如果 不是 实时对战的话 可能只在 需要时 去计算一下 先 这样...



  /*
  * 战斗
  * adv : 对手
  * 出招 系统...
  */
  function Fight (adv){ 
    var power = this.Power + this.Equipment.Weapon.Power;
    // 出招时是否使用武功
    var withSkill = null;
    var skill = this.checkSkill(); 
    if(this.Blue > skill.Forcevalue){
      power += skill.Power;
      this.Blue -= skill.Forcevalue;
      withSkill = skill;
    }
    adv.underAttack(power);
    return withSkill;
  }


  /*
  * 受到攻击 
  * attack: 伤害
  */
  function underAttack (attack){
    this.Rad -= attack;
  }


  /*
  * 返回 血量
  */
  function getRad (){
    return this.Rad;
  }


  /*
  * 返回 出招速度
  */
  function getSpeed (){
    return this.Speed;
  }


 /*
  * 返回 选择的招式
  */
  function checkSkill (){
    return this.Skill[0];
  }

 // /*
 //  * 返回 出招威力
 //  */
 //  function getPower (){
 //    return this.Skill[0];
 //  }



//还要定义一系列 get方法 去获得  被 装备啊 / 武功啊等等 加成的 属性 从 对象直接获取的 都是 基础属性
//所以 要



 //  STANDBY          standby_1, standby_2, standby_3, standby_4, standby_5;//备用
};//occupation!

 


