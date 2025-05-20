export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-white text-red-900 p-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center border-b-4 border-red-600 pb-6">
          <h1 className="text-5xl font-bold mb-4">Discover the Flavor</h1>
          <p className="text-lg italic text-red-700">A throwback to the golden age of burgers — handcrafted, honest, unforgettable.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-3">Premium Cuts, Ground Daily</h2>
            <p>
              Our patties are made from carefully selected beef cuts, ground fresh every single day for unmatched juiciness and taste.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-3">Locally Sourced Ingredients</h2>
            <p>
              We partner with local farms and bakeries to bring the freshest buns, veggies, and toppings straight to your plate.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-3">Old-School Vibes, Modern Taste</h2>
            <p>
              Inspired by 1950s diners, we blend nostalgic charm with gourmet flavors — because burgers should be both classic and bold.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-3">Sustainably Delicious</h2>
            <p>
              From eco-friendly packaging to ethical sourcing, we're committed to serving burgers that are good for you and the planet.
            </p>
          </div>
        </section>

        <footer className="text-center mt-16 text-sm text-red-600 border-t border-red-300 pt-4">
          © {new Date().getFullYear()} Retro Burger Co. — All rights reserved.
        </footer>
      </div>
    </div>
  )
}
