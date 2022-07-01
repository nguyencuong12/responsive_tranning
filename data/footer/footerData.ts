import { v4 as uuidv4 } from "uuid";

export const FooterData = {
  introduce: {
    logo: "/food-cat.png",
    question: "If you have any question, please contact us at support@example.",
    location: "TPHCM",
    phone: "0978531164",
    socialMedia: [
      {
        image: "/twitter.png",
        href: "/",
        id: uuidv4(),
      },
      {
        image: "/facebook.png",
        href: "/",
        id: uuidv4(),
      },
      {
        image: "/instagram.png",
        href: "/",
        id: uuidv4(),
      },
      {
        image: "/tiktok.png",
        href: "/",
        id: uuidv4(),
      },
    ],
  },

  corporate: [
    {
      title: "Careers",
      id: uuidv4(),
    },
    {
      title: "About Us",
      id: uuidv4(),
    },
    {
      title: "Code of Ethics",
      id: uuidv4(),
    },
    {
      title: "Event Sponsorships",
      id: uuidv4(),
    },
    {
      title: "Vendors",
      id: uuidv4(),
    },
    {
      title: "Affiliate Program",
      id: uuidv4(),
    },
  ],

  //   Track Order
  //   Returns
  //   Shipping Info
  //   Recalls & Advisories
  //   Pet Store Locator
  //   Contact Us

  customService: [
    {
      title: "Track Order",
      id: uuidv4(),
    },
    {
      title: "Returns",
      id: uuidv4(),
    },
    {
      title: "Shipping Info",
      id: uuidv4(),
    },
    {
      title: "Recalls & Advisories ",
      id: uuidv4(),
    },
    {
      title: "Pet Store Locator",
      id: uuidv4(),
    },
    {
      title: "Contact Us",
      id: uuidv4(),
    },
  ],

  service: [
    {
      title: "Grooming",
      id: uuidv4(),
    },
    {
      title: "Positive Dog Training",
      id: uuidv4(),
    },
    {
      id: uuidv4(),
      title: "Veterinary Services",
    },
    {
      id: uuidv4(),
      title: "Petco Insurance",
    },
    {
      id: uuidv4(),
      title: "Pet Adoption",
    },
    {
      id: uuidv4(),
      title: "Resource Center",
    },
  ],
};
