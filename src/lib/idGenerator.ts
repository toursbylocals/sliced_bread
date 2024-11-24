import { ID_LENGTH } from "@/app/consts";

export function generateOrderId(length = ID_LENGTH) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);

    result += alphabet[randomIndex];
  }

  return result;
}
