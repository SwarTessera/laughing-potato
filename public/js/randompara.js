function generate()
{
	runbat();
	var paragraphArray = [
		"The quick brown fox jumps over the lazy dog.",
		"Sixty zippers were quickly picked from the woven jute bag.",
		"Pack my box with five dozen quality jugs.",
		"Jim realized that the beautiful gowns are expensive.",
		"Grumpy wizard makes a toxic brew.",
		"I am counting my calories, yet I really want dessert.",
		"The waves were crashing on the shore.",
		"The sky is clear and the stars are twinkling.",
		"Rock music approaches at high velocity.",
		"I currently have 4 windows open up and I don’t know why.",
		"Mary plays the piano.",
		"A glittering gem is not enough.",
		"The mysterious diary records the voice.",
		"The purple ninjas are fighting marshmellows .",
		"Unicorns dance on rainbows.",
		"Style is omni-present, much like candy.",
		"Love is like a summer breeze.",
		"All it takes is faith and trust and a little bit of pixie dust.",
		"A square fish, if you wish.",
		"Even miracles take a little time.",
		"Imagination has no age and dreams are forever.",
		"The things that make me different are the things that make me.",
		"The wilderness must be explored.",
		"A purple pig and a green donkey flew a kite in the middle of the night.",
		"Lets all be unique together until we realise we are all the same."
	];  

	var usedLines = new Array(25);
		for (var i = 1; i <= 5; i++) 
		{
				//low (inclusive) and high (inclusive) 
				//Math.floor(Math.random() * (high - low+1) + low);
				var decision=Math.floor(Math.random()*25);
				if (!usedLines[decision])
				{
						usedLines[decision]=true;
						document.getElementById('line'+i).innerHTML=paragraphArray[decision];
				}	
		};
}