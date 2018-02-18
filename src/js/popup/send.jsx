import React from "react";
import golos from "../wallet";

export default class MyComp extends React.Component {
  constructor(opts) {
    super(opts);

    this.state = {
      balance: golos.balance.balance.split(" ")[0],
      recepient: "",
      amount: "",
      message: ""
    };
  }

  handleField(field, e) {
    const val = e.target.value;

    this.setState(state => ({
      ...state,
      [field]: val
    }));
  }

  onSendClick = () => {
    this.onTrySend(this.state.recepient, this.state.amount);
  };

  onTrySend = (recepient, amount) => {
    this.setState(state => ({
      ...state,
      message: "Sending TX ..."
    }));

    golos
      .sendTransaction(recepient, amount)
      .then(() => {
        golos.loadHistory();
        golos.loadBalance();

        console.log(golos.balance.balance);

        this.setState(state => ({
          ...state,
          message: "Success",
          balance: golos.balance.balance.split(" ")[0]
        }));
      })
      .catch(() => {
        this.setState(state => ({
          ...state,
          message: "Failed"
        }));
      });
  };

  onBackClick = () => {
    if (this.props.onBack) {
      this.props.onBack();
    }
  };

  get message() {
    return this.state.message;
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          height: "500px",
          width: "360px",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px 0px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "500px",
            width: "360px",
            top: "0px",
            left: "0px",
            boxSizing: "border-box",
            borderRadius: "0px",
            background:
              "linear-gradient(0deg, rgb(200, 221, 126), rgb(200, 221, 126))"
          }}
        />
        <svg
          style={{
            position: "absolute",
            height: "120px",
            width: "360px",
            top: "35px",
            left: "0px",
            boxSizing: "border-box",
            opacity: "0.537591",
            fillRule: "evenodd",
            fill: "rgb(153, 191, 15)"
          }}
        >
          <path d="M0,0L360,0L360,155L0,155L0,0ZM44,90.4688C62.2254,90.4688 77,76.1559 77,58.5C77,40.8441 62.2254,26.5313 44,26.5313C25.7746,26.5313 11,40.8441 11,58.5C11,76.1559 25.7746,90.4688 44,90.4688Z" />
        </svg>
        <svg
          style={{
            position: "absolute",
            height: "5px",
            width: "9px",
            top: "17px",
            left: "75px",
            boxSizing: "border-box",
            fillRule: "evenodd",
            fill: "rgb(52, 64, 33)"
          }}
        >
          <path d="M4.5,5L0,0L9,0L4.5,5Z" />
        </svg>
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "10px",
            left: "25px",
            overflow: "hidden",
            fontSize: "11.04px",
            whiteSpace: "nowrap"
          }}
        >
          Golos.io
        </span>
        <div
          style={{
            position: "absolute",
            height: "13px",
            width: "24px",
            top: "12px",
            left: "318px"
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "3px",
              width: "24px",
              top: "0px",
              left: "0px",
              boxSizing: "border-box",
              borderRadius: "2.5px",
              background:
                "linear-gradient(0deg, rgb(106, 140, 31), rgb(106, 140, 31))"
            }}
          />
          <div
            style={{
              position: "absolute",
              height: "3px",
              width: "24px",
              top: "5px",
              left: "0px",
              boxSizing: "border-box",
              borderRadius: "2.5px",
              background:
                "linear-gradient(0deg, rgb(106, 140, 31), rgb(106, 140, 31))"
            }}
          />
          <div
            style={{
              position: "absolute",
              height: "3px",
              width: "24px",
              top: "10px",
              left: "0px",
              boxSizing: "border-box",
              borderRadius: "2.5px",
              background:
                "linear-gradient(0deg, rgb(106, 140, 31), rgb(106, 140, 31))"
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            height: "66px",
            width: "66px",
            top: "82px",
            left: "39px",
            display: "none",
            boxSizing: "border-box",
            borderRadius: "50%",
            background:
              "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255))"
          }}
        />
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "72px",
            left: "91px",
            overflow: "hidden",
            fontSize: "19.04px",
            width: "79px"
          }}
        >
          {golos.balance.name}
        </span>
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "66px",
            left: "210px",
            overflow: "hidden",
            fontSize: "25.04px",
            width: "90px"
          }}
        >
          {this.state.balance}
        </span>
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "75px",
            left: "294px",
            overflow: "hidden",
            fontSize: "15.04px",
            width: "66px"
          }}
        >
          golos
        </span>
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "174px",
            left: "91px",
            overflow: "hidden",
            fontSize: "19.04px",
            width: "193px"
          }}
        >
          SEND TRANSACTION
        </span>
        <div
          style={{
            position: "absolute",
            height: "83px",
            width: "314px",
            top: "212px",
            left: "16px"
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "35px",
              width: "101px",
              top: "48px",
              left: "212px",
              boxSizing: "border-box",
              borderRadius: "4px",
              background:
                "linear-gradient(0deg, rgb(106, 140, 31), rgb(106, 140, 31))"
            }}
          />
          <input
            style={{
              position: "absolute",
              height: "35px",
              width: "314px",
              top: "0px",
              left: "0px",
              boxSizing: "border-box",
              border: "0.5px solid rgb(52, 64, 33)",
              borderRadius: "4px",
              background:
                "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255))",
              fontSize: 16
            }}
            placeholder="recepient"
            value={this.state.recepient}
            onChange={this.handleField.bind(this, "recepient")}
          />
          <input
            style={{
              position: "absolute",
              height: "35px",
              width: "193px",
              top: "48px",
              left: "0px",
              boxSizing: "border-box",
              border: "2px solid rgb(174, 205, 66)",
              borderRadius: "4px",
              background:
                "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255))",
              fontSize: 16
            }}
            placeholder="amount"
            value={this.state.amount}
            onChange={this.handleField.bind(this, "amount")}
          />
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "53px",
              left: "239px",
              overflow: "hidden",
              fontSize: "19.04px",
              width: "54px",
              cursor: "pointer"
            }}
            onClick={this.onSendClick}
          >
            NEXT
          </span>

          <span
            style={{
              display: "block",
              position: "absolute",
              top: "153px",
              left: "139px",
              overflow: "hidden",
              fontSize: "19.04px",
              width: "54px",
              cursor: "pointer"
            }}
            onClick={this.onBackClick}
          >
            BACK
          </span>
        </div>
        <div
          style={{
            display: "block",
            position: "absolute",
            top: "430px",
            left: "140px",
            overflow: "hidden",
            fontSize: "19.04px"
          }}
        >
          {this.message}
        </div>
      </div>
    );
  }
}
