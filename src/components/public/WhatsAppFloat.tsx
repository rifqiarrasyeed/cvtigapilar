'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6283835352717?text=Halo%20CV%20Tiga%20Pilar%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20penerbitan%20buku."
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
