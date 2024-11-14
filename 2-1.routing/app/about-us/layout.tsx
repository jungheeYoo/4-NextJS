//////////////////////////////////////////////////
// ✅ 2-7. Layouts
// 레이아웃 시스템
// 레이아웃 시스템에 대해서 배워야 하는 이유는
// application을 빌드할 때 재사용하는 요소(element)들이 있기 때문이다.

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}&copy; Next JS is great!</div>;
}
