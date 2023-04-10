# SSUNG-DELIVERY-FRONT

# ⚽️ Our Goal

- Prioritize access to a new technology stack over the completeness of the code.
- Implement it by self rather than the library.
- Solve the inconvenience related to development.

# 🛠️ Technology & Architecture

### React18

**Why**

- The goal of the FE team is to actively utilize the new technology stack.
- React officially offers a variety of APIs compared to other stacks.
- React has the largest community, so I expect it to be easy to troubleshoot.
- Solve any regrets from past React projects.
- Learn the features of React18
- Reference
  - [Prepare for React 18](https://medium.com/naver-place-dev/react-18%EC%9D%84-%EC%A4%80%EB%B9%84%ED%95%98%EC%84%B8%EC%9A%94-8603c36ddb25)

### PNPM

**Why**

- To protect my MacBook SSD life from npm, where node_modules capacity grows dramatically
- As a drop-in-replacement of npm, familiar usage environment
- Contains most of YARN and NPM features
  - PNPM don't support zero installation, which is a pity

# 🔑 Key Implementations

## React

### useModal

- Previous problem
  - To manage each modal, additional state and logic are required for each parent component
- Idea
  - Create a component that can manage all of the view, state, and logic in a single modal
- Implementation
  - Implement a hook that manages the state of the modal and renders the modal based on the state
- Result
  - The readability and maintainability of the code for managing modals has improved

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

- Previous problem
  - Hassle of processing events andStatus for managing form in React.
- Idea
  - Manage the type and status required for form in one place, and separate the status and view
- Implementation

  - Returns the relevant values to an object so that the input can set the required elements at once.
  - Leverages hooks that allow you to manage status and logic independently
    Implementation
  - Hook implementation that returns status and event handlers when you pass the type and initial value of the form data you want to receive to the hook

- Result
  - Improved readability and maintenance of form management code
    ![image](https://user-images.githubusercontent.com/29947261/230732047-b11d659b-01b0-4cb4-8ab5-b27ee5ca8ff5.png)

### useFetch (in Progress)

- Previous problem
  - Burden of using libraries like tanStackQuery in smaller apps.
    I wanted to use logic together, such as storing data in a browser, importing data from outside, etc.
- Idea
  - Returning data from local storage at the same time as fetching data, updating the state as it arrives at a later time, while remaining immutable
  - Reuse (caching) existing data when other components request the same data using global state management as a single tone.

### Korean survey classification lib

- Previous problem
  - The characteristics of the Korean language that come with different surveys for each word, such as the problem in "iPhone is being shipped."
- Idea
  - Return an appropriate investigation according to the presence or absence of an end, referring to the actual method of distinguishing investigations in Korean.
- Implementation
  - Implementing a function that returns an appropriate investigation based on whether or not it is terminated
- Result
  - "픽셀 폰를" => "픽셀 폰을"

# 📱 Result

| **User**                                                                                                                        | **User Card Stack**                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/29947261/230728786-617d2ef9-c1c7-4f7d-ada8-7d439866e428.png" width="400" /> | <img src="https://user-images.githubusercontent.com/29947261/230728372-85a18f5e-90de-4104-b93e-eb7035b52997.gif" width="400" /> |

| **User Success**                                                                                                                | **User Fail**                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/66112716/230749692-1cc23c11-102a-4d31-a6ee-48c90b93fd12.gif" width="400" /> | <img src="https://user-images.githubusercontent.com/66112716/230749729-8e7154b0-c10f-4f13-bc93-86b8e7663dcd.gif" width="400" /> |

| **Shipper**                                                                                                                     | **Shipper Component**                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/29947261/230728735-528f68cd-17c8-4292-bb6a-cfdb559a8511.png" width="400" /> | <img src="https://user-images.githubusercontent.com/29947261/230728377-9d7ee222-f0b5-4ad8-863f-c3cd3453edcf.gif" width="400" /> <img src="https://user-images.githubusercontent.com/29947261/230728380-edf5cb1e-b7db-4365-8a5b-ff5002ce7686.gif" width="400" /> |

| **Sender Client**                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| ![Sender 클라이언트](https://user-images.githubusercontent.com/66112716/230749552-e8fdb8e7-27e7-4ce9-9b75-637943c7497e.gif) |

# 📌 Going Forward

### Code Refactoring

- Reduce external library dependencies (e.g. design system)
- Divide components into more headless structures
- Improve common library architecture

### Utilizing Goals Not Yet Introduced

- [ ] React18
  - [ ] Suspense, ErrorBoundary
  - [ ] Dynamic import, Lazy Load
  - [ ] Sentry
  - [ ] SSR
  - [ ] Utilize custom hooks
  - [ ] Introduce Storybook
- [x] Monorepo
- [ ] Incorporate CI/CD
- [ ] NPM Deployment
