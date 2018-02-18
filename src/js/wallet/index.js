import Golos from "golos-js";

console.log(Golos);

class GolosWallet {
  constructor() {
    this.isLogin = false;
  }

  login(user, pass) {
    var keys = Golos.auth.getPrivateKeys(user, pass, [
      "owner",
      "active",
      "posting",
      "memo"
    ]);

    Golos.api.getAccounts([user], function(err, result) {
      console.log(result[0]);
    });

    Golos.api.getAccountHistory(user, 20, 10, function(err, result) {
      console.log(result);
    });
    console.log(keys);
  }
}

export default new GolosWallet();
