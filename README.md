# 교인 심방 관리

그룹 식구 한 사람 한 사람을 기억하고, 기도하고, 연락하기 위한 한 장짜리 페이지입니다.

- **그룹별 명단** — 그룹마다 이름이 쭉 나열되고, 최근 심방일과 경과일이 한눈에 보입니다.
- **심방 기록** — 심방 날짜, 구분(전화·문자·교회·가정·병원), 심방 내용 (날짜만 있어도 저장됩니다)
- **성도 등록** — 이름, 직분, 그룹(펼침 메뉴에서 선택), 연락처, 기도 제목 메모
- **관심 표시** — 명단에서 ♡ 를 눌러 바로 켜고 끔 (♥ 는 더 마음 써야 할 분)
- **심방이 오래된 분이 위로** — 각 그룹 안에서 마지막 심방이 오래된 순으로 정렬
- **구간별 보기** — 검색창 옆 **심방** 메뉴로 그 구간의 분만 모아 봅니다.
- **그룹 편집** — 그룹을 추가·삭제하고 끌어서 순서 조정 (삭제하면 그 그룹 성도는 미배정으로 이동)
- **검색 · 그룹 필터**
- **삭제 폴더** — 성도를 지우면 바로 사라지지 않고 삭제 폴더로 들어가며, 심방 기록까지 그대로 되돌릴 수 있습니다 (오른쪽 위 🗑)
- **화면 색** — 오른쪽 위 이모지 단추로 ☀️ 낮 ↔ 🌙 밤 전환 (쓰시는 기기에 기억됩니다)

## 심방 간격 구간

| 구간 | 색 | 뜻 |
| --- | --- | --- |
| 30일 이내 | 초록 | 최근에 만난 분 |
| 60일 이내 | 노랑 | 슬슬 안부를 여쭐 때 |
| 90일 이내 | 주황 | 이번 주에 연락드릴 분 |
| 그 이상 | 빨강 | 90일 넘게 못 뵌 분 |
| 기록 없음 | 회색 | 아직 심방 기록이 없는 분 |

**심방** 메뉴는 각 구간에 몇 분이 있는지 숫자를 함께 보여 줍니다.

## 사용 방법

1. 배포된 주소(또는 `index.html` 파일)를 브라우저에서 엽니다.
2. **＋ 성도 추가** 로 교인을 등록합니다.
3. 명단에서 이름을 누르면 상세 창이 열리고, 그 안에서 심방 날짜와 내용을 기록합니다.
4. 그룹은 **전체 그룹** 메뉴나 성도 창의 그룹 메뉴 맨 아래 **⚙ 그룹 편집…** 에서 만들고, 지우고, 끌어서 순서를 바꿉니다. 휴대폰에서는 길게 누른 뒤 끄시면 됩니다.

---

## GitHub Pages 배포

이 저장소에는 배포용 GitHub Actions 워크플로(`.github/workflows/pages.yml`)가 들어 있습니다.
Pages 를 켜는 것만 저장소 주인이 직접 해 주셔야 합니다. (워크플로 토큰에는 Pages 를 처음 켜는 권한이 없습니다.)

1. GitHub 저장소 → **Settings** → 왼쪽 메뉴 **Pages**
2. **Build and deployment → Source** 를 **GitHub Actions** 로 선택
3. **Actions** 탭 → `Deploy to GitHub Pages` → 실패한 최근 실행에서 **Re-run all jobs**
   (또는 아무 내용이나 한 번 더 push)
4. 초록불이 되면 배포 완료

주소는 `https://<사용자이름>.github.io/<저장소이름>/` 입니다.
이 저장소라면 <https://csy870617.github.io/timothy/> 입니다.

> 1번을 하기 전에 워크플로를 돌리면 `Create Pages site failed - Resource not accessible by integration`
> 으로 실패합니다. Pages 를 켠 뒤 다시 실행하면 정상 배포됩니다.

