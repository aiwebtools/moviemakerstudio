
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto text-center max-w-3xl">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-4">
          Start Creating
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Write Your Masterpiece?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          From concept to final draft, our AI assistant guides you through every step of creating an industry-standard, award-worthy screenplay.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-medium">
            Start Writing Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
