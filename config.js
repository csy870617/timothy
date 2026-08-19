/*
 * 구글 로그인 · 자료 동기화 설정
 *
 * 아래 firebase 값을 채우면 구글 계정으로 로그인해서 쓰고,
 * 자료가 구글(Firebase)에 저장되어 휴대폰·노트북 어디서나 같은 내용을 보게 됩니다.
 * 비워 두면 로그인 없이 "이 브라우저에만 저장" 모드로 동작합니다.
 *
 * 설정 방법은 README.md 의 "구글 로그인 · 자료 동기화 설정" 을 보세요.
 * (firebase 값은 비밀번호가 아니라 공개되어도 되는 주소값입니다.
 *  실제 보호는 Firestore 보안 규칙과 승인된 도메인 설정이 담당합니다.)
 */
window.CHURCH_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // 로그인을 허용할 사람의 구글 이메일 (비워 두면 로그인한 누구나 자기 자료를 씁니다)
  allowedEmails: [],

  // 여러 사람이 같은 명단을 함께 보려면 같은 이름을 적어 주세요. 예) "seoul-1교구"
  // 비워 두면 로그인한 사람마다 자기 자료만 봅니다.
  spaceId: "",

  firebaseVersion: "11.6.0"
};
