function useScrollLock({
  withoutScrollCompensation = false,
}: {
  withoutScrollCompensation?: boolean;
}) {
  function lockScroll() {
    document.body.style.overflow = "hidden";
    if (!withoutScrollCompensation) {
      const scrollBarCompensation =
        window.innerWidth - document.body.offsetWidth;
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }
  }

  function unlockScroll() {
    document.body.style.overflow = "";

    if (!withoutScrollCompensation) {
      document.body.style.paddingRight = "";
    }
  }

  return { lockScroll, unlockScroll };
}

export default useScrollLock;
