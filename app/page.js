'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter, Server, Code, Database } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <header className="relative container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SAID BENDLALA
        </motion.h1>
        <motion.h2 
          className="text-3xl text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer &amp; Blockchain Specialist
        </motion.h2>
      </header>

      <nav className="relative container mx-auto px-4 mb-12">
        <ul className="flex justify-center space-x-8">
          {['about', 'skills', 'projects', 'contact'].map((tab) => (
            <motion.li 
              key={tab}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`text-lg font-semibold ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="relative container mx-auto px-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-8 shadow-xl"
        >
          {activeTab === 'about' && (
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">About Me</h3>
              <p className="text-gray-300 mb-4">
                As a versatile Full Stack Developer and Blockchain Specialist, I bring a unique blend of technical expertise and entrepreneurial spirit to every project. My approach combines cutting-edge technology with strategic thinking, resulting in robust, scalable solutions that not only meet but exceed expectations.
              </p>
              <p className="text-gray-300">
                My experience in domain management significantly enhances my ability to create user-friendly, marketable products that stand out in today&apos;s competitive digital landscape.
              </p>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">Core Competencies</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Code className="w-6 h-6" />
                  </div>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Database className="w-6 h-6" />
                  </div>
                  <span>Blockchain &amp; Smart Contract Development</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Server className="w-6 h-6" />
                  </div>
                  <span>API Integration</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">Notable Projects</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-medium mb-2 text-emerald-400">DistriButler</h4>
                  <p className="text-gray-300 mb-2">
                    An innovative platform revolutionizing distribution processes with cutting-edge technology and user-centric design.
                  </p>
                  <a href="https://distributler.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-2 text-emerald-400">CatBreedID</h4>
                  <p className="text-gray-300 mb-2">
                    State-of-the-art AI-powered application for instant and accurate cat breed identification, pushing the boundaries of machine learning.
                  </p>
                  <a href="https://catbreedid.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    Explore Project
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">Get in Touch</h3>
              <ul className="space-y-4">
                <motion.li className="flex items-center space-x-4" variants={fadeIn}>
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>boite412@gmail.com</span>
                </motion.li>
                <motion.li className="flex items-center space-x-4" variants={fadeIn}>
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+212 667 537 448</span>
                </motion.li>
                <motion.li className="flex items-center space-x-4" variants={fadeIn}>
                  <div className="bg-blue-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span>Hay el wahda nr 211, Ouarzazate</span>
                </motion.li>
                <motion.li className="flex items-center space-x-4" variants={fadeIn}>
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Globe className="w-6 h-6" />
                  </div>
                  <a href="https://www.bendlala.com" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    www.bendlala.com
                  </a>
                </motion.li>
              </ul>
            </div>
          )}
        </motion.div>
      </main>

      <footer className="relative container mx-auto px-4 py-12 mt-16">
        <div className="flex justify-center space-x-6">
          <motion.a 
            href="https://github.com/sifaw23" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://x.com/Benzaid_Said_" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
        </div>
      </footer>
    </div>
  )
}