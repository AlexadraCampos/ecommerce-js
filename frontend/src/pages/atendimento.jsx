import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Atendimento = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Atendimento</h1>

      <div style={{ marginTop: '1rem', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Compre por telefone</h2>
        <p><FaPhoneAlt style={{ marginRight: '8px' }} /> <strong>(48) 98847-3667</strong></p>

        <h2 style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Fale no WhatsApp</h2>
        <p><FaWhatsapp style={{ marginRight: '8px' }} /> Vendas e Suporte <br /><strong>(48) 98847-3667</strong></p>

        <h2 style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Envie um e-mail</h2>
        <p><FaEnvelope style={{ marginRight: '8px' }} /> <strong>contato@banhoecasa.com.br</strong></p>

        <h2 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Horário de Atendimento</h2>
        <p>Segunda à Sexta das 8:30 às 17:30h</p>
      </div>
    </div>
  );
};

export default Atendimento;
