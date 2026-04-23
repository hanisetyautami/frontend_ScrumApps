import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Info,
  Settings,
  LogOut,
  Layers3,
  User
} from 'lucide-react';
import './css/ProjectList.css';
import './css/KelolaProfil.css';

const KelolaProfil = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: "Firstasya Cantika",
    gender: "perempuan",
    nik: "3519000000000001",
    alamat: "Madiun, Jawa Timur, Indonesia",
    phone: "081234567890",
    email: "firstasya@student.uns.ac.id"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika simpan data ke API di sini jika perlu
    console.log("Data disimpan:", formData);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    // Logika logout (bersihkan storage, dsb)
    navigate('/login');
  };

  return (
    <div className="scrumapps-wrapper">
      {/* 1. SIDEBAR */}
      <aside className="scrum-sidebar">
        <div className="sidebar-logo">
          <Layers3 color="#ee1e2d" size={28} />
          <span>ScrumApps</span>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={20} /> <span>Dashboard</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <Briefcase size={20} /> <span>Proyek</span>
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <Users size={20} /> <span>Pengguna</span>
          </NavLink>
          <NavLink to="/info" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <Info size={20} /> <span>Informasi Sistem</span>
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <p>Copyright 2024 ScrumApps.</p>
          <p>Rights Reserved. Version 0.5.0-alpha</p>
        </div>
      </aside>

      {/* 2. AREA UTAMA */}
      <main className="scrum-main">
        <header className="scrum-header">
          <div className="header-left">
            <div className="breadcrumb">
              <span className="bc-icon" style={{ backgroundColor: '#ee1e2d', color: 'white' }}>
                <User size={16} />
              </span>
              <span className="bc-text bc-active">Kelola Profil</span>
              <span className="bc-sep">›</span>
              <span className="bc-text" style={{ color: '#ee1e2d' }}>Profil</span>
              <span className="bc-sep">›</span>
              <span className="bc-text">Data Diri</span>
            </div>
          </div>
          <div className="header-right" style={{ display: 'flex', gap: '15px' }}>
            <Settings size={20} color="#a0aec0" className="cursor-pointer" />
            <LogOut size={20} color="#ee1e2d" className="cursor-pointer" onClick={handleLogout} />
          </div>
        </header>

        <div className="scrum-content">
          <div className="content-header" style={{ marginBottom: '25px' }}>
            <h2>Kelola Profil</h2>
            <p>Halaman ini berisi data diri Anda yang dapat diubah sesuai kebutuhan pengerjaan proyek.</p>
          </div>

          <div className="profile-card">
            <form className="profile-form" onSubmit={handleSubmit}>
              
              {/* Bagian Foto */}
              <div className="photo-upload-section">
                <label className="input-label">Foto Profil</label>
                <div className="photo-container">
                  <div className="avatar-box">
                    <User size={40} color="#cbd5e1" />
                  </div>
                  <div className="photo-actions">
                    <button type="button" className="btn-change">Ubah</button>
                    <button type="button" className="btn-delete-photo">Hapus</button>
                  </div>
                </div>
              </div>

              {/* Grid Input Form */}
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Nama Lengkap</label>
                  <input 
                    type="text" 
                    name="nama" 
                    value={formData.nama} 
                    onChange={handleChange} 
                    placeholder="Masukkan Nama Lengkap" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Jenis Kelamin</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="laki" 
                        checked={formData.gender === 'laki'} 
                        onChange={handleChange} 
                      />
                      <span>Laki-laki</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="perempuan" 
                        checked={formData.gender === 'perempuan'} 
                        onChange={handleChange} 
                      />
                      <span>Perempuan</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>NIK</label>
                  <input 
                    type="text" 
                    name="nik" 
                    value={formData.nik} 
                    onChange={handleChange} 
                    placeholder="cth. 351xxxxxxxxxxxxx" 
                  />
                </div>

                <div className="form-group full-width">
                  <label>Alamat Lengkap</label>
                  <textarea 
                    name="alamat" 
                    rows="3" 
                    value={formData.alamat} 
                    onChange={handleChange} 
                    placeholder="Masukkan Alamat Lengkap"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>No Telepon</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="cth. 085xxxxxxxxx" 
                  />
                </div>

                <div className="form-group">
                  <label>Alamat Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="cth. nama@email.com" 
                    required 
                  />
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="form-footer">
                <button 
                  type="button" 
                  className="btn-cancel" 
                  onClick={() => navigate('/dashboard')}
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="btn-save"
                >
                  Simpan Data
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KelolaProfil;