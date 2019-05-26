import React from "react";
import ProfileSummary from "./components/profile-summary";
import ProfessionalExperience from "./components/professional-experience";
import Projects from "./components/projects";
import AcademicDetails from "./components/academic-details";
import Achievements from "./components/achievement";
import ProfileName from "./components/profile-name";
import ContactDetails from "./components/contact-details";
import ProfileImage from "./components/profile-image";
import SocialMediaLinks from "./components/social-media-links";
import FacebookComments from "./components/facebook-comments";

export default class Home extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div>
        <div className="container" ref="Container">
          <div className="App">
            <div className="row">
              <div className="col-sm-4 bg-light-extra text-secondary">
                <ProfileImage data={data.picture} />
                <ContactDetails data={data.contact} />
                <hr className="bg-white" />
                <ProfessionalExperience data={data.professionalexperience} />
              </div>
              <div className="col-sm-8 bg-white ">
                <ProfileName data={data.name} />
                <div className="right-panel text-secondary">
                  <hr />
                  <ProfileSummary data={data.summary} />
                  <hr />
                  <Projects data={data.projects} />
                  <hr />
                  {/* <AcademicDetails data={data.academic} />
                  <hr /> */}
                  <Achievements data={data.achievements} />
                </div>
                <SocialMediaLinks data={data.social} />
                <FacebookComments />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
