import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Mail, Linkedin, ExternalLink, 
  Cpu, Award, Music, Download, Terminal, 
  Code2, Sparkles, ChevronRight, GraduationCap,
  Microscope, Globe, Zap
} from 'lucide-react';

const Portfolio = () => {
  // --- COMPLETE RESUME DATA ---
  const data = {
    name: "Ekaansh Jain",
    title: "AI/ML Developer & Agentic Systems Architect",
    summary: "AI/ML developer skilled in deep learning, transformer models, and LangChain-based agent systems, focused on building scalable prototypes.",
    contact: {
      email: "ekaanshofficial13@gmail.com",
      github: "https://github.com/Ekaansh-Jain",
      linkedin: "#", // Add your link here
      phone: "+91-9821216773"
    },
    education: [
      {
        school: "Vellore Institute of Technology",
        location: "Vellore, India",
        degree: "B.Tech in Computer Science and Engineering (IoT Specialization)",
        period: "2023 – Present",
        metric: "CGPA: 8.50/10",
        highlight: "Core focus on AI, IoT systems, and Agentic workflows."
      },
      {
        school: "Prudence School",
        location: "New Delhi, India",
        degree: "Senior Secondary (CBSE, PCM)",
        period: "2022 – 2023",
        metric: "Score: 87.4%",
        highlight: "Focus on Physics, Chemistry, and Mathematics."
      }
    ],
    projects: [
      {
        title: "Grant Evaluator AI",
        metric: "85% Time Reduction",
        desc: "Automated AI evaluation workflow for 50+ submissions. Orchestrated a LangChain multi-agent pipeline for budget analysis and decision-making.",
        tech: ["LangChain", "RAG", "FastAPI", "WebSockets"],
        features: ["Parallel execution", "Real-time PDF reports", "Automated scoring"]
      },
      {
        title: "Climb the Corporate Ladder",
        metric: "< 3s Latency",
        desc: "3D Unity office simulation game for soft-skills training. Features a multimodal engine analyzing voice/text inputs via custom behavioral logic.",
        tech: ["LangGraph", "Unity 3D", "Python", "ML"],
        features: ["Multimodal Engine", "Agentic State Machines", "Live Feedback"]
      },
      {
        title: "E-commerce Intent Classifier",
        metric: "98.67% Accuracy",
        desc: "Fine-tuned BERT on CLINC150 (150+ categories). Improved edge-case sensitivity by augmenting data with 1,000+ custom synthetic samples.",
        tech: ["BERT", "TensorFlow", "Hugging Face", "AdamW"],
        features: ["Synthetic Data Augmentation", "Linear LR Warmup", "Dropout Regularization"]
      }
    ],
    skills: {
      languages: ["Python", "SQL", "C/C++", "Java"],
      ai: ["LangChain", "LangGraph", "Multi-Agent Systems", "RAG", "LLMs", "BERT", "Hugging Face"],
      ml: ["TensorFlow", "Keras", "Scikit-learn", "NLP", "Computer Vision"],
      backend: ["FastAPI", "Flask", "MongoDB"]
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#1e3a8a30,transparent_60%)]"></div>
        <div className="max-w-6xl mx-auto z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-blue-500"></span>
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase">Status: Initialized</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-6 tracking-tighter leading-none">
              {data.name}
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mb-12 leading-tight">
              {data.title}. Architecting <span className="text-white">agentic prototypes</span> across NLP and vision.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href={data.contact.github} target="_blank" className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all hover:scale-105 active:scale-95">
                <Github size={20} /> github.com/Ekaansh-Jain
              </a>
              <button className="bg-blue-600/10 border border-blue-500/30 text-blue-400 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-500/20 transition-all hover:scale-105 active:scale-95">
                <Download size={20} /> Download_Resume.pdf
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ACADEMIC SYSTEM STATS (Replacement for old metrics bar) */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-10 flex items-center gap-3">
            <GraduationCap size={16} /> // Educational_Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{edu.school}</h3>
                    <p className="text-blue-500 font-mono text-xs mt-1 uppercase tracking-wider">{edu.degree}</p>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">{edu.period}</span>
                </div>
                <p className="text-sm text-slate-500 mb-6">{edu.highlight}</p>
                <div className="flex items-center gap-2 text-2xl font-bold text-white font-mono">
                  <Zap size={18} className="text-yellow-500" /> {edu.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT DEPLOYMENTS (Metrics included per project) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-16 flex items-center gap-3">
          <Terminal size={16} /> // Project_Deployments
        </h2>
        <div className="space-y-12">
          {data.projects.map((p, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-l border-white/5 pl-8 relative">
              <div className="absolute left-[-5px] top-0 h-4 w-2 bg-blue-500 rounded-full"></div>
              
              <div className="lg:col-span-5">
                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-2 block">Impact_Metric</span>
                <div className="text-4xl font-bold text-white mb-4 tracking-tighter">{p.metric}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => <span key={t} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded text-slate-500 uppercase">{t}</span>)}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl">
                <p className="text-slate-400 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <ChevronRight size={12} className="text-blue-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLEARANCES (Awards & Certs) */}
      <section className="py-24 px-6 bg-blue-600/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-[1px] rounded-3xl overflow-hidden group">
                <div className="bg-[#050505] p-10 rounded-[23px] relative h-full">
                  <Award className="text-white/10 absolute -right-4 -top-4 rotate-12" size={120} />
                  <span className="text-blue-400 font-mono text-xs uppercase mb-4 block tracking-widest">Major_Achievement</span>
                  <h3 className="text-3xl font-bold text-white mb-2 uppercase">Samsung PRISM Gen AI Hackathon</h3>
                  <p className="text-xl text-blue-500 font-bold mb-4">1st Place National Winner // 2025</p>
                  <p className="text-sm text-slate-500">Secured top rank nationwide for excellence in Generative AI innovation and production-ready agentic architectures.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Certification_Records</h3>
                {[
                  { name: "OCI Generative AI Professional", id: "1Z0-1127-25" },
                  { name: "OCI Data Science Professional", id: "120-1110-25" },
                  { name: "Google AI Program", id: "SmartBridge 2025" }
                ].map((c, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex justify-between items-center group hover:bg-white/[0.05] transition-all">
                    <span className="text-sm font-bold text-white">{c.name}</span>
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-tighter group-hover:text-blue-500 transition-colors">{c.id}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. SKILL MATRIX */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-16 flex items-center gap-3">
          <Cpu size={16} /> // Knowledge_Graph
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {Object.entries(data.skills).map(([cat, items], idx) => (
            <div key={idx} className="border border-white/5 p-6 rounded-2xl bg-white/[0.01] hover:border-blue-500/20 transition-all">
              <h3 className="text-blue-500 uppercase mb-4 tracking-widest font-bold">// {cat}</h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item} className="text-slate-400 flex items-center gap-2">
                    <span className="h-1 w-1 bg-slate-700 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FOOTER / MUSIC CORE */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-white font-bold text-2xl mb-4 uppercase">
              <Music className="text-blue-500" /> Logic_Meets_Rhythm
            </div>
            <p className="text-slate-500 leading-relaxed italic border-l-2 border-blue-500 pl-6">
              "Core Member of the VIT Music Club. I apply the same principles of structure, creativity, and flow found in music to architecting resilient AI pipelines."
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6 w-full md:w-auto">
            <div className="flex gap-8">
              <a href={`mailto:${data.contact.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail size={24} /></a>
              <a href={data.contact.github} className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
            <p className="text-[10px] font-mono text-slate-700 uppercase tracking-[0.3em]">
              © 2026 EKAANSH_JAIN_OS // V_3.0.1
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;