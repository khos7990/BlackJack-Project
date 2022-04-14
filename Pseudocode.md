### CREATION OF THE GAME

- Creating all of the div's, the table div, the card divs (adding the images into the div containers), the game results and current players turn div

- Creating a restart button, quit button, hit and stay button

- Creating all of the combinations of the different cards using classes or an array of the different combinations (52 cards in a deck)

- Cards face value will be the number value of the card EX. 2 Hearts will be the value of 2

- Royal cards such as kings, queens, and jacks will be valued at 10

- Ace cards will be valued at either 1 or 11, player can choose if they want the value of the card to be either 1 or 11.

- Creating an initiate game function that will clear any cards from the table if there is any, and change the text to the default start of the game, and will animate a deal of two cards to the dealer and to the player

- A math.random method will be used to pick the card combinations for the dealer and the player

- Creating a seperate hit function that will animate a card everytime the hit me button is clicked or when the dealer is in need of another card

- Creating a stay function that will execute when the stay button is clicked, proceeding to the dealers turn

- Using the hit function for the dealer to animate cards until dealer has a total value of cards of 17 or higher, if the dealer has a value below 17. The function will still be called and the card animation will continue, cards will proceed towards the dealers hand facing upwards.

- If the player clicks on the "hit me" button, it will trigger an event listener, then a card animation will go into the players hand, facing up


### START OF THE GAME
- Player is given one card, dealer is given one card using the initiate function 

-Second card player receives will be faced up, second card dealer receives will be face down

- If the two cards that are received by the player have a value of 21 then the player wins that round, otherwise the player has the option of clicking the hit me or stay button

- The top area will present whether it is players one turn or the dealers turn

- If the player clicks on the stay button, the event listener will trigger to skip to the dealers turn, the dealers cards will be faced up, to determine who has won the round.

- If the dealer has the cards value of either 16 or below, another card must animate towards the dealers hand until hand is totalled to 17 or higher. If 17 or higher dealer must stay with their hand

-If the dealer busts, then the player wins the round, Player has the option to either restart, or quit the game.

- In other cases if the player chooses hit me, another card will be dealt to the player. If the hand is over 21 the player is bust, and player will have the option to either quit or restart the game, or if the player is still under 21 and clicks stay, then will trigger to proceed to the dealers turn

### END OF GAME
- Once the round is over, the top area will display the winner of the round, and the restart and quit button will be animated towards the center of the screen.

- If player clicks restart, a click event listener will trigger and will clear all the texts and card divs, and call the initiate function to animate the start of the game again, dealing the 2 cards to the player and the dealer.

- If the playerr clicks on quit, the page will showcase a div that says 'thank you for playing!'
