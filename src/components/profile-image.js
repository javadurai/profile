import React from "react";
import ProfilePic from "../profile.png";

export default class ProfileImage extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="text-center mt-4 mb-4">
        <img
          src={ProfilePic}
          className="rounded-circle"
          height={320}
          width={320}
          alt="Jabadurai Selvaraj"
        />
      </div>
    );
  }
}
