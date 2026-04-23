import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, Users, Info, 
  Settings, LogOut, Layers3, Bell, User,
  Package, FolderOpen, RefreshCcw, CheckCircle2, AlertCircle,
  Search // Ditambahkan untuk fitur pencarian
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './css/Projectlist.css'; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({ title: '', projects: [] });
  const [searchQuery, setSearchQuery] = useState(''); // State untuk pencarian

  const projectsData = {
    'Total Proyek': [
      { id: 1, name: 'TOKO BANGUNAN', date: '01 Juni 2025 - 09 Juli 2025', icon: '🏠' },
      { id: 2, name: 'TOKO SEPEDA', date: '29 Juni 2025 - 09 Agustus 2025', icon: '🚲' }
    ],
    'Hold': [
      { id: 1, name: 'TOKO BANGUNAN', date: 'Status: Tertunda (Hold)', icon: '🏠' },
      { id: 2, name: 'TOKO SEPEDA', date: 'Status: Tertunda (Hold)', icon: '🚲' }
    ],
  };

  const pieData = [
    { name: 'HOLD', value: 100, color: '#A0AEC0' },
    { name: 'IN PROGRESS', value: 0, color: '#F6AD55' },
    { name: 'DONE', value: 0, color: '#68D391' },
    { name: 'LATE', value: 0, color: '#FC8181' },
  ];

  const handleCardClick = (label) => {
    setDrawerContent({
      title: label,
      projects: projectsData[label] || []
    });
    setIsDrawerOpen(true);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  // Fungsi pencarian sederhana
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Mencari:", searchQuery);
    // Tambahkan logika navigasi atau filter di sini jika diperlukan
  };

  return (
    <div className="scrumapps-wrapper">
      <aside className="scrum-sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div className="sidebar-logo">
          <div style={{
            width: '32px', 
            height: '32px', 
            backgroundColor: '#ee1e2d', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <Layers3 color="white" size={20} />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a202c', letterSpacing: '-0.5px' }}>ScrumApps</span>
        </div>

        <nav className="sidebar-nav" style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
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

        {/* Bagian Bawah Sidebar */}
        <div className="sidebar-bottom-section" style={{ borderTop: '1px solid #edf2f7' }}>
          <div className="sidebar-profile" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="https://ui-avatars.com/api/?name=Admin&background=ee1e2d&color=fff" 
              alt="User Profile" 
              style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#1a202c', margin: 0 }}>Hani Setya</p>
              <p style={{ fontSize: '12px', color: '#a0aec0', margin: 0 }}>Data Analyst</p>
            </div>
          </div>

          <div className="sidebar-footer" style={{ padding: '0 24px 20px 24px' }}>
            <p style={{ fontSize: '11px', color: '#a0aec0', margin: 0 }}>© Copyright 2024 <strong>ScrumApps</strong>.</p>
          </div>
        </div>
      </aside>

      <main className="scrum-main">
        <header className="scrum-header">
          <div className="header-left">
            <div className="breadcrumb">
              <span className="bc-icon" style={{ backgroundColor: '#ee1e2d', color: 'white' }}>
                <LayoutDashboard size={16} />
              </span>
              <span className="bc-text bc-active">Dashboard</span>
            </div>
            
            {/* FITUR TAMBAHAN: Search Bar di Header */}
            <form onSubmit={handleSearch} className="header-search-form" style={{ marginLeft: '25px', position: 'relative' }}>
              <Search size={18} color="#a0aec0" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Cari proyek atau tugas..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '8px 12px 8px 40px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  fontSize: '14px',
                  width: '250px',
                  outline: 'none'
                }}
              />
            </form>
          </div>
          
          <div className="header-right">
             <div className="admin-profile-section">
                <div className="text-right">
                  <p className="admin-name">Halo, Admin!</p>
                  <p className="admin-email">admin@scrumapps.com</p>
                </div>
                <div className="admin-avatar">
                   <img src="https://ui-avatars.com/api/?name=Admin&background=ee1e2d&color=fff" alt="avatar" />
                </div>
             </div>
            <Bell size={20} color="#a0aec0" className="cursor-pointer" />
            
            <div style={{ position: 'relative' }}>
              <Settings 
                size={20} 
                color="#a0aec0" 
                className="cursor-pointer" 
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              />
              {isSettingsOpen && (
                <div className="dropdown-menu-custom">
                  <div onClick={() => navigate('/kelolaprofil')} className="dropdown-item">
                    <User size={16} /> Kelola Profil
                  </div>
                  <div className="dropdown-divider"></div>
                  <div onClick={handleLogout} className="dropdown-item text-red">
                    <LogOut size={16} /> Keluar Sesi
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="scrum-content">
          {/* Dashboard Stats */}
          <div className="dashboard-stats-grid">
            <StatCardSmall label="Total Proyek" value="2" icon={<Package size={22}/>} borderColor="#3182CE" onClick={() => handleCardClick('Total Proyek')} />
            <StatCardSmall label="Hold" value="2" icon={<FolderOpen size={22}/>} borderColor="#718096" onClick={() => handleCardClick('Hold')} />
            <StatCardSmall label="In Progress" value="0" icon={<RefreshCcw size={22}/>} borderColor="#D69E2E" onClick={() => handleCardClick('In Progress')} />
            <StatCardSmall label="Done" value="0" icon={<CheckCircle2 size={22}/>} borderColor="#38A169" onClick={() => handleCardClick('Done')} />
            <StatCardSmall label="Late" value="0" icon={<AlertCircle size={22}/>} borderColor="#E53E3E" onClick={() => handleCardClick('Late')} />
          </div>

          <div className="dashboard-main-layout">
            <div className="chart-container-card">
              <h3 className="chart-title">Pie Chart Proyek</h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                      {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="custom-legend">
                {pieData.map((item) => (
                  <div key={item.name} className="legend-item">
                    <span className="dot" style={{ backgroundColor: item.color }}></span>
                    <span>{item.name} {item.value}.00%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-illustration-card">
              <h3 className="info-title">ScrumApps</h3>
              <div className="illustration-wrapper">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-task-management-4487339-3723237.png" alt="Scrum" />
              </div>
              <p className="info-text">Aplikasi manajemen proyek khusus framework Scrum untuk efisiensi sprint tim.</p>
            </div>
          </div>

          <div className="recent-projects-section">
            <h3 className="section-title">Proyek Terbaru</h3>
            <div className="recent-grid">
               <ProjectMiniCard title="TOKO BANGUNAN" client="Clariva PO" icon="🏠" onClick={() => navigate('/projects/1')} />
               <ProjectMiniCard title="TOKO SEPEDA" client="Clariva PO" icon="🚲" onClick={() => navigate('/projects/2')} />
               <button className="btn-view-more" onClick={() => navigate('/projects')}>Lihat Lebih Lengkap</button>
            </div>
          </div>
        </div>

        {isDrawerOpen && (
          <>
            <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}></div>
            <div className="drawer-panel">
              <div className="drawer-header">
                <h3>{drawerContent.title}</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="close-btn">&times;</button>
              </div>
              <div className="drawer-body">
                {drawerContent.projects.length > 0 ? (
                  drawerContent.projects.map((proj) => (
                    <div key={proj.id} className="drawer-item" onClick={() => navigate(`/projects/${proj.id}`)} style={{ cursor: 'pointer' }}>
                      <div className="item-icon">{proj.icon}</div>
                      <div className="item-info">
                        <h4>{proj.name}</h4>
                        <p>{proj.date}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty-msg">Tidak ada data ditemukan.</p>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

const StatCardSmall = ({ label, value, icon, borderColor, onClick }) => (
  <div className="stat-card-small" style={{ borderLeft: `4px dashed ${borderColor}`, cursor: 'pointer' }} onClick={onClick}>
    <div className="stat-content">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
    <div className="stat-icon" style={{ color: borderColor }}>{icon}</div>
  </div>
);

const ProjectMiniCard = ({ title, client, icon, onClick }) => (
  <div className="mini-project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
    <div className="mini-card-header">
      <span className="mini-icon-circle">{icon}</span>
    </div>
    <div className="mini-card-body">
      <h4>{title}</h4>
      <p>{client}</p>
    </div>
  </div>
);

export default Dashboard;