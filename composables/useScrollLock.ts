function useScrollLock({
  withoutScrollCompensation,
}: {
  withoutScrollCompensation: boolean;
}) {
  function lockScroll() {
    if (!withoutScrollCompensation) {
      const scrollBarCompensation =
        window.innerWidth - document.body.offsetWidth;
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    if (!withoutScrollCompensation) {
      document.body.style.paddingRight = "";
    }
    document.body.style.overflow = "";
  }

  return { lockScroll, unlockScroll };
}

export default useScrollLock;
