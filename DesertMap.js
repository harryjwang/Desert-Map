//Name: Harry Wang

let spriteSheet;
let spriteDataFile;
let fifteenImages = [];
let lines = [];
let index = 0;
let row = [];
let x = 600;
let y = 100;
// Setting up the Camel walking while buttons are being pressed (Arrow Keys)

let v;
let vInc = 0.01;
let yoff;
let xoff = 0;
// Variables for the creation of the Desert Background
// (Using Noise)

let locationX = [];
let locationY = [];
//Array where I will randomize the X and Y locations of the treasure that will show up on the treasure map
// When clicked, the users will see the info of the top 5 deserts in the world (imported from a JSON file)
let numberOfDeserts = 5;
let Cx = 750;
let Cy = 100;

let screen = 0;

let splashScreen = true;
// Creating a splash screen to introduce the openning of the new screen

let ang = 0;
let ball;
// Used to animate a sun moving around in the sky in the backgroud of the main page

let csv = [];
let myDiv;
let areas = [];
// Initializing empty arrays that will be filled in through the table

function preload() {
	spriteSheet = loadImage("camelAtlas.png");
	spriteDataFile = loadStrings("commonData15Graphics.txt");
	antarcticDesert = loadImage("Antarctic.png");
	arcticDesert = loadImage("Arctic.png");
	arabianDesert = loadImage("Arabian.png");
	gobiDesert = loadImage("Gobi.png");
	saharaDesert = loadImage("Sahara.png");
	desertInfo = loadJSON("desertQualities.json");
	sun = loadImage("Sun.png");

	antarctic = loadImage("antarcticaLandscape.png");
	arctic = loadImage("arcticLandscape.png");
	arabian = loadImage("arabianLandscape.png");
	gobi = loadImage("gobiLandscape.png");
	saharan = loadImage("saharanLandscape.png");
	cloud1 = loadImage("cloud1.png");
	cloud2 = loadImage("cloud2.png");
	cactus1 = loadImage("cactus1.png");
	cactus2 = loadImage("cactus2.png");
	graphBackground = loadImage("graphBackground.png");

	logo = loadImage("saskiaLogo.png");
	camelLogo = loadImage("camelDesign.png");

	csv = loadTable("desertSizeInfo.csv", "header");
}

function setup() {
	createCanvas(1500, 600);
	background(0);
	initialization();
	frameRate(10);

	for (let i = 0; i < numberOfDeserts; i++) {
		locationX[i] = random(0 + (i * 300), 250 + (i * 200));
	}
	for (let j = 0; j < numberOfDeserts; j++) {
		locationY[j] = random(height - 500, height - 200);
	}

	instructionsForDesertMap();
}

function draw() {
	if (screen === 0) {
		mainScreen();
	} else if (screen === 1) {
		selectingDesert();

		let desertLandscapes = [antarctic, arctic, arabian, gobi, saharan];
	} else if (screen === 2) {
		statistics();
	} else if (screen === 3) {
		statistics();
	} else if (screen === 4) {
		statistics();
	} else if (screen === 5) {
		statistics();
	} else if (screen === 6) {
		statistics();
	} else if (screen === 7) {
		desertAreasGraph();
	}
}

