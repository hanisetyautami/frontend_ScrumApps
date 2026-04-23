import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State baru untuk checkbox
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google triggered');
    // Logika integrasi Google Auth di sini
  };

  return (
    <div style={styles.loginSplitContainer}>
      
      {/* --- SISI KIRI: ILUSTRASI --- */}
      <div style={styles.loginVisualSection}>
        <div style={styles.visualContent}>
          {/* Identitas Brand di Sisi Visual */}
          <div style={styles.visualLogoContainer}>
            <span style={styles.visualLogoText}>ScrumApps</span>
          </div>

          <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/team-management-5147517-4301385.png" 
            alt="Illustration" 
            style={styles.visualImage}
          />
          <h2 style={styles.visualTitle}>Kelola Proyek Lebih Mudah</h2>
          <p style={styles.visualSubtitle}>Pantau progres tim Anda dalam satu dasbor terpusat secara real-time.</p>
        </div>
        {/* Dekorasi Blur Background */}
        <div style={{ ...styles.blurCircle, ...styles.topCircle }}></div>
        <div style={{ ...styles.blurCircle, ...styles.bottomCircle }}></div>
      </div>

      {/* --- SISI KANAN: FORMULIR --- */}
      <div style={styles.loginFormSection}>
        <div style={styles.formContainer}>
          <header style={styles.formHeader}>
            <h1 style={styles.formHeaderTitle}>Masuk</h1>
            <p style={styles.formHeaderSub}>Masukkan alamat email dan kata sandi Anda.</p>
          </header>

          <form onSubmit={handleSubmit} style={styles.loginForm}>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>Alamat Email</label>
              <input
                type="email"
                placeholder="nama@email.com"
                style={styles.customInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>Kata Sandi</label>
              <div style={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi"
                  style={styles.customInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.passwordToggle}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Opsi Tambahan: Remember Me & Forgot Password */}
            <div style={styles.optionsRow}>
              <label style={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={styles.checkboxInput}
                />
                <span>Ingat saya</span>
              </label>
              <Link to="/forgot-password" style={styles.linkTextRed}>
                Lupa kata sandi?
              </Link>
            </div>

            <div style={styles.formActions}>
              <button type="submit" style={styles.btnLoginMain}>
                Masuk Sekarang
              </button>
              
              {/* Tombol Login Google */}
              <button 
                type="button" 
                onClick={handleGoogleLogin} 
                style={styles.btnGoogleLogin}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                  alt="Google" 
                  style={styles.googleIcon} 
                />
                Masuk dengan Google
              </button>
            </div>
          </form>

          <footer style={styles.formFooter}>
            <p>© Copyright 2026 <strong>ScrumApps</strong>. <br/> All Rights Reserved.</p>
          </footer>
        </div>
      </div>

    </div>
  );
};

// --- STYLES (Inline CSS) ---
const styles = {
  loginSplitContainer: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#ffffff',
  },
  loginVisualSection: {
    flex: 1.2,
    backgroundColor: '#ee1e2d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    padding: '60px',
  },
  visualContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  visualLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: '40px',
  },
  visualLogoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  visualImage: {
    width: '100%',
    maxWidth: '420px',
    marginBottom: '30px',
    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
  },
  visualTitle: {
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '15px',
  },
  visualSubtitle: {
    fontSize: '16px',
    opacity: '0.85',
    lineHeight: '1.6',
    maxWidth: '400px',
    margin: '0 auto',
  },
  blurCircle: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 1,
  },
  topCircle: {
    width: '400px',
    height: '400px',
    background: 'rgba(255, 255, 255, 0.15)',
    top: '-150px',
    left: '-100px',
  },
  bottomCircle: {
    width: '500px',
    height: '500px',
    background: 'rgba(0, 0, 0, 0.1)',
    bottom: '-200px',
    right: '-100px',
  },
  loginFormSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#f8fafc',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
  },
  formHeader: {
    marginBottom: '40px',
  },
  formHeaderTitle: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#1a202c',
    margin: '0 0 8px 0',
  },
  formHeaderSub: {
    color: '#718096',
    fontSize: '15px',
    margin: '0',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#4a5568',
    marginBottom: '8px',
    marginLeft: '4px',
  },
  passwordWrapper: {
    position: 'relative',
  },
  customInput: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    backgroundColor: 'white',
    fontSize: '14px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
  },
  passwordToggle: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#a0aec0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
    fontSize: '14px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#4a5568',
    cursor: 'pointer',
  },
  checkboxInput: {
    cursor: 'pointer',
    accentColor: '#ee1e2d',
  },
  linkTextRed: {
    color: '#ee1e2d',
    textDecoration: 'none',
    fontWeight: '600',
  },
  formActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  btnLoginMain: {
    backgroundColor: '#ee1e2d',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(238, 30, 45, 0.2)',
  },
  btnGoogleLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: 'white',
    color: '#1a202c',
    border: '1px solid #e2e8f0',
    padding: '13px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  googleIcon: {
    width: '18px',
    height: '18px',
  },
  formFooter: {
    marginTop: '50px',
    color: '#a0aec0',
    fontSize: '13px',
    textAlign: 'center',
    lineHeight: '1.6',
  }
};

export default Login;