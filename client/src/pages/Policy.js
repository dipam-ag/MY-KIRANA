import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        www.mysite.com uses www.opentracker.net to collect visitor data and analyze traffic on our site. This information helps us understand customer interests and helps us improve our website. When you visit our site, the pages that you look at, and a short text file called a cookie, are downloaded to your computer. A cookie is used to store small amounts of information. This information is collected for traffic analysis only. The cookie does not contain personal details. Depending on the browser that you use, you can set your preferences to block/ refuse cookies, and/ or notify you before they are placed. Opentracker does not sell, give, or trade the statistics they store to any 3rd parties for data-mining or marketing purposes. Please visit www.opentracker.net for their privacy policy.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
