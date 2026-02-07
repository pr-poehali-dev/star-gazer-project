import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid2X2, List, MapPin, Search, SlidersHorizontal } from "lucide-react"

export default function PropertiesPage() {
  const properties = [
    {
      id: "1",
      title: "Мужские парения",
      type: "Эксклюзив SPARCOM",
      address: "Банный клуб SPARCOM, центр",
      price: 2500,
      bedrooms: 12,
      bathrooms: 3,
      squareFeet: 90,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Дамский вечер с ароматерапией",
      type: "Эксклюзив SPARCOM",
      address: "Банный клуб SPARCOM",
      price: 3000,
      bedrooms: 10,
      bathrooms: 2,
      squareFeet: 120,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Хаммам-вечеринка: Восток",
      type: "Авторский ритуал",
      address: "Хаммам-комплекс Аль-Шарк",
      price: 1800,
      bedrooms: 20,
      bathrooms: 1,
      squareFeet: 60,
      yearBuilt: 2024,
      status: "Осталось 3 места",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      title: "Йога-рейв в парной",
      type: "Банная вечеринка",
      address: "Банный комплекс Заря, город",
      price: 2200,
      bedrooms: 15,
      bathrooms: 10,
      squareFeet: 90,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "5",
      title: "Мастер-класс по парению",
      type: "Мастер-класс",
      address: "Студия Парного Искусства",
      price: 3500,
      bedrooms: 8,
      bathrooms: 11,
      squareFeet: 180,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "6",
      title: "Семейное парение с детьми",
      type: "Семейный формат",
      address: "Банный клуб SPARCOM",
      price: 4500,
      bedrooms: 25,
      bathrooms: 12,
      squareFeet: 150,
      yearBuilt: 2024,
      status: "Доступно",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Календарь банных событий 🔥</h1>
        <p className="text-muted-foreground">Вся банная жизнь города — в одном месте</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Поиск по названию, мастеру, месту..." className="w-full pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1 sm:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            Фильтры
          </Button>
          <Tabs defaultValue="grid" className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="grid">
                <Grid2X2 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="map">
                <MapPin className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" className="h-9">
            Сначала новые
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="hidden lg:block">
          <SearchFilters />
        </div>
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Загрузить ещё</Button>
          </div>
        </div>
      </div>
    </div>
  )
}