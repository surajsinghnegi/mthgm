function fbShare(){
  window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                 null /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function whatsappShare(){
  window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
                                                 null /* img */,
                                                 "https://pointdeveloper.com/" /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function twitterShare(){
   window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
                                                 null /* img */, 
                                                 'http://twitter.com/', 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
  };

 function otherShare(){
   window.plugins.socialsharing.share('350+ best stories like Betaal Pachchisi, Akbar-Birbal, Tenaliram, Inspirational,  Panchtantra, funny, Love and Lok-Kathayen all in one App. \n\nhttps://play.google.com/store/apps/details?id=com.devsun.hindikahaniya', null, null, null);
  };

 function storyShare(){ 
   var data = $('.text-flow').text();
   window.plugins.socialsharing.share('Download app for more hindi stories \n https://play.google.com/store/apps/details?id=com.devsun.hindikahaniya \n\n'+data, null, null, null);
  };

