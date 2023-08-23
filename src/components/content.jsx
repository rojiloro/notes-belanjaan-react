import { useState } from "react";

export default function Content({ items, onDeleteItem, onHandleTogleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="mb-5 border-2 w-1/2 mx-auto bg-yellow-300 border-none rounded p-4">
        <ul>
          {sortedItems.map((data) => (
            <li key={data.id} className="mb-1">
              <div className="text-left flex justify-center">
                <input type="checkbox" checked={data.checked} onChange={() => onHandleTogleItem(data.id)} />
                <p className="ml-1 text-lg font-semibold">
                  {data.qty} {data.checked ? <s className="text-black">{data.name}</s> : data.name}
                </p>
                <div onClick={() => onDeleteItem(data.id)} className="text-red-600 font-bold text-lg ml-5  cursor-pointer hover:bg-red-700 hover:text-white px-1.5 rounded-md">
                  x
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="lg:flex gap-2 justify-center mt-8">
          <div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} name="" id="" className="lg:ml-24 focus:outline-none rounded p-1 bg-slate-700 font-semibold text-white font-semibold ">
              <option value="input">Urutkan berdasarkan urutan input</option>
              <option value="name">Urutkan berdasarkan nama barang</option>
              <option value="checked">Urutkan berdasarkan ceklis</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
