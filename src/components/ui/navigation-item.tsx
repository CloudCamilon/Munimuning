/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @azaguirre
 */

import { cn } from "@/lib/utils";
import Link from "next/link";
import { JSX } from "react";

export const NavigationItem = ({
  title,
  selected,
  link,
}: {
  title: string;
  selected?: boolean;
  link: string;
}): JSX.Element => {
  return (
    <Link href={link}>
      <div
        className={cn("font-bold cursor-pointer text-sm", {
          underline: selected,
        })}
      >
        {title}
      </div>
    </Link>
  );
};
