/*
 * 구글 로그인 · 자료 동기화 설정
 *
 * firebase 값이 채워져 있으면 구글 계정으로 로그인해서 쓰고,
 * 자료가 Firebase 에 저장되어 휴대폰·노트북 어디서나 같은 내용을 보게 됩니다.
 * (firebase 값은 비밀번호가 아니라 공개되어도 되는 주소값입니다.
 *  실제 보호는 Firestore 보안 규칙 firestore.rules 와 승인된 도메인 설정이 담당합니다.)
 */
window.CHURCH_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBvO65BgmdnfiGZxgCEbjuKtdyu1IIIalc",
    authDomain: "timothy-3f232.firebaseapp.com",
    projectId: "timothy-3f232",
    storageBucket: "timothy-3f232.firebasestorage.app",
    messagingSenderId: "393703514833",
    appId: "1:393703514833:web:ff01202aaaf9063c479bf0",
    measurementId: "G-60RKN7Y1Y6"
  },

  // 로그인을 허용할 구글 이메일. 비워 두면 로그인한 사람마다 자기 자료만 쓰게 됩니다.
  // 예) ["mypastor@gmail.com", "leader1@gmail.com"]
  allowedEmails: [],

  // 여러 사람이 같은 명단을 함께 볼 때만 사용합니다. 예) "1교구"
  // 비워 두면 로그인한 사람마다 자기 자료만 봅니다.
  // 값을 넣을 때는 firestore.rules 의 spaceId 와 이메일 목록도 함께 맞춰 주세요.
  spaceId: "",

  firebaseVersion: "12.17.1"
};
