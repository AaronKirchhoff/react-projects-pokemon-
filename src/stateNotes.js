import React, {Component} from 'react';


class Game extends Component {
    constructor() {
        // writing super means that we run this constuctor method with help from react. you need super to tell this class it has a react constructor, not just a reagualr constructor.
        super();
        console.log("Hello React!!!!!");
    }
}

Game();

class Game2 extends Component {
    constructor() {
        super(props);
        console.log("ok try this then.")
    }
}