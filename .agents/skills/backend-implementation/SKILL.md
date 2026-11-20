---
name: backend-implementation
description: Implement backend services. Use when asked to build or fix server behavior, API endpoints, request validation, domain logic, or persistence.
metadata:
  internal: true
---

# Backend Implementation

대상 저장소는 요청에 명시한 곳을 사용하며 기본값은 현재 작업공간이다. 작업 요청, 제약, 완료 조건을 입력으로 받는다. 직접 호출에서는 .memory를 작업 범위에서 제외한다.

1. 프로젝트 지침과 변경 대상의 호출자, 데이터 흐름, 근접 테스트를 확인한다. 요청·응답·오류 계약과 기존 입력의 동작을 파악한 뒤 기존 검증·서비스·저장 로직을 재사용한다.
2. 요청에 포함된 계약 변경을 구현하고 기존 호출자가 의존하는 다른 동작을 보존한다. 저장 상태가 바뀌면 관련 제약과 부분 실패·재시도의 결과를 확인한다. FastAPI에서는 대상 저장소의 인증 의존성, 응답 모델, 상태 코드 관례를 우선한다.
3. 대상 저장소의 기존 검사 명령으로 변경한 진입점을 검증한다. 계약이 바뀌면 해당 정상 응답과 오류 응답을 확인한다. 다른 스킬이나 패키지는 자동 설치하지 않는다.

호출자에게 변경 파일과 동작, 실행한 검증과 결과, 확인하지 못한 항목·실패·차단 원인을 돌려준다. 일부만 수정한 경우 실제 반영된 범위를 함께 돌려준다.

참고한 절차는 [API and Interface Design](https://github.com/addyosmani/agent-skills/blob/63128d0d4515cc074f304c3a429343c5afeff978/skills/api-and-interface-design/SKILL.md)과 [Microsoft FastAPI Router](https://github.com/microsoft/skills/blob/4a2873faffc1b101a33a0b59c24713d4ed78142f/.github/plugins/azure-sdk-python/skills/fastapi-router-py/SKILL.md)에서 확인할 수 있다.
