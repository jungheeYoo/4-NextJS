//////////////////////////////////////////////////
// ✅ 3-5. Suspense
// 이전에는 getMovie와 getVideos 함수가 둘다 끝나야 UI를 볼 수 있었음
// fetch 함수들을 분리하기

import { API_URL } from '../app/(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// 🔶 info만을 랜더링하는 component
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
