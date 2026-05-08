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
import active from './assets/active.jpeg'
import img31k from './assets/new/31k.jpeg'
import anua from './assets/new/anua.jpeg'
import april from './assets/new/april.jpeg'
import aqua from './assets/new/aqua.jpeg'
import arden from './assets/new/arden.jpeg'
import carrot from './assets/new/carrot.jpeg'
import cerave from './assets/new/cerave.jpeg'
import cloud9 from './assets/new/cloud9.jpeg'
import corx from './assets/new/corx.jpeg'
import corxAll from './assets/new/corxall.jpeg'
import corxDual from './assets/new/corxdual.jpeg'
import corxSnail from './assets/new/corxsnail.jpeg'
import dove from './assets/new/dove.jpeg'
import imgE45 from './assets/new/E45.jpeg'
import eos from './assets/new/eos.jpeg'
import faster from './assets/new/faster.jpeg'
import gluthatione from './assets/new/gluthatione.jpeg'
import koji from './assets/new/koji.jpeg'
import kojiWhite from './assets/new/kojiwhite.jpeg'
import maryMay from './assets/new/mary&may.jpeg'
import medix from './assets/new/medix.jpeg'
import naturium from './assets/new/naturium.jpeg'
import naturiumRestoring from './assets/new/naturiumrestoring.jpeg'
import niacinamide from './assets/new/niacinamide.jpeg'
import nivea from './assets/new/nivea.jpeg'
import nui from './assets/new/nui.jpeg'
import olaySuper from './assets/new/olaysuper.jpeg'
import ordinary from './assets/new/ordinary.jpeg'
import pro from './assets/new/pro.jpeg'
import prolab from './assets/new/prolab.jpeg'
import skeenpoint from './assets/new/skeenpoint.jpeg'
import snapchat from './assets/new/snapchat.jpeg'
import timeless from './assets/new/timeless.jpeg'
import vsp from './assets/new/vsp.jpeg'
import { useState } from 'react'