> 저장소가 **Public** 이면 주소를 아는 누구나 페이지를 열 수 있습니다.
> 아래 구글 로그인을 설정하면 허용된 계정만 자료를 볼 수 있습니다.
> 로그인을 설정하기 전에는 성도 자료를 입력하지 않는 편이 안전합니다.
> (저장소를 Private 으로 두고 Pages 를 쓰려면 GitHub 유료 플랜이 필요합니다.)

---

## 구글 로그인 · 자료 동기화 설정

`config.js` 를 채우면 **구글 계정으로 로그인**해서 쓰고, 자료가 구글(Firebase)에 저장되어
휴대폰·노트북 어디서나 같은 내용을 보게 됩니다. 비워 두면 로그인 없이 **이 브라우저에만 저장**됩니다.

### 1. Firebase 프로젝트 만들기

1. <https://console.firebase.google.com> 접속 → **프로젝트 추가** (이름은 자유롭게, 예: `church-care`)
2. 왼쪽 **빌드 → Authentication → 시작하기 → Sign-in method → Google** 을 사용 설정
3. 왼쪽 **빌드 → Firestore Database → 데이터베이스 만들기** → 위치 선택 →
   **프로덕션 모드**로 시작 (규칙은 3단계에서 넣습니다)
4. **프로젝트 설정(톱니바퀴) → 내 앱 → 웹 앱 추가(`</>`)** → 앱 등록 후 나오는
   `firebaseConfig` 값을 복사

### 2. `config.js` 채우기

```js
window.CHURCH_CONFIG = {
  firebase: {
    apiKey: "AIza...",
    authDomain: "church-care.firebaseapp.com",
    projectId: "church-care",
    storageBucket: "church-care.appspot.com",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:abcdef"
  },
  allowedEmails: ["mypastor@gmail.com"],   // 로그인을 허용할 구글 이메일
  spaceId: "",                             // 여러 명이 같은 명단을 볼 때만 사용 (아래 참고)
  firebaseVersion: "11.6.0"
};
```

`firebase` 값은 비밀번호가 아니라 공개되어도 되는 주소값입니다. 실제 보호는 아래 보안 규칙과
승인된 도메인 설정이 담당하므로, GitHub 에 그대로 올리셔도 됩니다.

### 3. Firestore 보안 규칙

Firestore → **규칙** 탭에 아래 내용을 넣고 **게시** 합니다. 허용한 계정만 자료를 읽고 쓸 수 있습니다.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /spaces/{spaceId} {
      // 개인 자료: 본인만
      allow read, write: if request.auth != null
                         && spaceId == 'user-' + request.auth.uid;

      // 함께 쓰는 명단: 아래 이메일만 (spaceId 와 이메일을 실제 값으로 바꾸세요)
      allow read, write: if request.auth != null
                         && spaceId == '1교구'
                         && request.auth.token.email in [
                              'mypastor@gmail.com',
                              'leader1@gmail.com'
                            ];
    }
  }
}
```

### 4. 승인된 도메인 등록

Authentication → **설정 → 승인된 도메인** 에 GitHub Pages 주소를 추가합니다.
예) `myname.github.io` (`localhost` 는 기본으로 들어 있습니다.)

### 여럿이 같은 명단을 함께 볼 때

여러 사람이 한 명단을 같이 본다면 `config.js` 의 `spaceId` 에 같은 이름(예: `"1교구"`)을 적고,
위 보안 규칙의 `spaceId` 와 이메일 목록을 맞춰 주세요. 한 사람이 심방을 기록하면
다른 분 화면에도 곧바로 반영됩니다. `spaceId` 를 비워 두면 로그인한 사람마다 자기 자료만 봅니다.

로그인 후 이 브라우저에 이전에 입력해 둔 자료가 있으면, 구글 계정으로 옮길지 물어봅니다.

---

## 자료 보관 위치 정리

| 설정 | 저장 위치 | 다른 기기에서 |
| --- | --- | --- |
| `config.js` 비워 둠 | 이 브라우저 안(localStorage) | 안 보임 |
| `config.js` 채움 | 구글 Firebase (로그인 계정 기준) | 로그인하면 바로 보임 |

성도의 개인 정보가 담기므로 공용 컴퓨터에서는 사용 후 로그아웃해 주시기 바랍니다.
