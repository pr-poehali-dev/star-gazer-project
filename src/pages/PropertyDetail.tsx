import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Clock, Calendar as CalendarIcon, MapPin, Phone, Mail, Heart, Share2, Home, ChevronRight, Flame } from "lucide-react"

export default function PropertyDetailPage() {
  const { id } = useParams()

  const property = {
    id: id,
    title: "Мужские парения",
    type: "Эксклюзив SPARCOM",
    address: "Банный клуб SPARCOM, центр",
    price: 2500,
    bedrooms: 12,
    bathrooms: 3,
    squareFeet: 90,
    yearBuilt: 2024,
    status: "Доступно",
    description:
      "Легендарное закрытое мероприятие от банного клуба SPARCOM. Настоящий мужской ритуал с традиционными техниками парения, авторскими веничными сеансами, чайной церемонией. Мастер — пармейстер с 10-летним стажем. В программе: разогрев в русской бане, сеанс парения 3 захода, охлаждение в бассейне, травяной чай с угощениями. Атмосфера братства и силы.",
    features: [
      "Русская баня",
      "Авторские веники",
      "Пармейстер с опытом 10+ лет",
      "Бассейн с холодной водой",
      "Чайная церемония",
      "Угощения",
      "Мужской формат",
      "Малая группа (12 чел)",
      "Личный подход",
      "Парковка",
      "Раздевалки",
      "Душевые",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    agent: {
      name: "Иван Петров",
      phone: "+7 (900) 123-45-67",
      email: "events@sparcom.club",
      image: "/placeholder.svg?height=200&width=200",
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="flex items-center gap-1 hover:text-foreground">
          <Home className="h-4 w-4" />
          Главная
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/properties" className="hover:text-foreground">
          Календарь
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{property.title}</span>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-2 text-3xl font-bold">{property.title}</h1>
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{property.address}</span>
            <Badge
              className={
                property.status === "Available"
                  ? "bg-green-100 text-green-800"
                  : property.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }
              variant="outline"
            >
              {property.status}
            </Badge>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-5 w-5" />
              <span>{property.bedrooms} участников</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-5 w-5" />
              <span>{property.squareFeet} минут</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-5 w-5" />
              <span>{property.bathrooms} февраля 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="h-5 w-5" />
              <span>{property.type}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="text-3xl font-bold">{formatPrice(property.price)}</div>
          <div className="mt-4 flex gap-2">
            <Button size="lg">Забронировать место</Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              В избранное
            </Button>
            <Button size="icon" variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="col-span-4 aspect-video overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2">
          <img
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        </div>
        {property.images.slice(1, 5).map((image, index) => (
          <div key={index} className="col-span-2 aspect-video overflow-hidden rounded-lg sm:col-span-1">
            <img
              src={image || "/placeholder.svg"}
              alt={`${property.title} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="description">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="features">Что входит</TabsTrigger>
              <TabsTrigger value="location">Место</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h2 className="text-2xl font-semibold">О событии</h2>
              <p className="leading-relaxed">{property.description}</p>
            </TabsContent>
            <TabsContent value="features">
              <h2 className="mb-4 text-2xl font-semibold">Что входит в программу</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="location">
              <h2 className="mb-4 text-2xl font-semibold">Место проведения</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">{property.address}</p>
                    <p className="text-sm text-muted-foreground">Как добраться: 5 мин пешком от м. Центральная</p>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">Здесь будет отображаться карта</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <img
                src={property.agent.image || "/placeholder.svg"}
                alt={property.agent.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{property.agent.name}</h3>
              <p className="text-sm text-muted-foreground">Организатор / Мастер</p>
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.email}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Ваш Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Ваш телефон
              </label>
              <input
                id="phone"
                type="tel"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={`Здравствуйте! Хочу забронировать место на "${property.title}" ${property.bathrooms} февраля. Свяжитесь со мной, пожалуйста.`}
              ></textarea>
            </div>
            <Button className="w-full">Забронировать место</Button>
          </div>
        </div>
      </div>
    </div>
  )
}