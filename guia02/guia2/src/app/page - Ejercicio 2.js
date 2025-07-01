//Ejercicio 2

import styles from "./page.module.css";

const Equipos = ( { equipos } ) => { return (
  <div className={styles.container__list}>
    <h2 className={styles.title}>Equipos de Fútbol</h2>
    {equipos.map((equipo) => (
      <div key={equipo.id}>
        <h3 className={styles.nameclub}>{equipo.nombre}</h3>
        <ul>
          {equipo.plantilla.map((jugador) => (
            <li className={styles.container__list} key={jugador.id}>
              <img src={jugador.img_url} alt={jugador.nombre} className={styles.jugardorimg} />
              <strong>{jugador.nombre}</strong>
              <p>Altura: {jugador.Altura}m <br/> Peso: {jugador.Peso}Kg</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default function Home() {
  //Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "FC Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74", "img_url": "https://img.a.transfermarkt.technology/portrait/big/74857-1674465246.jpg?lm=1" },
        { "id": 2, "nombre": "Iñigo Martínez", "Altura": "1.82", "Peso": "74", "img_url": "https://img.a.transfermarkt.technology/portrait/header/158863-1730119186.jpg?lm=1" },
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81", "img_url": "https://img.a.transfermarkt.technology/portrait/header/646740-1682685701.jpg?lm=1" }
      ]
    },
    {
      "id": 2,
      "nombre": "Real Madrid",
      "plantilla" : [
        { "id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74", "img_url": "https://img.a.transfermarkt.technology/portrait/header/50202-1665067742.jpg?lm=1https://img.a.transfermarkt.technology/portrait/header/50202-1665067742.jpg?lm=1" },
        { "id": 2, "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74", "img_url": "https://img.a.transfermarkt.technology/portrait/header/935230-1701294395.jpg?lm=1" },
        { "id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81", "img_url": "https://img.a.transfermarkt.technology/portrait/header/18922-1702414196.jpg?lm=1" }
      ]
    },
    {
      "id": 3,
      "nombre": "Juventus",
      "plantilla": [
        { "id": 1, "nombre": "Cristiano Ronaldo", "Altura": "1.87", "Peso": "84", "img_url": "https://img.a.transfermarkt.technology/portrait/header/8198-1748102259.jpg?lm=1" },
        { "id": 2, "nombre": "Gianluigi Buffon", "Altura": "1.92", "Peso": "91", "img_url": "https://img.a.transfermarkt.technology/portrait/header/5023-1713425275.jpg?lm=1" },
        { "id": 3, "nombre": "Leonardo Bonucci", "Altura": "1.90", "Peso": "85", "img_url": "https://img.a.transfermarkt.technology/portrait/header/39983-1693590039.jpg?lm=1" }
      ]
    },
    {
      "id": 4,
      "nombre": "Manchester City",
      "plantilla": [
        { "id": 1, "nombre": "Erling Haaland", "Altura": "1.94", "Peso": "94", "img_url": "https://img.a.transfermarkt.technology/portrait/header/418560-1709108116.png?lm=1" },
        { "id": 2, "nombre": "Kevin De Bruyne", "Altura": "1.81", "Peso": "70", "img_url": "https://img.a.transfermarkt.technology/portrait/header/88755-1713391485.jpg?lm=1" },
        { "id": 3, "nombre": "Ruben Dias", "Altura": "1.87", "Peso": "82", "img_url": "https://img.a.transfermarkt.technology/portrait/header/258004-1684921271.jpg?lm=1" }
      ]
    },
    {
      "id": 5,
      "nombre": "AS Roma",
      "plantilla": [
        { "id": 1, "nombre": "Paulo Dybala", "Altura": "1.77", "Peso": "75", "img_url": "https://www.zerozero.pt/img/jogadores/new/57/55/225755_paulo_dybala_20241207153239.png" },
        { "id": 2, "nombre": "Tammy Abraham", "Altura": "1.90", "Peso": "75", "img_url": "https://upload.wikimedia.org/wikipedia/commons/8/8f/FC_Salzburg_gegen_AS_Roma_%28UEFA_Euroleague_play-off%2C_2023-02-16%29_39_%28cropped2%29.jpg" },
        { "id": 3, "nombre": "Lorenzo Pellegrini", "Altura": "1.80", "Peso": "72", "img_url": "https://media.asroma.com/prod/images/square_large_fill/1b9cb0e2b580-pellegrini.png" }
      ]
    }
  ]

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}