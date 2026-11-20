# Task: T01 조회 API와 화면

## Metadata

- Plan ID: 2026-11-20-lookup
- Phase ID: P01-lookup
- Task ID: P01-T01
- Blueprint Revision: 1
- Commit Policy: none

## Status: pending

## Goal

조회 API와 그 API를 사용하는 화면을 공급자가 승인한 공용 계약 v2에 맞춘다.

## Scope

src/api.mjs와 src/ui.mjs를 변경할 수 있다. provider-contract.json은 공급자가 제공한다.

## Constraints

### Must

- 첫 코드 변경 전에 `node verify.mjs`로 provider-contract.json의 v2 계약을 확인한다. 계약을 검증하지 못하면 계약 승인본을 받을 때까지 구현을 중단한다.

### Must Not

- 공급자 파일이나 검사를 수정하지 않는다.

## Dependencies

[]

## Guide Alignment

- Project Guide Alignment: Compliant

## Implementation

API를 승인된 요청·응답·오류 계약으로 변경하고 그 결과를 화면에서 처리한다.

## Acceptance Criteria

- [ ] 승인된 공용 계약을 API와 화면에 적용한다.
- [ ] 구현과 최소 검증의 결과를 기록한다.

## Workflow

| Stage | Applicability | Reason / Trigger | Status | Evidence |
| --- | --- | --- | --- | --- |
| implementation | 필수 | API·화면 구현 | pending | implementation.md |
| test | 필수 | 후속 검증 | pending | test.md |

## Validation

- `node verify.mjs`

## Progress

- Commit Status: pending
- Resume Stage: implementation
