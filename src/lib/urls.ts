export const urls = {
  home: () => "/",
  orders: {
    details: (orderId: string) => `/orders/${orderId}`,
  },
  privacyPolicy: () => "/privacy-policy",
};
