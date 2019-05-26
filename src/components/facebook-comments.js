import React from "react";
import { FacebookProvider, Comments, Like, ShareButton } from "react-facebook";

export default class FacebookComments extends React.Component {
  render() {
    return (
      <FacebookProvider appId="2336732919871853">
        <Like
          href="https://www.facebook.com/Jabadurais-Resume-377891183070986"
          colorScheme="dark"
          showFaces
          share
        />
        <Comments href="https://www.facebook.com/Jabadurais-Resume-377891183070986" />
      </FacebookProvider>
    );
  }
}
