import styles from './App.module.css';

interface MovieProps {title: string, year:number, imagePath:string}
interface SongProps {title: string, author: string, imagePath:string}
interface BookProps {title: string, author:string, year:number, pages:number, imagePath:string}


function Movie(props: MovieProps) {
  
  return <>
  <figure className={styles.Movie}>

      <img src={props.imagePath} />
      <figcaption>
          <h1>{props.title}</h1>
          <h2>{props.year}</h2>
      </figcaption>

  </figure>
  </>;

}


function Book(props: BookProps) {
  return <>
  
  <figure className={styles.Book}>
    <img src={props.imagePath} />
    <figcaption>
      <h1>{props.title}</h1>
      <h2>{props.year}</h2>
      <h2>{props.pages} stron</h2>
    </figcaption>
  </figure>
  </>;
}

function Song(props: SongProps) {
  return <>
  <figure className={styles.Song}>
    <img src={props.imagePath} />
    <figcaption>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
    </figcaption>
  </figure>
  </>;
}

export default function App() {


  return (<>

    <h1>Filmy</h1>
    <section>

      <Movie 
        title='Avengers: Endgame'
        year={2019}
        imagePath='/images/movie_1.jpg' /> 

      <Movie 
        title='The Hunt'
        year={2020}
        imagePath='/images/movie_2.webp' /> 

      <Movie 
        title='Ice Age: The Great Egg-Scapade'
        year={2016}
        imagePath='/images/movie_3.webp' /> 

    </section>

    <h1>Piosenki</h1>
    <section>
        <Song
          title='Fade into you'
          author='Mazzy star'
          imagePath='/images/song_1.jpg' />
        <Song
          title='About you'
          author='The 1975'
          imagePath='/images/song_2.jpg' />
        <Song
          title='Perfect'
          author='Ed Sheeran'
          imagePath='/images/song_3.jpg' />
    </section>

    <h1>Książki</h1>
    <section>
      <Book
        title="Społeczeństwo i Polityka"
        author='Konstanty Adam Wojtaszczyk'
        year={2018}
        pages={510}
        imagePath='/images/book_1.jpg' />
      <Book
        title="Historia polityczna Polski"
        author='Antoni Dudek'
        year={2023}
        pages={1100}
        imagePath='/images/book_2.jpg' />
      <Book
        title="Ustroje państw współczesnych"
        author='Paweł Sarnecki'
        year={2012}
        pages={200}
        imagePath='/images/book_3.jpg' />
    </section>


  </>);
}
