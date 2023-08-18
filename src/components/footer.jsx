export default function Footer() {
  return (
    <>
      <div className="w-1/2 mx-auto bg-orange-300 rounded p-4">
        <select name="" id="" className="lg:ml-44 focus:outline-none rounded p-1 bg-slate-400 font-semibold ">
          <option>Urutkan berdasarkan urutan input</option>
          <option>Urutkan berdasarkan nama barang</option>
          <option>Urutkan berdasarkan ceklis</option>
        </select>
        <footer className="flex justify-center mt-1">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
      </div>
    </>
  );
}
