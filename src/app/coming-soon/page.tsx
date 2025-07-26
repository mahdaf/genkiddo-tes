import Head from 'next/head';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/bg-other.svg")' }}>
        <div className="text-center text-white z-10 px-6">
          {/* "Coming Soon" Text */}
          <p className="mb-6" style={{ fontFamily: 'Pacifico, cursive', fontSize: '7rem' }}>Coming Soon</p>

          {/* Message */}
          <p className="text-lg mb-6">Website saat ini dalam tahap pengembangan. Pastikan Anda mengikuti sosial media kami untuk update terbaru!</p>

          {/* Social Buttons */}
          <div className="flex justify-center space-x-4">
            <Link href="https://www.instagram.com/genkiddo.id" target="_blank" className="inline-block bg-orange-400 text-white py-2 px-6 rounded-lg font-bold hover:bg-orange-500 transition-colors">
              Follow Instagram
            </Link>
            <Link href="https://www.instagram.com/genkiddo.id" target="_blank"  className="inline-block bg-orange-400 text-white py-2 px-6 rounded-lg font-bold hover:bg-orange-500 transition-colors">
              Sukai Facebook
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
