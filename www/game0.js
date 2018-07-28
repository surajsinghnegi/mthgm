game0={

	
create:function(){
	timer=200;
	score=0;
	level=-1;
	
	part1=0;
	part2=0;
	ans=0;
	devit=0;
	place=0;
	
	game.add.image(0,0,'bg');
	text_score=game.add.text(320,100,'Score: 0',{font:"50px cuyubrab",fill:"white"});
		text_score.anchor.setTo(0.5,0.5);
	text_timer=game.add.text(320,300,'60',{font:"60px cuyubrab",fill:"white"});
		text_timer.anchor.setTo(0.5,0.5);
	sound_correct=game.add.audio('correct');
	sound_wrong=game.add.audio('wrong');
	sound_beep=game.add.audio('beep',0.2);
		sound_beep.play();
	//Initialize sprite vars
	text_part1=0;
	text_part2=0;
	text_ans=0;
	text_devit=0;
	
	count=game.add.image(320,500,'count',0);
		count.anchor.setTo(0.5,0.5);
		count.scale.x=1.5;
		count.scale.y=1.5;
		
	timer_start=game.time.events.repeat(1500,3,function(){
		count.frame++;
		sound_beep.play();
		if(count.frame==0){
			count.kill();
			this.startgame();
			this.createpuzzle();
		}
	},this);
},

startgame:function(){

	text_part1=game.add.text(200,500,'1',{font:"100px cuyubrab",fill:"white"});
		text_part1.anchor.setTo(0.5,0.5);
	text_part2=game.add.text(440,500,'1',{font:"100px cuyubrab",fill:"white"});
		text_part2.anchor.setTo(0.5,0.5);
	text_sign=game.add.text(320,500,'+',{font:"70px cuyubrab",fill:"white"});
		text_sign.anchor.setTo(0.5,0.5);
	
	//display sign for game over(correct or wrong).
	correct=game.add.image(320,650,'correct');
		correct.anchor.setTo(0.5,0.5);
		correct.alpha=0;
	wrong=game.add.image(320,660,'wrong');
		wrong.anchor.setTo(0.5,0.5);
		wrong.alpha=0;

	//buttons for ans
	buttons_left=game.add.sprite(160,810,'button_s');
		buttons_left.anchor.setTo(0.5,0.5);
	button_left=game.add.sprite(160,800,'button');
		button_left.anchor.setTo(0.5,0.5);
		button_left.inputEnabled=true;
		button_left.events.onInputDown.add(this.clickleft,this);
	
	buttons_right=game.add.sprite(480,810,'button_s');
		buttons_right.anchor.setTo(0.5,0.5);
	button_right=game.add.sprite(480,800,'button');
		button_right.anchor.setTo(0.5,0.5);
		button_right.inputEnabled=true;
		button_right.events.onInputDown.add(this.clickright,this);
	
	//text for above two ans buttons
	text_ans=game.add.text(160,800,'1',{font:"60px cuyubrab",fill:"white"});
		text_ans.anchor.setTo(0.5,0.5);
	text_devit=game.add.text(480,800,'1',{font:"60px cuyubrab",fill:"white"});
		text_devit.anchor.setTo(0.5,0.5);
	
	//timer clock
	timer_t=game.time.events.loop(20,this.timerfunction);
	
},

timerfunction:function(){
	if(timer>0)
		timer--;
},

clickleft:function(){
	game.add.tween(button_left).from({y:810},200,'Linear',true);
	if(place==0){
		this.calcscore();
		game.add.tween(correct).from({alpha:1},500,'Linear',true);
		sound_correct.play();
		this.createpuzzle();
	}
	else{
		wrong.alpha=1;
		sound_wrong.play();
		this.gameover();
	}
},

clickright:function(){
	game.add.tween(button_right).from({y:810},200,'Linear',true);
	if(place==1){
		this.calcscore();
		game.add.tween(correct).from({alpha:1},500,'Linear',true);
		sound_correct.play();
		this.createpuzzle();
	}
	else{
		wrong.alpha=1;
		sound_wrong.play();
		this.gameover();
	}
},

gamewin:function(){
	text_timer.alpha=0;
	timer=500;
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.global.score=score;
	game.global.box[1]=level;
	game.state.start('scoreboard1');
	
},

gameover:function(){
	text_timer.alpha=0;
	timer=500;
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.time.events.add(2500,function(){
		game.global.score=score;
		game.global.box[1]=""+level+"/20";
		game.state.start('scoreboard1');
	},this);
},

gameover_timeup:function(){
	msg=game.add.text(320,650,"Time up",{font:"60px cuyubrab",fill:"white"});
		msg.anchor.setTo(0.5,0.5);
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.time.events.add(2500,function(){
		game.global.score=score;
		game.global.box[1]=""+level+"/20";
		game.state.start('scoreboard1');
	},this);
},

calcscore:function(){
	//Max score == 2125;
	score=score+timer/2;
	score=Math.round(score);
},

createpuzzle:function(){
	level++;
	place=game.rnd.pick([0,1]);
	errormaker=game.rnd.pick([0,1]);
	if(level<=5){
		timer=200;
		part1=game.rnd.integerInRange(0,10);
		part2=game.rnd.integerInRange(0,10);
		devit=game.rnd.pick([1,2,3]);
	}
	else if(level>5 && level <=10){
		timer=250;
		part1=game.rnd.integerInRange(11,100);
		part2=game.rnd.integerInRange(11,100);
		devit=game.rnd.pick([10,2,4]);
	}
	else{
		timer=200;
		part1=game.rnd.integerInRange(11,200);
		part2=game.rnd.integerInRange(11,200);
		devit=game.rnd.pick([10,20,2]);
	}
	ans=part1+part2;
	if(errormaker==0)
		devit=ans+devit;
	else
		devit=ans-devit;
	
	if(place==1){
		text_ans.reset(480,800);
		text_devit.reset(160,800);
	}
	else{
		text_ans.reset(160,800);
		text_devit.reset(480,800);
	}
},

update:function(){

if(timer==0)
	this.gameover_timeup();
	
if(level==20)
	this.gamewin();

text_timer.text=timer;
text_score.text="Score: "+score+"";
text_part1.text=part1;
text_part2.text=part2;

text_ans.text=ans;
text_devit.text=devit;

},


};



