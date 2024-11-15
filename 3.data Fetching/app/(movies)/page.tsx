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

// //////////////////////////////////////////////////
// // ✅ 3-4. Parallel Requests
// // 영화 클릭하면 일어나는 일 구현
// // 각 영화 로딩 처리, 병렬 데이터 페칭

// import { API_URL } from '../../../(home)/page';

// // 🔶 fetch 할 함수 작성
// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

// export default async function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   console.log('==========');
//   console.log('start fetching');
//   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
//   console.log('end fetching');
//   return <h1>{movie.title}</h1>;
// }

// // 🔶 id로 API에 fetch 하기
// // 1. component를 async function으로 만듦
// // 2. fetch 할 함수 작성

// // 🔶 영화 예고편 fetch 하기
// // 1. fetch 할 함수 작성

//////////////////////////////////////////////////
// ✅ 3-5. Suspense
// 이전에는 getMovie와 getVideos 함수가 둘다 끝나야 UI를 볼 수 있었음
// fetch 함수들을 분리하기

import { Suspense } from 'react';
import { API_URL } from '../(home)/page';
import MovieInfo from '../../components/movie-info';
import MovieVideos from '../../components/movie-videos';

// 🔶 component 따로 만듦
// getMovie 함수 따로 분리
// getVideos 함수 따로 분리

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos </h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// 🔶 단순한 데이터 소스를 fetch 할 땐
// page 파일에서 데이터를 fetch 하는 것이다. 왜냐하면 자동적으로 loading component가 화면에 생기고
// 데이터가 완료 되면 자동적으로 바뀜
// 즉, async를 넣고, 데이터를 fetch하고, loading 파일을 만드는 것

// 🔶 데이터 소스가 여러개이면 Suspense를 써야 함.
// fetch 함수들을 분리하기
// component 로 가서 async로 만들고 데이터를 fetch 하고
// Suspense로 그 component를 감싸기만 하면 됨
// 그럼 Suspense 가 우리의 component 를 await 해주고
// component 가 준비되면 그 UI를 사용자에게 전달해줌
// 그리고 준비되는 동안에는 fallback 을 전달해줌
// 우리 page 파일의 MovieDetail에서 data fetching이 발생하지 않기 때문에
// loading 파일은 아무것도 하지 않음
// 왜냐하면 여기서는 await하는 게 아무것도 없고, Suspense는 await와 분리되어있다
// fallback은 필수는 아님
