import { colorMap, topProducts } from "@/data/topProduct";

export default function TopProduct() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-700">Top Products</h1>

      <table className="mt-3 w-full">
        <thead>
          <tr>
            <th className="w-[10%] p-2 text-left text-sm font-light text-gray-500">
              #
            </th>
            <th className="w-[45%] p-2 text-left text-sm font-light text-gray-500">
              Name
            </th>
            <th className="w-[35%] p-2 text-left text-sm font-light text-gray-500">
              Popularity
            </th>
            <th className="w-[10%] p-2 text-left text-sm font-light text-gray-500">
              Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product) => (
            <tr key={product.id} className="border-t border-gray-200 px-2 py-4">
              <td className="px-2 py-4 text-sm">{product.id}</td>
              <td className="px-2 py-4 text-sm">{product.name}</td>
              <td className="py-4 pr-10 pl-2 text-sm">
                <div
                  className={`h-1.5 rounded-full ${colorMap[product.color].bg}`}
                >
                  <div
                    className={`h-1.5 rounded-full ${colorMap[product.color].bar} `}
                    style={{ width: `${product.popularity}%` }}
                  />
                </div>
              </td>
              <td className="px-2 py-4">
                <div
                  className={`${colorMap[product.color].bg} flex items-center justify-center rounded-xl border ${colorMap[product.color].border} py-1`}
                >
                  <p className={`text-xs ${colorMap[product.color].text}`}>
                    {product.sales}%
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
