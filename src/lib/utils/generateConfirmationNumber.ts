// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const generateConfirmationNumber = (): string =>
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  `BEV-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
