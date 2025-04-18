/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */
import React from "react";

import { shopItems } from "@/constants";
import PageSection from "@/components/PageSection";

const Shop = () => {
  return (
    <PageSection items={shopItems} title="SHOP" layoutClassName="bg-black" />
  );
};

export default Shop;
