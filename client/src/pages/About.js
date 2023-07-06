import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - My Kirana"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We are a grocery service company .our target is to deliver grocery at wholesale prices . You need not to go anywhere .
            Just open the app , order the product , we will get it delivered to you at the soonest and with the best price in the market.
            If there is any query regarding your order or product,feel free to consult our help desk. 
            Note : It usually takes 3 hours to process and deliver a product.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