function mainScreen() {
	fill(255);
	textSize(40);
	stroke(0);
	strokeWeight(5);
	text('PRESS MOUSE TO USE DESERT', width / 3.5, (height / 2) - 60);
	text('TEMPERATURE MAP', width / 2.75, (height / 2) - 10);
	text('READ CONSOLE FOR INSTRUCTIONS', width / 3.75, height - 235);

	strokeCap(ROUND);
	strokeJoin(MITER);
	stroke(255, 200, 46);
	strokeWeight(10);
	beginShape();
	vertex(100, 0);
	vertex(200, 100);
	vertex(300, 0);
	vertex(100, 0);
	fill(255, 200, 46);
	endShape();

	beginShape();
	vertex(300, 0);
	vertex(400, 100);
	vertex(500, 0);
	vertex(300, 0);
	fill(255, 200, 46);
	endShape();

	beginShape();
	vertex(500, 0);
	vertex(600, 100);
	vertex(700, 0);
	vertex(500, 0);
	fill(255, 200, 46);
	endShape();

	beginShape();
	vertex(700, 0);
	vertex(800, 100);
	vertex(900, 0);
	vertex(700, 0);
	fill(255, 200, 46);
	endShape();

	beginShape();
	vertex(900, 0);
	vertex(1000, 100);
	vertex(1100, 0);
	vertex(900, 0);
	fill(255, 200, 46);
	endShape();

	beginShape();
	vertex(1100, 0);
	vertex(1200, 100);
	vertex(1300, 0);
	vertex(1100, 0);
	fill(255, 200, 46);
	endShape();

	beginShape();
	vertex(1300, 0);
	vertex(1400, 100);
	vertex(1500, 0);
	vertex(1300, 0);
	fill(255, 200, 46);
	endShape();

	strokeCap(PROJECT);
	beginShape();
	stroke(255, 200, 46);
	strokeWeight(20);
	vertex(400, 425);
	vertex(1125, 425);
	endShape();

	strokeCap(PROJECT);
	beginShape();
	stroke(255, 195, 30);
	strokeWeight(15);
	vertex(500, 475);
	vertex(1025, 475);
	endShape();

	strokeCap(PROJECT);
	beginShape();
	stroke(255, 180, 20);
	strokeWeight(10);
	vertex(600, 515);
	vertex(925, 515);
	endShape();

	strokeCap(PROJECT);
	beginShape();
	stroke(255, 160, 10);
	strokeWeight(10);
	vertex(700, 545);
	vertex(825, 545);
	endShape();

	logo.resize(600, 300);
	image(logo, 1200, height / 2 - 100);
	camelLogo.resize(400, 200);
	image(camelLogo, 150, height / 2 - 50);
}

function mousePressed() {
	screen = 1;
}

function selectingDesert() {
	strokeWeight(0);
	desertLine();

	movementOfSun();
	// Drawing the sun so that it rises in the east and sets in the west

	printDesertsAndTitle();

	cactus1.resize(200, 200);
	cactus2.resize(400, 200);
	image(cactus1, 300, 150);
	image(cactus1, 1400, height - 175);
	image(cactus2, 1000, height - 160);

	cloud1.resize(300, 100);
	cloud2.resize(300, 100);
	image(cloud1, 500, 0);
	image(cloud2, 900, 10);
	image(cloud1, 1200, -10);
	image(cloud2, 100, 15);

	image(fifteenImages[index], Cx, Cy);
	imageMode(CORNER);
	index = (index + 1) % (fifteenImages.length);
}

function instructionsForDesertMap() {
	print('Step 1: Navigate the camel to the image of the desert you would like to see information about using the arrow keys');
	print('Step 2: Once the camel is standing over the selected desert, press the number that corresponds with the desert');
	print('Step 3: A new page will open and you will be able to get information about the logitutde, latitude, time zone, yearly average day and night temperatures, and average yearly rainfall');
	print('Step 4: If you want to return to desert selecting, click on the r/R button');
	print('Step 5: Repeat steps 1-4 as much as you want to see all the possible information in the game');
	print('Step 6: Press on the s/S button to open a graph that gives information comparing the sizes of the deserts present in this app');
}

function initialization() {
	textSize(36);
	for (let i = 0; i < spriteDataFile.length; i++) {
		row = spriteDataFile[i].split(",");
		fifteenImages[i] = spriteSheet.get(row[1], row[2], row[3], row[4]);
	}
}

function desertLine() {
	background(64, 205, 225);
	noFill();
	stroke(0);

	fill(240, 191, 0);
	beginShape();
	for (let x = 0; x < width; x++) {
		let y = noise(x * 0.01, frameCount * 0.005) * 250;
		vertex(x, y + 20);
	}
	vertex(width, height);
	vertex(0, height);
	endShape();
}

function movementOfSun() {
	ang = (ang - 1) % 180;
	let pt = polar(300, ang);
	image(sun, width / 2 + pt.x, (height / 2 + pt.y) - 175);
}

