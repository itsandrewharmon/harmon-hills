import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import keaton1 from '../images/keatoncabininside.jpg';
import keaton2 from '../images/keatoncabininside2.jpg';
import keaton3 from '../images/keatoncabinoutside.jpg';

import kaelee1 from '../images/Kaeleecabininside.jpg';
import kaelee2 from '../images/kaeleecabininside2.jpg';
import kaelee3 from '../images/Kaeleecabinoutside.jpg';

import cassie1 from '../images/cassiecabininside.jpg';
import cassie2 from '../images/cassiecabininside1.jpg';
import cassie3 from '../images/cassiecabininside3.jpg';
import cassie4 from '../images/Cassiecabinoutside.jpg';

import andrew1 from '../images/andrewcabininside.jpg';
import andrew2 from '../images/andrewcabininside2.jpg';
import andrew3 from '../images/andrewcabininside3.jpg';
import andrew4 from '../images/andrewcabininside4.jpg';
import andrew5 from '../images/andrewcabinoutside.jpg';

const bunkhouses = {
  1: {
    name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
    description: "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
    images: [keaton1, keaton2, keaton3]
  },
  2: {
    name: "Bunkhouse 2 (A-frame: Kaelee's Cabin)",
    description: "Identical cozy A-frame bunkhouse near bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
    images: [kaelee1, kaelee2, kaelee3]
  },
  3: {
    name: "Bunkhouse 3 (Cassie's Cabin)",
    description: "Comfortable 1-room cabin directly next to bathhouse. Sleeps 6.",
    images: [cassie1, cassie2, cassie3, cassie4]
  },
  4: {
    name: "Bunkhouse 4 (Andrew's Cabin)",
    description: "Comfortable 1-room cabin themed after an old western with private porch and access to nearby trails. Sleeps 6.",
    images: [andrew1, andrew2, andrew3, andrew4, andrew5]
  },
  5: {
    name: "Bunkhouse 5 (Mackenzie's Cabin)",
    description: "Charming cabin nestled in a quiet corner. Ideal for small families. Sleeps 6.",
    images: []
  }
};

export default function BunkhouseDetail() {
  const { id } = useParams();
  const bunkhouse = bunkhouses[id];

  if (!bunkhouse) return <div className="container"><h2>Bunkhouse not found</h2></div>;

  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="waiver-button" style={{ marginBottom: '1rem' }}>← Back to Home</button>
      </Link>

      <h1 className="title">{bunkhouse.name}</h1>
      <p className="subtitle">{bunkhouse.description}</p>

      {bunkhouse.images.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            style={{ maxWidth: '600px', margin: 'auto', borderRadius: '8px', overflow: 'hidden' }}
          >
            {bunkhouse.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${bunkhouse.name} ${i + 1}`}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="booking-form">
        <h3>Select a Date</h3>
        <input type="date" />
        <br />
        <button style={{ marginTop: '1rem' }}>Reserve This Cabin</button>
      </div>
    </div>
  );
}
