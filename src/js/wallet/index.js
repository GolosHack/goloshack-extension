import Golos from "golos-js";

console.log(Golos);

class GolosWallet {
  constructor() {
    this.isLogin = false;
  }

  login(user, pass) {
    this.user = user;

    this.keys = Golos.auth.getPrivateKeys(user, pass, [
      "owner",
      "active",
      "posting",
      "memo"
    ]);

    console.log(this.keys);

    return Promise.all([this.loadBalance(), this.loadHistory()]);
  }

  loadBalance() {
    return new Promise((resolve, reject) => {
      Golos.api.getAccounts([this.user], (err, result) => {
        this.balance = result[0];
        resolve(this.balance);
      });
    });
  }

  loadHistory() {
    return new Promise((resolve, reject) => {
      Golos.api.getAccountHistory(this.user, 20, 10, (err, result) => {
        this.history = result;
        resolve(this.history);
      });
    });
  }

  sendTransaction(to, amount) {
    return new Promise((resolve, reject) => {
      Golos.broadcast.transfer(
        this.keys.owner,
        this.user,
        to,
        `${amount} GOLOS`,
        this.keys.memo,
        function(err, result) {
          console.log(err, result);
          if (!err) {
            resolve(result);
            console.log("transfer", result);
          } else {
            reject(err);
            console.error(err);
          }
        }
      );
    });
  }
}

export default new GolosWallet();
