main={

create:function(){
	game.input.onDown.add(function(){
			game.scale.startFullScreen(false);
	}, this);
	
	//game.stage.backgroundColor="#4db6ac";
	game.add.image(0,0,'bgmain');
	text_title=game.add.image(320,200,'title');
		text_title.anchor.setTo(0.5,0.5);
		//Tween for title text
		game.add.tween(text_title).from({y:50},2500,'Elastic',true);
	bgmusic=game.add.audio('di');
		//bgmusic.loop=true;
		bgmusic.play();
		
	buttons_play=game.add.sprite(320,510,'button_s');
		buttons_play.anchor.setTo(0.5,0.5);
	button_play=game.add.sprite(320,500,'button');
		button_play.anchor.setTo(0.5,0.5);
		button_play.inputEnabled=true;
		button_play.events.onInputDown.add(this.clickplay,this);
	text_play=game.add.text(320,500,'Play',{font:"50px cuyubrab",fill:"white"});
		text_play.anchor.setTo(0.5,0.5);
	/*	
	text_play=game.add.text(320,350,'Best Score',{font:"35px cuyubrab",fill:"white"});
		text_play.anchor.setTo(0.5,0.5);
	text_play=game.add.text(320,400,'Easy: '+localStorage.getItem('easy_score')+'',{font:"45px cuyubrab",fill:"white"});
		text_play.anchor.setTo(0.5,0.5);
	text_play=game.add.text(320,460,'Hard: '+localStorage.getItem('hard_score')+'',{font:"45px cuyubrab",fill:"white"});
		text_play.anchor.setTo(0.5,0.5);
	*/	
	medalcase=game.add.image(0,790,'medalcase');
		tween_medalcase=game.add.tween(medalcase).from({y:970},500,'Linear',true,1000);
		
	tween_medalcase.onComplete.add(function(){
	//Insert medal in Easy case
	if(localStorage.getItem('easy_m')==null){
		localStorage.setItem('easy_m',0);
	}
	if(localStorage.getItem('easy_m')==1)
		game.add.image(30,860,'medal',2);
	if(localStorage.getItem('easy_m')==2){
		game.add.image(30,860,'medal',2);
		game.add.image(135,860,'medal',1);
	}
	if(localStorage.getItem('easy_m')==3){
		game.add.image(30,860,'medal',2);
		game.add.image(135,860,'medal',1);
		game.add.image(235,860,'medal',0);
	}
	
	//Insert medal in Hard case
	if(localStorage.getItem('hard_m')==null){
		localStorage.setItem('hard_m',0);
	}
	if(localStorage.getItem('hard_m')==1)
		game.add.image(360,860,'medal',2);
	if(localStorage.getItem('hard_m')==2){
		game.add.image(360,860,'medal',2);
		game.add.image(460,860,'medal',1);
	}
	if(localStorage.getItem('hard_m')==3){
		game.add.image(360,860,'medal',2);
		game.add.image(460,860,'medal',1);
		game.add.image(560,860,'medal',0);
	}

	},this);
		
},

createselect:function(){
	buttons_easy=game.add.sprite(320,405,'button_s');
		buttons_easy.anchor.setTo(0.5,0.5);
	button_easy=game.add.sprite(320,400,'button');
		button_easy.anchor.setTo(0.5,0.5);
		button_easy.inputEnabled=true;
		button_easy.events.onInputDown.add(this.clickeasy,this);
	text_easy=game.add.text(320,400,'Easy',{font:"40px cuyubrab",fill:"white"});
		text_easy.anchor.setTo(0.5,0.5);
		
	/*buttons_medium=game.add.sprite(320,605,'button_s');
		buttons_medium.anchor.setTo(0.5,0.5);
	button_medium=game.add.sprite(320,600,'button');
		button_medium.anchor.setTo(0.5,0.5);
		button_medium.inputEnabled=true;
		button_medium.events.onInputDown.add(this.clickmedium,this);
	text_medium=game.add.text(320,600,'Medium',{font:"40px cuyubrab",fill:"white"});
		text_medium.anchor.setTo(0.5,0.5);*/
		
	buttons_hard=game.add.sprite(320,605,'button_s');
		buttons_hard.anchor.setTo(0.5,0.5);
	button_hard=game.add.sprite(320,600,'button');
		button_hard.anchor.setTo(0.5,0.5);
		button_hard.inputEnabled=true;
		button_hard.events.onInputDown.add(this.clickhard,this);
	text_hard=game.add.text(320,600,'Hard',{font:"40px cuyubrab",fill:"white"});
		text_hard.anchor.setTo(0.5,0.5);
},

clickplay:function(){
	tween_button=game.add.tween(button_play).from({y:510},200,'Linear',true);
	tween_button.onComplete.add(function(){
		button_play.destroy();
		buttons_play.destroy();
		text_play.destroy();
		this.createselect();
	},this);
},

clickeasy:function(){
	tween_button=game.add.tween(button_easy).from({y:405},200,'Linear',true);
	tween_button.onComplete.add(function(){
		game.global.box[0]="Easy";
		game.global.box[2]=1;
		bgmusic.stop();
		game.state.start('game0');
	},this);
},

/*clickmedium:function(){
	tween_button=game.add.tween(button_medium).from({y:605},200,'Linear',true);
	tween_button.onComplete.add(function(){
		game.global.box[0]="Medium";
		game.global.box[2]=2;
		game.state.start('game0');
	},this);
},*/

clickhard:function(){
	tween_button=game.add.tween(button_hard).from({y:605},200,'Linear',true);
	tween_button.onComplete.add(function(){
		game.global.box[0]="Hard";
		game.global.box[2]=3;
		bgmusic.stop();
		game.state.start('game1');
	},this);
},



};