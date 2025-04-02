import React, { useState } from 'react';
import { useWeb3 } from '../hooks/useWeb3';
import CreateProjectModal from './CreateProjectModal';
import './Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { account } = useWeb3();

  const handleCreateClick = () => {
    if (!account) {
      alert('Please connect your wallet in MetaMask first');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Fuel your ideas</h1>
          <p className="hero-text">
            Join CrowdFunding today and be part of a community that empowers you. Create your project, 
            connect with backers who believe in your potential, and experience the transparency 
            and security of blockchain technology.
          </p>
          <p className="hero-subtext">Your journey towards success begins here.</p>
          
          <div className="hero-actions">
            <button 
              onClick={handleCreateClick}
              className="btn btn-primary btn-large"
            >
              Create Project
            </button>
            <a href="#projects" className="btn btn-outline">
              Browse Projects
            </a>
          </div>
        </div>
      </section>

      {/* Create Project Modal */}
      {isModalOpen && (
        <CreateProjectModal 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default Hero;