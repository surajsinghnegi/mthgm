boot={
	preload:function(){
	},
	create:function(){
	this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		 
		load_text=game.add.text(20,10,"",{font:'72px cuyubrab',fill:'black'});
		
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		
	game.state.start('preload');
	},
	
	
};
//Boot complete

preload={
	init:function(){
	},
	preload:function(){
	game.load.image('bgmain','img/bgmain.png');
	game.load.image('title','img/title.png');
	game.load.image('medalcase','img/medalcase.png');
	game.load.spritesheet('medal','img/newmedals.png',40,75);
	game.load.image('bg','img/bg.png');
	game.load.spritesheet('count','img/count.png',57,87);
	game.load.image('pencil','img/pencil.png');
	game.load.image('button','img/button.png');
	game.load.image('button_s','img/button_s.png');
	game.load.image('paper','img/paper.png');
	game.load.image('correct','img/correct.png');
	game.load.image('wrong','img/wrong.png');
	game.load.audio('di','sounds/di.mp3');
	game.load.audio('correct','sounds/correct.mp3');
	game.load.audio('wrong','sounds/wrong.mp3');
	game.load.audio('beep','sounds/beep.mp3');
	game.load.audio('score','sounds/score.mp3');
		
	},
	create:function(){
	game.state.start('main');
	
	}
};

