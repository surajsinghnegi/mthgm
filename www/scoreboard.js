scoreboard1={

create:function(){
	game.stage.backgroundColor="#4db6ac";
	report=game.add.image(360,400,'paper');
		report.anchor.setTo(0.5,0.5);
		tween_scale=game.add.tween(report.scale).from({x:1.5,y:1.5},1000,'Linear',true);
	sound_score=game.add.audio('score');
		sound_score.play();
	
	tween_scale.onComplete.add(function(){

	pencil=game.add.image(-40,-10,'pencil');
		pencil.angle=-10;
		game.add.tween(pencil).from({x:-100,y:-150},1000,'Linear',true);
		
	//Check best score in local storage-------Key: easy_score
	if(localStorage.getItem('easy_score')==null){
		localStorage.setItem('easy_score',game.global.score);
	}
	else if(game.global.score>localStorage.getItem('easy_score')){
		localStorage.setItem('easy_score',game.global.score);
	}
	
	bestscore=localStorage.getItem('easy_score');
		
	text_report=game.add.text(350,160,'Score Card',{font:"60px cuyubrab",fill:"black"});
		text_report.anchor.setTo(0.5,0.5);
	text_mode=game.add.text(350,250,'level: Easy',{font:"30px cuyubrab",fill:"black"});
		text_mode.anchor.setTo(0.5,0.5);
	text_level=game.add.text(350,300,'Answered: '+game.global.box[1]+'',{font:"30px cuyubrab",fill:"black"});
		text_level.anchor.setTo(0.5,0.5);
	//text_score=game.add.text(350,618,"Score: "+game.global.score+"",{font:"70px cuyubrab",fill:"black"});
	//	text_score.anchor.setTo(0.5,0.5);
	text_besttext=game.add.text(350,400,"Best Score",{font:"30px cuyubrab",fill:"black"});
		text_besttext.anchor.setTo(0.5,0.5);
	text_best=game.add.text(350,448,""+bestscore+"",{font:"50px cuyubrab",fill:"black"});
		text_best.anchor.setTo(0.5,0.5);
	text_scoretext=game.add.text(350,550,"Current Score",{font:"30px cuyubrab",fill:"black"});
		text_scoretext.anchor.setTo(0.5,0.5);
	text_score=game.add.text(350,618,""+game.global.score+"",{font:"80px cuyubrab",fill:"black"});
		text_score.anchor.setTo(0.5,0.5);
	},this);
	
	//buttons for home and restart
	buttons_left=game.add.sprite(160,830,'button_s');
		buttons_left.anchor.setTo(0.5,0.5);
	button_left=game.add.sprite(160,820,'button');
		button_left.anchor.setTo(0.5,0.5);
	
	buttons_right=game.add.sprite(480,830,'button_s');
		buttons_right.anchor.setTo(0.5,0.5);
	button_right=game.add.sprite(480,820,'button');
		button_right.anchor.setTo(0.5,0.5);
	//Text on buttons for home and restart	
	text_home=game.add.text(160,820,'Home',{font:"50px cuyubrab",fill:"white"});
		text_home.anchor.setTo(0.5,0.5);
	text_restart=game.add.text(480,820,'Restart',{font:"50px cuyubrab",fill:"white"});
		text_restart.anchor.setTo(0.5,0.5);
	
	//Stop above buttons from taking inputs for 1s, to avoid misclick while screen transition
	game.time.events.add(1000,function(){
		button_left.inputEnabled=true;
		button_left.events.onInputDown.add(this.clickhome,this);
		button_right.inputEnabled=true;
		button_right.events.onInputDown.add(this.clickrestart,this);
		
			
	//Medals
	if(game.global.score>=800 && game.global.score<1000){
		bronze=game.add.sprite(525,80,'medal',2);	//Bronze
			bronze.scale.x=2;
			bronze.scale.y=2;
			if(localStorage.getItem('easy_m')==null){
				localStorage.setItem('easy_m',1);
			}
			else if(localStorage.getItem('easy_m')<1){
				localStorage.setItem('easy_m',1);
			}
		
	}
	if(game.global.score>=1000 && game.global.score<1400){
		silver=game.add.sprite(525,80,'medal',1);	//Silver
			silver.scale.x=2;
			silver.scale.y=2;
			if(localStorage.getItem('easy_m')==null){
				localStorage.setItem('easy_m',2);
			}
			else if(localStorage.getItem('easy_m')<2){
				localStorage.setItem('easy_m',2);
			}
		 
	}
	if(game.global.score>=1400){
		gold=game.add.sprite(525,80,'medal',0);	//Gold
			gold.scale.x=2;
			gold.scale.y=2;
			if(localStorage.getItem('easy_m')==null){
				localStorage.setItem('easy_m',3);
			}
			else if(localStorage.getItem('easy_m')<3){
				localStorage.setItem('easy_m',3);
			}
	}
	
	},this);
},

clickhome:function(){
	tween_button=game.add.tween(button_left).from({y:830},500,'Linear',true);
	tween_button.onComplete.add(function(){
		game.state.start('main');
	},this);
},

clickrestart:function(){
	tween_button=game.add.tween(button_right).from({y:830},500,'Linear',true);
	tween_button.onComplete.add(function(){
		game.state.start('game0');
	},this);
},


};

