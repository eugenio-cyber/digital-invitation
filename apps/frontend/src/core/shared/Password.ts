export default class Password {
  static new(length: number = 8): string {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const especiais = "!@#$%&*";

    const groups = [lowercase, uppercase, numbers, especiais];
    const password = [];

    for (let i = 0; i < length; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }

    return password.join("");
  }
}
