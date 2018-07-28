function adSetter(){
// alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7532993595031090/3325678712',
        interstitial: 'ca-app-pub-7532993595031090/4363428214'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
       banner: 'ca-app-pub-7532993595031090/3325678712',
        interstitial: 'ca-app-pub-7532993595031090/4363428214'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-7532993595031090/3325678712',
        interstitial: 'ca-app-pub-7532993595031090/4363428214'
    };
}
 
if(AdMob) AdMob.createBanner( {
    // isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
  if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
 
}
  function onDeviceReady(){
  // alert("device ready");
      adSetter();
 
        
  }
 
 
  document.addEventListener("deviceready", function(){
      onDeviceReady();
 },true);

// window.load=function(){
//  document.addEventListener("deviceready", onDeviceReady, false);
// }

