# Desert-Map

Description: 

With this project, I created a desert display game that showcases the different deserts in the world. When the game loads, it shows a black splash screen with instructions on how to start the game within the console. When the game loads you shall see a desert with a rotating sun and camel and desert icons. You are to use the arrow keys to move the camel to each of the desert icons in random locations on the screen. Once the camel is on top of the desert icon, press the number on your keyboard and you shall be able to see weather data of each of the different deserts. Pressing R will bring you back to the game screen to discover all of the weather data corresponding to 5 of the biggest deserts in the world. And press the S key to see the graphs of the desert data.


Inspiration: 

My inspiration for this was actually a game that I used to play when I was a kid online. It was a Dora desert game that I used to play. It was a game where Swiper travelled through the desert to chase Dora and her friend Boots. So I wanted to create something similar by having the player travel the desert but instead, through the concepts of p5js, travel to see the world's deserts and learn more about them through a visual perspective. 


Instructions:

To start the game, you must press your mouse to begin the game. 

Click the console to see the printed instructions on how to play the game. 

Move the camel using the arrow keys to move it on top of the desert image you would like to visit first. 

Once you have moved the camel to stand directly on top of the desert image, press the number key corresponding to the number shown on the desert image. 

When you press the key number (1, 2, 3, or 4), it will show the weather data of the desert location you selected with a background image of the desert. 

When you want to go back to the desert loading screen, press the ‘r’ key, and it will reset the positions of the desert icons to be at a random location within the desert. 

If you want to see data graphs of the desert, press the ‘s’ key, and it will show a horizontal bar graph of the data 


Topics:

Random and Noise: First off, I used random and noise in my project. For the random aspect of the project, I wanted to emulate the feeling of playing the dora and diego game from when I was a kid. In that game, Swiper would be placed randomly throughout the board and so, I thought that I would do the same with the 5 different deserts. In my project, I used the random function in order to randomize the location of the different desert images on the board. I placed the random functions for the x and y locations of the images using for loops. For each iteration in the for loop, I changed the range of the random function so that each image has their own “vertical lane” to minimize the chance of the images overlapping. I used the noise function to make the desert line to show the landscape of the horizon and the differentiation with the blue sky. Within the function, I manipulated the variables so that the x variable  of the noise is as small as possible so that the line isn’t spiking up and down a lot. Since the x of the noise is smaller, it will make the line look like a desert landscape. As for the y of the noise function, I also made it small because the framerate goes into the y portion. Making the framerate smaller will cause the line created by the noise function to move around at a much slower rate. This slower rate gives the desert the feeling that the sand is moving up and down, right to left while the wind blows on the sand in the desert.


Advanced Shapes: Second, I used a lot of advanced shapes in order to make the entire look of the game look better. For example, on the splash screen, I used advanced shapes to create the chain of triangles at the top of the page as well as the lines that are progressively getting smaller as the lines move down the screen. However, the most important use of the advanced shapes was when I used the polar function in order to rotate the sun image that I imported. Instead of rotating 360 degrees around the point, I manipulated the values so that I changed the angle from 360 to 180. This was a very important element to the game because the sun emulates the rising and falling of the sun on a daily basis in the game. The sun starts in the east (right side of the screen), and the sun would set after traveling 180 degrees counterclockwise to the west side of the screen (left side of the screen). 


JSON: Third, I used both JSON and a csv file that I made in Microsoft excel. For both of these files, I first loaded them into the openProcessing sketch and then I used loadJSON and loadTable in order to preload the JSON and csv files into the game. For the JSON file, I uploaded the desertQualities. JSON file and with the Table, I uploaded the desertSizeInfo.csv. For the desertQualities.JSON file, I used it to extract information so that I could use it to build screens that held information about the longitude, latitude, temperature, rainfall, and the desert names. Then, I used this information that I pulled from the JSON files in the screens that I built for each of the deserts. Then, I added text and inserted the information that I pulled from the JSON file and set it equal to new variables. As for the text file, I had similar information but also had information about the length, width, and area of the deserts. Similar to the JSON file, I pulled information from the table by using .getNum and .getString combined with for loops in order to access specific spots in the table and then using .getNum and getString at those spots, pulling those pieces of information out and creating arrays of data with them. This information would then be imputed into a creating horizontal bar graph and shows the comparison between the sizes of the different deserts in bar graph form.


Arrays: Fourth, I used a lot of arrays throughout the game. Overall, though, I used a total of 5 different types of arrays: empty arrays, arrays with zeros for a set number of indexes,updating values for an array, filled out arrays,  and finally calling array values back to use the information in the arrays. Firstly, the first three types of arrays that I mentioned that I’d used in the project are pretty correlated to one another. First off, the empty arrays and arrays with zeros are both ways that I initialized arrays. For the empty arrays, they were kept empty because I didn't know how many rows I would need and so I used another type of array which was updating the values of the array. This was done with the help of for loops as I was able to iterate through the file until there was nothing left and input values for each index of the array. Through this, I was able to update my initially empty array to contain values from different files. This was different when I used an array with a set amount of zeros because in this case, I knew how many values I was expecting as the info was stored in another variable and just had to be moved into an array. This, I used a for loop to iterate through the data and then every iteration would allow me to add a number to the 0 that was in the index spot of the array that needed to be changed, thus updating the values from 0 to whatever the number is. Finally, I used the arrays to store values, as I mentioned above. This is important because the information that gets stored is able to be called to use later by using “array[index].” This was important to my code because I was both able to store all related information into one array, and also allowed me to have now to store a lot of variables, one for each piece of data.


Inputs and Outputs: Finally, for my last topic, I chose to use inputs and outputs. On the basic standpoint, I used inputs and outputs in the sense that I got different strings from the JSON files and the csv files and then printed them out for my different screens that contain the information from the files. This means that I imputed the different files and then outputted the information that are in the files to display to the user playing the game. Another way that I used sprites for the camel. This was used in order to emulate the movement of the camels. This creates a more realistic image of the camel walking as you press the arrow keys (up, down, right, and left). Through using this sprite, I was able to create a realistic movement of the camel rather than simply moving an image up and down and not having the camel move at all. Having simply the image of the camel move around is unrealistic and I would have been simply translating the image rather than having an image that actually looks like it’s moving.
