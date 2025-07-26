"use client";

import { motion, useAnimationFrame } from "motion/react"
import Image from "next/image";
// import { div, button, div, div } from "@heroui/react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import CountdownTimer from "@/components/CountdownTimer";
import Carousel from "@/components/CarouselLandingPage";
import Footer from "@/components/footerPage";
import { useRef } from 'react'

const FloatingDroneImage = () => {
  return (
    <motion.div
      className="w-32 flex absolute top-1/4 right-4/12 z-20"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <Image
        alt="rumput2"
        src="/drone_child.png"
        width={10000}
        height={10000}
        className="w-32"
      />
    </motion.div>
  )
}
const FloatingRocketImage = () => {
  return (
    <motion.div
      className="w-32 flex absolute top-2/12 right-1/12 z-10"
      animate={{
        x: [0, 10, 0], // ke kanan dan balik
        y: [0, -10, 0], // naik dan turun
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        alt="rumput2"
        width={10000}
        height={10000}
        src="/roket.png"
      />
    </motion.div>
  )
}

const RotatingPinkStar = () => {
  return (
    <motion.div
      className="absolute w-[400pt] -left-82 -top-20 -z-10"
      animate={{ rotate: [0, 90, -90, 0] }} // ⬅️ Putar ke kanan 45°, lalu ke kiri 45°, lalu balik ke 0
      transition={{
        duration: 20, // ⏱️ Ganti nilai ini untuk atur kecepatan animasi (dalam detik)
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src="/pink_star.png"
        height={1000}
        width={1000}
        alt="yellow blink"
        className="w-full"
      />
    </motion.div>
  )
}
const RotatingBlueStar = () => {
  return (
    <motion.div
      className="absolute w-[400pt] -right-78 top-2/7 -z-10"
      animate={{ rotate: [0, 90, -90, 0] }} // ⬅️ Putar ke kanan 45°, lalu ke kiri 45°, lalu balik ke 0
      transition={{
        duration: 20, // ⏱️ Ganti nilai ini untuk atur kecepatan animasi (dalam detik)
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
            src="/blue_star.png"
            height={1000}
            width={1000}
            alt="yellow blink"
          />
    </motion.div>
  )
}

const CircularMotionImageBlueComputer = () => {
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((t) => {
    const radius = 1 * 16 // radius dalam pixel (20pt)
    const angle = (t / 10000) * 2 * Math.PI // satu putaran = 10 detik
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    if (ref.current) {
      ref.current.style.transform = `translate(${x}px, ${y}px)`
    }
  })

  return (
    <div className="absolute left-72 top-36 w-14 h-14">
      {/* wrapper untuk gerak melingkar */}
      <div ref={ref} className="w-full h-full">
        {/* motion untuk rotasi */}
        <motion.div
          animate={{ rotate: [0, 30, -30, 0] }}
          transition={{
            duration: 30, // durasi rotasi bolak-balik
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <Image
            src="/blue_computer.png"
            height={1000}
            width={1000}
            alt="yellow blink"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  )
}



export default function Home() {
  const subpage2 = [
    "Memperkenalkan pada Dunia Teknologi di Masa Depan",
    "Mengajak Berpikir Kritis dan Melatih Problem Solving",
    "Mendorong anak untuk berpikir out-of-the-box dan mengembangkan solusi inovatif",
    "Bantu Eksplorasi Potensi Bakat Si Kecil",
  ];

  const subpage3_1 = [
    "Gamifikasi dan project-based learning membuat belajar jadi seperti bermain",
    "Pengajar terlatih untuk dapat menyesuaikan metode pembelajaran sesuai dengan usia",
    "Kurikulum dapat meningkatkan keterampilan siswa dengan sistem asesmen yang komprehensif",
  ];
  const subpage3_2 = [
    "Materi pembelajaran dan pengelolaan tugas terintegrasi dengan LMS",
    "Bantuan chatbot AI untuk mendukung proses belajar",
    "Laporan progress belajar anak untuk orang tua",
    "Fitur forum diskusi orang tua",
  ];

  return (
    <>
      <Head>
        <title>Home - Genkiddo Academy</title>
        <meta content="Belajar koding dan AI kini bisa menyenangkan, terjangkau, dan sesuai usia. GenKiddo Academy hadir dengan kurikulum interaktif dan teknologi canggih untuk membekali anak Anda dengan keterampilan abad ke-21." name="description" />

      </Head>
      <Navbar />



      <div className="flex pt-20 flex-col overflow-x-hidden z-50">

        {/* Sub Page 1 */}
        <section className="relative w-full h-screen flex items-center justify-center px-10 md:px-20 md:py-10 py-10 bg-gradient-to-b from-white from-10% via-[#F6E7E2] via-50% to-[#F6B5A2]">
            <div className="grid md:grid-cols-2 gap-8 items-center mx-0 px-0 z-40 mt-[-40px] md:mt-[-60px]">
            <div className="flex-col justify-start items-start gap-[18px] inline-flex">
              <h1 className="bg-gradient-to-b from-[#F86300] to-[#DD3A3AE5] bg-clip-text text-transparent text-3xl md:text-5xl font-bold font-poppins leading-snug md:leading-[60px]">
              Berikan Anak Anda Keterampilan Penting di Masa Depan!
              </h1>
              <p className="text-[#454545] text-md md:text-lg font-normal font-tiktok-sans leading-normal">
              Belajar koding dan AI kini bisa menyenangkan, terjangkau, dan sesuai usia. GenKiddo Academy hadir dengan kurikulum interaktif dan teknologi canggih untuk membekali anak Anda dengan keterampilan abad ke-21.
              </p>
              <a
              href="/join"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-[#ef7f1f] hover:bg-[#ef801fc8] text-white font-bold py-2 px-6 rounded-full mt-2 gap-1 items-center justify-center"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m9.5 12.323l1.379 1.575a.3.3 0 0 0 .466-.022l2.8-3.876" /><path d="M12 21a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21" /></g></svg>
              <div className="text-center text-[#fbfbfc] text-lg font-semibold font-poppins leading-normal">
                Gabung Sekarang!
              </div>
              </a>
            </div>
          </div>
          <div className="">
            <Image
              alt="rumput1"
              className="w-screen flex absolute -bottom-36 left-0 z-0"
              width={10000}
              height={10000}
              src="/child_in_park.png"
            />
            {/* <Image
              alt="rumput2"
              className="w-32 flex absolute top-1/4 right-4/12 z-20"
              width={10000}
              height={10000}
              src="/drone_child.png"
            /> */}
            <FloatingDroneImage />
            {/* <Image
              alt="rumput2"
              className="w-32 flex absolute top-2/12 right-1/12 z-10"
              width={10000}
              height={10000}
              src="/roket.png"
            /> */}
            <FloatingRocketImage />
          </div>
        </section>
        {/* Sub Page 2 */}
        <section className="relative flex flex-row container mx-auto max-w-7xl py-10 mt-64 gap-8">
          <div className="flex-1 flex-col">

            {/* <Image
              src="/blue_computer.png"
              height={1000}
              width={1000}
              alt="yellow blink"
              className="absolute w-14 left-72 top-36"
            /> */}
            <CircularMotionImageBlueComputer/>
            <Image
              src="/yellow_blink.png"
              height={1000}
              width={1000}
              alt="yellow blink"
              className="absolute w-14 left-36 top-3"
            />
            <Image
              src="/three_dot.png"
              height={1000}
              width={1000}
              alt="yellow blink"
              className="absolute w-24 -right-14 -top-5"
            />
            {/* <Image
              src="/pink_star.png"
              height={1000}
              width={1000}
              alt="yellow blink"
              className="absolute w-[400pt] -left-82 -top-20 -z-10"
            /> */}
            <RotatingPinkStar/>

            <div className="flex text-neutral-700 text-3xl md:text-5xl font-bold font-poppins leading-snug md:leading-[60px] ">
              About <br /> GenKiddo <br /> Academy
            </div>
            <div className="flex mt-4 pr-2 font-tiktok-sans text-lg">
              GenKiddo Academy adalah platform pembelajaran koding dan kecerdasan artifisial (AI) untuk anak dengan metode fleksibel, dilengkapi LMS interaktif. Siswa bisa belajar mandiri lewat materi, video tutorial, dan tugas yang dapat diakses kapan saja dari rumah.
            </div>
            <div className="flex flex-col items-start gap-1 mt-2">
              <span className="text-black font-tiktok-sans font-medium italic text-base">
                Didukung oleh Belmawa Kemdiktisaintek & ITS melalui PKM (Program Kreativitas Mahasiswa) 2025.
              </span>
              <img src="/supportedby-pkm.png" width={250} height={60} />
            </div>
          </div>
            <div className="flex-1 flex justify-center items-center">
              <Carousel />
            </div>
        </section>
        {/* Sub Page 3 */}
        <section className="relative container mx-auto max-w-7xl py-5 md:py-10">
          <Image
            src="/curly_yellow_line.png"
            height={1000}
            width={1000}
            alt="yellow blink"
            className="absolute w-30 -right-28 top-3"
          />
          <Image
            src="/three_cross.png"
            height={1000}
            width={1000}
            alt="yellow blink"
            className="absolute w-16 -left-20 top-27"
          />
          {/* <Image
            src="/blue_star.png"
            height={1000}
            width={1000}
            alt="yellow blink"
            className="absolute w-[400pt] -right-78 top-2/7 -z-10"
          /> */}
          <RotatingBlueStar/>

          <div className="flex flex-col gap-y-10">
            {/* Why Choose GenKiddo Academy */}
            <div className="flex flex-row items-center mt-28">
              <div className="flex-1 text-left text-[#454545] text-3xl md:text-4xl font-bold font-poppins mb-2">
                Why Choose <br /> GenKiddo Academy?
              </div>
              <div className="flex-1 text-right font-tiktok-sans text-lg">
                Kami membentuk inovator masa depan dan <br /> keterampilan dunia nyata yang tidak akan didapatkan <br /> anak Anda di sekolah.
              </div>
            </div>
            {/* Pembelajaran Terstruktur dan Menyenangkan */}
            <div className="flex flex-col md:flex-row items-center justify-center px-10">
              {/* Image */}
              <div className="flex-1">
                <Image
                  alt=""
                  className="mb-4"
                  height={500}
                  src="/info 1.png"
                  width={500}
                />
              </div>
              {/* Text */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 bg-[#ef7f1f] px-4 py-2 mb-4 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                  <div className=" text-white text-sm md:text-md font-medium font-poppins">
                    Fun Learning
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#F86300] to-[#DD3A3AE5] bg-clip-text text-transparent text-2xl md:text-3xl font-extrabold font-poppins ">
                  Pembelajaran Terstruktur <br /> dan Menyenangkan
                </div>
                <ul>
                  {subpage3_1.map((item, index) => (
                    <li key={index}>
                      <div className="flex items-center gap-x-4 text-[#454545] text-md md:text-lg font-normal font-poppins leading-relaxed my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27"><path fill="#00A86B" d="M26.99 0L10.13 17.17l-5.44-5.54L0 16.41L10.4 27l4.65-4.73l.04.04L32 5.1z" /></svg>
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Integrasi LMS dan Kecerdasan Artifisial */}
            <div className="flex flex-col md:flex-row items-center justify-center px-10">
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 bg-[#ef7f1f] px-4 py-2 mb-4 w-fit rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1" /></svg>
                  <div className=" text-white text-sm md:text-md font-medium font-poppins">
                    Many Features
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#F86300] to-[#DD3A3AE5] bg-clip-text text-transparent text-2xl md:text-3xl font-extrabold font-poppins leading-normal md:leading-[55px]">
                  Integrasi LMS dan Kecerdasan <br /> Artificial (AI)
                </div>
                <ul>
                  {subpage3_2.map((item, index) => (
                    <li key={index}>
                      <div className="flex items-center gap-x-4 text-[#454545] text-md md:text-lg font-normal font-poppins leading-relaxed  my-2 md:my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27"><path fill="#00A86B" d="M26.99 0L10.13 17.17l-5.44-5.54L0 16.41L10.4 27l4.65-4.73l.04.04L32 5.1z" /></svg>
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:flex-1">
                <Image
                  alt=""
                  height={500}
                  src="/chat 1.png"
                  width={500}
                />
              </div>
            </div>
          </div>

        </section>
        {/* Sub Page Countdown */}
        <section className="w-screen bg-gradient-to-b from-[#fdf8f4] to-[#f86300] to-75% flex items-center justify-center flex-col py-16 px-8 md:px-10">
          <div className="flex items-center justify-center">
            <CountdownTimer targetDate="2025-09-14T23:59:59+07:00" />
          </div>
          <div className="w-full text-center text-white text-2xl md:text-6xl font-bold font-poppins leading-tight md:leading-[85px] my-8">
            Bantu Si Kecil Ciptakan Inovasi Digital dan Teknologi Sendiri!
          </div>
          <div className="flex flex-col items-center gap-4">
            <button className="flex bg-yellow-500 hover:bg-yellow-500/80 text-white font-bold py-3 px-6 rounded-full mt-2 gap-1 items-center justify-center w-fit">
                <a
                href="/join"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-black text-lg font-semibold font-tiktok-sans leading-normal"
                >
                Ikuti Daftar Tunggu!
                </a>
            </button>
            <div className="text-md font-tiktok-sans text-white text-center">
              *Saat ini website dalam pengembangan, ikuti sekarang agar Anda <br /> menjadi yang pertama menggunakan platform Kami!
            </div>
          </div>
        </section>
        <Footer />
      </div>

    </>
  );
}