import OOTD from './assets/OOTD.jpeg'
import advance from './assets/advanceglowoil.jpeg'
import vaseline from './assets/vaseline.jpeg'
import touch from './assets/touch.jpeg'
import Olay from './assets/Olay.jpeg'
import Mixsoon from './assets/Mixsoon.jpeg'
import Glamoflx from './assets/Glamoflx.jpeg'
import bismidkoji from './assets/bismidkoji.jpeg'
import Aveeno from './assets/Aveeno.jpeg'
import profile from './assets/profile.jpeg'

export default function GmoxyBeautyWebsite() {
  return (
    <div className="min-h-screen bg-[#fff8f8] text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white py-24 px-6 md:px-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-300 opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-pink-200 text-pink-800 text-sm font-semibold mb-6 shadow">
              Premium Skincare Brand In Lagos
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Gmoxy <span className="text-pink-600">Beauty</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
              Discover luxury skincare, glowing makeup, premium lashes, lip glosses,
              and beauty essentials crafted to elevate your confidence and style.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl transition">
                Shop Collection
              </button>

              <button className="border-2 border-pink-600 text-pink-700 px-8 py-4 rounded-2xl font-bold hover:bg-pink-100 transition">
                Explore Products
              </button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-3xl font-black">10k+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">4.9★</h3>
                <p className="text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={Glamoflx}
              alt="Beauty Products"
              className="rounded-[40px] shadow-2xl object-cover h-[650px] w-full"
            />

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl w-72">
              <p className="text-sm text-gray-500 mb-2">Best Seller</p>
              <h3 className="font-black text-2xl mb-2">Glamfox rice niacinamide </h3>
              <p className="text-pink-600 text-3xl font-black">₦12,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-pink-100 px-6 md:px-16 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-3xl font-black text-pink-600">Gmoxy Beauty</h2>

        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          <a href="#products" className="hover:text-pink-600">Products</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#testimonials" className="hover:text-pink-600">Reviews</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition">
          Shop Now
        </button>
      </nav>

      {/* FEATURE SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            ['🚚', 'Fast Delivery'],
            ['✨', 'Luxury Quality'],
            ['💖', 'Trusted Brand'],
            ['🛍️', 'Affordable Prices'],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-pink-50 rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">{item[0]}</div>
              <h3 className="font-black text-xl">{item[1]}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6 md:px-16 bg-[#fff3f6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-pink-600 font-bold uppercase tracking-widest mb-3">
              Our Collection
            </p>
            <h2 className="text-5xl font-black mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully selected beauty essentials designed for elegance, confidence,
              and luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Radiance Foundation',
                price: '₦18,500',
                image:
                  Glamoflx,
              },
              {
                name: 'Touch bright and  clear cream',
                price: '₦25,000',
                image:
                  touch,
              },
              {
                name: 'Vaseline shimmer oil',
                price: '₦11,000',
                image:
                 vaseline,
              },
               {
                name: 'Aveeno body oil',
                price: '₦17,500',
                image:
                 Aveeno,
              },
               {
                name: 'Bismid Koji+gluthatione night face cream',
                price: '₦13,500',
                image:
                 bismidkoji,
              },
               {
                name: 'Mixsoon bean essence 50ml',
                price: '₦17,500',
                image:
                 Mixsoon,
              },
               {
                name: 'Olay vitamine C body wash',
                price: '₦17,500',
                image:
                 Olay,
              },
               {
                name: 'OOTD  Brightening vitamin c lotion',
                price: '₦15,000',
                image:
                 OOTD,
              },
               {
                name: 'Advanced glow body oil',
                price: '₦8,500',
                image:
                 advance,
              },
            ].map((product, i) => (
              <div
                key={i}
                className="group bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-pink-600 text-3xl font-black">{product.price}</p>
                    <button className="bg-pink-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-pink-700 transition">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src={profile}
            alt="Beauty Woman"
            className="rounded-[40px] shadow-2xl h-[600px] object-cover"
          />

          <div>
            <p className="uppercase tracking-widest text-pink-600 font-bold mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-black mb-6 leading-tight">
              Beauty That Defines Confidence
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Gmoxy Beauty, we believe beauty should feel luxurious, empowering,
              and unforgettable. We provide high-quality cosmetic products that help
              every woman glow with confidence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {['Premium Makeup', 'Luxury Skincare', 'Affordable Pricing', 'Fast Lagos Delivery'].map((item, i) => (
                <div key={i} className="bg-pink-50 p-5 rounded-2xl font-bold shadow">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 md:px-16 bg-[#fff3f6]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-widest text-pink-600 font-bold mb-3">
            Testimonials
          </p>

          <h2 className="text-5xl font-black mb-16">What Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Absolutely amazing quality. My skin glows beautifully!',
              'Best beauty brand I have purchased from in Lagos.',
              'Luxury feel and affordable prices. Highly recommended!',
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-[35px] shadow-xl">
                <div className="text-5xl mb-5">💖</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">“{review}”</p>
                <h4 className="font-black text-xl">Verified Customer</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-6">Join The Beauty Community</h2>

          <p className="text-xl opacity-90 mb-10">
            Subscribe for exclusive beauty tips, product drops, and discounts.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-5 rounded-2xl text-gray-900 w-full md:w-[450px] outline-none"
            />

            <button className="bg-black text-white px-8 py-5 rounded-2xl font-bold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-widest text-pink-600 font-bold mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-black mb-8">Let’s Connect</h2>

            <div className="space-y-6 text-lg">
              <div className="bg-pink-50 p-6 rounded-2xl shadow">
                <strong>Email:</strong> ebuenyigoodness@gmail.com
              </div>

              <div className="bg-pink-50 p-6 rounded-2xl shadow">
                <strong>Location:</strong> Lagos, Nigeria
              </div>

              <div className="bg-pink-50 p-6 rounded-2xl shadow">
                <strong>Instagram:</strong> @gmoxybeauty
              </div>
            </div>
          </div>

          <form className="bg-[#fff3f6] p-10 rounded-[35px] shadow-2xl space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-5 rounded-2xl border border-pink-100 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-5 rounded-2xl border border-pink-100 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-5 rounded-2xl border border-pink-100 outline-none"
            ></textarea>

            <button className="w-full bg-pink-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-pink-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-black text-pink-400 mb-2">Gmoxy Beauty</h2>
            <p className="text-gray-400">
              Luxury cosmetics brand crafted for elegance and confidence.
            </p>
          </div>

          <div className="flex gap-6 text-lg">
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-pink-400">TikTok</a>
            <a href="https://wa.me/2349021947521" className="hover:text-pink-400">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
