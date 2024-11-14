// //////////////////////////////////////////////////
// // ✅ 2-2. Not Found Routes
// // 네비게이션 바 구현
// // Not Found Routes
// // not-found.tsx
// // usePathname

// import Navigation from '../components/navigation';

// // ✨ 존재하지 않는 페이지에 화면 표시해줌

// export default function NotFound() {
//   return (
//     <div>
//       <Navigation />
//       <h1>Not found!</h1>
//     </div>
//   );
// }

//////////////////////////////////////////////////
// ✅ 2-7. Layouts
// 레이아웃 시스템
// 레이아웃 시스템에 대해서 배워야 하는 이유는
// application을 빌드할 때 재사용하는 요소(element)들이 있기 때문이다.

export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}
