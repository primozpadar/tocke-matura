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
    case 18:
      return 90;
    case 17:
      return 85;
    case 16:
      return 80;
    case 15:
      return 75;
    case 14:
      return 70;
    case 13:
      return 65;
    case 12:
      return 60;
    case 11:
      return 50;
    case 10:
      return 45.7;
    case 9:
      return 45;
    case 8:
      return 40;
    default:
      throw Error;
  }
};

const convert20 = (val: number) => {
  switch (val) {
    case 20:
      return 100;
    case 19:
      return 95;
    case 18:
      return 90;
    case 17:
      return 85;
    case 16:
      return 80;
    case 15:
      return 75;
    case 14:
      return 70;
    case 13:
      return 65;
    case 12:
      return 60;
    case 11:
      return 50;
    case 10:
      return 45.7;
    case 9:
      return 45;
    case 8:
      return 40;
    default:
      throw Error;
  }
};

export { convert23, convert20 };
