# CRA 없이 React 개발환경 구성하기

## 프로젝트 구조

```
no-cra
├─ .babelrc
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.js
│  └─ index.html
└─ webpack.config.js

```

## Babel(바벨)

Babel은 ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 코드로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript **트랜스컴파일러**입니다.

### 트랜스파일러

**트랜스파일러(Transpiler)**는 프로그래밍 언어의 코드를 다른 프로그래밍 언어 또는 동일한 언어 내에서 다른 버전이나 형식으로 변환하는 도구입니다.
쉽게 이야기해 JSX 등의 최신 확장 문법의 JS 들을 구버전 JS 로 변경해줌

## Webpack(웹팩)

**webpack**은 모던 JavaScript 애플리케이션을 위한 정적 모듈 **번들러** 입니다. **webpack**이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 디펜던시 그래프를 만듭니다.

### 번들러

번들러(Bundler)는 여러 개의 파일로 구성된 코드나 리소스를 하나의 파일(또는 몇 개의 파일)로 묶어주는 도구입니다. 여러 JavaScript, CSS, 이미지 파일 등을 하나의 파일로 결합하여 배포 및 로드 성능을 개선하는 데 사용됩니다.

## 구성

React를 CDN으로 가져온 뒤 html파일과 js파일을 바벨을 통해 트랜스컴파일해준 뒤 웹팩을 통해 JS파일들을 하나로 묶어준다.
webpack.config.js에서 개발서버 또한 설정하여 CRA 혹은 VITE처럼 실시간으로 저장하며 변경사항을 확인 할 수 있다.
