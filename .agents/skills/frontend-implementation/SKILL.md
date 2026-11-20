---
name: frontend-implementation
description: Implement frontend UI. Use when asked to build or fix a screen, component, form interaction, responsive layout, or client-side behavior.
metadata:
  internal: true
---

# Frontend Implementation

대상 저장소는 요청에 명시한 곳을 사용하며 기본값은 현재 작업공간이다. 작업 요청, 제약, 완료 조건을 입력으로 받는다. 직접 호출에서는 .memory를 작업 범위에서 제외한다.

1. 프로젝트 지침과 현재 화면, 호출부, 기존 컴포넌트·스타일을 확인한다. 새 화면이나 리디자인이면 대상 사용자와 화면에서 할 일을 확인하고 기존 UI를 수정할 때는 해당 디자인 규칙을 따른다.
2. 변경하는 상호작용의 정상 흐름과 적용되는 로딩·빈 상태·오류 상태를 확인한다. 폼이나 포커스가 바뀌면 키보드 동작을 검증하고, 레이아웃이 바뀌면 해당 화면 폭을 확인한다. API에 의존하는 변경은 현재 요청·응답·오류 계약을 확인한다.
3. 해당 브라우저 기능의 지침이 필요하고 `modern-web-guidance`를 사용할 수 있으면 구현 전에 관련 가이드를 확인한다. 도구가 없으면 프로젝트의 브라우저 지원 기준과 사용 가능한 공식 문서를 따른다. 다른 스킬이나 패키지는 자동 설치하지 않는다.
4. 대상 저장소의 기존 검사 명령을 사용한다. 화면 동작이 바뀌면 가능한 환경에서 렌더링과 실제 상호작용을 확인한다.

호출자에게 변경 파일과 동작, 실행한 검증과 결과, 확인하지 못한 항목·실패·차단 원인을 돌려준다. 일부만 수정한 경우 실제 반영된 범위를 함께 돌려준다.

참고한 절차는 [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance/blob/64a6d708f5a43f2cd3fde5d4d7db3905ba1bdf65/skills/modern-web-guidance/SKILL.md)와 [Anthropic Frontend Design](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/SKILL.md)에서 확인할 수 있다.
