gradle = {...gradle,...{/**
GRADLE - KNOWLEDGE IS POWER
***** PROPRIETARY CODE *****
@author : gradle (gradlecode@outlook.com)
@update: 02/07/2019 12:39:00
@version_name: gradle-logic
@version_code: v6.0.0
copyright @2012-2020
*/
    
	//Ads information
	//===============
	banner             : 'ca-app-pub-4514008694644430/7673425944', //id placement banner
    interstitial       : 'ca-app-pub-4514008694644430/8550026360', //id placement interstitial
	
    isTesting          : true, //Ads mode testing. set to false for a production mode.
    enableBanner       : true, //Ads enable the banner. set to false to disable the banner.
    enableInterstitial : true, //Ads enable the interstitial. set to false to disable all interstitials.

    bannerAtBottom     : true, //if false the banner will be at top
    overlap            : false,

	notifiBackbutton   : true, //for confirmation backbutton
	notifiMessage      : 'Do you want to exit the game ?',

	intervalAds        : 1,     //Ads each interval for example each n times
	
	fullsize		   : true,
	
	text_color        : "brown",


	//Events manager :
	//================
    event: function(ev, msg){ gradle.process(ev,msg);switch(ev){
		
		case 'first_start':
			//gradle.showInter();
			break;
		case 'button_play':
			if(gradle.first_play){ //show the interstitial for button play only one time, to respect google rules.
			    gradle.showInter();
				gradle.first_start = false;
			}
			break;
		case 'page_settings':
			//gradle.showInter();
			break;
		case 'button_quit':
			//gradle.showInter();
			break;
		case 'button_pause':
			//gradle.showInter();
			break;
		case 'player_win':
			gradle.showInter();
			break;
		case 'game_end':
			//gradle.showInter();
			break;
		case 'page_menu':
			//gradle.checkInterval() && gradle.showInter();
			break;	
		case 'test':
			//gradle.checkInterval() && gradle.showInter();
			break;		
			
    }}
	
}};

gradle.run();


