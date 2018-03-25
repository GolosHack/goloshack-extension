export default class BitWeb {

    constructor({ stream }) {
        this.stream = stream;
    }

    isAuth() { }
    getUser() { }
    sendTransaction(to, amount) {
        this.stream.write({
            type: 'send_tx',
            payload: {
                to, amount
            }
        })
    }
    sendVote(to) { }
}