import React from "react";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class MySpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={100}
          color={"#E40043"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
