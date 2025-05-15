import React, { useState } from 'react';
import './Produtos.css'; // Não esqueça de criar esse arquivo

const produtosDestaque = [
  {
    titulo: 'Sofá Confor',
    descricao: 'Tech Confort',
    imagem: 'https://img.freepik.com/fotos-gratis/almofada-confortavel-no-sofa_74190-10005.jpg',
  },
  {
    titulo: 'Mesa de jantar rustico',
    descricao: 'Alta Qualidade',
    imagem: 'https://img.freepik.com/fotos-gratis/casa-de-design-de-interiores-e-mesa-e-cadeira-de-madeira-moderna_657883-324.jpg',
  },
  {
    titulo: 'Painéis Ripados',
    descricao: 'Ecológicos',
    imagem: 'https://img.freepik.com/fotos-gratis/conceito-de-parede-de-fundo-abstrato-com-espaco-de-copia_23-2148801263.jpg',
  },
  {
    titulo: 'Cama de Luxo',
    descricao: 'Estrutura robusta e durável',
    imagem: 'https://img.freepik.com/fotos-gratis/interior-da-sala-do-quarto-do-hotel_23-2150683419.jpg',
  },
];

const Produtos = () => {
  const [busca, setBusca] = useState('');

  const produtosFiltrados = produtosDestaque.filter((item) =>
    item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="produtos-wrapper">
      <div className="produtos-topbar">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select>
          <option>Ordenar por</option>
          <option>Nome (A-Z)</option>
          <option>Nome (Z-A)</option>
        </select>
      </div>

      <div className="produtos-container">
        {produtosFiltrados.map((item, index) => (
          <div key={index} className="card-produto" style={{ backgroundImage: `url(${item.imagem})` }}>
            <div className="card-overlay">
              <h2>{item.titulo}</h2>
              <p>{item.descricao}</p>
              <button>Escolher modelo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
