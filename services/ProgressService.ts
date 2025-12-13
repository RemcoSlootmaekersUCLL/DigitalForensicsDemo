import Cookies from "js-cookie";

const KEY = "puzzleProgress"; // slaat de hoogste vrijgespeelde puzzel op

const getProgress = (): number => {
  const val = Cookies.get(KEY);
  return val ? Number(val) : 0;
};

const unlock = (id: number) => {
  const current = getProgress();
  if (id > current) Cookies.set(KEY, id.toString());
};

const isUnlocked = (id: number): boolean => {
  return getProgress() >= id;
};

const reset = () => Cookies.remove(KEY);

export default { getProgress, unlock, isUnlocked, reset };