import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Server Sedang Terkendala | GenKiddo Academy",
};

export default function Error500() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/bg-other.svg")' }}>
      <div className="inline-flex flex-col items-start gap-8 text-white z-10">
        {/* Logo */}
        <div>
          <Image src="logo-white.svg" alt="GenKiddo Academy Logo" width={200} height={92} />
        </div>
        {/* Title */}
        <h1 className="text-5xl font-bold">Server Sedang Terkendala</h1>
        {/* Message */}
        <p className="text-md max-w">Server yang Anda coba akses saat ini tidak tersedia atau mengalami masalah. Mohon menunggu atau coba akses lagi nanti.</p>
        {/* Button */}
        <Link href="/" className="bg-[#EF7F1F] hover:bg-[#FE7447] text-md text-white font-semibold px-6 py-2 rounded-full transition">
          Kembali ke Homepage
        </Link>
      </div>
    </div>
  );
}
