// sections/Features.tsx
import Container from "@/components/Container";

export default function Features() {
  const items = [
    "True Native App",
    "Push Notifications",
    "AI Personalization",
    "Shopify Sync",
    "Built-in CRO",
  ];

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold mb-12">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}