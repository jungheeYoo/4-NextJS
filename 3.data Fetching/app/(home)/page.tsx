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

//////////////////////////////////////////////////
// ✅ 2-8. Metadata
// route groups을 사용하여 route들을 정리하는 방법
// metadata object

// layout 파일에서 잘라내서 home 페이지에 여기에 붙여넣음
// layout 에서 온 description은 머지 됨. 병합 됨
// 메타데이터는 병합 됨
// 페이지나 레이아웃만 메타데이터를 내보낼 수 있다

export const metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}
