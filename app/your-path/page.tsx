"use client"

import { ProtectedRoute } from "@/auth/protected-route"
import { SidebarLayout } from "@/components/sidebar-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Route, 
  Dumbbell, 
  Heart, 
  Trophy, 
  Apple, 
  Brain, 
  Clock, 
  Smile, 
  Users,
  Timer,
  Circle,
  Cigarette,
  BookOpen,
  Moon,
  Activity,
  Target,
  MessageCircle,
  Handshake,
  Zap,
  Shield,
  ChevronRight,
  PlayCircle,
  Info
} from "lucide-react"
import Link from "next/link"

export default function YourPathPage() {
  return (
    <ProtectedRoute>
      <SidebarLayout 
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Tu camino" }
        ]}
      >
        <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-serif font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              🛤️ Tu Camino Personalizado
            </h1>
            <p className="text-muted-foreground">
              Explora tu ruta completa hacia el bienestar integral con planes personalizados para cada área de tu salud
            </p>
          </div>

          {/* Main Health Categories */}
          <Tabs defaultValue="fisica" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="fisica" className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4" />
                Física
              </TabsTrigger>
              <TabsTrigger value="mental" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Mental
              </TabsTrigger>
              <TabsTrigger value="emocional" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Emocional
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Social
              </TabsTrigger>
            </TabsList>

            {/* Salud Física */}
            <TabsContent value="fisica" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glow-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-primary" />
                      Entrenamiento de Fuerza
                    </CardTitle>
                    <CardDescription>
                      Desarrolla músculo, fuerza y resistencia con planes personalizados
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Rutinas AI</Badge>
                      <Button size="sm" variant="outline">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Empezar
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      • Rutinas personalizadas por IA<br/>
                      • Progresión automática<br/>
                      • Seguimiento de cargas
                    </div>
                  </CardContent>
                </Card>

                <Card className="glow-card border-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-secondary" />
                      Ejercicios Cardiovasculares
                    </CardTitle>
                    <CardDescription>
                      Mejora tu resistencia y salud cardiovascular
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Cardio AI</Badge>
                      <Button size="sm" variant="outline">
                        <Info className="w-4 h-4 mr-2" />
                        Ver más
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      • Tipos de cardio personalizados<br/>
                      • Integración con Wear OS<br/>
                      • Mapas y rutas seguras
                    </div>
                  </CardContent>
                </Card>

                <Card className="glow-card border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      Deportes
                    </CardTitle>
                    <CardDescription>
                      Encuentra y practica deportes que disfrutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Próximamente</Badge>
                      <Button size="sm" variant="outline" disabled>
                        <Target className="w-4 h-4 mr-2" />
                        Explorar
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      • Recomendaciones personalizadas<br/>
                      • Grupos y comunidades<br/>
                      • Seguimiento de progreso
                    </div>
                  </CardContent>
                </Card>

                <Card className="glow-card border-green-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Apple className="w-5 h-5 text-green-500" />
                      Nutrición
                    </CardTitle>
                    <CardDescription>
                      Alimentación inteligente para tus objetivos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Escáner AI</Badge>
                      <Button size="sm" variant="outline">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Abrir
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      • Escáner de alimentos<br/>
                      • Análisis de platos con IA<br/>
                      • Recetas personalizadas
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Salud Mental */}
            <TabsContent value="mental" className="space-y-6">
              <div className="grid gap-6">
                {/* Meditación y Relajación */}
                <Card className="glow-card border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Circle className="w-5 h-5 text-purple-500" />
                      Meditación y Relajación
                    </CardTitle>
                    <CardDescription>
                      Calma tu mente y reduce el estrés con técnicas probadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Timer className="w-4 h-4" />
                          Meditación
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span>• Temporizador personalizado</span>
                            <Button size="sm" variant="outline">Usar</Button>
                          </div>
                          <div>• Mindfulness (7 sesiones guiadas)</div>
                          <div>• Meditación Zen</div>
                          <div>• Vipassana</div>
                          <div>• Trascendental</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Técnicas de Respiración
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>• Respiración equitativa</div>
                          <div>• Respiración del cuadrilátero</div>
                          <div>• Respiración 4-7-8</div>
                          <div>• Prueba de contención</div>
                          <div>• 7 sesiones de yoga</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Adicciones */}
                <Card className="glow-card border-red-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-red-500" />
                      Gestión de Adicciones
                    </CardTitle>
                    <CardDescription>
                      Supera hábitos no saludables con apoyo personalizado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Cigarette className="w-4 h-4" />
                          <span>• Fap y nopor</span>
                        </div>
                        <div>• Tabaco y vaper</div>
                        <div>• Alcohol</div>
                        <div>• Videojuegos</div>
                        <div>• Redes sociales</div>
                        <div>• Azúcar y ultraprocesados</div>
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary">Registro diario</Badge>
                        <div className="text-sm text-muted-foreground">
                          Impulsos vs resistencia exitosa
                        </div>
                        <Button size="sm" className="w-full">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Empezar seguimiento
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Journaling */}
                  <Card className="glow-card border-blue-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        Journaling
                      </CardTitle>
                      <CardDescription>
                        Reflexiona y organiza tus pensamientos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        • Qué es y cómo practicarlo<br/>
                        • Diferentes tipos de journaling<br/>
                        • Espacio digital seguro
                      </div>
                      <Button size="sm" className="w-full">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Abrir diario
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Sueño */}
                  <Card className="glow-card border-indigo-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Moon className="w-5 h-5 text-indigo-500" />
                        Sueño
                      </CardTitle>
                      <CardDescription>
                        Optimiza tu descanso y recuperación
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        • Higiene del sueño<br/>
                        • Análisis de calidad<br/>
                        • Biblioteca de sonidos relajantes
                      </div>
                      <Button size="sm" className="w-full">
                        <Moon className="w-4 h-4 mr-2" />
                        Analizar sueño
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Salud Emocional */}
            <TabsContent value="emocional" className="space-y-6">
              <div className="grid gap-6">
                {/* Reconocimiento y Regulación */}
                <Card className="glow-card border-pink-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      Reconocimiento y Regulación Emocional
                    </CardTitle>
                    <CardDescription>
                      Identifica y gestiona tus emociones de manera saludable
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm">
                        <div>• Identificación de emociones</div>
                        <div>• Estrategias de regulación</div>
                        <div>• Glosario emocional completo</div>
                        <div>• Registro de humor diario</div>
                      </div>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full">
                          <Smile className="w-4 h-4 mr-2" />
                          Registrar humor
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <Info className="w-4 h-4 mr-2" />
                          Ver glosario
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Fortalecimiento Emocional */}
                  <Card className="glow-card border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-orange-500" />
                        Fortalecimiento Emocional
                      </CardTitle>
                      <CardDescription>
                        Desarrolla autoestima, resiliencia y gratitud
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        • Autoestima y seguridad<br/>
                        • Resiliencia mental<br/>
                        • Prácticas de gratitud<br/>
                        • Diario emocional guiado
                      </div>
                      <Button size="sm" className="w-full">
                        <Target className="w-4 h-4 mr-2" />
                        Empezar entrenamiento
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Expresión Emocional */}
                  <Card className="glow-card border-teal-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-teal-500" />
                        Expresión Emocional Saludable
                      </CardTitle>
                      <CardDescription>
                        Comunica y expresa tus emociones de forma efectiva
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        • Técnicas de expresión<br/>
                        • Escritura terapéutica<br/>
                        • Comunicación asertiva<br/>
                        • Manejo de vínculos afectivos
                      </div>
                      <Button size="sm" className="w-full">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Próximamente
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Salud Social */}
            <TabsContent value="social" className="space-y-6">
              <div className="grid gap-6">
                {/* Habilidades Sociales Básicas */}
                <Card className="glow-card border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-500" />
                      Habilidades Sociales Básicas
                    </CardTitle>
                    <CardDescription>
                      Desarrolla comunicación, carisma y empatía
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Comunicación Asertiva</h4>
                        <div className="text-sm text-muted-foreground">
                          Hábitos para principiantes e intermedios
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Carisma Natural</h4>
                        <div className="text-sm text-muted-foreground">
                          Conexión genuina y naturalidad
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Empatía</h4>
                        <div className="text-sm text-muted-foreground">
                          Actividades y hábitos prácticos
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <div className="text-sm">
                        💡 <strong>Tip:</strong> Usa el chat de IA para practicar conversaciones
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Relaciones y Conflictos */}
                  <Card className="glow-card border-yellow-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Handshake className="w-5 h-5 text-yellow-500" />
                        Relaciones y Resolución de Conflictos
                      </CardTitle>
                      <CardDescription>
                        Construye relaciones sanas y resuelve conflictos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        • Técnicas de escucha activa<br/>
                        • Método "Yo siento"<br/>
                        • Checklist de relaciones sanas<br/>
                        • Soluciones conjuntas
                      </div>
                      <Button size="sm" className="w-full">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Evaluar relaciones
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Relaciones Románticas */}
                  <Card className="glow-card border-rose-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-rose-500" />
                        Relaciones Románticas
                      </CardTitle>
                      <CardDescription>
                        Consejos para citas y relaciones de pareja
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        • Consejos para citas efectivas<br/>
                        • Red flags y green flags<br/>
                        • Comunicación en pareja<br/>
                        • Regla 5:1 de interacciones
                      </div>
                      <Button size="sm" className="w-full">
                        <Info className="w-4 h-4 mr-2" />
                        Ver guías
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Conexión y Comunidad */}
                <Card className="glow-card border-emerald-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-emerald-500" />
                      Conexión y Comunidad
                    </CardTitle>
                    <CardDescription>
                      Construye redes de apoyo y participa en comunidades
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center space-y-2">
                        <div className="font-semibold">Networking</div>
                        <div className="text-sm text-muted-foreground">
                          Construye relaciones profesionales
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="font-semibold">Participación Comunitaria</div>
                        <div className="text-sm text-muted-foreground">
                          Involúcrate en tu comunidad
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="font-semibold">Soporte Social</div>
                        <div className="text-sm text-muted-foreground">
                          Crea redes de apoyo mutuo
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button size="sm" className="w-full" variant="outline">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Próximamente
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* AI Integration Notice */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-black text-lg mb-1">
                    Integración con IA Maxx
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Cuando la IA genere un plan personalizado, las actividades se añadirán automáticamente a tu Tasklist y se reflejarán en Health Analytics.
                  </p>
                </div>
                <Link href="/chat">
                  <Button className="glow-primary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hablar con IA
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarLayout>
    </ProtectedRoute>
  )
}