export default function GmoxyBeautyWebsite() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      name: 'Active Carvier oil',
      price: '₦6,500',
      image: active,
    },
    {
      name: 'Touch bright and  clear cream',
      price: '₦25,000',
      image: touch,
    },
    {
      name: 'Vaseline shimmer oil',
      price: '₦11,000',
      image: vaseline,
    },
    {
      name: 'Aveeno body oil',
      price: '₦17,500',
      image: Aveeno,
    },
    {
      name: 'Bismid Koji+gluthatione night face cream',
      price: '₦13,500',
      image: bismidkoji,
    },
    {
      name: 'Mixsoon bean essence 50ml',
      price: '₦17,500',
      image: Mixsoon,
    },
    {
      name: 'Olay vitamine C body wash',
      price: '₦17,500',
      image: Olay,
    },
    {
      name: 'OOTD  Brightening vitamin c lotion',
      price: '₦15,000',
      image: OOTD,
    },
    {
      name: 'Advanced glow body oil',
      price: '₦8,500',
      image: advance,
    },
    {
      name: 'saltair body lotion',
      price: '₦31,000',
      image: img31k,
    },
    {
      name: 'Anua azelaic acid serum',
      price: '₦26,000',
      image: anua,
    },
    {
      name: 'Apri skin Txa niacinamide deep cleanser ',
      price: '₦14,500',
      image: april,
    },
    {
      name: 'Aqua rich body gel wash',
      price: '₦10,500',
      image: aqua,
    },
    {
      name: 'Arden kids and teens lotion',
      price: '₦9,500',
      image: arden,
    },
    {
      name: 'Carrot',
      price: '₦10,000',
      image: carrot,
    },
    {
      name: 'Cerave moisturizing lotion',
      price: '₦23,000',
      image: cerave,
    },
    {
      name: 'Cloud 9 lemon body cream',
      price: '₦14,500',
      image: cloud9,
    },
    {
      name: 'Corx hyaluronic acid cream',
      price: '₦18,000',
      image: corx,
    },
    {
      name: 'Corx all in one moisturizer',
      price: '₦17,000',
      image: corxAll,
    },
    {
      name: 'Corx Dual essence',
      price: '₦25,000',
      image: corxDual,
    },
    {
      name: 'Corx Snail mucin power essence',
      price: '₦16,000',
      image: corxSnail,
    },
    {
      name: 'Dove pink bar',
      price: '₦6,500',
      image: dove,
    },
    {
      name: 'E45 body lotion',
      price: '₦9,500',
      image: imgE45,
    },
    {
      name: 'Eos vanilla cashmere body wash ',
      price: '₦25,000',
      image: eos,
    },
    {
      name: 'Faster white snail lotion',
      price: '₦16,500',
      image: faster,
    },
    {
      name: 'Gluthatione vitamin c',
      price: '₦16,000',
      image: gluthatione,
    },
    {
      name: 'Koji dark spot serum',
      price: '₦21,000',
      image: koji,
    },
    {
      name: 'Koji White radiant correcting cream',
      price: '₦21,500',
      image: kojiWhite,
    },
    {
      name: 'Mary & May spicule collagen',
      price: '₦10,000',
      image: maryMay,
    },
    {
      name: 'Medix vit c lotion',
      price: '₦21,000',
      image: medix,
    },
    {
      name: 'Naturium vitamin c body wash',
      price: '₦39,000',
      image: naturium,
    },
    {
      name: 'Naturium Restoring body lotion',
      price: '₦38,000',
      image: naturiumRestoring,
    },
    {
      name: ' Olay Niacinamide lotion',
      price: '₦17,000',
      image: niacinamide,
    },
    {
      name: 'Nivea sunscreen',
      price: '₦16,500',
      image: nivea,
    },
    {
      name: 'Nui skin lotion',
      price: '₦9,000',
      image: nui,
    },
    {
      name: 'Olay Super serum body wash',
      price: '₦24,000',
      image: olaySuper,
    },
    {
      name: 'The Ordinary, niacinamide 10% + zinc 1%',
      price: '₦16,500',
      image: ordinary,
    },
    {
      name: 'Pro lab niacinamide lotion',
      price: '₦9,500',
      image: pro,
    },
    {
      name: 'Prolab kojic lotion',
      price: '₦9,500',
      image: prolab,
    },
    {
      name: 'Skeenpoint glow booster lighting lotion',
      price: '₦10,500',
      image: skeenpoint,
    },
    {
      name: 'Snapchat bath',
      price: '₦20,000',
      image: snapchat,
    },
    {
      name: 'Timeless 20% vitamin c serum',
      price: '₦23,000',
      image: timeless,
    },
    {
      name: 'Vsp botanics mineral sunscreen',
      price: '₦13,000',
      image: vsp,
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-3 rounded-2xl border border-pink-200 focus:border-pink-500 outline-none mb-8 block"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {filteredProducts.map((product, i) => (
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
                    <a
                      href={`https://wa.me/2349021947521?text=I want to buy ${product.name}`}
                      target="_blank"
                      className="bg-pink-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-pink-700 transition inline-block text-center"
                    >
                      Buy
                    </a>
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
        {
          name: "Amina Bello",
          review: "Absolutely amazing quality. My skin glows beautifully!",
        },
        {
          name: "Onyebuchi Kosiso",
          review: "Best beauty brand I have purchased from in Lagos.",
        },
        {
          name: "Amaechi prosper ",
          review: "Luxury feel and affordable prices. Highly recommended!",
        },
      ].map((item, i) => (
        <div key={i} className="bg-white p-10 rounded-[35px] shadow-xl">
          <div className="text-5xl mb-5">💖</div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            “{item.review}”
          </p>
          <h4 className="font-black text-xl">{item.name}</h4>
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
