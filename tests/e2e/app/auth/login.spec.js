// spec.js
 var loginPage = require('./login.object');
 var loginUser = require('./login.data');
 
 
 
	 describe('login', function() {
		 console.log(loginUser.userCredentials.length);
		 var i=0;
		 for (; i< loginUser.userCredentials.length; i++) {
			 console.log('user creds :'+loginUser.userCredentials[i].username);
			 (function(loginUserCred) {
				 it('welcomes the user', function() {
					 console.log('user creds :'+loginUserCred.username);
					 loginPage.get(loginUser.baseUrl);
					 loginPage.login(loginUserCred);
				 });
		  
				 it('welcomes the user for logout', function() {
					 loginPage.logOut();
				 });
		  
				 afterEach(function() {  
					 browser.manage().logs().get('browser').then(function(browserLog) {
						 var i = 0,
						 severWarnings = false;

						 for(i; i <= browserLog.length-1; i++){
							 if(browserLog[i].level.name === 'SEVERE'){
//								 console.log('\n' + browserLog[i].level.name);
								 //uncomment to see the error
//								 console.log('(Possibly exception) \n' + browserLog[i].message);

								 severWarnings = true;
							 }
						 }
						 //remove it to run test case even if test case is successful
//						 expect(severWarnings).toBe(false);
					 });
				 });
		        })(loginUser.userCredentials[i]);
			 
		 }
  
});
