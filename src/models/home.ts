export type TProducts = {
  title: string;
  price?: string;
  category?: string;
  isComingSoon?: boolean;
  src: string;
  alt: string;
};

export type THomeSection = {
  layoutClassName?: string;
  section: string;
  products: TProducts[];
  type: "works" | "stories-comics" | "shop";
};
