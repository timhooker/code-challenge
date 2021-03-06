# Code Challenge

## Explanation
My solutions to the below challenges are in this repository.

For challenge 1, I chose Python.
For challenge 2, I elected to use ruby, rails, and react.

## Code Exercise 1:
In a language of your choice write a program that will take a random integer as a parameter, then have the computer (your program) try to guess it. 

After each guess, you will tell the computer either h (too high), l (too low) or c correct.

The program should use the best possible strategy to minimize the number of guesses (it may be wise to use an existing search algorithm). 

It should never need more than 1 + log2 n guesses. For example, if n = 1000, then it should always be correct by the tenth guess. If n is any number 4 through 7 then it should take at most 3 guesses.
The program will start by printing a brief description of the rules of the game and asking for a number n.

Then it will guess at most 1 + log2 n numbers, after which you enter the letter h, l, or c and press ENTER. On the last guess, if there is only one possible correct answer, the program will simply print "your number is x" rather than ask for a response. 

After the program has guessed your number, it will print the number of guesses it took for this game (including the correct guess at the end), the number of games played, the average number of guesses per game, and ask if you want to play again. If you enter y (and ENTER) then the game repeats (with the same value of n). If you enter anything else, then the program exits. 

For example (Sample Input/Output):
Please enter a number n: 100
50? 
h25? l
37? l
43? h
40? h
38? l
Your number is 39.
It took me 7 guesses.
I averaged 7 guesses per game for 1 game(s).
Play again (y/n)? y
50? l
75? l
88? l
94? c
Your number is 94.
It took me 4 guesses.
I averaged 5.5 guesses per game for 2 game(s).
Play again (y/n)? N

## Code Exercise 2:

Using the language/framework of your choice, write a restful web service that has at least the two endpoints listed below:
GET - An endpoint that returns a list of cars (In valid Json format)
POST/PUT - An endpoint that updates a car’s attributes or adds a new car.
Each car has the following attributes:
Color
Make
Model
Year
ID (Needs to be unique)
All other design decisions are left up to the interviewee.
