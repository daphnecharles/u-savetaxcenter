import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";
import favicon from "../../favicon.ico";

import { safePrefix } from "../utils";
import Header from "./Header";
import Footer from "./Footer";

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {_.get(this.props, "pageContext.frontmatter.title") &&
              _.get(this.props, "pageContext.frontmatter.title") + " - "}
            {_.get(this.props, "pageContext.site.siteMetadata.title")}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="google" content="notranslate" />
          <meta
            name="description"
            content={_.get(
              this.props,
              "pageContext.site.siteMetadata.description"
            )}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i"
            rel="stylesheet"
          />
          <link rel="stylesheet" href={safePrefix("assets/css/main.css")} />
          <link rel="icon" type="image/png" href={favicon} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <div
          id="page"
          className={
            "site palette-" +
            _.get(this.props, "pageContext.site.siteMetadata.palette")
          }
        >
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
