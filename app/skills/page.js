'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Server } from 'lucide-react'

const skills = [
  { name: "Full Stack Development", icon: Code, description: "Proficient in both frontend and backend technologies" },
  { name: "Blockchain & Smart Contract Development", icon: Database, description: "Experienced in creating and auditing smart contracts" },
  { name: "Domain Management", icon: Globe, description: "Expert in managing and optimizing domain portfolios" },
  { name: "API Integration", icon: Server, description: "Skilled in integrating various APIs and creating robust backends" },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 mr-4 text-blue-400" />
                <h2 className="text-2xl font-semibold">{skill.name}</h2>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}