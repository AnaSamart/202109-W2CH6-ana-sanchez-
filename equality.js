function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }
  return Object.is(a, b);
}

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, '1'));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals('water', 'oil'));
