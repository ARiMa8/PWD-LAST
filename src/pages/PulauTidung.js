import React from 'react';
import { Link } from 'react-router-dom';

const PulauTidung = () => {
  return (
    <div className='bg-cyan-200 m-auto'>
      <div className="bg-blue-200 m-auto px-4 pt-40">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-center font-Poppins font-bold mb-6 px-4 py-2">
            PULAU TIDUNG
          </h1>
        </div>
        <div className="flex justify-center scale-x-75 h-96 bg-gray-200 border rounded-2xl shadow-2xl mr-6 mb-32 ml-6">
          <img
            style={{
              width: '95%',
              paddingTop: '10px',
              paddingBottom: '10px',
              borderRadius: '20px',
            }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127625269801402438/pulau-tidung-2.jpg"
            alt="A-KR1-1"
          />
        </div>
        <div className='bg-gray-200 border shadow-2xl p-4 mr-12 ml-12'>
          <div className="flex justify-center">
            <h1 className="bg-gray-200 text-3xl text-center rounded-lg font-Poppins font-bold mb-6 inline-block px-4 py-2">
              GALERI PULAU
            </h1>
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-8">
            <div className="flex justify-center items-center">
              <img
                style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127625234007203930/pulau-tidung-3.jpg"
                alt="A-T1-1"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127625146828591134/pulau-tidung.jpg"
                alt="A-T1-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127625210716246046/pulau-tidung-1.jpg"
                alt="A-T1-3"
              />
            </div>
          </div>

          <br></br><br></br><br></br><br></br>

          <div className="flex justify-center">
            <h1 className="bg-gray-200 text-3xl text-center rounded-lg font-Poppins font-bold mb-6 inline-block px-4 py-2">
              GALERI KULINER
            </h1>
          </div>
          <div className="flex justify-center items-center col-span-6 grid grid-cols-3 gap-8">
            <div className="flex justify-center items-center">
              <img
                style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127800230230892564/kuliner3.jpg"
                alt="A-T1-1"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127800243900121129/kuliner2.jpg"
                alt="A-T1-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127800265249148998/kuliner1.jpeg"
                alt="A-T1-3"
              />
            </div>
          </div>

          <br></br><br></br><br></br><br></br>

          <div className='bg-sky-600 border border rounded-2xl shadow-2xl mr-16 ml-16'>
            <div className="flex justify-center">
              <h1 className="text-3xl text-center text-white rounded-lg font-Poppins font-bold mb-6 px-4 mt-8">
                PENJELASAN
              </h1>
            </div>
            <div className='font-Poppins text-xl text-white items-left ml-8 mb-6'>
              Berbicara tentang Pulau Tidung, berarti yang dimaksud adalah dua pulau yang saling terhubung,
              yakni Pulau Tidung Besar dan Pulau Tidung Kecil.
              Pulau Tidung Besar dimanfaatkan untuk pemukiman penduduk,
              sedangkan Pulau Tidung Kecil adalah kawasan konservasi alam.
              <br></br><br></br>
              Pulau Tidung terletak di Kecamatan Pulau Seribu Selatan.
              Berada di daerah selatan menunjukkan kalau pulau ini dekat dengan Kota Jakarta.
              Pulau ini adalah alternatif yang tepat untuk liburan pendek, seperti weekend. Untuk liburan ke Bali atau Lombok,
              anda tentu butuh waktu setidaknya seminggu. Namun,
              liburan ke Pulau Tidung bisa anda lakukan dalam waktu 2 hari atau bahkan 1 hari saja.
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/pulau-bidadari">
              <button className="bg-blue-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </Link>
          </div>
        </div>

      </div>
      <footer className="bg-slate-600 py-8 w-full h-full">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-lg font-Paytone">"© 2023 Wisata Pulau Seribu | All Right Reserved"</h1>
        </div>
      </footer>
      <div className='w-10 h-10 bg-slate-800 rounded-full flex fixed bottom-5 right-2 cursor-pointer'>
        <a href='#' className='text-xl m-auto'>🔝</a>
      </div>
    </div>


  );
};

export default PulauTidung;
