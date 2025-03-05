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
    popularity: 45,
    sales: 45,
    color: "blue",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 29,
    sales: 29,
    color: "green",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: 18,
    sales: 18,
    color: "purple",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: 25,
    sales: 25,
    color: "orange",
  },
];
