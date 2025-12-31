import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web App",
        description: "A modern e-commerce solution with seamless checkout experience and real-time inventory management.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        tags: ["React", "Node.js", "Stripe"],
        color: "amber"
    },
    {
        id: 2,
        title: "Finance Dashboard",
        category: "Dashboard",
        description: "Comprehensive financial analytics dashboard with interactive charts and real-time data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["Next.js", "D3.js", "PostgreSQL"],
        color: "emerald"
    },
    {
        id: 3,
        title: "Travel App",
        category: "Mobile App",
        description: "AI-powered travel planning application with personalized recommendations and itinerary builder.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        tags: ["React Native", "AI/ML", "Firebase"],
        color: "sky"
    },
    {
        id: 4,
        title: "Health & Wellness",
        category: "Web App",
        description: "Holistic wellness platform connecting users with health professionals and tracking tools.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        tags: ["Vue.js", "GraphQL", "AWS"],
        color: "rose"
    }
];

const filters = ["All", "Web App", "Mobile App", "Dashboard"];

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredProjects = activeFilter === "All" 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-32 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-amber-600 tracking-wider uppercase mb-4 block">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-stone-600 max-w-lg mx-auto">
                        A selection of work that showcases my passion for creating impactful digital experiences
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex justify-center gap-2 mb-12"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                activeFilter === filter
                                    ? 'bg-stone-900 text-white'
                                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent transition-opacity duration-300 ${
                                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0 md:opacity-100'
                                    }`} />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <motion.div
                                            initial={false}
                                            animate={{ 
                                                y: hoveredProject === project.id ? 0 : 10,
                                                opacity: hoveredProject === project.id ? 1 : 0.9
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-xs font-medium text-amber-400 tracking-wider uppercase">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-semibold text-white mt-2 mb-3">
                                                {project.title}
                                            </h3>
                                            
                                            <p className={`text-white/80 text-sm leading-relaxed mb-4 transition-all duration-300 ${
                                                hoveredProject === project.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                                            }`}>
                                                {project.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex gap-2">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2.5 py-1 text-xs font-medium bg-white/10 text-white/90 rounded-md backdrop-blur-sm"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <div className={`flex gap-2 transition-all duration-300 ${
                                                    hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                                }`}>
                                                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                                        <Github size={18} />
                                                    </button>
                                                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-900 hover:bg-amber-400 transition-colors">
                                                        <ArrowUpRight size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors">
                        View All Projects
                        <ExternalLink size={16} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}