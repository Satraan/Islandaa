var landType;
var owned = {
    "leb" :  ["292"],
    "4ed" : ["367", "368"],
    "tmp" : ["313"],
    "ody" : ["343"],
    "inv" : ["343"],

    //modern border
    "8ed" : ["343", "346"],
   	"ori" : ["268"],
   	"chk" : ["300", "301","306", "304"],
   	"unh" : ["139"],
   	"zen" : ["248", "246", "234", "236", "235"],

   	//standard
   	"akh" : ["266", "265"],
   	"hou" : ["188"]

}


var setID;

function getData(setCode, landType){
	
	
$.getJSON('https://api.scryfall.com/cards/search?q=%2B%2B' + landType + '+e%3A' + setCode, callback);
	
};

function callback(param){
	var x = param.data;  
	console.log(x); 
	var result = 0;		
	resultLength = x.length;

	//$.get('testFile.json', function(ownedData){	
				
			
			
			for (var i = 0; i < x.length; i++) {
				var item = x[i];
				var cardID = item.collector_number;
								
				if (item.name == landType) {

					if(jQuery.inArray(cardID, owned[setID]) !== -1){	//if its in owned
						result++;
						var name = landType + " " + item.collector_number;
						var img = item.image_uris.normal;
						
						fillGrid(resultLength, img, name);
						
					}

					else if (jQuery.inArray(cardID, owned[setID]) == -1) {
						console.log(cardID);
						result++;

						var name = landType + " " + item.collector_number;

						var img = item.image_uris.normal;
						fillMissingGrid(resultLength, img, name);
					}
				
				}//end of if
			}

	//});
};

function fillGrid(length, imgSrc, nameSrc){
		
		var newDiv = document.createElement('div');
		var newID = nameSrc;
		var para = document.createElement("P");
		var name = document.createTextNode(nameSrc); 
		var img = new Image();

		img.src = imgSrc;
		newDiv.id = newID;
		newDiv.className = 'card';
		newDiv.data
		para.className = 'cardName';
		para.appendChild(name); 

		document.getElementById('main').appendChild(newDiv);
		document.getElementById(newID).appendChild(img);
		document.getElementById(newID).appendChild(para);		
};

function fillMissingGrid(length, imgSrc, nameSrc){
		
		var newDiv = document.createElement('div');
		var newID = nameSrc;
		var para = document.createElement("P");
		var name = document.createTextNode(nameSrc); 
		var img = new Image();

		img.src = imgSrc;
		newDiv.id = newID;
		newDiv.className = 'missingCard';
		para.className = 'cardName';
		para.appendChild(name); 
		
		document.getElementById('main').appendChild(newDiv);
		document.getElementById(newID).appendChild(img);
		document.getElementById(newID).appendChild(para);	

};

var landTypeData;
var setIdData;

$( document ).ready(function() {
	
	 $(".landBtn").click(function(){
	 		$(".landBtn").removeClass("activeBtn");
	 		$(".setBtn").removeClass("activeBtn");		
			$(this).addClass("activeBtn");
			var $button = $(this);
			var landTypeData = $button.data("category");
			landType = this.id;				
	    });
	  	

	$(".setBtn").click(function(){
			$(".setBtn").removeClass("activeBtn");		
			$(this).addClass("activeBtn");
			document.getElementById('main').innerHTML = '';	

			


			 var x = this.id;
			 setID = x;
		
	       getData(x, landType);
	        
	    });

	$("p").click(function(){
		console.log("it works");
	});

 $('.testBtn').click(function(e){
		var $button = $(this);
		var category = $button.data("category");
		var action = $button.data("action");
		$.get("http://localhost/Dev%20Stuff/Test/test.php?action=" + action + "&category=" + category, function(data){
			console.log(data);

		});

	});


});

