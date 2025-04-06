export type TProducts = {
  title: string;
  price?: string;
  category?: string;
  src: string;
  alt: string;
};

export type THomeSection = {
  layoutClassName?: string;
  title: string;
  products: TProducts[];
};
