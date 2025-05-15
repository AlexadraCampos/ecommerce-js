import React from 'react';
import './Novidades.css'; 

const novidades = [
    {
        id: 1,
        titulo: 'Coleção Verão 2025',
        descricao: 'Descubra a nova linha de produtos com design tropical e moderno para o verão.',
        imagem:'https://img.freepik.com/fotos-gratis/cadeira-vazia-e-mesa-com-deck-ao-ar-livre_74190-1707.jpg'
    },

    {
        id: 2,
        titulo: 'Novos Itens para Banheiro',
        descricao: 'Lançamos cubas e torneiras com novas tecnologias e acabamento premium.',
        imagem: 'https://img.freepik.com/fotos-gratis/arranjo-de-elementos-de-banheiro-para-autocuidado_23-2148883827.jpg'
    },
    
    {
        id: 3,
        titulo: 'Frete Grátis em Lançamentos',
        descricao: 'Compre nossos lançamentos e receba em casa sem pagar nada a mais pelo frete!',
        imagem: 'https://img.freepik.com/fotos-gratis/desenho-interior-de-cozinha-bonito_23-2150976503.jpg'
    }
]; 


const Novidades = () => {
    return (
        <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Novidades</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {novidades.map(n => (
          <div key={n.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', width: '300px' }}>
            <img src={n.imagem} alt={n.titulo} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '1rem' }}>{n.titulo}</h3>
            <p>{n.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novidades;
    
