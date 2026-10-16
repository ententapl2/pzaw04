import styles from './App.module.css';

interface MovieProps {title: string, year:number, imagePath:string, rating: number}
interface SongProps {title: string, author: string, imagePath:string}
interface BookProps {title: string, author:string, year:number, pages:number, imagePath:string}
interface AlbumProps {title: string, band:string, genre:string, year:number, songs: AlbumSongProps[], imagePath: string, }
interface AlbumSongProps {title: string, duration: number}

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

function AlbumSong(props: AlbumSongProps) {
  return <>
  <li>
    <div>{props.title}</div>
    <div>{props.duration} min</div>
  </li>
  
  </>;
}

function Album(props: AlbumProps) {
  return <>
    <figure className={styles.Album}>
      <img src={props.imagePath} />
      <figcaption>
        <h1>{props.title}, {props.year}</h1>
        <h2>{props.band}</h2>
        <h2>{props.genre} </h2>
        <ol>
          {props.songs.map(function (song) {
            return <AlbumSong title={song.title} duration={song.duration} />;
          })}
        </ol>
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


  const movies: MovieProps[] = [
    {
      title: 'Avengers: Endgame',
      year:2016,
      imagePath:'/images/movie_1.jpg',
      rating: 6,
    } as MovieProps,
    {title: 'The Hunt',
      year: 2020,
      imagePath:'/images/movie_2.webp',
      rating: 7,
    },
    {title: 'Ice Age: The Great Egg-Scapade',
      year:2020,
      imagePath:'/images/movie_3.webp',
      rating: 9
    },
    {
      title: 'The Gofather',
      year:1972,
      imagePath: '/images/movie_4.jpg',
      rating: 10
    },
    {
      title: 'Matrix',
      year: 1999,
      imagePath: '/images/movie_5.jpg',
      rating: 2
    }
  ];

  const books:  BookProps[] = [
    {
      title: 'Społeczeństwo i Polityka',
      author: 'Konstanty Adam Wojtaszczyk',
      year:2018,
      pages:510,
      imagePath:'/images/book_1.jpg'
    },
    {
      title:'Historia polityczna Polski',
      author: 'Antoni Dudek',
      year: 2023,
      pages:110,
      imagePath: '/images/book_2.jpg'
    },
    {
      title:'Ustroje panstw współczesnych',
      author: 'Paweł Sarnecki',
      year: 2012,
      pages: 200,
      imagePath: '/images/book_3.jpg'
    }
  ];

  const albums: AlbumProps[] = [
    {
      title: 'Random Access Memories',
      band: 'Daft Punk',
      genre:'Funk',
      year:2013,
      songs:[
        {title: 'Giorgio by Moroder', duration: 9.05},
        {title: 'Get Lucky', duration:6.10}
      ],
      imagePath: '/images/album_1.jpg'
    },
    {
      title:'Time out',
      band: 'The Dave Brubeck Quartet',
      year:1959,
      genre: 'Jazz',
      songs:[
        {title: 'Take five', duration: 5.24},
        {title: 'Puck Up Sticks', duration: 4.16},
        {title: 'Three to Get Ready', duration: 5.24}
      ],
      imagePath:'/images/album_2.jpg'
    },
    {
      title: 'Master of Puppets',
      band: 'Metallica',
      year: 1986,
      genre: 'Heavy metal',
      songs: [
        {title: 'Battery', duration: 5.12},
        {title: 'Leper Messiah', duration: 5.40},
        {title: 'Welcome home(Sanitarium)', duration: 6.27},
        {title: 'Disposable Heroes', duration: 8.17}
      ],
      imagePath:'/images/album_3.jpg'
    }
  ];


  return (<>

    <h1>Filmy</h1>
    <section>

      {movies.map(movie => <Movie {...movie}/>
      )}

    </section>

    <h1>Filmy po 2010 roku</h1>
    <section>
      {movies.filter(movie => movie.year > 2010).map(movie => <Movie {...movie} /> )}
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
      {books.map(book => <Book {...book} /> )}
      
    </section>

    <h1>Książki najnowsze</h1>
    <section>
        {books.sort((a, b) => (b.year - a.year)).map(book => <Book {...book} /> )}
    </section>

    <h1>Albumy</h1>
    <section>
      {albums.map(album => <Album {...album} />)}

    </section>

    <h1>Album z największą ilością utworów</h1>
    <section>
      <Album {...albums.sort((a, b) => b.songs.length - a.songs.length).at(0)!} />
    </section>


  </>);
}
