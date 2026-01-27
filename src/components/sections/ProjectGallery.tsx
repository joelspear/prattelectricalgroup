"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  id: number;
  title: string;
  category: "residential" | "commercial" | "solar";
  location: string;
  description: string;
  image: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  className?: string;
  showFilters?: boolean;
  limit?: number;
}

const categories = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "solar", label: "Solar" },
];

export function ProjectGallery({
  projects,
  className,
  showFilters = true,
  limit,
}: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className={cn("section", className)}>
      <div className="container-custom">
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-8">Our Projects</h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat.value
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">Project Image</span>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-wide text-primary-300 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {displayProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-charcoal" />
              </button>

              {/* Image */}
              <div className="aspect-video bg-gray-100 relative">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">Project Image</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-primary-500 font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-semibold text-charcoal mt-1 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-500 mb-4">{selectedProject.location}</p>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectGallery;
