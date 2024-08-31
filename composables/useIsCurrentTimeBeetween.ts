export default function useIsCurrentTimeBetween({
  startHour,
  endHour,
}: {
  startHour: number;
  endHour: number;
}) {
  const currentHour = new Date().getHours();
  return currentHour >= startHour && currentHour < endHour;
}
