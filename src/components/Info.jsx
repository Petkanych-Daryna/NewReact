export function Info()  {
  const myName = "Daryna";

  const imageUrl = "https://hostiq.ua/blog/wp-content/uploads/2021/11/cat-jpg.jpg";
  const imageAlt = "Приклад зображення";

  const favSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  const num1 = 5;
  const num2 = 7;
  const sum = num1 + num2;
 

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>

      <img src={imageUrl} alt={imageAlt} />

      <p>
        Моє улюблене посилання:{" "}
        <a href={favSite.url} target="_blank" rel="noreferrer">
          {favSite.name}
        </a>
      </p>

      <p>Сума чисел: {sum}</p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
// fppfpf