
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Flame, Star, Gem } from "lucide-react"

interface UserStats {
  level: number
  xp: number
  xpToNextLevel: number
  lives: number
  maxLives: number
  streak: number
  gems: number
}

export function UserStatsDisplay() {
  const [stats, setStats] = useState<UserStats>({
    level: 1,
    xp: 150,
    xpToNextLevel: 1000,
    lives: 3,
    maxLives: 3,
    streak: 7,
    gems: 45
  })

  const xpProgress = (stats.xp / stats.xpToNextLevel) * 100

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {/* Nivel y XP */}
      <Card className="glow-card border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold">Nivel {stats.level}</span>
          </div>
          <Progress value={xpProgress} className="h-2 mb-1" />
          <div className="text-xs text-muted-foreground">
            {stats.xp} / {stats.xpToNextLevel} XP
          </div>
        </CardContent>
      </Card>

      {/* Vidas */}
      <Card className="glow-card border-red-500/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-semibold">Vidas</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: stats.maxLives }).map((_, i) => (
              <Heart
                key={i}
                className={`w-4 h-4 ${
                  i < stats.lives 
                    ? "text-red-500 fill-red-500" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Racha */}
      <Card className="glow-card border-orange-500/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-semibold">Racha</span>
          </div>
          <div className="text-2xl font-bold text-orange-500">
            {stats.streak}
          </div>
          <div className="text-xs text-muted-foreground">días</div>
        </CardContent>
      </Card>

      {/* Gemas */}
      <Card className="glow-card border-blue-500/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gem className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Gemas</span>
          </div>
          <div className="text-2xl font-bold text-blue-500">
            {stats.gems}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