game1={
	
create:function(){
	timer=200;
	score=0;
	level=-1;
	
	part1=0;
	part2=0;
	ans=0;
	devit=0;
	place=0;

	game.add.image(0,0,'bg');
	text_score=game.add.text(320,100,'Score: 0',{font:"50px cuyubrab",fill:"white"});
		text_score.anchor.setTo(0.5,0.5);
	text_timer=game.add.text(320,300,'60',{font:"60px cuyubrab",fill:"white"});
		text_timer.anchor.setTo(0.5,0.5);
	//Initialize sprite vars
	text_part1=0;
	text_part2=0;
	text_ans=0;
	text_devit=0;
	
	count=game.add.image(320,500,'count',0);
		count.anchor.setTo(0.5,0.5);
		count.scale.x=1.5;
		count.scale.y=1.5;
		
	timer_start=game.time.events.repeat(1500,3,function(){
		count.frame++;
		if(count.frame==0){
			count.kill();
			this.startgame();
			this.createpuzzle();
		}
	},this);
},

startgame:function(){
text_part1=game.add.text(200,500,'1',{font:"100px cuyubrab",fill:"white"});
		text_part1.anchor.setTo(0.5,0.5);
	text_part2=game.add.text(440,500,'1',{font:"100px cuyubrab",fill:"white"});
		text_part2.anchor.setTo(0.5,0.5);
	text_sign=game.add.text(320,500,'+',{font:"70px cuyubrab",fill:"white"});
		text_sign.anchor.setTo(0.5,0.5);
	
	//display sign for game over(correct or wrong).
	correct=game.add.image(320,650,'correct');
		correct.anchor.setTo(0.5,0.5);
		correct.alpha=0;
	wrong=game.add.image(320,660,'wrong');
		wrong.anchor.setTo(0.5,0.5);
		wrong.alpha=0;

	//buttons for ans
	buttons_left=game.add.sprite(160,810,'button_s');
		buttons_left.anchor.setTo(0.5,0.5);
	button_left=game.add.sprite(160,800,'button');
		button_left.anchor.setTo(0.5,0.5);
		button_left.inputEnabled=true;
		button_left.events.onInputDown.add(this.clickleft,this);
	
	buttons_right=game.add.sprite(480,810,'button_s');
		buttons_right.anchor.setTo(0.5,0.5);
	button_right=game.add.sprite(480,800,'button');
		button_right.anchor.setTo(0.5,0.5);
		button_right.inputEnabled=true;
		button_right.events.onInputDown.add(this.clickright,this);
	
	//text for above two ans buttons
	text_ans=game.add.text(160,800,'1',{font:"60px cuyubrab",fill:"white"});
		text_ans.anchor.setTo(0.5,0.5);
	text_devit=game.add.text(480,800,'1',{font:"60px cuyubrab",fill:"white"});
		text_devit.anchor.setTo(0.5,0.5);
	//timer clock
	timer_t=game.time.events.loop(20,this.timerfunction);
	
},

timerfunction:function(){
	if(timer>0)
		timer--;
},

clickleft:function(){
	game.add.tween(button_left).from({y:810},200,'Linear',true);
	if(place==0){
		this.calcscore();
		game.add.tween(correct).from({alpha:1},500,'Linear',true);
		this.createpuzzle();
	}
	else{
		wrong.alpha=1;
		this.gameover();
	}
},

clickright:function(){
	game.add.tween(button_right).from({y:810},200,'Linear',true);
	if(place==1){
		this.calcscore();
		game.add.tween(correct).from({alpha:1},500,'Linear',true);
		this.createpuzzle();
	}
	else{
		wrong.alpha=1;
		this.gameover();
	}
},

gamewin:function(){
	text_timer.alpha=0;
	timer=500;
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.global.score=score;
	game.global.box[1]=level;
	game.state.start('scoreboard2');
	
},

gameover:function(){
	text_timer.alpha=0;
	timer=500;
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.time.events.add(2500,function(){
		game.global.score=score;
		game.global.box[1]=""+level+"/20";
		game.state.start('scoreboard2');
	},this);
},

gameover_timeup:function(){
	msg=game.add.text(320,650,"Time up",{font:"60px cuyubrab",fill:"white"});
		msg.anchor.setTo(0.5,0.5);
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.time.events.add(2500,function(){
		game.global.score=score;
		game.global.box[1]=""+level+"/20";
		game.state.start('scoreboard2');
	},this);
},

calcscore:function(){
	score=score+timer/2;
	score=Math.round(score);
},

createpuzzle:function(){
	level++;
    place=game.rnd.pick([0,1]);		//decide place of ans, left button or right
    operator=game.rnd.pick([0,1,2,3]);	//decide which operation to put for question
	devitmaker=game.rnd.pick([0,1]);//decide how devit will perform on the ans line341
 
    if(level<=2){
        timer=300;
        part1=game.rnd.integerInRange(0,10);
        part2=game.rnd.integerInRange(0,10);
        devit=game.rnd.pick([1,2,3]);
    ans=part1+part2;
    }
    else{
 
    if(operator==0){
            timer=200;
            part1=game.rnd.integerInRange(10,100);
            part2=game.rnd.integerInRange(10,100);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="+";
        ans=part1+part2;
    }
	else if(operator==1){
            timer=200;
            part1=game.rnd.integerInRange(10,100);
            part2=game.rnd.integerInRange(10,100);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="-";
        ans=part1-part2;
    }
    else if(operator==2){
        timer=300;
            part1=game.rnd.integerInRange(0,15);
            part2=game.rnd.integerInRange(0,15);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="X"; 
        ans=part1*part2;
    }
	else{
            timer=200;
            ans=game.rnd.integerInRange(1,15);
            part2=game.rnd.integerInRange(1,5);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="/";
        part1=ans*part2;
    }
    }
    
     
    if(devitmaker==0)
        devit=ans+devit;
    else
        devit=ans-devit;
      
    if(place==1){
        text_ans.reset(480,800);
        text_devit.reset(160,800);
    }
    else{
        text_ans.reset(160,800);
        text_devit.reset(480,800);
    }
},

update:function(){

if(timer==0)
	this.gameover_timeup();
	
if(level==20)
	this.gamewin();

text_timer.text=timer;
text_score.text="Score: "+score+"";
text_part1.text=part1;
text_part2.text=part2;

text_ans.text=ans;
text_devit.text=devit;

},


};



