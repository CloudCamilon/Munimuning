export type TProduct = {
  id?: string;
  title: string;
  price?: string;
  version?: string;
  year?: string;
  description?: string;
  category?: string;
  isComingSoon?: boolean;
  className?: string;
  hasView?: boolean;
  gallery?: string[];
  src: string;
  alt: string;
};

export type THomeSection = {
  layoutClassName?: string;
  section: string;
  products: TProduct[];
  type: "works" | "stories-comics" | "shop";
};
