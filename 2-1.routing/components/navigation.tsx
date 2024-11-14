//////////////////////////////////////////////////
// ✅ 2-2. Not Found Routes
// 네비게이션 바 구현
// Not Found Routes
// not-found.tsx
// usePathname

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// navigation 파일을 열어서 경로명을 알려주는 hook 을 사용
// NextJS 에서는 url 에 관한 정보를 알려주는 hook 들이 있다

// 🔶 usePathname() hook
// Path name 이란 user 가 현재 머물고 있는 url 이다
// 유저들인 '/' 에 있는지, '/about-us' 에 있는지, 'movie' 에 있는지 등을 알려줌
// usePathname 은 오직 client component 에서만 작동한다
// 'use client'; 을 파일 상단에 추가해야 함

export default function Navigation() {
  const path = usePathname();
  console.log(path);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{' '}
          {path === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
