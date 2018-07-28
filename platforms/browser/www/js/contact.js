var i = 0;
$(window).on('beforeunload', function(){
	if(i%2===0)
	{
   		if(window.AdMob) AdMob.showInterstitial();
	}
	i++;
});