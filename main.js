const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let questions = [];

function preload() {
    this.load.json('quizData', 'questions.json');
}

function create() {
    questions = this.cache.json.get('quizData');
    this.add.text(100, 100, 'First Question:', { font: '24px Arial', fill: '#ffffff' });
    this.add.text(100, 150, questions[0].question, { font: '20px Arial', fill: '#ffff00' });
}

function update() {}

const game = new Phaser.Game(config);
