/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type TTypography = {
  className?: string;
  onClick?: () => void;
};

export const SectionLabel = ({
  children,
  className,
  onClick,
}: PropsWithChildren<TTypography>) => {
  return (
    <label
      className={cn("font-bold text-[2rem] text-white", className)}
      onClick={onClick}
    >
      {children}
    </label>
  );
};

export const Title = ({
  children,
  className,
  onClick,
}: PropsWithChildren<TTypography>) => {
  return (
    <label
      className={cn("font-bold text-xl text-black", className)}
      onClick={onClick}
    >
      {children}
    </label>
  );
};

export const Description = ({
  children,
  className,
  onClick,
}: PropsWithChildren<TTypography>) => {
  return (
    <label
      className={cn("font-normal text-base text-black", className)}
      onClick={onClick}
    >
      {children}
    </label>
  );
};

export const ButtonLabelSmall = ({
  children,
  className,
  onClick,
}: PropsWithChildren<TTypography>) => {
  return (
    <label className={cn("text-xs text-white", className)} onClick={onClick}>
      {children}
    </label>
  );
};

export const ButtonLabelLarge = ({
  children,
  className,
  onClick,
}: PropsWithChildren<TTypography>) => {
  return (
    <label
      className={cn("text-sm text-black font-bold", className)}
      onClick={onClick}
    >
      {children}
    </label>
  );
};
