/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Edit3, 
  X, 
  Check, 
  Lock, 
  ShieldCheck,
  Gamepad2,
  Code2,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';
import { initialData } from './data';
import { Project, PortfolioData, Skill } from './types';

// --- Helpers ---

const getSortValue = (period?: string) => {
  if (!period) return 0;
  const normalized = period.replace(/Present/i, new Date().getFullYear().toString());
  const years = normalized.match(/\d{4}/g);
  if (!years) return 0;
  return Math.max(...years.map(Number));
};

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gaming-accent/10 text-gaming-accent border border-gaming-accent/20 ${className}`}>
    {children}
  </span>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold uppercase tracking-tighter mb-2">
      <span className="text-gaming-accent">/</span> {title}
    </h2>
    {subtitle && <p className="text-white/50 text-sm font-mono uppercase tracking-widest">{subtitle}</p>}
  </div>
);

interface ProjectCardProps {
  project: Project;
  onEdit?: (p: Project) => void;
  onDelete?: (id: string) => void;
  onClick?: (p: Project) => void;
  isAdmin?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete, onClick, isAdmin }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onClick?.(project)}
      className="glass-panel overflow-hidden group hover:border-gaming-accent/30 transition-all duration-500 cursor-pointer"
    >
      <div className="aspect-video w-full bg-black relative pointer-events-none">
        <iframe
          src={project.youtubeUrl}
          title={project.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        {isAdmin && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(project);
              }}
              className="p-2 bg-black/80 rounded-lg hover:bg-gaming-accent hover:text-black transition-colors"
            >
              <Edit3 size={16} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(project.id);
              }}
              className="p-2 bg-black/80 rounded-lg hover:bg-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-gaming-accent transition-colors">
              {project.title}
            </h3>
            {(project.studio || project.role) && (
              <div className="flex flex-col gap-1">
                <p className="text-gaming-accent text-sm font-mono uppercase tracking-wider">
                  {project.studio}{project.studio && project.role && <span className="text-white/20 mx-2">|</span>}{project.role}
                </p>
                {project.period && (
                  <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
                    {project.period}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {project.contributions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-white/60">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gaming-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-1 text-[10px] font-bold bg-white/5 border border-white/10 rounded uppercase tracking-tighter text-white/40">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface TimelineItemProps {
  project: Project;
  index: number;
  onClick: (p: Project) => void;
  isAdmin?: boolean;
  onEdit?: (p: Project) => void;
  onDelete?: (id: string) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ project, index, onClick, isAdmin, onEdit, onDelete }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0">
      {/* Dot */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gaming-bg border-4 border-gaming-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        <div className="w-2 h-2 bg-gaming-accent rounded-full animate-pulse" />
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        onClick={() => onClick(project)}
        className="w-[calc(100%-4rem)] md:w-[45%] glass-panel p-6 hover:border-gaming-accent/30 transition-all cursor-pointer relative"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold group-hover:text-gaming-accent transition-colors">{project.title}</h3>
          <span className="text-xs font-mono text-gaming-accent bg-gaming-accent/10 px-2 py-1 rounded">
            {project.period}
          </span>
        </div>
        {(project.studio || project.role) && (
          <p className="text-gaming-accent/80 text-xs font-mono uppercase tracking-widest mb-3">
            {project.studio}{project.studio && project.role && <span className="text-white/20 mx-1">|</span>}{project.role}
          </p>
        )}
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-bold bg-white/5 border border-white/10 rounded uppercase tracking-tighter text-white/40">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && <span className="text-[10px] text-white/20">+{project.tech.length - 4}</span>}
        </div>

        {isAdmin && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={(e) => { e.stopPropagation(); onEdit?.(project); }}
              className="p-1.5 bg-black/80 rounded hover:bg-gaming-accent hover:text-black transition-colors"
            >
              <Edit3 size={14} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete?.(project.id); }}
              className="p-1.5 bg-black/80 rounded hover:bg-red-500 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const ProjectDetailModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="glass-panel w-full max-w-6xl relative overflow-hidden h-full max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-black/50 rounded-full text-white/60 hover:text-white hover:bg-gaming-accent hover:text-black transition-all"
        >
          <X size={24} />
        </button>

        <div className="grid lg:grid-cols-5 h-full">
          {/* Left Side: Visuals */}
          <div className="lg:col-span-3 bg-black overflow-y-auto custom-scrollbar h-full">
            <div className="aspect-video w-full">
              <iframe
                src={project.youtubeUrl}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 grid gap-4">
              {project.images?.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full rounded-lg border border-white/5"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="lg:col-span-2 p-8 md:p-12 overflow-y-auto custom-scrollbar border-l border-white/5 h-full">
            <div className="mb-8">
              <Badge className="mb-4">{project.type === 'portfolio' ? 'Featured Portfolio' : 'Professional Project'}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-2">{project.title}</h2>
              {(project.studio || project.role || project.period) && (
                <div className="flex flex-col gap-2">
                  {(project.studio || project.role) && (
                    <p className="text-gaming-accent font-mono uppercase tracking-widest text-sm">
                      {project.studio}{project.studio && project.role && <span className="text-white/20 mx-2">|</span>}{project.role}
                    </p>
                  )}
                  {project.period && (
                    <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">
                      {project.period}
                    </p>
                  )}
                </div>
              )}
              
              <div className="flex gap-4 mt-6">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-gaming-accent transition-colors">
                    <Github size={14} /> Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-gaming-accent transition-colors">
                    <Globe size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4">Overview</h4>
                <p className="text-white/80 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4">Key Contributions</h4>
                <ul className="space-y-3">
                  {project.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/70">
                      <span className="mt-2 w-2 h-2 rounded-full bg-gaming-accent shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs font-bold bg-white/5 border border-white/10 rounded uppercase tracking-widest text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [addingType, setAddingType] = useState<'portfolio' | 'project' | null>(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_data_v1');
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load saved data", e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio_data_v1', JSON.stringify(data));
  }, [data]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '3583') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setPassword('');
    } else {
      alert("Incorrect password");
    }
  };

  const saveProject = (project: Project) => {
    if (editingProject) {
      setData(prev => ({
        ...prev,
        projects: prev.projects.map(p => p.id === project.id ? project : p)
      }));
    } else {
      setData(prev => ({
        ...prev,
        projects: [...prev.projects, { ...project, id: Date.now().toString() }]
      }));
    }
    setEditingProject(null);
    setAddingType(null);
  };

  const deleteProject = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setData(prev => ({
        ...prev,
        projects: prev.projects.filter(p => p.id !== id)
      }));
    }
  };

  const portfolioItems = useMemo(() => data.projects.filter(p => p.type === 'portfolio'), [data.projects]);
  const projectItems = useMemo(() => {
    return data.projects
      .filter(p => p.type === 'project')
      .sort((a, b) => getSortValue(b.period) - getSortValue(a.period));
  }, [data.projects]);

  return (
    <div className="min-h-screen relative">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gaming-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gaming-accent/5 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gaming-accent rounded-lg flex items-center justify-center text-black font-bold text-xl">
              CH
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase">CHANEUNG HAN</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest">
            <a href="#about" className="hover:text-gaming-accent transition-colors">About</a>
            <a href="#work" className="hover:text-gaming-accent transition-colors">Portfolio</a>
            <a href="#projects" className="hover:text-gaming-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gaming-accent transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-gaming-accent transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-gaming-accent transition-colors">Contact</a>
            <button 
              onClick={() => isAdmin ? setIsAdmin(false) : setShowAdminLogin(true)}
              className={`p-2 rounded-lg transition-all ${isAdmin ? 'bg-gaming-accent text-black' : 'hover:bg-white/5'}`}
            >
              {isAdmin ? <ShieldCheck size={20} /> : <Lock size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6">Available for Work</Badge>
            <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              Gameplay<br />
              <span className="text-gaming-accent neon-text">Software Engineer</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-xl text-white/60 max-w-lg mb-8 leading-relaxed">
                  Software Engineer with experience at PUBG Studio (KRAFTON) and NCSoft, specializing in Unreal Engine C++ gameplay systems, camera systems, and tools development.
                </p>
                <div className="flex gap-4">
                  <a href="#work" className="px-8 py-4 bg-gaming-accent text-black font-bold uppercase tracking-widest rounded-lg hover:neon-glow transition-all">
                    View Portfolio
                  </a>
                  <a href="#contact" className="px-8 py-4 border border-white/10 font-bold uppercase tracking-widest rounded-lg hover:bg-white/5 transition-all">
                    Get in Touch
                  </a>
                </div>
              </div>
              
              <div className="glass-panel p-6 border-l-4 border-l-gaming-accent">
                <div className="flex items-center gap-3 mb-2 text-gaming-accent">
                  <ShieldCheck size={20} />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">Work Eligibility</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {data.workEligibility}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Me Section */}
        {data.aboutMe && (
          <section id="about" className="mb-32 scroll-mt-32">
            <SectionTitle title="About Me" subtitle="My Journey & Philosophy" />
            <div className="glass-panel p-8 md:p-12 border-l-4 border-l-gaming-accent">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <div className="space-y-6 text-lg text-white/80 leading-relaxed whitespace-pre-line">
                    {data.aboutMe}
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gaming-accent mb-4">Core Expertise</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                      <li className="flex items-center gap-2"><Check size={14} className="text-gaming-accent" /> Unreal Engine C++</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-gaming-accent" /> Gameplay Systems</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-gaming-accent" /> Camera & Vehicle Systems</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-gaming-accent" /> Tools Development</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gaming-accent mb-4">Experience</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                      <li className="flex items-center gap-2"><Layers size={14} className="text-gaming-accent" /> PUBG Studio (KRAFTON)</li>
                      <li className="flex items-center gap-2"><Layers size={14} className="text-gaming-accent" /> NCSOFT</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Portfolio Section */}
        {portfolioItems.length > 0 && (
          <section id="work" className="mb-32 scroll-mt-32">
            <div className="flex justify-between items-end mb-12">
              <SectionTitle title="Portfolio" subtitle="Featured Showcase" />
              {isAdmin && (
                <button 
                  onClick={() => {
                    setEditingProject(null);
                    setAddingType('portfolio');
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gaming-accent/10 text-gaming-accent border border-gaming-accent/20 rounded-lg hover:bg-gaming-accent/20 transition-all"
                >
                  <Plus size={18} /> Add Portfolio Item
                </button>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioItems.map(p => (
                <ProjectCard 
                  key={p.id} 
                  project={p} 
                  isAdmin={isAdmin}
                  onEdit={setEditingProject}
                  onDelete={deleteProject}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-32">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Projects" subtitle="Shipped Titles & Professional Experience" />
            {isAdmin && (
              <button 
                onClick={() => {
                  setEditingProject(null);
                  setAddingType('project');
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gaming-accent/10 text-gaming-accent border border-gaming-accent/20 rounded-lg hover:bg-gaming-accent/20 transition-all"
              >
                <Plus size={18} /> Add Project
              </button>
            )}
          </div>
          
          <div className="timeline-container">
            {projectItems.map((p, idx) => (
              <TimelineItem 
                key={p.id} 
                project={p} 
                index={idx}
                isAdmin={isAdmin}
                onEdit={setEditingProject}
                onDelete={deleteProject}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 scroll-mt-32">
          <SectionTitle title="Technical Arsenal" subtitle="Tools, Languages & Specialties" />
          <div className="grid md:grid-cols-3 gap-8">
            {data.skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 group hover:border-gaming-accent/20 transition-all"
              >
                <div className="w-12 h-12 bg-gaming-accent/10 rounded-xl flex items-center justify-center text-gaming-accent mb-6 group-hover:bg-gaming-accent group-hover:text-black transition-all">
                  {idx === 0 ? <Code2 /> : idx === 1 ? <Gamepad2 /> : <Cpu />}
                </div>
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Languages Section */}
        <section id="credentials" className="mb-32 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Education" subtitle="Academic Foundation" />
              <div className="space-y-8">
                {data.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 border-l-4 border-l-gaming-accent"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold uppercase tracking-tight">{edu.school}</h3>
                      <span className="text-xs font-mono text-gaming-accent bg-gaming-accent/10 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-white/80 font-medium mb-1">{edu.degree}</p>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-widest">{edu.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Languages" subtitle="Global Communication" />
              <div className="space-y-4">
                {data.languages.map((lang, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel p-6 flex items-center justify-between group hover:border-gaming-accent/20 transition-all"
                  >
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-gaming-accent transition-colors">
                        {lang.name}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {lang.proficiency}
                      </p>
                    </div>
                    {lang.detail && (
                      <span className="text-[10px] font-mono font-bold text-white/30 border border-white/10 px-2 py-1 rounded uppercase tracking-tighter">
                        {lang.detail}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="glass-panel p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gaming-accent to-transparent" />
            
            <SectionTitle title="Get In Touch" subtitle="Let's build something legendary" />
            
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-wrap justify-center gap-12">
                <a href={data.contact.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gaming-accent group-hover:text-gaming-accent transition-all">
                    <Github size={24} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Github</span>
                </a>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gaming-accent group-hover:text-gaming-accent transition-all">
                    <Linkedin size={24} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
              </div>

              <div className="pt-8 border-t border-white/5 w-full max-w-md">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Email Address</span>
                  <p className="text-2xl font-display font-medium text-gaming-accent tracking-tight select-all">
                    {data.contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex justify-center items-center text-white/30 text-xs font-mono uppercase tracking-widest">
        <p>© 2026 CHANEUNG HAN. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showAdminLogin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-panel p-8 w-full max-w-md relative"
            >
              <button 
                onClick={() => setShowAdminLogin(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gaming-accent/10 text-gaming-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock size={32} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Admin Access</h2>
                <p className="text-white/40 text-sm font-mono mt-2">Enter security code to continue</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-center text-3xl tracking-[1em] focus:border-gaming-accent outline-none transition-all"
                    autoFocus
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gaming-accent text-black font-bold uppercase tracking-widest rounded-lg hover:neon-glow transition-all"
                >
                  Authorize
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Edit Modal */}
      <AnimatePresence>
        {(editingProject || addingType) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="glass-panel p-8 w-full max-w-2xl my-auto relative"
            >
              <button 
                onClick={() => {
                  setEditingProject(null);
                  setAddingType(null);
                }}
                className="absolute top-4 right-4 text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              
              <ProjectForm 
                initialProject={editingProject || {
                  id: '',
                  title: '',
                  studio: '',
                  role: '',
                  description: '',
                  contributions: [''],
                  tech: [''],
                  youtubeUrl: '',
                  type: addingType || 'project',
                  longDescription: '',
                  images: [],
                  githubUrl: '',
                  liveUrl: ''
                }} 
                onSave={saveProject}
                onCancel={() => {
                  setEditingProject(null);
                  setAddingType(null);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Form Component ---

const ProjectForm = ({ initialProject, onSave, onCancel }: { 
  initialProject: Project, 
  onSave: (p: Project) => void,
  onCancel: () => void
}) => {
  const [project, setProject] = useState<Project>(initialProject);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(project);
  };

  const updateArrayField = (field: 'contributions' | 'tech', index: number, value: string) => {
    const newArr = [...project[field]];
    newArr[index] = value;
    setProject({ ...project, [field]: newArr });
  };

  const addArrayItem = (field: 'contributions' | 'tech') => {
    setProject({ ...project, [field]: [...project[field], ''] });
  };

  const removeArrayItem = (field: 'contributions' | 'tech', index: number) => {
    const newArr = project[field].filter((_, i) => i !== index);
    setProject({ ...project, [field]: newArr });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-widest text-white/40">Section Type</label>
        <select 
          value={project.type}
          onChange={e => setProject({...project, type: e.target.value as 'portfolio' | 'project'})}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
        >
          <option value="portfolio">Portfolio (Personal / Side Project)</option>
          <option value="project">Project (Professional Experience)</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Title</label>
          <input 
            required
            value={project.title}
            onChange={e => setProject({...project, title: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
          />
        </div>
        {project.type === 'project' && (
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">Studio / Company</label>
            <input 
              value={project.studio}
              onChange={e => setProject({...project, studio: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
            />
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {project.type === 'project' && (
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">Role</label>
            <input 
              value={project.role || ''}
              onChange={e => setProject({...project, role: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
            />
          </div>
        )}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Period (e.g. 2022 - Present)</label>
          <input 
            value={project.period || ''}
            onChange={e => setProject({...project, period: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
            placeholder="2022 - Present"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">GitHub URL</label>
          <input 
            value={project.githubUrl || ''}
            onChange={e => setProject({...project, githubUrl: e.target.value})}
            placeholder="https://github.com/..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Live Demo URL</label>
          <input 
            value={project.liveUrl || ''}
            onChange={e => setProject({...project, liveUrl: e.target.value})}
            placeholder="https://..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-widest text-white/40">YouTube Embed URL</label>
        <input 
          required
          placeholder="https://www.youtube.com/embed/..."
          value={project.youtubeUrl}
          onChange={e => setProject({...project, youtubeUrl: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-widest text-white/40">Description (Short)</label>
        <textarea 
          required
          value={project.description}
          onChange={e => setProject({...project, description: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none h-20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-widest text-white/40">Detailed Overview (Long)</label>
        <textarea 
          value={project.longDescription || ''}
          onChange={e => setProject({...project, longDescription: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none h-32"
          placeholder="Detailed explanation of the project and your role..."
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Screenshot URLs</label>
          <button type="button" onClick={() => setProject({ ...project, images: [...(project.images || []), ''] })} className="text-gaming-accent text-xs flex items-center gap-1">
            <Plus size={14} /> Add Image
          </button>
        </div>
        {(project.images || []).map((img, i) => (
          <div key={i} className="flex gap-2">
            <input 
              value={img}
              onChange={e => {
                const newImgs = [...(project.images || [])];
                newImgs[i] = e.target.value;
                setProject({ ...project, images: newImgs });
              }}
              placeholder="https://..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
            />
            <button type="button" onClick={() => {
              const newImgs = (project.images || []).filter((_, idx) => idx !== i);
              setProject({ ...project, images: newImgs });
            }} className="text-red-500 p-2">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Contributions</label>
          <button type="button" onClick={() => addArrayItem('contributions')} className="text-gaming-accent text-xs flex items-center gap-1">
            <Plus size={14} /> Add
          </button>
        </div>
        {project.contributions.map((c, i) => (
          <div key={i} className="flex gap-2">
            <input 
              required
              value={c}
              onChange={e => updateArrayField('contributions', i, e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-gaming-accent outline-none"
            />
            <button type="button" onClick={() => removeArrayItem('contributions', i)} className="text-red-500 p-2">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Tech Tags</label>
          <button type="button" onClick={() => addArrayItem('tech')} className="text-gaming-accent text-xs flex items-center gap-1">
            <Plus size={14} /> Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <div key={i} className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg pl-3 pr-1 py-1">
              <input 
                required
                value={t}
                onChange={e => updateArrayField('tech', i, e.target.value)}
                className="bg-transparent text-xs w-20 outline-none"
              />
              <button type="button" onClick={() => removeArrayItem('tech', i)} className="text-red-500 p-1">
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button 
          type="submit"
          className="flex-1 py-3 bg-gaming-accent text-black font-bold uppercase tracking-widest rounded-lg hover:neon-glow transition-all"
        >
          Save Changes
        </button>
        <button 
          type="button"
          onClick={onCancel}
          className="px-8 py-3 border border-white/10 font-bold uppercase tracking-widest rounded-lg hover:bg-white/5 transition-all"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
