"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Users,
  Globe,
  Zap,
  Calendar,
  Smartphone,
  Network,
  HardDrive,
  Database,
  Tv,
  Play,
  Wifi,
  Shield,
  TrendingUp,
  Clock,
  Activity,
  Cpu,
  MemoryStick,
} from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)
  const [serverLoads, setServerLoads] = useState<{ [key: number]: number }>({})

  const targetDate = new Date("2025-09-25T00:00:00Z").getTime()

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    const updateServerLoads = () => {
      const newLoads: { [key: number]: number } = {}
      for (let i = 1; i <= 24; i++) {
        newLoads[i] = Math.floor(Math.random() * 3) // 0-2% load
      }
      setServerLoads(newLoads)
    }

    calculateTimeLeft()
    updateServerLoads()

    const timer = setInterval(calculateTimeLeft, 1000)
    const loadTimer = setInterval(updateServerLoads, 5000)

    return () => {
      clearInterval(timer)
      clearInterval(loadTimer)
    }
  }, [targetDate])

  if (!mounted) {
    return null
  }

  const serverStats = [
    { icon: Server, label: "Active Servers", value: "2/24", color: "text-yellow-400" },
    { icon: Users, label: "Active Users (Month)", value: "53.7K", color: "text-blue-400" },
    { icon: Globe, label: "Global CDN", value: "99.9%", color: "text-green-400" },
    { icon: Zap, label: "Network Speed", value: "Upgrading", color: "text-orange-400" },
    { icon: Tv, label: "Live TV & Match", value: "Coming Soon", color: "text-red-500" },
    { icon: Activity, label: "System Health", value: "Optimal", color: "text-emerald-400" },
  ]

  const improvements = [
    {
      icon: Shield,
      title: "Bug Fixes",
      description: "Comprehensive bug fixes across all systems and user interfaces",
      color: "text-red-500",
    },
    {
      icon: Smartphone,
      title: "Mobile UI Enhancement",
      description: "Improved mobile user interface for better streaming experience",
      color: "text-blue-400",
    },
    {
      icon: Network,
      title: "Network Updates",
      description: "Major network infrastructure upgrades for faster connectivity",
      color: "text-green-400",
    },
    {
      icon: HardDrive,
      title: "SSD Upgrades",
      description: "High-performance NVMe SSD installations across all servers",
      color: "text-purple-400",
    },
    {
      icon: Database,
      title: "VPS Improvements",
      description: "Virtual private server optimizations and performance enhancements",
      color: "text-yellow-400",
    },
    {
      icon: Tv,
      title: "Live TV Integration",
      description: "Adding live television streaming capabilities to the platform",
      color: "text-cyan-400",
    },
    {
      icon: Play,
      title: "Live Match Streaming",
      description: "Real-time sports match streaming with HD quality",
      color: "text-orange-400",
    },
    {
      icon: Wifi,
      title: "CDN Expansion",
      description: "Global content delivery network expansion for better performance",
      color: "text-indigo-400",
    },
    {
      icon: Shield,
      title: "Security Updates",
      description: "Enhanced security protocols and data protection measures",
      color: "text-red-500",
    },
    {
      icon: TrendingUp,
      title: "Performance Boost",
      description: "Overall system performance improvements and optimizations",
      color: "text-emerald-400",
    },
  ]

  const webApiServers = [
    {
      id: 1,
      name: "Main Website Hosting",
      type: "hosting",
      status: "active",
      uptime: "99.8%",
      load: "23%",
    },
    {
      id: 2,
      name: "API Server",
      type: "api",
      status: "active",
      uptime: "99.6%",
      load: "67%",
    },
  ]

  const contentServers = [
    {
      id: 3,
      name: "Movie Server",
      type: "movie",
      status: "maintenance",
      uptime: "99.9%",
      load: "45%",
    },
    {
      id: 4,
      name: "TV Show Server",
      type: "tvshow",
      status: "maintenance",
      uptime: "99.7%",
      load: "38%",
    },
    {
      id: 5,
      name: "Anime Server",
      type: "anime",
      status: "maintenance",
      uptime: "99.5%",
      load: "29%",
    },
    {
      id: 6,
      name: "Live Channel Server",
      type: "live",
      status: "maintenance",
      uptime: "99.9%",
      load: "52%",
    },
    {
      id: 7,
      name: "Live Match Server",
      type: "match",
      status: "maintenance",
      uptime: "99.4%",
      load: "31%",
    },
  ]

  const playerServers = [
    {
      id: 8,
      name: "Player Server 1",
      type: "player",
      location: "Singapore",
      flag: "🇸🇬",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 9,
      name: "Player Server 2",
      type: "player",
      location: "India",
      flag: "🇮🇳",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 10,
      name: "Player Server 3",
      type: "player",
      location: "USA",
      flag: "🇺🇸",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 11,
      name: "Player Server 4",
      type: "player",
      location: "Germany",
      flag: "🇩🇪",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 12,
      name: "Player Server 5",
      type: "player",
      location: "Finland",
      flag: "🇫🇮",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 13,
      name: "Player Server 6",
      type: "player",
      location: "Canada",
      flag: "🇨🇦",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 14,
      name: "Player Server 7",
      type: "player",
      location: "Brazil",
      flag: "🇧🇷",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 15,
      name: "Player Server 8",
      type: "player",
      location: "United Kingdom",
      flag: "🇬🇧",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 16,
      name: "Player Server 9",
      type: "player",
      location: "Australia",
      flag: "🇦🇺",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 17,
      name: "Player Server 10",
      type: "player",
      location: "Japan",
      flag: "🇯🇵",
      status: "maintenance",
      uptime: "Maintenance",
    },
    {
      id: 18,
      name: "Player Server 11",
      type: "player",
      location: "South Korea",
      flag: "🇰🇷",
      status: "maintenance",
      uptime: "Maintenance",
    },
  ]

  const infrastructureServers = [
    {
      id: 19,
      name: "Database Server",
      type: "database",
      status: "maintenance",
      uptime: "99.9%",
      load: "52%",
    },
    {
      id: 20,
      name: "Backup Server 1",
      type: "backup",
      status: "maintenance",
      uptime: "99.7%",
      load: "15%",
    },
    {
      id: 21,
      name: "Backup Server 2",
      type: "backup",
      status: "maintenance",
      uptime: "99.8%",
      load: "12%",
    },
    {
      id: 22,
      name: "Multi-Language Processing 1",
      type: "processing",
      status: "maintenance",
      uptime: "99.6%",
      load: "68%",
    },
    {
      id: 23,
      name: "Multi-Language Processing 2",
      type: "processing",
      status: "maintenance",
      uptime: "99.5%",
      load: "71%",
    },
    {
      id: 24,
      name: "Cache Server",
      type: "cache",
      status: "maintenance",
      uptime: "99.9%",
      load: "25%",
    },
  ]

  const getServerIcon = (type: string) => {
    switch (type) {
      case "hosting":
        return Globe
      case "api":
        return Network
      case "movie":
        return Play
      case "tvshow":
        return Tv
      case "anime":
        return Play
      case "live":
        return Tv
      case "match":
        return Activity
      case "player":
        return Play
      case "database":
        return Database
      case "backup":
        return HardDrive
      case "processing":
        return Cpu
      case "cache":
        return MemoryStick
      default:
        return Server
    }
  }

  const getServerTypeColor = (type: string) => {
    switch (type) {
      case "hosting":
        return "text-blue-400"
      case "api":
        return "text-green-400"
      case "movie":
        return "text-purple-400"
      case "tvshow":
        return "text-cyan-400"
      case "anime":
        return "text-red-400"
      case "live":
        return "text-orange-400"
      case "match":
        return "text-red-400"
      case "player":
        return "text-yellow-400"
      case "database":
        return "text-indigo-400"
      case "backup":
        return "text-gray-400"
      case "processing":
        return "text-emerald-400"
      case "cache":
        return "text-teal-400"
      default:
        return "text-red-500"
    }
  }

  const ServerCard = ({ server, index }: { server: any; index: number }) => {
    const ServerIcon = getServerIcon(server.type)
    const serverColor = getServerTypeColor(server.type)
    const currentLoad = serverLoads[server.id] || 0

    return (
      <Card
        key={server.id}
        className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 group`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
              {server.type === "player" && server.flag ? (
                <span className="text-2xl">{server.flag}</span>
              ) : (
                <ServerIcon className={`w-5 h-5 ${serverColor} transition-colors duration-300`} />
              )}
            </div>
            <div>
              <h4 className="font-semibold group-hover:text-red-400 transition-colors duration-300">
                Server {server.id}
              </h4>
              <p className="text-sm text-muted-foreground">{server.name}</p>
              {server.type === "player" && server.location && (
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-xs text-muted-foreground">{server.location}</span>
                </div>
              )}
            </div>
          </div>
          <Badge
            variant="secondary"
            className={
              server.status === "active"
                ? "bg-green-500/20 text-green-400 border-green-500/30 animate-pulse"
                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            }
          >
            {server.status === "active" ? "Online" : "Maintenance"}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <span className="text-sm text-muted-foreground">Uptime</span>
            <span className="text-sm font-medium text-yellow-400">{server.uptime || "Maintenance"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Load</span>
            <span className="text-sm font-medium text-green-400">{currentLoad}%</span>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50 slide-in-left">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative pulse-glow hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/hd-logo.png"
                  alt="HD CINEMA Logo"
                  width="48"
                  height="48"
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-red-500">HD CINEMA</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 slide-in-right">
              <Activity className="w-4 h-4 text-green-400 rotate-glow" />
              <span className="text-sm text-muted-foreground">System Status</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8 float scale-in">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow hover:bg-red-500/30 transition-colors duration-500">
              <Server className="w-12 h-12 text-red-500" />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance fade-in-up">
            Our Site & Server{" "}
            <span className="text-red-500 font-playfair bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Maintenance
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty fade-in-up stagger-1 leading-relaxed">
            We're upgrading our infrastructure with network updates, SSD changes, VPS improvements, bug fixes, mobile UI
            enhancements, and adding live match & TV streaming capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up stagger-2">
            <Badge
              variant="secondary"
              className="px-6 py-3 text-lg bg-yellow-500/20 text-yellow-400 border-yellow-500/30 scale-in animate-pulse"
            >
              <Clock className="w-5 h-5 mr-2" />
              Maintenance in Progress
            </Badge>
          </div>

          {/* Countdown Timer */}
          <Card className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-border/50 scale-in stagger-3 hover:bg-card/70 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-red-500 mr-2" />
              <h3 className="text-xl font-semibold">Maintenance End Date</h3>
            </div>
            <div className="text-4xl font-bold text-red-500 mb-6 font-playfair">September 25, 2025</div>
            <div className="text-sm text-muted-foreground mb-6">Asia Time Zone</div>

            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-red-500 font-mono animate-pulse">
                {timeLeft.days}Days{timeLeft.hours}Hours{timeLeft.minutes}Minutes{timeLeft.seconds}Seconds
              </div>
            </div>

            {/* Live Countdown Grid */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center scale-in stagger-1 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              <div className="text-center scale-in stagger-2 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground">Hours</div>
              </div>
              <div className="text-center scale-in stagger-3 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="text-center scale-in stagger-4 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground">Seconds</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Server Statistics */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {serverStats.map((stat, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:scale-105 transition-all duration-500 fade-in-up stagger-${index + 1} group`}
              >
                <div className="flex flex-col items-center text-center">
                  <stat.icon
                    className={`w-8 h-8 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Improvements */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-4xl font-bold mb-4 font-playfair">Maintenance & Improvements</h3>
            <p className="text-xl text-muted-foreground">
              We're implementing comprehensive upgrades to deliver the best streaming experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {improvements.map((item, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:scale-105 transition-all duration-500 group scale-in stagger-${(index % 6) + 1}`}
              >
                <div className="text-center">
                  <item.icon
                    className={`w-8 h-8 mx-auto mb-4 ${item.color} group-hover:scale-125 transition-transform duration-500`}
                  />
                  <h4 className="font-semibold mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-4xl font-bold mb-4 font-playfair">Server Infrastructure</h3>
            <p className="text-xl text-muted-foreground mb-8">
              All 11 high-performance AMD-powered servers are undergoing comprehensive maintenance including network
              updates, SSD upgrades, VPS improvements, and system optimizations
            </p>
          </div>

          {/* Web & API Hosting Servers */}
          <div className="mb-16">
            <div className="text-center mb-8 fade-in-up">
              <h4 className="text-2xl font-bold mb-2 text-green-400">Web & API Hosting Servers</h4>
              <p className="text-muted-foreground">Core infrastructure powering HD CINEMA platform</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webApiServers.map((server, index) => (
                <ServerCard key={server.id} server={server} index={index} />
              ))}
            </div>
          </div>

          {/* Content Servers */}
          <div className="mb-16">
            <div className="text-center mb-8 fade-in-up">
              <h4 className="text-2xl font-bold mb-2 text-purple-400">
                Movies, Anime, TV Shows & Live Channel Servers
              </h4>
              <p className="text-muted-foreground">Dedicated content delivery and streaming servers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {contentServers.map((server, index) => (
                <ServerCard key={server.id} server={server} index={index} />
              ))}
            </div>
          </div>

          {/* Player Servers */}
          <div className="mb-16">
            <div className="text-center mb-8 fade-in-up">
              <h4 className="text-2xl font-bold mb-2 text-yellow-400">Global Player Servers</h4>
              <p className="text-muted-foreground">11 worldwide streaming servers for optimal performance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {playerServers.map((server, index) => (
                <ServerCard key={server.id} server={server} index={index} />
              ))}
            </div>
          </div>

          {/* Infrastructure Servers */}
          <div>
            <div className="text-center mb-8 fade-in-up">
              <h4 className="text-2xl font-bold mb-2 text-blue-400">Infrastructure & Support Servers</h4>
              <p className="text-muted-foreground">Database, backup, processing, and caching infrastructure</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructureServers.map((server, index) => (
                <ServerCard key={server.id} server={server} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/50 fade-in-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="slide-in-left">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 relative hover:scale-110 transition-transform duration-300">
                  <img
                    src="/images/hd-logo.png"
                    alt="HD CINEMA Logo"
                    width="32"
                    height="32"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="text-xl font-bold">HD CINEMA</h4>
              </div>
              <p className="text-muted-foreground text-pretty">
                Your premium destination for high-definition streaming entertainment with cutting-edge server
                infrastructure, live TV, and sports match streaming capabilities.
              </p>
            </div>

            <div className="fade-in-up stagger-1">
              <h4 className="text-lg font-semibold mb-4">Current Updates</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bug Fixes & Mobile UI</li>
                <li>• Network & SSD Upgrades</li>
                <li>• Live TV & Match Streaming</li>
                <li>• VPS & Performance Boost</li>
              </ul>
            </div>

            <div className="slide-in-right">
              <h4 className="text-lg font-semibold mb-4">Infrastructure</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 24 Specialized Servers</li>
                <li>• 11 Global Player Locations</li>
                <li>• High-Performance Infrastructure</li>
                <li>• Global CDN Network</li>
                <li>• Multi-Language Processing</li>
                <li>• Live Streaming Ready</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border/50 fade-in-up stagger-2">
            <div className="flex items-center justify-center mb-4">
              <span className="text-muted-foreground mr-2">Made with</span>
              <span className="text-red-500 animate-pulse">❤</span>
              <span className="text-muted-foreground ml-2">by</span>
              <span className="text-red-500 font-semibold ml-2">RJ Development</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 HD CINEMA. All rights reserved. | Server infrastructure powered by RJ Development
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
