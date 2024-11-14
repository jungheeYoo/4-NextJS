//////////////////////////////////////////////////
// ✅ 2-1. Defining Routes
// NextJS 애플리케이션에서 새로운 페이지 만드는 방법

export default function Page() {
  return <h1>Hello!</h1>;
}

// ✨ 컴포넌트의 이름은 상관없음
// 보통 Page라고 함
// 컴포넌트가 default 컴포넌트로 export 되어야 함
// export default 된 react 컴포넌트여야 함
// react를 import 하지 않아도 됨. Next JS가 다 알아서 해줌

// ✨ app 폴더 안에 page, layout 파일은 root segment 라고 함
// 왜냐면 이것이 유저가 제일 먼저, root('/') 에서 보게 될 페이지이기 때문
// 이것은 나의 애플리케이션의 홈이다

// ❓ about-us 라는 페이지를 만들고 싶다면 어떻게 해야할까?
// 새 폴더 만들기 한 다음 'about-us' 만듦
// 폴더를 생성함으로서 나는 NextJS 에게 이 폴더명이 잠재적으로 하나의 페이지가 될 수 있다고 알려주는 것이다. 지금 당장은 페이지가 아님.
// 지금 들어가면 404 오류 뜸. 이유는 아직 'about-us' 로 이동했을 때 Next.js 가 렌더링 할 UI 를 제공하지 않아서이기 때문. 그래서 지금은 이 폴더가 경로가 될 수 없다. UI 를 제공해야 함

// ❓ NextJS에게 Routes를 알려주는 방법
// 💡 방법은 page.tsx 파일을 생성
// 이 파일에 export default 를 작성해주고 React 컴포넌트를 export 해줌
// 이름은 상관없음. 그리고 UI를 리턴. 꼭 리턴해야 함.

// 애플리케이션의 경로와 그곳이 어떤 페이지인지 알려주는 것
// react-router-dom 처럼 수동적으로 알려줄 필요 없다
// 그저 간단하게 파일 시스템을 사용해서 경로를 표시해주면 됨
// 동시에 page 파일도 해당 디렉토일 안에 꼭 생성해야 함
// 직접적인 page.tsx 파일이 없는 폴더는 실제 페이지 없이 그저 경로의 일부분이 될 뿐이다
// 만든 폴더의 경로가 실제로 보이게 만드려면 해당 폴더 안에서 page.tsx 를 꼭 생성해야한다

// 🌟 결론
// 그저 폴더를 생성
// 폴더를 보여주고 싶다면, 그 폴더 안에 page 파일을 만들어주면 됨
// 폴더 직접 생성
// 그리고 ui 파일 생성해줌 page.tsx
// about-us 폴더에 page 파일이 있다는 것은
// /about-us 라는 경로가 우리에게 어떤 페이지를 보여줄 것이라는 것을 의미
// company 폴더에도 page 파일이 있으니
// 마찬가지로 /about-us/company 경로도 무엇인가 보여줌
// page.tsx가 있어야 url을 갖는다

// 🤔 자주 묻는 질문? app 폴더에 다른 파일을 넣어 되나요? 된다!
// page 라는 파일을 만들지 않는 이상 실제 경로에 포함되지도 렌더링 되지도 않기 때문. 딱히 추천하는 방식은 아니지만, 원한다면 가능은 하다