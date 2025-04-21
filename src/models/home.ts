export type TProducts = {
  title: string;
  price?: string;
  version?: string;
  category?: string;
  isComingSoon?: boolean;
  className?: string;
  src: string;
  alt: string;
};

export type THomeSection = {
  layoutClassName?: string;
  section: string;
  products: TProducts[];
  type: "works" | "stories-comics" | "shop";
};
