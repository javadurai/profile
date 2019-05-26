import React from "react";
import DownloadProfileBtn from "./download-profile-btn";

export default class ProfileName extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div>
        <div className="float-left col-sm-11">
          <div className="text-center">
            <h1 className="display-4">
              <span class="profile-name text-main text-uppercase">
                {data.firstname} {data.lastname}
              </span>
            </h1>
          </div>
        </div>
        <div className="float-right col-sm-1">
          <DownloadProfileBtn />
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
