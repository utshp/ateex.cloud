import { CountdownTimer } from "@/components/countdown-timer"
import { Card } from "@/components/ui/card"
import { Film, Clock, Wrench } from "lucide-react"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="w-12 h-12 text-primary cinema-flicker" />
            <h1 className="text-4xl md:text-6xl font-bold text-balance cinema-glow">HD CINEMA</h1>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Maintenance Message */}
        <Card className="p-8 md:p-12 mb-12 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold text-pretty">{"We're Under Maintenance"}</h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            {"We're upgrading all servers to bring you an even better movie experience. "}
            {"Our team is working hard to get everything ready for you."}
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-semibold">Maintenance Ends In:</h3>
            </div>
            <CountdownTimer targetDate="2025-09-25T00:00:00+05:30" />
          </div>

          {/* Additional Info */}
          <div className="text-muted-foreground">
            <p className="mb-2">{"Expected completion: September 25, 2025 (India Time)"}</p>
            <p className="text-sm">{"Thank you for your patience. We can't wait to welcome you back!"}</p>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">{"For urgent inquiries, please contact our support team"}</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-wider">System Status: All Servers Upgrading</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
