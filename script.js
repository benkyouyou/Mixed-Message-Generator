const messageElements = [
    ['You','I','We','Humanity'],
    ['Will','Must', 'Should'],
    ['Be better today','Stop being afraid of the Future. Everything will be alright.','Not be afraid of life. Believe that life is worth living','Choose to be Happy', 'Choose kindness over Conflict']
];

const makeRandomMessage = () => {
    let randomMessage = [];
    for ( let messagePiece of messageElements ){
        let randomIndex = Math.floor(Math.random() * messagePiece.length);
        randomMessage.push(messagePiece[randomIndex]);
    }
    return randomMessage;
};