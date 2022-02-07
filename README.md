# Automation tests for the Multiplayer-Tic-Tac-Toe game

I've created automation tests to demonstrate how easy it is to simulate multiple players playing in real-time with the [Playwright](https://playwright.dev) framework.


## Test suite

- ✓  game.spec.js:4:3 › Tic Tac Toe › Cross should win (2s) 
- ✓  game.spec.js:27:3 › Tic Tac Toe › Circle should win (2s)
- ✓  game.spec.js:51:3 › Tic Tac Toe › The game should be drawn (1s)

# Two parallel independent browser sessions

| ![Cross](x.gif) |
| :-------------: |
| _Cross player_  |

| ![Circle](o.gif) |
| :--------------: |
| _Circle player_  |

# How to run locally

1. Install [Node.JS](http://nodejs.org/).
2. Clone the repository or download it.
3. Browse the project repository on your command prompt or terminal.
4. Run `npm install` to install dependencies defined in package.json.
5. Run `npx playwright test` to execute tests
6. Or run `npx playwright test --headed` to execute tests with open browsers

# Multiplayer-Tic-Tac-Toe Game

I tested here the [Tic-Tac-Toe Game](https://github.com/pranjalibajpai/Multiplayer-Tic-Tac-Toe) developed using Node.js, Express.js and Socket.io by [Pranjali Bajpai](https://github.com/pranjalibajpai) and all credits go to her.

## Enjoy! 😃