scoreboard2={

create:function(){
	game.stage.backgroundColor="#4db6ac";
	report=game.add.image(360,400,'paper');//240,220
		report.anchor.setTo(0.5,0.5);
		//game.add.tween(report).from({angle:360},800,'Linear',true);
		tween_scale=game.add.tween(report.scale).from({x:1.5,y:1.5},1000,'Linear',true);

	tween_scale.onComplete.add(function(){
	//-40,-10
	pencil=game.add.image(-40,-10,'pencil');
		pencil.angle=-10;
		game.add.tween(pencil).from({x:-100,y:-150},1000,'Linear',true);
	
	//Check best score in local storage-------Key: easy_score
	if(localStorage.getItem('hard_score')==null){
		localStorage.setItem('hard_score',game.global.score);
	}
	else if(game.global.score>localStorage.getItem('hard_score')){
		localStorage.setItem('hard_score',game.global.score);
	}
	
	bestscore=localStorage.getItem('hard_score');
	
	text_report=game.add.text(350,160,'Score Card',{font:"60px cuyubrab",fill:"black"});
		text_report.anchor.setTo(0.5,0.5);
	text_mode=game.add.text(350,250,'level: Hard',{font:"30px cuyubrab",fill:"black"});
		text_mode.anchor.setTo(0.5,0.5);
	text_level=game.add.text(350,300,'Answered: '+game.global.box[1]+'',{font:"30px cuyubrab",fill:"black"});
		text_level.anchor.setTo(0.5,0.5);
	//text_score=game.add.text(350,618,"Score: "+game.global.score+"",{font:"70px cuyubrab",fill:"black"});
	//	text_score.anchor.setTo(0.5,0.5);
	text_besttext=game.add.text(350,400,"Best Score",{font:"30px cuyubrab",fill:"black"});
		text_besttext.anchor.setTo(0.5,0.5);
	text_best=game.add.text(350,448,""+bestscore+"",{font:"50px cuyubrab",fill:"black"});
		text_best.anchor.setTo(0.5,0.5);
	text_scoretext=game.add.text(350,550,"Current Score",{font:"30px cuyubrab",fill:"black"});
		text_scoretext.anchor.setTo(0.5,0.5);
	text_score=game.add.text(350,618,""+game.global.score+"",{font:"80px cuyubrab",fill:"black"});
		text_score.anchor.setTo(0.5,0.5);
	},this);
	
	buttons_left=game.add.sprite(210,830,'button_s');
		buttons_left.anchor.setTo(0.5,0.5);
	button_left=game.add.sprite(210,820,'button');
		button_left.anchor.setTo(0.5,0.5);
	
	buttons_right=game.add.sprite(510,830,'button_s');
		buttons_right.anchor.setTo(0.5,0.5);
	button_right=game.add.sprite(510,820,'button');
		button_right.anchor.setTo(0.5,0.5);
		
	text_home=game.add.text(210,820,'Home',{font:"50px cuyubrab",fill:"white"});
		text_home.anchor.setTo(0.5,0.5);
	text_restart=game.add.text(510,820,'Restart',{font:"50px cuyubrab",fill:"white"});
		text_restart.anchor.setTo(0.5,0.5);
	
	
	//Stop above buttons from taking inputs for 1s, to avoid misclick while screen transition		
	game.time.events.add(1000,function(){
		button_left.inputEnabled=true;
		button_left.events.onInputDown.add(this.clickhome,this);
		button_right.inputEnabled=true;
		button_right.events.onInputDown.add(this.clickrestart,this);
		
			
	//Medals
	if(game.global.score>=500 && game.global.score<800){
		bronze=game.add.sprite(525,80,'medal',2);	//Bronze
			bronze.scale.x=2;
			bronze.scale.y=2;
			if(localStorage.getItem('hard_m')==null){
				localStorage.setItem('hard_m',1);
			}
			else if(localStorage.getItem('hard_m')<1){
				localStorage.setItem('hard_m',1);
			}
		
	}
	if(game.global.score>=800 && game.global.score<1200){
		silver=game.add.sprite(525,80,'medal',1);	//Silver
			silver.scale.x=2;
			silver.scale.y=2;
			if(localStorage.getItem('hard_m')==null){
				localStorage.setItem('hard_m',2);
			}
			else if(localStorage.getItem('hard_m')<2){
				localStorage.setItem('hard_m',2);
			}
		 
	}
	if(game.global.score>=1200){
		gold=game.add.sprite(525,80,'medal',0);		//Gold
			gold.scale.x=2;
			gold.scale.y=2;
			if(localStorage.getItem('hard_m')==null){
				localStorage.setItem('hard_m',3);
			}
			else if(localStorage.getItem('hard_m')<3){
				localStorage.setItem('hard_m',3);
			}
	}
	},this);
	
},

clickhome:function(){
	tween_button=game.add.tween(button_left).from({y:830},500,'Linear',true);
	tween_button.onComplete.add(function(){
		game.state.start('main');
	},this);
},

clickrestart:function(){
	tween_button=game.add.tween(button_right).from({y:830},500,'Linear',true);
	tween_button.onComplete.add(function(){
		game.state.start('game1');
	},this);
},


};