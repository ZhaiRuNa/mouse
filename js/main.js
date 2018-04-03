function beatMouse(){
	this.init();
}
beatMouse.prototype = {
	constructor:beatMouse,//constructor是一个指针，指向构造函数 beatMouse
	init:function(){

		this.gameBox = document.getElementById("game");
		this.scoreNum = document.getElementById("score");
		this.timeNum = document.getElementById("time");
		this.beat = this.gameBox.children;
		this.gameTimer = null;
		this.gameTimer = setInterval(this.mouse.bind(this),1000);
		this.count = 0 ;
		this.time = 5 ;
		this.stopTimer = setInterval(this.stop.bind(this),1000);
		
	},
	mouse:function(){
		var x = Math.floor(Math.random()*9);
		this.img = this.beat[x];
		this.img.src = "img/2.gif";
		var x = Math.floor(Math.random()*9);
		this.img = this.beat[x];
		this.img.src = "img/5.jpg";
		for( var i = 0 ; i < this.beat.length ; i++ ){
			this.beat[i].index = i
			this.beat[i].onclick = this.fadeOut.bind(this);//老鼠消失
		}
		
	},
	fadeOut:function(event){
		var e = event || window.event;
		var index = e.target.index;
		//保存被打印图片路径；
		var beatImg = this.beat[index].src ;
		//console.log(beatImg);
		if (beatImg.charAt(beatImg.length - 5) == 2 ) {
			this.count++;
			this.beat[index].src = "img/5.jpg";			
		}
		this.scoreNum.innerHTML = "分数为" + this.count;
		
		
		
	},
	stop:function(){
			this.time -- ; 
			document.getElementById("time").innerHTML = "时间:" + this.time;
			if (this.time == 0) {
			clearInterval(this.stopTimer);
			clearInterval(this.gameTimer);
			document.getElementById("music").pause();			
			}
		}
	}

new beatMouse();