export const useRoleStore = defineStore("role", () => {
  const role = ref({
    type: "",
    price: 0,
  });

  function updateRole({ type, price }: { type: string; price: number }) {
    role.value.price = price;
    role.value.type = type;
  }

  return { role, updateRole };
});
