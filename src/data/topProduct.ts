interface ITopProduct {
  id: string;
  name: string;
  popularity: number;
  sales: number;
  color: string;
}

export const topProducts: ITopProduct[] = [
  {
    id: "01",
    name: "Home Decor Range",
    popularity: 30,
    sales: 30,
    color: "blue",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 20,
    sales: 20,
    color: "green",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: 35,
    sales: 35,
    color: "purple",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: 15,
    sales: 15,
    color: "orange",
  },
];

export const colorMap: Record<
  string,
  { bar: string; text: string; border: string; bg: string }
> = {
  blue: {
    bar: "bg-blue-500",
    text: "text-blue-500",
    border: "border-blue-500",
    bg: "bg-blue-100",
  },
  green: {
    bar: "bg-green-500",
    text: "text-green-500",
    border: "border-green-500",
    bg: "bg-green-100",
  },
  purple: {
    bar: "bg-purple-500",
    text: "text-purple-500",
    border: "border-purple-500",
    bg: "bg-purple-100",
  },
  orange: {
    bar: "bg-orange-500",
    text: "text-orange-500",
    border: "border-orange-500",
    bg: "bg-orange-100",
  },
};
