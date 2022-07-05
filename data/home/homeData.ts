import { v4 as uuidv4 } from "uuid";

export const HomeData = {
  policy: [
    {
      title: "Free Same-Day Delivery",
      subTitle: "Order by 2pm local time to get free delivery on orders $35+ today.",
      image: "/delivery.png",
    },
    {
      title: "30 Day Return",
      subTitle: "35% off your first order plus 5% off all future orders.",
      image: "/exchange.png",
    },
    {
      title: "Security payment",
      subTitle: "25% off your online order of $50+. Available at most locations.",
      image: "/shield.png",
    },
    {
      title: "24/7 Support",
      subTitle: "Shop online to get orders over $35 shipped fast and free.",
      image: "/support.png",
    },
  ],
  blogs: [
    {
      image: "/food-cat.png",
      title: "Cat Foods",
    },
    {
      image: "/care.png",
      title: "Knowledge Care",
    },
    {
      image: "/health.png",
      title: "Health",
    },
    {
      image: "/disease.png",
      title: "Disease",
    },
  ],

  popularBrands: [
    {
      id: uuidv4(),
      image: "/me0.png",
      background: "#f7ee25",
    },
    {
      id: uuidv4(),

      image: "/me0.png",
      background: "#595959",
    },
    {
      id: uuidv4(),
      image: "/me0.png",
      // background: "#f7ee25",
    },
    {
      id: uuidv4(),
      image: "/me0.png",
      background: "#898989",
    },
  ],
};
