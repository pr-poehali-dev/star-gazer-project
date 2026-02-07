import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { Calendar, Flame, Sparkles, Filter } from "lucide-react"

export default function HomePage() {
  const featuredProperties = [
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
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Вся банная жизнь города — в одном календаре 🔥
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Откройте для себя идеальное банное событие за пару кликов. Мастер-классы, ритуалы, вечеринки — всё проверено командой SPARCOM.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/properties">
                  <Button size="lg" className="gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Смотреть календарь
                  </Button>
                </Link>
                <Link to="/properties/new">
                  <Button size="lg" variant="outline" className="gap-1.5">
                    <Flame className="h-4 w-4" />
                    Добавить событие
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex items-center gap-2 pb-4">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">Найти событие</h2>
                </div>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Дата
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Любая дата</option>
                      <option value="today">Сегодня</option>
                      <option value="tomorrow">Завтра</option>
                      <option value="weekend">Выходные</option>
                      <option value="week">На этой неделе</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Цена от
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любая</option>
                        <option value="1000">1000 ₽</option>
                        <option value="2000">2000 ₽</option>
                        <option value="3000">3000 ₽</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Цена до
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любая</option>
                        <option value="2000">2000 ₽</option>
                        <option value="4000">4000 ₽</option>
                        <option value="6000">6000 ₽</option>
                        <option value="10000">10000+ ₽</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Тип события
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Любой</option>
                      <option value="sparcom">Эксклюзив SPARCOM</option>
                      <option value="ritual">Авторский ритуал</option>
                      <option value="party">Банная вечеринка</option>
                      <option value="masterclass">Мастер-класс</option>
                      <option value="workshop">Интенсив</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Формат
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Любой</option>
                      <option value="men">Мужское парение</option>
                      <option value="women">Дамский вечер</option>
                      <option value="mixed">Смешанный</option>
                      <option value="family">Семейный</option>
                    </select>
                  </div>
                  <Link to="/properties">
                    <Button className="w-full">Найти объекты</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 pb-8 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Ближайшие события ✨</h2>
              <p className="text-muted-foreground">Отборные мероприятия на этой неделе</p>
            </div>
            <Link to="/properties">
              <Button variant="outline">Смотреть весь календарь</Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Почему SPARCOM? 🔥</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Первый агрегатор банных событий с гарантией качества
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Проверенные мастера</h3>
              <p className="text-muted-foreground">Только авторские практики от пармейстеров с репутацией</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Всё в одном месте</h3>
              <p className="text-muted-foreground">Вся банная афиша города — единый календарь и простая фильтрация</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Эксклюзивный доступ</h3>
              <p className="text-muted-foreground">Первыми узнавайте о закрытых мероприятиях SPARCOM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}