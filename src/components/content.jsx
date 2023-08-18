import { content } from "./dataDummy";

export default function Content() {
  return (
    <>
      <div className="mb-5 border-2 w-1/2 mx-auto bg-yellow-300 border-none rounded p-4">
        <ul>
          {content.map((data) => (
            <li key={data.id}>
              <div className="text-left flex justify-center">
                <input type="checkbox" />
                <p className="ml-1 text-lg font-semibold">{data.checked ? <s className="text-black">{data.name}</s> : data.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
