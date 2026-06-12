/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Wrench,
  Truck,
  Settings,
  Hammer,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Zap,
  HardHat,
  Factory,
  Mountain,
  Leaf,
} from "lucide-react";

const SERVICES = [
  {
    title: "Rental Mobil Golf",
    desc: "Armada mobil golf berkualitas premium tersedia untuk resort, hotel, event, dan kegiatan komunitas golf dengan harga kompetitif.",
    icon: Truck,
    img: "https://picsum.photos/600/400?random=golf1",
  },
  {
    title: "Perawatan & Service",
    desc: "Layanan perawatan berkala dan service teknis untuk memastikan setiap mobil golf dalam kondisi optimal dan siap digunakan.",
    icon: Wrench,
    img: "https://picsum.photos/600/400?random=service",
  },
  {
    title: "Sewa Jangka Panjang",
    desc: "Program sewa jangka panjang dengan harga khusus untuk resort, hotel, dan venue dengan layanan maintenance penuh.",
    icon: Settings,
    img: "https://picsum.photos/600/400?random=longterm",
  },
  {
    title: "Customization",
    desc: "Kustomisasi sesuai kebutuhan - modifikasi warna, fitur tambahan, atau branding khusus untuk event dan promosi Anda.",
    icon: Hammer,
    img: "https://picsum.photos/600/400?random=custom",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1634140144664-f84083f1090a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561251224-e393160cd769?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661774316407-56209baefa8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1679505066065-c71bbfd420e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1730372609361-0049718f5957?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1745973980697-3ac467ffc642?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const ADVANTAGES = [
  {
    title: "Armada Berkualitas",
    desc: "Mobil golf baru dan terawat dengan baik, siap memberikan pengalaman terbaik untuk tamu Anda.",
    icon: Zap,
  },
  {
    title: "Pelayanan Responsif",
    desc: "Tim customer service kami siap membantu 24/7 untuk memastikan kepuasan Anda dalam setiap rental.",
    icon: HardHat,
  },
  {
    title: "Harga Kompetitif",
    desc: "Tarif sewa yang terjangkau dengan berbagai pilihan paket khusus sesuai kebutuhan dan budget Anda.",
    icon: Settings,
  },
];

const INDUSTRIES = [
  {
    name: "Resort & Hotel",
    icon: HardHat,
    img: "https://images.unsplash.com/photo-1671798436311-a8f3c1d269bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Event & Festival",
    icon: Mountain,
    img: "https://images.unsplash.com/photo-1723743809861-0e035898de75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Golf Course",
    icon: Leaf,
    img: "https://plus.unsplash.com/premium_photo-1679758416078-e5da17160526?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Komunitas Golf",
    icon: Factory,
    img: "https://plus.unsplash.com/premium_photo-1661774373753-2dc8e8989383?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 py-4 w-full border-b bg-industrial-dark/90 backdrop-blur-md border-white/10">
        <div className="flex justify-between items-center px-6 mx-auto max-w-7xl">
          <div className="flex gap-2 items-center">
            <div className="p-1.5 text-xl font-black tracking-tighter text-white bg-primary">
              RGC
            </div>
            <span className="hidden font-bold tracking-tight text-white sm:block">
              PT. PUPUK KIJANG - RENTAL GOLF CAR
            </span>
          </div>
          <div className="hidden gap-8 items-center text-sm font-medium tracking-widest text-gray-300 uppercase md:flex">
            <a href="#about" className="transition-colors hover:text-primary">
              Tentang
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-primary"
            >
              Layanan
            </a>
            <a
              href="#advantages"
              className="transition-colors hover:text-primary"
            >
              Keunggulan
            </a>
            <a
              href="#contact"
              className="py-2 px-5 text-white transition-colors hover:bg-red-700 bg-primary"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex overflow-hidden relative items-center h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661848414795-c35b86a35e36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdvbGZjYXJ8ZW58MHx8MHx8fDA%3D"
            alt="Golf Car Rental"
            className="object-cover w-full h-full grayscale-[0.5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 industrial-overlay" />
        </div>

        <div className="relative z-10 px-6 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block py-1 px-3 mb-6 text-xs font-bold text-white uppercase bg-primary tracking-[0.2em]">
              Golf Car Rental Solution
            </div>
            <h1 className="mb-8 text-5xl font-black text-white md:text-7xl leading-[1.1]">
              Penyewaan Mobil <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Golf Berkualitas
              </span>
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-300">
              Rental GOLF CAR menyediakan penyewaan mobil golf terbaik
              untuk resort, hotel, event, dan komunitas golf di seluruh Indonesia
              dengan armada modern dan pelayanan profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex gap-2 items-center py-4 px-8 font-bold tracking-widest text-white uppercase transition-all hover:bg-red-700 bg-primary group"
              >
                Konsultasi Sekarang{" "}
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="py-4 px-8 font-bold tracking-widest text-white uppercase border transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              >
                Lihat Layanan
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hidden absolute left-6 bottom-10 z-10 lg:block">
          <div className="flex gap-12 font-bold uppercase text-white/50 text-[10px] tracking-[0.3em]">
            <div className="flex flex-col gap-2">
              <span className="text-primary">01</span>
              <span>Rental</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-primary">02</span>
              <span>Service</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-primary">03</span>
              <span>Jangka Panjang</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-primary">04</span>
              <span>Custom</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="overflow-hidden relative py-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-20 items-center lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-sm font-black text-primary tracking-[0.3em]">
                Tentang Perusahaan
              </h2>
              <h3 className="mb-8 text-4xl font-black leading-tight md:text-5xl text-industrial-dark">
                Solusi Penyewaan Mobil Golf Terpercaya Untuk Setiap Kebutuhan.
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                RENTAL GOLF CAR hadir sebagai penyedia penyewaan mobil
                golf terbaik untuk resort, hotel, event, dan komunitas golf di
                Indonesia. Dengan armada modern dan layanan profesional, kami siap
                mendukung setiap kebutuhan penyewaan Anda.
              </p>

              <div className="grid gap-8 mb-12 sm:grid-cols-2">
                <div className="pl-6 border-l-4 border-primary">
                  <h4 className="mb-2 text-xl font-black">Visi</h4>
                  <p className="text-sm text-gray-500">
                    Menjadi penyedia penyewaan mobil golf terdepan di Indonesia
                    yang mengutamakan kualitas dan kepuasan pelanggan.
                  </p>
                </div>
                <div className="pl-6 border-l-4 border-primary">
                  <h4 className="mb-2 text-xl font-black">Misi</h4>
                  <p className="text-sm text-gray-500">
                    Menyediakan armada mobil golf berkualitas dengan layanan
                    terbaik untuk meningkatkan pengalaman tamu Anda.
                  </p>
                </div>
              </div>

              <div className="p-8 border border-gray-200 bg-industrial-light">
                <p className="italic font-medium text-gray-700">
                  "Kami bukan hanya penyedia mobil golf, tetapi partner terpercaya
                  yang memastikan setiap pengalaman rental Anda sempurna."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden aspect-[4/5] bg-industrial-dark">
                <img
                  src="https://plus.unsplash.com/premium_photo-1678339698289-98714ac03ae2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Golf Course"
                  className="object-cover w-full h-full opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hidden absolute -bottom-10 -left-10 p-10 text-white md:block bg-primary">
                <div className="mb-2 text-5xl font-black">Karawang</div>
                <div className="text-sm font-bold tracking-widest uppercase opacity-80">
                  Base of Operations
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 text-white bg-industrial-dark grid-pattern"
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-4 text-sm font-black text-primary tracking-[0.3em]">
              Layanan Kami
            </h2>
            <h3 className="mb-6 text-4xl font-black md:text-5xl">
              Solusi Lengkap Penyewaan Mobil Golf
            </h3>
            <div className="mx-auto w-20 h-1 bg-primary" />
          </div>

          <div className="grid gap-px border md:grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="overflow-hidden relative p-10 transition-all bg-industrial-dark group hover:bg-primary/10"
              >
                <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10">
                  <service.icon className="mb-8 w-12 h-12 transition-transform group-hover:scale-110 text-primary" />
                  <h4 className="mb-4 text-xl font-black leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 justify-between items-end mb-16 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-sm font-black uppercase text-primary tracking-[0.3em]">
                Our Golf Car Fleet
              </h2>
              <h3 className="text-4xl font-black text-industrial-dark">
                Armada Mobil Golf Berkualitas
              </h3>
            </div>
            <div className="hidden flex-grow mx-8 mb-4 h-px bg-gray-200 md:block" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="overflow-hidden aspect-square bg-industrial-light group"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="object-cover w-full h-full transition-all duration-500 hover:scale-110 grayscale cursor-zoom-in hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-industrial-light">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-shrink-0 justify-center items-center w-16 h-16 bg-white border border-gray-200">
                  <adv.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="mb-3 text-xl font-black">{adv.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="overflow-hidden py-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 items-center mb-20 md:flex-row">
            <div className="md:w-1/3">
              <h2 className="mb-4 text-sm font-black text-primary tracking-[0.3em]">
                Core Values
              </h2>
              <h3 className="text-5xl font-black text-industrial-dark">
                RGC VALUES
              </h3>
            </div>
            <div className="h-px bg-gray-200 md:w-2/3" />
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="group">
              <div className="relative z-0 text-7xl font-black text-gray-100 transition-colors mb-[-40px] group-hover:text-primary/10">
                BOLD
              </div>
              <div className="relative z-10 pl-4">
                <h4 className="mb-4 text-2xl font-black">
                  Berani Menjamin Kualitas
                </h4>
                <p className="text-gray-600">
                  Kami memberikan jaminan kualitas pada setiap unit dan layanan
                  yang kami berikan kepada klien.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="relative z-0 text-7xl font-black text-gray-100 transition-colors mb-[-40px] group-hover:text-primary/10">
                INTEGRITY
              </div>
              <div className="relative z-10 pl-4">
                <h4 className="mb-4 text-2xl font-black">Transparan & Jujur</h4>
                <p className="text-gray-600">
                  Kejujuran dalam setiap laporan kondisi alat dan transparansi
                  dalam setiap kontrak kerja sama.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="relative z-0 text-7xl font-black text-gray-100 transition-colors mb-[-40px] group-hover:text-primary/10">
                SERVICE
              </div>
              <div className="relative z-10 pl-4">
                <h4 className="mb-4 text-2xl font-black">Service Excellence</h4>
                <p className="text-gray-600">
                  Memberikan pelayanan maksimal yang melampaui ekspektasi untuk
                  kepuasan operasional klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Targets */}
      <section className="py-24 text-white bg-industrial-dark">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h3 className="text-3xl font-black tracking-tight uppercase md:text-4xl">
              Sektor Industri Yang Kami Layani
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {INDUSTRIES.map((industry, idx) => (
              <div
                key={idx}
                className="overflow-hidden relative group aspect-[3/4]"
              >
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 from-industrial-dark" />
                <div className="flex absolute bottom-6 left-6 gap-3 items-center">
                  <industry.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {industry.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden relative py-32 bg-primary">
        <div className="absolute inset-0 opacity-10 grid-pattern" />
        <div className="relative z-10 px-6 mx-auto max-w-7xl text-center">
          <h2 className="mb-10 text-4xl font-black leading-tight text-white md:text-6xl">
            Siap Menyewa Mobil Golf <br /> Berkualitas Premium?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-white/80">
            Hubungi tim kami untuk konsultasi gratis tentang paket rental mobil
            golf yang sesuai dengan kebutuhan event atau venue Anda.
          </p>
          <a
            href="https://wa.me/6282228913588"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-3 items-center py-5 px-10 font-black tracking-widest uppercase bg-white shadow-2xl transition-all text-primary hover:bg-industrial-light"
          >
            <Phone className="w-6 h-6" /> Hubungi +62 822-2891-3588
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-20 text-white border-t bg-industrial-dark border-white/5"
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-16 mb-20 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex gap-2 items-center mb-8">
                <div className="p-1.5 text-xl font-black tracking-tighter text-white bg-primary">
                  RGC
                </div>
                <span className="font-bold tracking-tight text-white">
                  RENTAL GOLF CAR
                </span>
              </div>
              <p className="mb-8 max-w-md leading-relaxed text-gray-400">
                Penyedia penyewaan mobil golf terpercaya di Indonesia. Kami
                berkomitmen memberikan armada berkualitas dan pelayanan terbaik
                untuk setiap klien kami.
              </p>
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-10 h-10 transition-colors cursor-pointer bg-white/5 hover:bg-primary">
                  <span className="font-bold">FB</span>
                </div>
                <div className="flex justify-center items-center w-10 h-10 transition-colors cursor-pointer bg-white/5 hover:bg-primary">
                  <span className="font-bold">IG</span>
                </div>
                <div className="flex justify-center items-center w-10 h-10 transition-colors cursor-pointer bg-white/5 hover:bg-primary">
                  <span className="font-bold">LI</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-8 text-sm font-black tracking-widest uppercase text-primary">
                Kontak
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 text-sm text-gray-400">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+62 822-2891-3588</span>
                </li>
                <li className="flex gap-4 text-sm text-gray-400">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>RentalGolfCar@gmail.com</span>
                </li>
                <li className="flex gap-4 text-sm text-gray-400">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Karawang, Jawa Barat, Indonesia</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-8 text-sm font-black tracking-widest uppercase text-primary">
                Layanan
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="transition-colors cursor-pointer hover:text-white">
                  Rental Mobil Golf
                </li>
                <li className="transition-colors cursor-pointer hover:text-white">
                  Perawatan & Service
                </li>
                <li className="transition-colors cursor-pointer hover:text-white">
                  Sewa Jangka Panjang
                </li>
                <li className="transition-colors cursor-pointer hover:text-white">
                  Customization
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-between items-center pt-10 font-bold text-gray-500 uppercase border-t border-white/5 text-[10px] tracking-[0.2em] md:row">
            <p>© 2026 ObetG. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span className="transition-colors cursor-pointer hover:text-white">
                Privacy Policy
              </span>
              <span className="transition-colors cursor-pointer hover:text-white">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
