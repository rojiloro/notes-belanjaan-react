export default function Form() {
  const qtyNum = [...Array(15)].map((_, index) => <option value={index + 1}>{index + 1}</option>);
  console.log(qtyNum);
  return (
    <>
      <form>
        <div className="bg-yellow-600 lg:flex lg:gap-4 mb-5 w-1/2 mx-auto border-red-600 rounded p-4 sm:block">
          <p className="sm:mb-2 text-lg font-semibold px-2 text-white">Hari ini belanja apa kita?</p>
          <div className="ml-4 sm:m-0 sm:mb-2">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 " name="" id="">
              {qtyNum}
            </select>
          </div>
          <div className="ml-8 sm:mb-2 sm:ml-0">
            <input
              type="text"
              placeholder="belanja apa?"
              className="bg-gray-400 placeholder:text-white placeholder:font-semibold text-white font-semibold text-grey-900 focus:outline-none rounded p-1 border-none focus:ring-blue-500 focus:border-sky-600"
            />
          </div>
          <div className="ml-2 sm:ml-0 sm:text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 shadow rounded py-1 px-3 text-center text-white font-semibold">
              Tambah
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
