/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import { TProducts } from "./home";

export type TPageSection = {
  items: TProducts[];
  title: string;
  hasNavBtn?: boolean;
  navBtnItems?: Array<string>;
  layoutClassName?: string;
};
