export default function createActionsTypes(base: string) {
  return {
    REQUEST: `${base}_REQUEST`,
    FULFILLED: `${base}_FULFILLED`,
    REJECTED: `${base}_REJECTED`,
    CANCELLED: `${base}_CANCELLED`,
  };
}
