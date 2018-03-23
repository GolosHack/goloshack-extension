import React from "react";
import moment from "moment";

import golos from "../wallet";

export default class MyComp extends React.Component {
  onSendClick = () => {
    if (this.props.onSend) {
      this.props.onSend();
    }
  };

  transactions() {
    const history = golos.history.slice().reverse();

    return history.map(([key, trans], idx) => {
      return (
        <tr key={idx}>
          <td>{moment(trans.timestamp).format()}</td>
          <td>
            <div>{trans.op[0]}</div>
            <div>
              {trans.op[1].from} -> {trans.op[1].to}
            </div>
          </td>
          <td>{trans.op[1].amount}</td>
          <td>{trans.op[1].memo}</td>
        </tr>
      );
    });
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
            height: "155px",
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
          {golos.balance.balance.split(" ")[0]}
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
        <div
          style={{
            position: "absolute",
            height: "26px",
            width: "66px",
            top: "146px",
            left: "268px",
            boxSizing: "border-box",
            borderRadius: "4px",
            background:
              "linear-gradient(0deg, rgb(106, 140, 31), rgb(106, 140, 31))"
          }}
        />
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "148px",
            left: "285px",
            overflow: "hidden",
            fontSize: "15.04px",
            width: "33px"
          }}
          onClick={this.onSendClick}
        >
          send
        </span>
        <div
          style={{
            position: "absolute",
            top: "210px",
            left: "10px",
            height: "290px",
            width: "340px",
            overflowY: "auto"
          }}
        >
          <table>
            <tbody>{this.transactions()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
