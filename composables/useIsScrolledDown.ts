export function useIsScrolledDown(ref: Ref<boolean>) {
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop === 0) ref.value = false;
    else ref.value = true;
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
}
