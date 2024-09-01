export const useScreenStore = defineStore("selectedScreen", () => {
  const selectedScreen = ref({
    name: "",
  });

  function setSelectedScreen({ name }: { name: string }) {
    selectedScreen.value.name = name.toLocaleLowerCase();
  }

  return { selectedScreen, setSelectedScreen };
});
