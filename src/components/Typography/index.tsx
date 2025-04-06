/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo || @abzaguirre
 */

import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type TTypography = {
  className?: string;
};

export const Title = ({
  children,
  className,
}: PropsWithChildren<TTypography>) => {
  return (
    <h1 className={cn("font-bold text-2xl text-white", className)}>
      {children}
    </h1>
  );
};

export const Label = ({
  children,
  className,
}: PropsWithChildren<TTypography>) => {
  return (
    <label className={cn("font-bold text-base  text-white", className)}>
      {children}
    </label>
  );
};

export const LabelPrice = ({
  children,
  className,
}: PropsWithChildren<TTypography>) => {
  return (
    <label className={cn("font-normal text-xl text-white", className)}>
      {children}
    </label>
  );
};

export const SubLabel = ({
  children,
  className,
}: PropsWithChildren<TTypography>) => {
  return (
    <label className={cn("font-normal text-xs text-white", className)}>
      {children}
    </label>
  );
};
