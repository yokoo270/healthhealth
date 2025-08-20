
"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Gem, 
  Play, 
  Crown, 
  Shirt, 
  Palette, 
  Star, 
  Gift,
  Timer,
  Shield,
  Zap
} from "lucide-react"
import { UserStatsDisplay } from "@/components/gamification/user-stats"

export default function ShopPage() {
  const [gems, setGems] = useState(45)
  const [watchingAd, setWatchingAd] = useState(false)

  const handleWatchAd = () => {
    setWatchingAd(true)
    // Simulate ad watching
    setTimeout(() => {
      setGems(prev => prev + 5)
      setWatchingAd(false)
    }, 3000)
  }

  const purchaseItem = (cost: number) => {
    if (gems >= cost) {
      setGems(prev => prev - cost)
    }
  }

  const avatarItems = [
    {
      id: 1,
      name: "Corona Dorada",
      description: "Muestra tu estatus real",
      icon: Crown,
      cost: 100,
      rarity: "legendary"
    },
    {
      id: 2,
      name: "Camisa de Entrenamiento",
      description: "Para los atletas serios",
      icon: Shirt,
      cost: 50,
      rarity: "rare"
    },
    {
      id: 3,
      name: "Tema Neón",
      description: "Colores vibrantes para tu perfil",
      icon: Palette,
      cost: 75,
      rarity: "epic"
    }
  ]

  const powerUps = [
    {
      id: 1,
      name: "Congelador de Racha (Tarea)",
      description: "Protege tu racha de una tarea específica",
      icon: Timer,
      cost: 20,
      type: "streak_freeze_task"
    },
    {
      id: 2,
      name: "Congelador de Racha (Día)",
      description: "Protege todas tus rachas por un día",
      icon: Shield,
      cost: 35,
      type: "streak_freeze_day"
    },
    {
      id: 3,
      name: "Boost de XP",
      description: "Duplica tu XP por 24 horas",
      icon: Zap,
      cost: 40,
      type: "xp_boost"
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "text-gray-500 border-gray-500/20"
      case "rare": return "text-blue-500 border-blue-500/20"
      case "epic": return "text-purple-500 border-purple-500/20"
      case "legendary": return "text-yellow-500 border-yellow-500/20"
      default: return "text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tienda</h1>
          <p className="text-muted-foreground">
            Personaliza tu experiencia y obtén ventajas
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Gem className="w-5 h-5 text-blue-500" />
          <span className="text-2xl font-bold text-blue-500">{gems}</span>
        </div>
      </div>

      <UserStatsDisplay />

      {/* Sección de Anuncios */}
      <Card className="glow-card border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-green-500" />
            Gana Gemas Gratis
          </CardTitle>
          <CardDescription>
            Ve anuncios para ganar gemas y apoyar a HealthMaxxing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">+5 Gemas por anuncio</p>
              <p className="text-sm text-muted-foreground">
                Disponible cada 15 minutos
              </p>
            </div>
            <Button 
              onClick={handleWatchAd} 
              disabled={watchingAd}
              className="bg-green-600 hover:bg-green-700"
            >
              {watchingAd ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Viendo...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Ver Anuncio
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="avatar" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="avatar">Personalización</TabsTrigger>
          <TabsTrigger value="powerups">Power-ups</TabsTrigger>
        </TabsList>

        <TabsContent value="avatar" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {avatarItems.map((item) => (
              <Card key={item.id} className={`glow-card ${getRarityColor(item.rarity)}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <item.icon className="w-8 h-8" />
                    <Badge variant="outline" className={getRarityColor(item.rarity)}>
                      {item.rarity}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Gem className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => purchaseItem(item.cost)}
                      disabled={gems < item.cost}
                    >
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="powerups" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {powerUps.map((item) => (
              <Card key={item.id} className="glow-card border-orange-500/20">
                <CardHeader>
                  <item.icon className="w-8 h-8 text-orange-500" />
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Gem className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => purchaseItem(item.cost)}
                      disabled={gems < item.cost}
                    >
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Caja de regalo diaria */}
      <Card className="glow-card border-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-500" />
            Recompensa Diaria
          </CardTitle>
          <CardDescription>
            Inicia sesión todos los días para obtener recompensas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">+10 Gemas</p>
              <p className="text-sm text-muted-foreground">
                Próxima recompensa en 2h 15m
              </p>
            </div>
            <Button disabled>
              Reclamado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
