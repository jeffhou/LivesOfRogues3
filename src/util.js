export function safeRecoilUpdate(arrowFunction) {
  return (...params) => {
    setTimeout(() => arrowFunction(...params), 0);
  };
}

export function mapClassName(classNameToBooleanMap) {
  return Object.entries(classNameToBooleanMap)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(" ");
}
