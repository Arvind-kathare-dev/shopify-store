// sections/CTAForm.tsx
import Container from "@/components/Container";

export default function CTAForm() {
  return (
    <section className="py-20 bg-purple-800 text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Ready to launch your app?
            </h2>
          </div>

          <div className="bg-white text-black p-6 rounded-xl">
            <input className="w-full border p-2 mb-3" placeholder="Name" />
            <input className="w-full border p-2 mb-3" placeholder="Email" />
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Continue
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}