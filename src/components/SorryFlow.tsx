'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/sanity/image'
import FloatingHearts from './FloatingHearts'

type SorryData = {
  recipientName: string
  openingMessage: string
  heroImage?: any
  apologyHeading: string
  apologyMessage: string
  angerQuestion: string
  nahiBataogiMessage?: string
  nahiBataogiImage?: any
  chupHoHeading?: string
  chupHoMessage?: string
  chupHoImage?: any
  chupHoNote?: string
  friendsHeading?: string
  friendsSubtext?: string
  friendsNote?: string
  yayHeading?: string
  yayMessage?: string
  yayImage?: any
  confirmThoraQuestion?: string
  impressLabel?: string
  impressHeading?: string
  impressMessage?: string
  impressTag?: string
  finalMessage?: string
}

const ANGER_OPTIONS = ['Boht Zyada! 😡', 'Thora sa 🙁', 'Nahi bataungi 🙄']

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 200, damping: 15 }
  })
}

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

export default function SorryFlow({ data }: { data: SorryData }) {
  const [step, setStep] = useState(0)
  const [neverPos, setNeverPos] = useState({ top: 8, left: 65 })
  const [dodgeCount, setDodgeCount] = useState(0)

  const handleAngerChoice = (option: string) => {
    if (option === 'Nahi bataungi 🙄') {
      setStep(3)
    } else if (option === 'Thora sa 🙁') {
      setStep(8)
    } else {
      setStep(9)
    }
  }

  const dodgeNeverButton = () => {
    const newTop = Math.random() * 70 + 10
    const newLeft = Math.random() * 70 + 10
    setNeverPos({ top: newTop, left: newLeft })
    setDodgeCount((c) => c + 1)
  }

  return (
    <main className="min-h-screen w-full bg-pink-200 flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      <AnimatePresence mode="wait">
        
        {/* STEP 0 — the note card */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-pink-50 rounded-3xl shadow-xl w-full max-w-sm p-6 sm:p-8 text-center"
          >
            <motion.div variants={popIn} initial="hidden" animate="visible" custom={0} className="text-4xl mb-3">💌</motion.div>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-xs tracking-widest text-pink-400 font-semibold mb-1">
              ✦ A LITTLE NOTE FOR ✦
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-4xl sm:text-5xl font-['cursive'] text-pink-600 mb-6 break-words">
              {data.recipientName}
            </motion.h1>
            {data.heroImage ? (
              <motion.img
                variants={popIn} initial="hidden" animate="visible" custom={3}
                src={urlFor(data.heroImage).width(160).height(160).url()}
                alt={data.recipientName}
                className="w-32 h-32 mx-auto mb-6 object-contain max-w-full"
              />
            ) : (
              <motion.div variants={popIn} initial="hidden" animate="visible" custom={3} className="text-6xl mb-6">🐱</motion.div>
            )}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="bg-pink-100 rounded-xl px-4 py-3 mb-6">
              <p className="text-sm italic text-pink-700">{data.openingMessage}</p>
            </motion.div>
            <motion.button
              variants={popIn} initial="hidden" animate="visible" custom={5}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setStep(1)}
              className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Open the letter 💝
            </motion.button>
          </motion.div>
        )}

        {/* STEP 1 — panda apology */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center w-full max-w-md">
              <motion.div variants={popIn} custom={0} className="text-7xl mb-4">🐼</motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-['cursive'] text-pink-700 mb-4">
                {data.apologyHeading}
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-pink-500 text-sm sm:text-base mb-8">{data.apologyMessage}</motion.p>
              <motion.button
                variants={popIn} custom={3} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setStep(2)}
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Theek hai, bolo 💐
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 2 — anger question */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center w-full max-w-lg">
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl sm:text-3xl font-['cursive'] text-pink-700 mb-2">
                {data.angerQuestion}
              </motion.h2>
              <motion.div variants={popIn} custom={1} className="text-3xl mb-6">😢</motion.div>
              <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full">
                {ANGER_OPTIONS.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAngerChoice(option)}
                    className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-3 sm:py-2.5 rounded-full transition"
                  >
                    {option}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 3 — bear screen */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center w-full max-w-md">
              <motion.div variants={fadeUp} custom={0} className="bg-pink-50 rounded-2xl shadow-lg px-6 py-5 mb-6 w-full">
                <p className="text-pink-600 font-medium text-sm sm:text-base">{data.nahiBataogiMessage}</p>
              </motion.div>
              {data.nahiBataogiImage ? (
                <motion.img variants={popIn} custom={1} src={urlFor(data.nahiBataogiImage).width(140).height(140).url()} alt="bear" className="w-28 h-28 mb-6 object-contain max-w-full" />
              ) : (
                <motion.div variants={popIn} custom={1} className="text-6xl mb-6">🐻</motion.div>
              )}
              <motion.button
                variants={popIn} custom={2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setStep(4)}
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Acha suno phir →
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 4 — bunny screen */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 bg-pink-50 rounded-3xl shadow-xl w-full max-w-md p-6 sm:p-8">
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-['cursive'] text-pink-700 mb-4">
                {data.chupHoHeading}
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-gray-600 text-sm mb-6">{data.chupHoMessage}</motion.p>
              {data.chupHoImage ? (
                <motion.img variants={popIn} custom={2} src={urlFor(data.chupHoImage).width(140).height(140).url()} alt="bunnies" className="w-28 h-28 mx-auto mb-4 object-contain max-w-full" />
              ) : (
                <motion.div variants={popIn} custom={2} className="text-6xl mb-4">🐰</motion.div>
              )}
              {data.chupHoNote && (
                <motion.p variants={fadeUp} custom={3} className="text-xs italic text-pink-400 mb-6">{data.chupHoNote}</motion.p>
              )}
              <motion.button
                variants={popIn} custom={4} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setStep(5)}
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Acha, last cheez...
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 5 — friends again (dodging button) */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen overflow-hidden"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-['cursive'] text-pink-700 mb-2">
                {data.friendsHeading || 'Are we friends again?'}
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-gray-500 text-sm mb-1 px-2">
                {data.friendsSubtext || 'Choose wisely... (ek button boht shararati hai 😏)'}
              </motion.p>
              
              <AnimatePresence>
                {dodgeCount > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-pink-500 text-sm font-medium mb-2"
                  >
                    {dodgeCount}... it's ok, I'm sorry 🥺
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.p variants={fadeUp} custom={2} className="text-pink-400 text-xs mb-6 px-4">
                {data.friendsNote || 'Ok ok... YES dabao please 🙏💖'}
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 w-full max-w-sm">
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(6)}
                  className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
                >
                  YES! 💝
                </motion.button>

                <div className="relative w-full sm:w-48 h-12 flex items-center justify-center">
                  {dodgeCount === 0 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={dodgeNeverButton}
                      className="w-full sm:w-auto bg-pink-600 text-white font-medium px-5 py-2.5 rounded-full shadow-lg transition-all duration-200"
                    >
                      Never! ...Just kidding
                    </motion.button>
                  ) : (
                    <motion.button
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      onMouseEnter={dodgeNeverButton}
                      onTouchStart={(e) => { e.preventDefault(); dodgeNeverButton() }}
                      onClick={(e) => { e.preventDefault(); dodgeNeverButton() }}
                      style={{ top: `${neverPos.top}%`, left: `${neverPos.left}%` }}
                      className="fixed z-50 bg-pink-600 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 ease-out max-w-[90vw] text-sm sm:text-base"
                    >
                      Never! ...Just kidding 💅
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 6 — Yayyy! celebration screen */}
        {step === 6 && (
          <motion.div
            key="step6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center w-full max-w-md">
              <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-['cursive'] text-pink-700 mb-4 flex items-center gap-2 flex-wrap justify-center">
                {data.yayHeading || 'Yayyy!'} <span>🥰</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="bg-pink-50 rounded-2xl shadow-lg px-6 py-5 mb-6 w-full">
                <p className="text-gray-700 text-sm sm:text-base">
                  {data.yayMessage || "I knew you couldn't stay mad for too long. Best friends forever? 💗"}
                </p>
              </motion.div>
              
              <motion.div variants={popIn} custom={2} className="text-2xl mb-6 flex gap-3">
                {['💖', '✨', '🎈'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>

              {data.yayImage ? (
                <motion.img variants={popIn} custom={3} src={urlFor(data.yayImage).width(140).height(140).url()} alt="celebration" className="w-28 h-28 object-contain mb-6 max-w-full" />
              ) : (
                <motion.div variants={popIn} custom={3} className="text-6xl mb-6">🐰</motion.div>
              )}
              <motion.button
                variants={popIn} custom={4} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setStep(7)}
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Continue 💝
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 7 — final message with 3D Love Particles */}
        {step === 7 && (
          <motion.div
            key="step7"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300"
          >
            {/* 3D Particle Container */}
            <div className="absolute inset-0 perspective-[1000px] overflow-hidden pointer-events-none">
              {[...Array(40)].map((_, i) => {
                const size = Math.random() * 24 + 12 // 12px to 36px
                const depth = Math.random() * 400 - 200 // -200 to +200 Z
                const delay = Math.random() * 5
                const duration = Math.random() * 10 + 10 // 10s to 20s
                const color = ['#f472b6', '#fb7185', '#e879f9', '#fda4af'][i % 4]

                return (
                  <motion.div
                    key={i}
                    initial={{ y: '110vh', opacity: 0, rotateZ: 0 }}
                    animate={{
                      y: '-10vh',
                      opacity: [0, 0.8, 0],
                      rotateZ: [0, 360],
                    }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      delay,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      left: `${Math.random() * 100}%`,
                      width: size,
                      height: size,
                      transform: `translateZ(${depth}px)`,
                      color: color,
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </motion.div>
                )
              })}
            </div>

            {/* Central Message Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8 max-w-md w-full"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotateY: [0, 15, -15, 0],
                  rotateX: [0, -10, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-7xl mb-6 drop-shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                💗
              </motion.div>
              
              <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/80 w-full">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-pink-700 italic text-lg sm:text-xl font-medium leading-relaxed"
                >
                  {data.finalMessage || 'I love you. 💗'}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 8 — confirm screen after "Thora sa" */}
        {step === 8 && (
          <motion.div
            key="step8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <FloatingHearts />
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center w-full max-w-md">
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl sm:text-3xl font-['cursive'] text-pink-700 mb-8">
                {data.confirmThoraQuestion || 'Sacchi mein thoda sa na?'}
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(5)}
                  className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
                >
                  Yes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(9)}
                  className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
                >
                  Bahot Zyada!
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 9 — Impress apology card */}
        {step === 9 && (
          <motion.div
            key="step9"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
            className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-rose-50 to-pink-100"
          >
            <motion.div variants={containerStagger} initial="hidden" animate="visible" className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 sm:p-8 text-center border border-pink-100">
              <motion.p variants={fadeUp} custom={0} className="text-[10px] sm:text-[11px] tracking-widest text-red-400 font-bold mb-6">
                {(data.impressLabel || 'A PERSONAL APOLOGY FROM THE HEART').toUpperCase()}
              </motion.p>

              <motion.div variants={popIn} custom={1} className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center shadow-lg shadow-pink-200">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-white text-2xl"
                >
                  ❤
                </motion.span>
              </motion.div>

              <motion.h2 variants={fadeUp} custom={2} className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 leading-snug">
                {data.impressHeading || 'Dear Someone Special,'}
              </motion.h2>

              <motion.p variants={fadeUp} custom={3} className="text-gray-500 text-sm leading-relaxed mb-6">
                {data.impressMessage ||
                  'I may not have perfect words, but I truly want to say sorry from my heart. You matter to me, and I want to make things right with honesty, care and respect.'}
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="text-red-400 italic text-sm font-semibold mb-8">
                {data.impressTag || 'Written with emotion'}
              </motion.p>

              <motion.button
                variants={popIn} custom={5} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setStep(5)}
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
              >
                Chalo, bolo phir →
              </motion.button>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  )
}
