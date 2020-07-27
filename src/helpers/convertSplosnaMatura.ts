export function convertSplosnaMatura(val: number) {
  switch (val) {
    case 34:
      return 100;
    case 33:
      return 99.2;
    case 32:
      return 98.3;
    case 31:
      return 97.5;
    case 30:
      return 96.7;
    case 29:
      return 95.8;
    case 28:
      return 95;
    case 27:
      return 94;
    case 26:
      return 93;
    case 25:
      return 92;
    case 24:
      return 91;
    case 23:
      return 90;
    case 22:
      return 87.5;
    case 21:
      return 85;
    case 20:
      return 80;
    case 19:
      return 75;
    case 18:
      return 70;
    case 17:
      return 67.5;
    case 16:
      return 65;
    case 15:
      return 60;
    case 14:
      return 55;
    case 13:
      return 50;
    case 12:
      return 47.5;
    case 11:
      return 45;
    case 10:
      return 40;
    default:
      alert("Seštevek ocen ne sme presegati 34 točk!");
      return null;
  }
}
