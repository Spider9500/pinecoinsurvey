// Shared authentication styles for neon-green theme
export const neonStyles = {
  // Neon glow effects
  neonGlow: {
    boxShadow: '0 0 5px #00B140, 0 0 10px #00B140, 0 0 15px #00B140',
    transition: 'all 0.3s ease-in-out',
  },
  
  neonGlowHover: {
    '&:hover': {
      boxShadow: '0 0 10px #00B140, 0 0 20px #00B140, 0 0 30px #00B140, 0 0 40px #00B140',
      transform: 'scale(1.05)',
    },
  },

  // Background gradients
  animatedBackground: {
    background: 'linear-gradient(-45deg, #000000, #001a00, #003300, #004d00)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
  },

  // Card styling
  neonCard: {
    background: 'rgba(0, 0, 0, 0.8)',
    border: '2px solid #00B140',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(0, 177, 64, 0.5), inset 0 0 20px rgba(0, 177, 64, 0.1)',
    backdropFilter: 'blur(10px)',
  },

  // Input styling
  neonInput: {
    '& .MuiInput-input': {
      color: '#ffffff',
      '&::placeholder': {
        color: '#cccccc',
        opacity: 0.7,
      },
    },
    '& .MuiInput-root': {
      border: '1px solid #00B140',
      borderRadius: '8px',
      backgroundColor: 'rgba(0, 177, 64, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: '#00FF00',
        boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
      },
      '&:focus-within': {
        borderColor: '#00FF00',
        boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
      },
    },
  },

  // Button styling
  neonButton: {
    background: 'linear-gradient(45deg, #00B140, #00FF00)',
    color: '#000000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    padding: '12px 30px',
    boxShadow: '0 0 10px rgba(0, 177, 64, 0.5)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #00FF00, #00B140)',
      boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
      transform: 'translateY(-2px)',
    },
  },

  // Typography
  neonText: {
    color: '#00B140',
    textShadow: '0 0 10px #00B140, 0 0 20px #00B140',
  },

  // Header styling
  neonHeader: {
    background: 'linear-gradient(90deg, #00B140, #00FF00)',
    color: '#000000',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 20px rgba(0, 177, 64, 0.3)',
  },
};

// CSS keyframes for animations
export const keyframes = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes neonPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes neonFlicker {
    0%, 100% { opacity: 1; }
    25% { opacity: 0.8; }
    50% { opacity: 0.6; }
    75% { opacity: 0.9; }
  }
`;
