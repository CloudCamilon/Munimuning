/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import { TProducts } from "@/models/home";

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

export const comics: TProducts[] = [
  {
    title: "Luwá: the Shapeshifter The name in the dark",
    price: "₱300.00",
    src: "/thumbnails/luwa.jpg",
    alt: "Luwá: the Shapeshifter The name in the dark",
    isComingSoon: true,
  },
  {
    title: "MENTALLY HERE",
    price: "₱300.00",
    src: "/thumbnails/mentally_here.jpg",
    alt: "MENTALLY HERE",
    isComingSoon: true,
  },
];

export const shop = [
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
