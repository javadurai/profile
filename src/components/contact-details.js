import React from "react";

export default class ContactDetails extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div class="card mb-3 bg-light">
        <div class="card-body text-center">
          <div className="Address">
            <h2 className="text-uppercase text-main text-underlined">
              Contact
            </h2>
            <address>
              {data.address.map(line => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
              <span>
                <a
                  className="text-secondary text-decoration-none"
                  href={"tel:" + data.mobile}
                >
                  <i class="fa fa-phone-square" /> {data.mobile}
                </a>
              </span>
              <br />
              <span>
                <a
                  className="text-secondary text-decoration-none"
                  href={"mailto:" + data.email}
                >
                  <i class="fa fa-envelope-square" /> {data.email}
                </a>
              </span>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
