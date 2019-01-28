import React from "react";

import Layout from "@/components/layout";

class Home extends React.Component {
  render() {
    return (
      <div className="HomeContent">
        <Layout name="that's Layout">
          <div>
            <h1>this is Layout content</h1>
            <div>content</div>
          </div>
        </Layout>
        <div>this is home page</div>
      </div>
    )
  }
}
export default Home