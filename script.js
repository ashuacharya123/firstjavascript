var database=[
	{
		username:"ashish",
		password:"acharya"
	},
	{
		username:"ayush",
		password:"acharya"
	},
	{
		username:"ashmita",
		password:"khanal"
	},
	{
		username:"anubhav",
		password:"khanal"
	}
];

var newsfeed=[
	{
		username:"Bobby",
		timeline:"ghjk"
	},
	{
		username:"Boby",
		timeline:"ghk"
	},
	{
		username:"bby",
		timeline:"hjk"
	},
];

function isuservalid(username,password){
	for ( var i=0;i<database.length;i++){
		if (username==database[i].username && password==database[i].password){
			return true;
		}	
	}	
    return false;
}

function login (username,password){
	for (i=0;i<database.length;i++){
		if (isuservalid(username,password)){
			// alert("You've successfully logged in");
			console.log (newsfeed);
		} else{
			alert("Sorry,incorrect username or password ! Try again");
		}

	}
};

var usernameprompt=prompt("Enter your username");
var passwordprompt=prompt("Enter password");



login(usernameprompt,passwordprompt);