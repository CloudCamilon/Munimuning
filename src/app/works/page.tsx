/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */
import React from "react";

import { featuredWorks } from "@/constants";
import PageSection from "@/components/PageSection";

const Works = () => {
  return (
    <PageSection
      items={featuredWorks}
      title="WORKS"
      hasNavBtn
      navBtnItems={["Illustration & Design", "Stories & Comics", "Fine Art"]}
    />
  );
};

export default Works;
