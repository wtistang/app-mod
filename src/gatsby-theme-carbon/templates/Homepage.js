import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud-data.jpg';

const FirstLeftText = () => <p>What is IBM App Mod Workshop?</p>;

const FirstRightText = () => (
  <p>
     IBM App Mod Workshop focuses on the solutions for app modernization and move to cloud journey. This lab series walk you through different end-to-end app modernization and DevOps solutions and show how to create native cloud app or move the existing WebSphere workload to cloud, using technologies including Docker, Kubernetes, OpenShift, Liberty, Transformation Advisor, and Cloud Native Toolkit.

  </p>
);

const SecondLeftText = () => <p>IBM Cloud Paks</p>;

const SecondRightText = () => (
  <p>
    IBM Cloud™ Paks are enterprise-ready, containerized software solutions that give clients an open, faster and more secure way to move core business applications to any cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const BannerText = () => <h1>IBM App Mod Workshop</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
