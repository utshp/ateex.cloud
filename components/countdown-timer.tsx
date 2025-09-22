"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
        {/* Days Box */}
        <div className="flex flex-col items-center">
          <div className="bg-black/80 border-2 border-red-900/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-2xl backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold text-red-500 cinema-glow font-mono tracking-wider">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2 font-semibold">DAYS</div>
        </div>

        {/* Hours Box */}
        <div className="flex flex-col items-center">
          <div className="bg-black/80 border-2 border-red-900/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-2xl backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold text-red-500 cinema-glow font-mono tracking-wider">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2 font-semibold">HOURS</div>
        </div>

        {/* Minutes Box */}
        <div className="flex flex-col items-center">
          <div className="bg-black/80 border-2 border-red-900/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-2xl backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold text-red-500 cinema-glow font-mono tracking-wider">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2 font-semibold">MINUTES</div>
        </div>

        {/* Seconds Box */}
        <div className="flex flex-col items-center">
          <div className="bg-black/80 border-2 border-red-900/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-2xl backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold text-red-500 cinema-glow font-mono tracking-wider">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2 font-semibold">SECONDS</div>
        </div>
      </div>

      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">Time Remaining</div>
    </div>
  )
}
