export const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("menu")); // 저장된 메뉴가 없을 경우 빈 배열 반환
  },
}

export default store;