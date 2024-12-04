import OrderDetailsController from "./OrderDetailsController";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <OrderDetailsController id={id} />;
}
