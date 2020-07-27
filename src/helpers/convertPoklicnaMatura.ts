const convert23 = (val: number) => {
  switch (val) {
    case 23:
      return 100;
    case 22:
      return 98.3;
    case 21:
      return 96.7;
    case 20:
      return 95;
    case 19:
      return 93;
    default:
      return val * 5;
  }
};

const convert20 = (val: number) => {
  return val * 5;
};

export { convert23, convert20 };
