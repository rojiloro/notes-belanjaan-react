import { useState } from "react";

export default function Footer({ onHandleClear, items }) {
  if (items.length === 0)
    return (
      <div className="w-1/2 mx-auto bg-orange-300 rounded p-4">
        <div>
          <button onClick={() => onHandleClear()} className="lg:mt-0 sm:mt-2 bg-slate-600 hover:bg-slate-700 rounded p-1 px-3 text-white font-medium">
            Bersihkan Daftar
          </button>
        </div>
        <footer className="flex justify-center mt-1">Daftar Belanjaan masih kosong</footer>
      </div>
    );

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);
  return (
    <>
      <div className="w-1/2 mx-auto bg-orange-300 rounded p-4">
        <div>
          <button onClick={() => onHandleClear()} className="lg:mt-0 sm:mt-2 bg-slate-600 hover:bg-slate-700 rounded p-1 px-3 text-white font-medium">
            Bersihkan Daftar
          </button>
        </div>
        <footer className="flex justify-center mt-1">
          Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
        </footer>
      </div>
    </>
  );
}
