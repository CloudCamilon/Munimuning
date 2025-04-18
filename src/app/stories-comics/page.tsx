/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import PageSection from "@/components/PageSection";
import { comicsItems } from "@/constants";
import React from "react";

const StoriesComics = () => {
  return (
    <PageSection
      items={comicsItems}
      title="Stories & Comics"
      layoutClassName="bg-[#141517]"
    />
  );
};

export default StoriesComics;
