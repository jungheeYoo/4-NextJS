// //////////////////////////////////////////////////
// // ✅ 2-9. Dynamic Routes

// export default function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   return <h1>Movie {id}</h1>;
// }

// // 🔶 리액트 라우터에서 하는 것과 같은 것
// // /movies/:id

// // 🔶 두 개의 종류의 props를 얻을 수 있다
// // parameters 와 searchParams
// // 파라미터는 URL에서 변수이다

//////////////////////////////////////////////////
// ✅ 3-1. client side
// 🔶 외부 라이브러리나 서드파티 없이 data 를 fetch 하는 법
// 🔶 React JS 에서 useEffect, useState를 사용하여 data fetch 하는 법

'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
}
