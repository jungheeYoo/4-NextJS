//////////////////////////////////////////////////
// ✅ 2-2. Not Found Routes
// 네비게이션 바 구현
// Not Found Routes
// not-found.tsx
// usePathname

import Navigation from '../components/navigation';

// ✨ 존재하지 않는 페이지에 화면 표시해줌

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>Not found!</h1>
    </div>
  );
}
