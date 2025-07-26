"use client";

import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footerPage";

export default function JoinWaitingList() {
  return (
    <>
      <Head>
        <title>Waiting List - GenKiddo Academy</title>
        <meta
          name="description"
          content="Daftar waiting list GenKiddo Academy dan jadi yang pertama menikmati platform belajar koding & AI untuk anak!"
        />
      </Head>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fff7f0] via-[#ffe0c2] to-[#f86300]/20 pt-24">
        <section className="container mx-auto max-w-3xl flex flex-col items-center justify-center py-10 px-4 md:px-0">
          <h1 className="bg-gradient-to-b from-[#F86300] to-[#DD3A3AE5] bg-clip-text text-transparent text-3xl md:text-5xl font-bold font-poppins leading-snug md:leading-[60px] text-center mb-4">
            Daftar Waiting List GenKiddo Academy
          </h1>
          <p className="text-[#454545] text-md md:text-lg font-normal font-tiktok-sans leading-normal text-center mb-6 max-w-2xl">
            Daftar waiting list GenKiddo Academy dan jadi yang pertama menikmati platform belajar koding & AI untuk anak!</p>
          <div className="w-full rounded-2xl shadow-xl overflow-hidden border border-[#f86300]/30 bg-white/80 backdrop-blur-md">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdkF8cVCuK5Q75W-4hvm9Y_IjLzAX9ijSlvQB_0SVxaPlCcKQ/viewform?embedded=true"
              width="100%"
              height="1482"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full min-h-[700px]"
              title="Form Waiting List GenKiddo"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <div className="text-center text-[#f86300] font-tiktok-sans text-md mt-6">
            *Data Anda aman dan hanya digunakan untuk keperluan informasi GenKiddo Academy.
          </div>
        </section>
        <div className="flex-grow" />
        <Footer />
      </div>
    </>
  );
}
