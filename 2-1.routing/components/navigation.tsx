// //////////////////////////////////////////////////
// // ✅ 2-2. Not Found Routes
// // 네비게이션 바 구현
// // Not Found Routes
// // not-found.tsx
// // usePathname

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // navigation 파일을 열어서 경로명을 알려주는 hook 을 사용
// // NextJS 에서는 url 에 관한 정보를 알려주는 hook 들이 있다

// // 🔶 usePathname() hook
// // Path name 이란 user 가 현재 머물고 있는 url 이다
// // 유저들인 '/' 에 있는지, '/about-us' 에 있는지, 'movie' 에 있는지 등을 알려줌
// // usePathname 은 오직 client component 에서만 작동한다
// // 'use client'; 을 파일 상단에 추가해야 함

// export default function Navigation() {
//   const path = usePathname();
//   console.log(path);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>{' '}
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 2-3. SSR vs CSR
// // client/sever component

// // ✨ next.js 가 애플리케이션 을 render 하는 방식
// // rendering 이란, next.js 가 우리의 react component 를 가져와서 브라우저가 이해할 수 있는 html 로 변환하는 작업을 말함

// // 🔶 client side rendering
// // 평범한 react 가 render 되는 방식은 client side rendering 임
// // 이건 브라우저가 rendering 작업을 한다는 것이다
// // create-react-app 을 사용해 react 만으로 애플리케이션을 생성하면 이건 client side application 이 됨
// // React는 사용자 브라우저인 client 단에서 모든 rendering 작업을 수행해야 함
// // client가 사용자 브라우저에 UI를 구축해야 하는 것

// // 👎 client side rendering 단점
// // 1. **초기 로딩 시간 지연**:
// // CSR 방식에서는 브라우저가 HTML을 로드한 후 JavaScript 파일을 다운로드하고 실행해야만 UI가 렌더링 된다.
// // 따라서 사용자는 JavaScript가 실행되기 전까지 빈 화면을 보게 된다.
// // 2. **SEO와 접근성 문제**:
// // 초기 HTML은 비어있기 때문에 검색 엔진 크롤러가 제대로 콘텐츠를 읽을 수 없고, JavaScript가 비활성화된 환경에서는 아무것도 표시되지 않는다.
// // 3. **JavaScript 의존성**:
// // JavaScript가 비활성화된 경우, UI가 전혀 렌더링되지 않음.
// // 네트워크 상태가 나쁘거나 JavaScript 파일이 커질수록 로딩 시간이 길어진다.
// // 4. **UX 문제**:
// // 데이터 연결이 느린 환경에서는 사용자들이 빈 화면(또는 깜박이는 화면)을 더 오래 보게 되어 사용자 경험이 저하된다

// // 🔶 server side rendering
// // NextJS로 웹 사이트를 빌드할 때, 자동적으로, default로 server side rendering이 됨.

// // Nextjs application 의 모든 page 안의 모든 컴포넌트들은 next.js가 그것들을 우선 server에서 render 한다.
// // 예를 들어 사용자가 /about us로 접속하면 사용자에게 어떠한 HTML을 주기 전에, next.js는 server, 즉 backend에서 application을 render 한다
// // next.js는 네 모든 컴포넌트를 render 해서 그 html을 가지고 그걸 브라우저 request에 대한 response로 준다.
// // 사용자는 next.js가 backend에서 생성한 html을 보게 된다.
// // 이건 일반 HTML이기 때문에 사용자가 무언가 볼 수 있어
// // 적어도 최초 application의 UI 빌드에서는 JavaScript에 의존하지 않는다.
// // 처음에 사용자가 페이지에 도착했을 때, UI를 빌드하는 데에 JavaScript가 필요하지 않다.
// // UI는 이미 빌드되어 있고 HTML도 이미 존재함
// // 그래서 브라우저가 즉시 화면에 표시할 수 있고, JavaScript 다운로드를 기다릴 필요가 없음

// // 🌟 결론
// // NextJS로 웹 사이트를 빌드할 때, 기본적으로 SSR을 사용함
// // Nextjs에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨
// //   ('use client' 사용 여부와 상관없음)
// // 모든 컴포넌트와 페이지들은 먼저 backend에서 render 된다. 그것들은 HTML 로 변환 됨. 그리고 그 HTML 이 브라우저에 넘겨짐.
// // 이렇게 하면 사용자들이 페이지에 접근해서 바로 UI를 볼 수 있다.
// // UI를 빌드하는데에 React를 쓸 필요가 없다. React는 그 후에 추가됨.
// //   rendering은, JavaScript function을 가져와서 브라우저가 이해할 수 있는 HTML로 변환하는 작업
// //   브라우저는 이 코드를 이해하지 못하기 때문에 먼저 변환해야 한다
// //   그게 바로 next.js가 우리의 application의 모든 컴포넌트와 페이지들에 대해 server 측에서 먼저 하는 일이다
// // 그리고 HTML로 변환 되고 브라우저에 넘겨짐
// // 이러면 사용자들이 페이지에 접근해서 바로 UI를 볼 수 있다
// // UI를 빌드하는데에 React를 쓸 필요가 없고, React는 그 후에 추가된다

// ('use client');

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navigation() {
//   const path = usePathname();
//   console.log(path);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>{' '}
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//       </ul>
//     </nav>
//   );
// }

//////////////////////////////////////////////////
// ✅ 2-4. Hydration
// ❓ 사용자가 최초 HTMl 을 본 뒤에 어떤 일이 일어나는가?
// ❓ 리액트가 언제 활성화 되는지? 이 과정을 Hydration 이라고 한다

// 서버사이드 렌더링(SSR)을 통해 만들어 진 인터랙티브 하지 않는 HTML을 클라이언트 측 자바스크립트를 사용하여 인터랙티브한 리액트 컴포넌트로 변환하는 과정을 말한다.
// (서버 환경에서 이미 렌더링된 HTML에 React를 붙이는 것)

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
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
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
