interface ScreenStore {
  selectedScreen: { name: string };
  setSelectedScreen: ({ name }: { name: string }) => void;
}

interface UseScrollToSectionParams {
  elemRef: HTMLElement | null;
  screenStore: ScreenStore;
  screenName: string;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

export default function useScrollToSection({
  elemRef,
  screenStore,
  screenName,
  block = "nearest",
  inline = "nearest",
}: UseScrollToSectionParams) {
  watch(
    () => toRefs(screenStore.selectedScreen),
    async () => {
      await nextTick();
      if (elemRef && screenStore.selectedScreen.name === screenName) {
        elemRef.scrollIntoView({ behavior: "smooth", block, inline });

        screenStore.setSelectedScreen({ name: "" });
      }
    }
  );
}
