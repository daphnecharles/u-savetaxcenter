import React from "react";
import _ from "lodash";

import { Layout, Products } from "../components/index";

const headerStyles = {
  paddingTop: "4rem",
};

export default class ProductsPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="block-header inner-small" style={headerStyles}>
          <h2 className="block-title">Pay For Our Services Online</h2>
        </div>
        <Products />
      </Layout>
    );
  }
}
