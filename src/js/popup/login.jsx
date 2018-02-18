import React from "react";

export default class MyComp extends React.Component {
  constructor(opts) {
    super(opts);

    this.state = {
      user: "user",
      pass: "pass"
    };
  }

  handleField(field, e) {
    const val = e.target.value;

    this.setState({
      [field]: val
    });
  }

  handleLogin() {
    if (this.props.onLogin) {
      this.props.onLogin(this.state.user, this.state.pass);
    }
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
        <div
          style={{
            position: "absolute",
            height: "231px",
            width: "248px",
            top: "202px",
            left: "56px"
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "35px",
              width: "116px",
              top: "196px",
              left: "75px",
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
              width: "209px",
              top: "100px",
              left: "19px",
              boxSizing: "border-box",
              border: "0.5px solid rgb(52, 64, 33)",
              borderRadius: "4px",
              background:
                "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255))",
              fontSize: 16
            }}
            value={this.state.user}
            onChange={this.handleField.bind(this, "user")}
          />
          <input
            style={{
              position: "absolute",
              height: "35px",
              width: "209px",
              top: "148px",
              left: "19px",
              boxSizing: "border-box",
              border: "0.5px solid rgb(52, 64, 33)",
              borderRadius: "4px",
              background:
                "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255))",
              fontSize: 16
            }}
            value={this.state.pass}
            onChange={this.handleField.bind(this, "pass")}
            type="password"
          />
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "202px",
              left: "94px",
              overflow: "hidden",
              fontSize: "19.04px",
              width: "79px",
              cursor: "pointer",
              textAlign: "center"
            }}
            onClick={this.handleLogin.bind(this)}
          >
            Login
          </span>
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "0px",
              left: "15px",
              overflow: "hidden",
              fontSize: "47.04px",
              whiteSpace: "nowrap"
            }}
          >
            MultyMask
          </span>
        </div>
        <svg
          style={{
            position: "absolute",
            height: "5px",
            width: "9px",
            top: "16px",
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
            top: "9px",
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
            height: "217px",
            width: "217px",
            top: "33px",
            left: "72px"
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "217px",
              width: "217px",
              top: "0px",
              left: "0px",
              display: "none",
              borderRadius: "50%",
              background:
                "linear-gradient(0deg, rgb(40, 100, 240), rgb(40, 100, 240))"
            }}
          />
          <svg
            style={{
              position: "absolute",
              height: "178px",
              width: "167px",
              top: "39px",
              left: "50px",
              display: "none",
              fillRule: "evenodd",
              fill: "rgb(0, 83, 191)"
            }}
          >
            <path d="M167,72.8564L94.3361,0L0,92.7978L43.4813,136.395L25.5839,140.893L34.0992,149.431L29.5037,149.627C29.5037,149.627 57.7906,177.989 57.7906,177.989C58.0631,177.992 58.3342,178 58.6071,178C117.304,178 165.103,131.247 167,72.8564Z" />
          </svg>
          <svg
            style={{
              position: "absolute",
              height: "136px",
              width: "103px",
              top: "25px",
              left: "57px",
              fillRule: "evenodd",
              fill: "rgb(255, 234, 58)"
            }}
          >
            <path d="M51.5,136C51.5,136 51.5,136 51.5,136C23.0574,136 0,112.984 0,84.592C0,84.592 0,51.408 0,51.408C0,23.0162 23.0574,0 51.5,0C51.5,0 51.5,0 51.5,0C79.9426,0 103,23.0162 103,51.408C103,51.408 103,84.592 103,84.592C103,112.984 79.9426,136 51.5,136Z" />
          </svg>
          <svg
            style={{
              position: "absolute",
              height: "136px",
              width: "52px",
              top: "25px",
              left: "108px",
              fillRule: "evenodd",
              fill: "rgb(255, 195, 11)"
            }}
          >
            <path d="M0.0205012,0C0.0205012,0 0.0205012,0 0.0205012,0C0.0136675,0 0.00683373,0.000422409 0,0.000422409C0,0.000422409 0,136 0,136C0.00683373,136 0.0136675,136 0.0200741,136C0.0200741,136 0.0200741,136 0.0200741,136C28.7277,136 52,112.984 52,84.592C52,84.592 52,51.408 52,51.408C52.0004,23.0158 28.7282,0 0.0205012,0Z" />
          </svg>
          <svg
            style={{
              position: "absolute",
              height: "23px",
              width: "28px",
              top: "75px",
              left: "95px",
              fillRule: "evenodd",
              fill: "rgb(255, 135, 0)"
            }}
          >
            <path d="M28,0.000431512L13.9794,23L0,0L28,0.000431512Z" />
          </svg>
          <svg
            style={{
              position: "absolute",
              height: "23px",
              width: "14px",
              top: "75px",
              left: "108px",
              fillRule: "evenodd",
              fill: "rgb(255, 124, 17)"
            }}
          >
            <path d="M14,0.000431512L0,0L0,22.9927L0,23L14,0.000431512Z" />
          </svg>
          <div
            style={{
              position: "absolute",
              height: "11px",
              width: "11px",
              top: "62px",
              left: "75px",
              borderRadius: "50%",
              background:
                "linear-gradient(0deg, rgb(77, 77, 77), rgb(77, 77, 77))"
            }}
          />
          <div
            style={{
              position: "absolute",
              height: "11px",
              width: "11px",
              top: "62px",
              left: "131px",
              borderRadius: "50%",
              background:
                "linear-gradient(0deg, rgb(51, 51, 51), rgb(51, 51, 51))"
            }}
          />
          <svg
            style={{
              position: "absolute",
              height: "60px",
              width: "13px",
              top: "75px",
              left: "48px",
              fillRule: "evenodd",
              fill: "rgb(255, 135, 0)"
            }}
          >
            <path d="M6.5,60C6.5,60 6.5,60 6.5,60C2.90996,60 0,57.0643 0,53.4426C0,53.4426 0,6.55742 0,6.55742C0,2.93609 2.90996,0 6.5,0C6.5,0 6.5,0 6.5,0C10.0896,0 13,2.93566 13,6.55742C13,6.55742 13,53.4426 13,53.4426C13,57.0643 10.09,60 6.5,60Z" />
          </svg>
          <svg
            style={{
              position: "absolute",
              height: "60px",
              width: "13px",
              top: "75px",
              left: "156px",
              fillRule: "evenodd",
              fill: "rgb(255, 124, 17)"
            }}
          >
            <path d="M6.5,60C6.5,60 6.5,60 6.5,60C2.91038,60 0,57.0643 0,53.4426C0,53.4426 0,6.55742 0,6.55742C0,2.93609 2.90996,0 6.5,0C6.5,0 6.5,0 6.5,0C10.0896,0 13,2.93566 13,6.55742C13,6.55742 13,53.4426 13,53.4426C13,57.0643 10.0896,60 6.5,60Z" />
          </svg>
          <div
            style={{
              position: "absolute",
              height: "42px",
              width: "42px",
              top: "113px",
              left: "67px",
              transform: "rotate(-180deg)"
            }}
          >
            <svg
              style={{
                position: "absolute",
                height: "40px",
                width: "18px",
                top: "1px",
                left: "12px",
                transform: "rotate(-315deg)",
                fillRule: "evenodd",
                fill: "rgb(255, 135, 0)"
              }}
            >
              <path d="M18.0678,0L9.10856,0L9.10856,19.1131L0,19.1131L0,28.0723L7.83728,28.0723L3.598,36.0691L11.5142,40.2656L18.0845,28.0723L18.0678,0Z" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              height: "42px",
              width: "42px",
              top: "113px",
              left: "109px",
              transform: "rotate(-180deg) matrix(-1, 0, 0, 1, 0, 0)"
            }}
          >
            <svg
              style={{
                position: "absolute",
                height: "40px",
                width: "18px",
                top: "1px",
                left: "12px",
                transform: "rotate(-315deg)",
                fillRule: "evenodd",
                fill: "rgb(255, 135, 0)"
              }}
            >
              <path d="M18.0678,0L9.10856,0L9.10856,19.1131L0,19.1131L0,28.0723L7.83728,28.0723L3.598,36.0691L11.5142,40.2656L18.0845,28.0723L18.0678,0Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
