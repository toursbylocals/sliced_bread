import HeroSection from "./components/hero/hero-section";
import OrderForm from "./components/order/order-form";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <div id="home">
        <HeroSection />
      </div>
      <div id="order">
        <OrderForm />
      </div>
    </main>
  );
}
