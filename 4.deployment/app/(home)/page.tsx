// //////////////////////////////////////////////////
// // ✅ 2-2. Not Found Routes
// // 네비게이션 바 구현
// // Not Found Routes
// // not-found.tsx
// // usePathname

// import Navigation from '../components/navigation';

// export default function Page() {
//   return (
//     <div>
//       <Navigation />
//       <h1>Hello!</h1>
//     </div>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 2-7. Layouts
// // 레이아웃 시스템
// // 레이아웃 시스템에 대해서 배워야 하는 이유는
// // application을 빌드할 때 재사용하는 요소(element)들이 있기 때문이다.

// export default function Page() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//     </div>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 2-8. Metadata
// // route groups을 사용하여 route들을 정리하는 방법
// // metadata object

// // layout 파일에서 잘라내서 home 페이지에 여기에 붙여넣음
// // layout 에서 온 description은 머지 됨. 병합 됨
// // 메타데이터는 병합 됨
// // 페이지나 레이아웃만 메타데이터를 내보낼 수 있다

// export const metadata = {
//   title: 'Home',
// };

// export default function Page() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//     </div>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 3-1. client side
// // 🔶 외부 라이브러리나 서드파티 없이 data 를 fetch 하는 법
// // 🔶 React JS 에서 useEffect, useState를 사용하여 data fetch 하는 법

// 'use client';

// import { useEffect, useState } from 'react';

// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(
//       'https://nomad-movies.nomadcoders.workers.dev/movies'
//     );
//     const json = await response.json();
//     setMovies(json);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
// }

// //////////////////////////////////////////////////
// // ✅ 3-2. server side
// //  server side data fetching 하는 법

// export const metadata = {
//   title: 'Home',
// };

// const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 🔶 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(URL);
//   const json = await response.json();
//   return json;
//   // return fetch(URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return <div>{JSON.stringify(movies)}</div>;
// }

// // 🔶 fetch 하는 함수 만들기
// // 이 함수는 component 안에 없어도 됨. server component에서는 좀 달라짐
// // 이 함수는 내 url을 fetch할거고 response를 받아서 response.json()을 return
// // 어떤 일이 발생하기를 기다리려고 await를 사용할 때, 부모 함수에 무조건 async가 있어야 함

// //////////////////////////////////////////////////
// // ✅ 3-3. Loading Components

// export const metadata = {
//   title: 'Home',
// };

// const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 🔶 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   await new Promise((resolve) => setTimeout(resolve, 10000));
//   // const response = await fetch(URL);
//   // const json = await response.json();
//   // return json;
//   return fetch(URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return <div>{JSON.stringify(movies)}</div>;
// }

// // 이 파일 이름이 loading이어야 함
// // 그리고 page 파일 옆에 있어야 함
// // 그럼 loading 파일은 이 page 파일에 대해 작동함

// //////////////////////////////////////////////////
// // ✅ 3-4. Parallel Requests
// // 영화 클릭하면 일어나는 일 구현
// // 각 영화 로딩 처리, 병렬 데이터 페칭

// import Link from 'next/link';
// import { resolve } from 'path';

// export const metadata = {
//   title: 'Home',
// };

// export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   // await new Promise((resolve) => setTimeout(resolve, 1000));
//   // const response = await fetch(URL);
//   // const json = await response.json();
//   // return json;
//   return fetch(API_URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return (
//     <div>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
//         </li>
//       ))}
//     </div>
//   );
// }

//////////////////////////////////////////////////
// ✅ 4-2. Movie Styles
// 컴포넌트 분리, useRouter 사용

import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';

export const metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
  // return fetch(API_URL).then((Response) => Response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
