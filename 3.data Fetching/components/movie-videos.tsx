//////////////////////////////////////////////////
// ✅ 3-5. Suspense
// 이전에는 getMovie와 getVideos 함수가 둘다 끝나야 UI를 볼 수 있었음
// fetch 함수들을 분리하기

import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

// 🔶 videos만을 랜더링하는 component
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
