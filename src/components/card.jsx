export default function Card({ imgUrl, title, keyWords, link, children }) {
  return (
    <article className=" border-b-2 mb-16 shadow-sm">
      <img
        src={imgUrl}
        alt={title}
        className="shadow-md border-solid border-2"
      />
      <div  className="flex gap-8 items-end">
        <h2 className="mt-2 font-bold text-3xl">{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link to GitHub
        </a>
      </div>
      <p className="mt-6">{children}</p>
      <ul className="flex gap-2 flex-wrap">
        {keyWords.map((keyWord, index) => (
          <li
            key={index}
            className="font-semibold mt-1 bg-gray-400 text-white py-2 px-6"
          >
            {keyWord}
          </li>
        ))}
      </ul>
    </article>
  );
}
