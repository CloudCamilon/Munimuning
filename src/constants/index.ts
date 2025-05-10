/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import { TProduct } from "@/models/home";

export const featuredWorks = [
  {
    title: "ROOM",
    category: "Illustration & Designs",
    src: "/thumbnails/room.jpg",
    alt: "Room",
  },
  {
    title: "KA SHIRT",
    category: "Shop",
    src: "/thumbnails/ka_shirt.jpg",
    alt: "Ka Shirt",
  },
  {
    title: "Luwá: the Shapeshifter The name in the dark",
    category: "Stories & Comics",
    src: "/thumbnails/luwa.jpg",
    alt: "Luwá: the Shapeshifter The name in the dark",
  },
  {
    title: "TUHOD POWER",
    category: "Shop",
    src: "/thumbnails/tuhod_power.png",
    alt: "TUHOD POWER",
  },
];

export const comicsItems: TProduct[] = [
  {
    id: "cebecad6-8962-4291-8932-6f4847a06031",
    title: "Luwá: the Shapeshifter The name in the dark",
    version: "Volume 1",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa blandit at neque viverra fusce lacus. Pretium magna turpis scelerisque magna velit erat cursus. Leo fringilla est sit massa in enim tellus leo. ",
    hasView: true,
    gallery: ["/gallery/stories-comics/luwa1.jpg", "/gallery/stories-comics/luwa2.jpg"],
    src: "/thumbnails/luwa.jpg",
    alt: "Luwá: the Shapeshifter The name in the dark",
    className: "border-white border-1",
    isComingSoon: true,
  },
  {
    id: "e078579b-5138-4e33-bf8f-937296da5f20",
    title: "MENTALLY HERE",
    version: "2025",
    src: "/thumbnails/mentally_here.jpg",
    alt: "MENTALLY HERE",
    isComingSoon: true,
  },
];

export const shopItems = [
  {
    title: "BARON POP SOCKET",
    price: "₱300.00",
    src: "/thumbnails/baron.jpg",
    alt: "BARON POP SOCKET",
  },
  {
    title: "KURO POP SOCKET",
    price: "₱300.00",
    src: "/thumbnails/kuro.jpg",
    alt: "KURO POP SOCKET",
  },
  {
    title: "FUELED BY PAWIS T-SHIRT",
    price: "₱300.00",
    src: "/thumbnails/pawis.png",
    alt: "KURO POP SOCKET",
  },
  {
    title: "KENDO T-SHIRT",
    price: "₱300.00",
    src: "/thumbnails/kendo.jpg",
    alt: "KENDO T-SHIRT",
  },
];

export const headerItems = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/works" },
  { title: "Stories & Comics", link: "/stories-comics" },
  { title: "Shop", link: "/shop" },
  { title: "About", link: "/about" },
];
