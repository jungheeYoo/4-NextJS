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
// ✅ 3-4. Parallel Requests
// 영화 클릭하면 일어나는 일 구현
// 각 영화 로딩 처리, 병렬 데이터 페칭

import { API_URL } from '../../../(home)/page';

// 🔶 fetch 할 함수 작성
async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('==========');
  console.log('start fetching');
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('end fetching');
  return <h1>{movie.title}</h1>;
}

// 🔶 id로 API에 fetch 하기
// 1. component를 async function으로 만듦
// 2. fetch 할 함수 작성

// 🔶 영화 예고편 fetch 하기
// 1. fetch 할 함수 작성