function polar(r, theta) {
	let dt = radians(theta);
	let x = 2 * r * cos(dt);
	let y = 0.5 * r * sin(dt);
	return createVector(x, y);
}

function printDesertsAndTitle() {

	image(antarcticDesert, locationX[0], locationY[0], 500, 200);
	image(arcticDesert, locationX[1], locationY[1], 400, 200);
	image(arabianDesert, locationX[2], locationY[2], 500, 200);
	image(gobiDesert, locationX[3], locationY[3], 500, 200);
	image(saharaDesert, locationX[4], locationY[4], 500, 200);

}

function statistics() {

	let desertLandscapes = [antarctic, arctic, arabian, gobi, saharan];
	for (let i = 0; i < 5; i++) {
		image(desertLandscapes[index - 1], 0, 0);
	}

	fill(0);
	textSize(50);
	text(desertInfo.desertName[index - 1], width / 2.4 - 50, 75);
	textSize(30);
	text("The longitude and latitude are " + desertInfo.lon[index - 1] + " and " + desertInfo.lat[index - 1], 200, 175);
	text("Meaning that the cordinates of the " + desertInfo.desertName[index - 1] + " are: " + desertInfo.lon[index - 1] + ", " + desertInfo.lat[index - 1], 200, 250);
	text("The " + desertInfo.desertName[index - 1] + " is in this time zone: " + desertInfo.timezone[index - 1], 200, 325);
	text("The average yearly temperature is: " + desertInfo.yearlyAverage.temperature[index - 1], 200, 400);
	text("The average yearly rainfall is: " + desertInfo.yearlyAverage.weather[0].rainfall[index - 1], 200, 475);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Cy -= 25;
	} else if (keyCode === DOWN_ARROW) {
		Cy += 25;
	} else if (keyCode === LEFT_ARROW) {
		Cx -= 25;
	} else if (keyCode === RIGHT_ARROW) {
		Cx += 25;
	}
	if (key >= 1 & key <= 5) {
		index = int(key);
		screen = index + 1;
	}
	if (key === 'r' || key === 'R') {
		screen = 1
	}
	if (key === 's' || key === 'S') {
		screen = 7
	}
}

function desertAreasGraph() {
	background(graphBackground);
	let areasOfDeserts = [0, 0, 0, 0, 0];

	const desertsToIndex = {
		"Antarctic": 0,
		"Arctic": 1,
		"Arabian": 2,
		"Gobi": 3,
		"Saharan": 4,
	};

	for (let i = 0; i < csv.getRowCount(); i++) {
		let areaOfDesert = csv.getNum(i, "Area");
		let desertName = csv.getString(i, "Desert");
		let desertIndex = desertsToIndex[desertName];
		if (desertIndex !== undefined) {
			areasOfDeserts[desertIndex] += areaOfDesert;
		}
	}

	let deserts = ["Antarctic", "Arctic", "Arabian", "Gobi", "Saharan"];
	let barSpacing = 50;
	let barHeight = 75;

	for (let i = 0; i < areasOfDeserts.length; i++) {
		let areaOfDesert = areasOfDeserts[i];
		let desertName = deserts[i];

		let barx = 100;
		let bary = 25 + (i * (barHeight + 30));
		let textLocationX = 30;
		let textLocationY = bary + barHeight / 2;
		let lengthOfBar = map(areaOfDesert, 0, 14.1, 0, width - 300);
		let desertNameX = barx + textLocationX + 15;
		// location of desertNameY is the same as just 'bary'

		fill(0, 111, 255, 145 + (20 * i));
		rect(desertNameX, bary, lengthOfBar, barHeight);
		textSize(28);
		text(desertName, textLocationX, textLocationY); 
		textSize(20);
		text(int(areaOfDesert), desertNameX + lengthOfBar + 10, textLocationY);
		textSize(40);
		fill(0);
		text("Land Mass Areas Of The 5 Deserts", width - 800, height/2 - 25);
		text("(in Millions of KM^2)", width - 675, height/2 + 25);
	}
}