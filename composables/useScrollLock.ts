function useScrollLock() {
  function lockScroll() {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }

  function unlockScroll() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }

  return { lockScroll, unlockScroll };
}

export default useScrollLock;
