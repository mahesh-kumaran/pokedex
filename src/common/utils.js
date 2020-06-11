export function makeThreeDigits(orderNo) {
  orderNo = String(orderNo);
  if (orderNo.toString().length == 1) {
    return "# 00" + orderNo;
  }
  if (orderNo.toString().length == 2) {
    return "# 0" + orderNo;
  }
  return "# " + orderNo;
}

export function convertUpperCase(name) {
  if (name) {
    return name.toUpperCase();
  }
}