/* game1 hard mode
game1={
	
create:function(){
	timer=200;
	score=0;
	level=0;
	
	part1=0;
	part2=0;
	ans=0;
	devit=0;
	place=0;

	game.add.image(0,0,'bg');
	//game.add.image(10,0,'pencil');
	text_score=game.add.text(320,100,'Score: 0',{font:"50px cuyubrab",fill:"white"});
		text_score.anchor.setTo(0.5,0.5);
	text_timer=game.add.text(320,300,'60',{font:"60px cuyubrab",fill:"white"});
		text_timer.anchor.setTo(0.5,0.5);
	text_part1=game.add.text(200,500,'1',{font:"100px cuyubrab",fill:"white"});
		text_part1.anchor.setTo(0.5,0.5);
	text_part2=game.add.text(440,500,'1',{font:"100px cuyubrab",fill:"white"});
		text_part2.anchor.setTo(0.5,0.5);
	text_sign=game.add.text(320,500,'+',{font:"70px cuyubrab",fill:"white"});
		text_sign.anchor.setTo(0.5,0.5);
	
	text_msg=game.add.text(320,650,'Wrong Answer',{font:"60px cuyubrab",fill:"white"});
		text_msg.anchor.setTo(0.5,0.5);
		text_msg.alpha=0;	
		

	buttons_left=game.add.sprite(160,810,'button_s');
		buttons_left.anchor.setTo(0.5,0.5);
	button_left=game.add.sprite(160,800,'button');
		button_left.anchor.setTo(0.5,0.5);
		button_left.inputEnabled=true;
		button_left.events.onInputDown.add(this.clickleft,this);
	
	buttons_right=game.add.sprite(480,810,'button_s');
		buttons_right.anchor.setTo(0.5,0.5);
	button_right=game.add.sprite(480,800,'button');
		button_right.anchor.setTo(0.5,0.5);
		button_right.inputEnabled=true;
		button_right.events.onInputDown.add(this.clickright,this);
	

	text_ans=game.add.text(160,800,'1',{font:"60px cuyubrab",fill:"white"});
		text_ans.anchor.setTo(0.5,0.5);
	text_devit=game.add.text(480,800,'1',{font:"60px cuyubrab",fill:"white"});
		text_devit.anchor.setTo(0.5,0.5);
	
	game.time.events.loop(20,this.timerfunction);
	
	this.createpuzzle();
},

timerfunction:function(){
	if(timer>0)
		timer--;
},

clickleft:function(){
	game.add.tween(button_left).from({y:810},200,'Linear',true);
	if(place==0){
		this.calcscore();
		this.createpuzzle();
	}
	else{
		//alert("game over "+place+"");
		this.gameover();
	}
},

clickright:function(){
	game.add.tween(button_right).from({y:810},200,'Linear',true);
	if(place==1){
		this.calcscore();
		this.createpuzzle();
	}
	else{
		//alert("game over "+place+"");
		this.gameover();
	}
},

gameover:function(){
	text_msg.alpha=1;
	text_timer.alpha=0;
	timer=500;
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.time.events.add(2500,function(){
		game.global.score=score;
		game.global.box[1]=level;
		game.state.start('scoreboard2');
	},this);
},

gameover_timeup:function(){
	text_msg.alpha=1;
	text_msg.text="Time Up";
	button_left.inputEnabled=false;
	button_right.inputEnabled=false;
	game.time.events.add(2500,function(){
		game.global.score=score;
		game.global.box[1]=level;
		game.state.start('scoreboard2');
	},this);
},

calcscore:function(){
	score=score+timer/2;
	score=Math.round(score);
},

createpuzzle:function(){
	level++;
    place=game.rnd.pick([0,1]);		//decide place of ans, left button or right
    operator=game.rnd.pick([0,1,2,3]);	//decide which operation to put for question
	devitmaker=game.rnd.pick([0,1]);//decide how devit will perform on the ans line341
 
    if(level<=2){
        timer=200;
        part1=game.rnd.integerInRange(0,10);
        part2=game.rnd.integerInRange(0,10);
        devit=game.rnd.pick([1,2,3]);
    ans=part1+part2;
    }
    else{
 
    if(operator==0){
            timer=200;
            part1=game.rnd.integerInRange(10,100);
            part2=game.rnd.integerInRange(10,100);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="+";
        ans=part1+part2;
    }
	else if(operator==1){
            timer=200;
            part1=game.rnd.integerInRange(10,100);
            part2=game.rnd.integerInRange(10,100);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="-";
        ans=part1-part2;
    }
    else if(operator==2){
        timer=300;
            part1=game.rnd.integerInRange(0,15);
            part2=game.rnd.integerInRange(0,15);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="X"; 
        ans=part1*part2;
    }
	else{
            timer=200;
            ans=game.rnd.integerInRange(1,15);
            part2=game.rnd.integerInRange(1,5);
            devit=game.rnd.pick([10,2,4]);
        text_sign.text="/";
        part1=ans*part2;
    }
    }
    
     
    if(devitmaker==0)
        devit=ans+devit;
    else
        devit=ans-devit;
      
    if(place==1){
        text_ans.reset(480,800);
        text_devit.reset(160,800);
    }
    else{
        text_ans.reset(160,800);
        text_devit.reset(480,800);
    }
},

update:function(){

if(timer==0)
	this.gameover_timeup();
	


text_timer.text=timer;
text_score.text="Score: "+score+"";
text_part1.text=part1;
text_part2.text=part2;

text_ans.text=ans;
text_devit.text=devit;

},


};
*/

