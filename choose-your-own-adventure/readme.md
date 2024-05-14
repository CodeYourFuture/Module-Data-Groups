## Creating a Choose Your Own Adventure Game

<!--```objectives
- Create and manipulate objects
- Describe how methods work in JavaScript objects
- Use properties to store state in an object
```-->

### Introduction

Create a "Choose Your Own Adventure" game using an object. In these kind of games, the player is in a room and can move to other rooms to the north, east, south or west.

To start the game, run this file with Node. Depending on your current directory, run one of:

```bash
node 1-choose-your-own-adventure.js
node 3-extra/1-choose-your-own-adventure.js
```

To stop the game, press `Ctrl-C`.

To run the tests for the game, run this file with `npm test`

```bash
npm test -- --testPathPattern choose-your-own-adventure.js
```

### Building the Game

Your game object will have a `currentRoom` property to store which room the player is in.

Give your object methods for:

- Starting the game in the correct room when passed a room name parameter
- Moving the player to another room when passed a direction parameter

## `roomName()`

`roomName` is called with the name of the room that the player wants to start in.

Finish the function so that the currentRoom property is set to the room object for the correct room.

Hint: the only valid rooms are "hall", "classroom" and "library".

## `direction()`

This function is called with the direction that the player wants to move.

Finish the function so that the currentRoom property is updated with new room in the direction that the player wants to move in.

Hint: the room objects have north/east/south/west methods. Each method returns a new room object in that direction.

```js
let game = {
  currentRoom: null,

  start: function (roomName) {
  },

  move: function (direction) {}
  },
};
```
