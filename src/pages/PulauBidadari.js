import React from 'react';

const PulauBidadari = () => {
  return (
    <div className="bg-blue-200 py-20 pt-36">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-center font-Poppins font-bold mb-6 px-4 py-2">
          PULAU BIDADARI
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
          src="https://cdn.discordapp.com/attachments/1086315786446061711/1127809522682044516/Pulau-Bidadari.jpg"
          alt="A-KR1-1"
        />
      </div>
      <div className='bg-gray-200 border rounded-2xl shadow-2xl p-4 mr-12 ml-12'>
      <div className="flex justify-center">
        <h1 className="bg-gray-200 text-3xl text-center rounded-lg font-Poppins font-bold mb-6 inline-block px-4 py-2">
          GALERI PULAU
        </h1>
      </div>
      <div className="col-span-6 grid grid-cols-3 gap-8">
        <div className="flex justify-center items-center">
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127811155411345408/pulaubidadari.jpg"
            alt="A-T1-1"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127811161455329444/pulau-bidadari-kolam-renang.jpg"
            alt="A-T1-2"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127811179117547540/pulau-bidadari_1.jpg"
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
      <div className="flex justify-center items-center col-span-6 grid grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            style={{ width: '480px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127811635747229696/kue_talam_ikan.jpg"
            alt="A-T1-1"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            style={{ width: '480px', height: '340px', flexShrink: 0, borderRadius: '20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127811673621790730/kerang.jpg"
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
      Di antara deretan pulau di Kepulauan Seribu, Pulau Bidadari adalah satu dari beberapa pulau privat. 
      Pengelolaannya oleh swasta. Akomodasi di pulau ini dikenal dengan Pulau Bidadari Eco Resort. 
      Dari namanya, anda tentu bisa membayangkan konsep yang diusung, yakni resort bernuansa alami dan ramah lingkungan.
      <br></br><br></br>
      Pulau Bidadari adalah destinasi yang ideal, karena posisinya yang sangat dekat dari Ibukota Jakarta. 
      Resort bertema eco-tourism ini bisa dicapai hanya dengan perjalanan laut selama 20 menit dari dermaga Marina Ancol. 
      Bahkan, karena posisinya yang dekat dari Ibukota, 
      banyak wisatawan yang sengaja mengambil Paket Wisata Pulau Bidadari One-Day Tour, 
      alias paket wisata tanpa menginap. Anda beserta rombongan bisa berangkat pagi hari dan pulang lagi sore harinya.
      </div>
      </div>
      </div>

    </div>
  );
};

export default PulauBidadari;
