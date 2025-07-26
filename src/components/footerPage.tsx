import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="w-full h-auto px-10 md:px-20 bg-gradient-to-b from-[#F86300] to-[#FF9E4A] py-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-start">
          <div className="mb-4">
            <Image
              alt="genkiddo logo"
              className="w-44"
              height={1000}
              src="/logo-white.svg"
              width={1000}
            />
          </div>
          <div className=" w-full md:w-[442px] text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal text-justify">
            GenKiddo Academy adalah platform kursus koding dan kecerdasan artifisial (AI) anak usia 5-12 tahun berbasis LMS. Dengan misi utama untuk memberdayakan generasi muda Indonesia dengan keterampilan digital untuk menghadapi tantangan masa depan.
          </div>
        </div>
        <div className="h-[162px] flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-white text-sm md:text-xl font-bold font-tiktok-sans leading-normal">
            Informasi
          </div>
          <div className="flex-col justify-start items-start gap-[3px] flex">
            <Link href="#" className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Tentang Kami
            </Link>
            <Link href="#" className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Kursus
            </Link>
            <Link href="#" className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Program Sekolah
            </Link>
            <Link href="#" className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Bantuan
            </Link>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-white text-sm md:text-xl font-bold font-tiktok-sans leading-normal">
            Kontak Kami
          </div>
          <div className="flex-col justify-start items-start gap-[3px] flex">
            <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Email : genkiddoacademy@gmail.com
            </div>
            <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Phone : +62 857-0650-9560
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1.5 flex">
            <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-normal">
              Institut Teknologi Sepuluh Nopember
              <br />
              Jl. Teknik Kimia Keputih, Sukolilo
              <br />
              Surabaya Jawa Timur
            </div>
          </div>
        </div>
        <div className="h-[159px] flex-col justify-start items-start gap-1.5 inline-flex mt-4 md:mt-0">
          <div className="h-[110px] flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="text-white text-sm md:text-xl font-bold font-tiktok-sans leading-normal">
              Ikuti Kami
            </div>
            <a
              href="https://www.instagram.com/genkiddo.id"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start items-center gap-1.5 inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5" /></svg>
              <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-[18px]">
              @GenKiddo.id
              </div>
            </a>
            <a
              href="https://facebook.com/GenKiddo.id"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start items-center gap-1.5 inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
              <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-[18px]">
              @GenKiddo.id
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/genkiddo-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start items-center gap-1.5 inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" /></svg>
              <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-[18px]">
              GenKiddo Academy
              </div>
            </a>
            <a
              href="https://www.youtube.com/@GenKiddoAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start items-center gap-1.5 inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#fff" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z" /></g></svg>
              <div className="text-white text-sm md:text-md font-normal font-tiktok-sans leading-[18px]">
              GenKiddo Academy
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex item-end justify-center text-center text-white text-sm font-medium font-tiktok-sans leading-normal mt-10">
        © 2025, GenKiddo Academy - All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
