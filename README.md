# SSUNG-DELIVERY-FRONT

(English)[링크]
(프로젝트 전체 소개)[링크]

# 📌 목표

- 코드의 완성도보다는 새로운 기술 스택 접하는 것을 우선순위로 하자.
- 라이브러리보다는 직접 구현하자.
- 개발과 관련된 불편함 점을 해결하자.

# 📌 기술 스택

### React18

**이유**

- FE팀의 목표가 새로운 기술 스택을 적극적으로 활용해보자라는 것.<br />
  타 스택에 비해 공식적으로 다양한 API를 제공.<br />
  가장 큰 커뮤니티를 가지고 있어 트러블 슈팅에 용이할 것으로 기대.<br />

- React를 활용한 다른 프로젝트들에서의 아쉬웠던 점 해결해보기

- React18의 기능 활용 및 학습

- 참고자료
  - [React 18을 준비하세요](https://medium.com/naver-place-dev/react-18%EC%9D%84-%EC%A4%80%EB%B9%84%ED%95%98%EC%84%B8%EC%9A%94-8603c36ddb25)

### PNPM

**이유**

- node_modules 용량이 비약적으로 커지는 npm으로부터 나의 맥북 SSD 수명을 보호하기 위함
- npm의 Drop-in-replacement으로서, 익숙한 사용환경
- yarn과 npm 기능의 대부분을 포함하고 있음
  - zero install은 지원하지 않는 점은 아쉬움

# 📌 주요 구현 내용

## React 관련

### useModal

- 기존 문제점
  - 모달 하나하나를 관리하기 위해 모달마다 부모 컴포넌트에서 상태와 로직이 추가로 필요함
- 아이디어
  - 모달 하나의 뷰, 상태 그리고 로직을 모두 관리할 수 컴포넌트를 만들기
- 구현
  - 훅에서 모달의 상태를 가지고 있으면서 상태에 따라 모달을 렌더링하는 훅 구현
- 결과
  - 모달 관리를 위한 코드 가독성 및 유지보수성이 향상됨

```jsx
// Component

const { Modal, onModalOpen } = useModal()

const openModal = () => { onModalOpen() }
...
<Modal>
    <Component />
</Modal>
...
```

### useForm

- 기존 문제점
  - React에서 form을 관리하기 위한 상태와 이벤트 처리의 번거러움
- 아이디어
  - form에 필요한 타입과 상태를 한 곳에서 관리하고, 상태와 뷰를 분리해보기
  - input이 필요로 하는 요소들을 한 번에 세팅할 수 있도록 관련 값들을 객체로 반환하기.
  - 상태와 로직을 독립적으로 관리할 수 있는 훅을 활용하기
- 구현
  - 입력받고자 하는 폼 데이터의 타입과 초기 값을 훅에 전달하면, 상태와 이벤트 핸들러를 반환하는 훅 구현
- 결과
  - 폼 관리 코드의 가독성과 유지보수성이 향상됨

![image](https://user-images.githubusercontent.com/29947261/230732047-b11d659b-01b0-4cb4-8ab5-b27ee5ca8ff5.png)

### useFetch (진행 중)

- 기존 문제점
  - 규모가 작은 앱에서 tanStack Query 같은 라이브러리를 사용하는 것에 대한 부담.
  - 데이터를 브라우저 내 저장소, 외부에서 가져오는 등의 로직을 함께 사용하고 싶었음.
- 아이디어
  - 데이터를 fetch 함과 동시에 로컬 스토리지에서 데이터를 먼저 리턴하고, 추후 데이터가 도착하면 그때 상태를 불변성을 유지하면서 업데이트하기
  - 전역 상태 관리를 싱글 톤처럼 활용하여 타 컴포넌트에서 동일한 데이터에 대한 요청이 있을 경우, 기존 데이터 재사용하기(캐싱).

### 한글 조사 구분 lib

- 기존 문제점
  - "아이폰를 배송 중입니다"에서의 문제처럼 단어마다 다른 조사가 오는 한국어의 특징.
- 아이디어
  - 실제 한국어의 조사 구별 방법을 참고하여, 종성의 유무에 따라 적절한 조사를 반환하기.
- 구현
  - 종성 여부에 따른 적절한 조사를 반환하는 함수 구현
- 결과
  - "픽셀 폰를" => "픽셀 폰을"

# 📌 결과물

| User 클라이언트                                                                                                           | User 카드 스택                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![User 클라이언트](https://user-images.githubusercontent.com/29947261/230728786-617d2ef9-c1c7-4f7d-ada8-7d439866e428.png) | ![user-카드](https://user-images.githubusercontent.com/29947261/230728372-85a18f5e-90de-4104-b93e-eb7035b52997.gif) |

| Shipper 클라이언트                                                                                                           | Shipper 주요 컴포넌트                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Shipper 클라이언트](https://user-images.githubusercontent.com/29947261/230728735-528f68cd-17c8-4292-bb6a-cfdb559a8511.png) | ![shipper-대쉬캠](https://user-images.githubusercontent.com/29947261/230728377-9d7ee222-f0b5-4ad8-863f-c3cd3453edcf.gif) ![shipper-배송리스트](https://user-images.githubusercontent.com/29947261/230728380-edf5cb1e-b7db-4365-8a5b-ff5002ce7686.gif) |

| Sender 클라이언트                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| ![Sender 클라이언트](https://user-images.githubusercontent.com/29947261/230729105-935decc4-6a42-4105-a269-757c504817b0.png) |

# 📌 앞으로

### 코드 리팩토링

- 외부 라이브러리 줄이기 (디자인 시스템 등)
- 컴포넌트를 headless하도록 나누기
- common 라이브러리 구조 개선하기

### 아직 도입하지 못한 목표 활용하기

- [ ] React18
  - [ ] Suspense, ErrorBoundary
  - [ ] dynamic import, Razy Load
  - [ ] Sentry
  - [ ] SSR
  - [ ] 커스텀 훅 활용
  - [ ] 스토리북 도입
- [x] 모노레포
- [ ] CI / CD 접목
- [ ] NPM 배포