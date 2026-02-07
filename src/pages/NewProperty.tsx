import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ChevronRight, Upload, X, Calendar } from "lucide-react"

export default function NewPropertyPage() {
  const [images, setImages] = useState<string[]>([])
  const [features, setFeatures] = useState({
    wenicok: false,
    aromatherapy: false,
    tea: false,
    massage: false,
    pool: false,
    hammam: false,
    sauna: false,
    food: false,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Событие успешно добавлено!")
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
        <span className="text-foreground">Добавить событие</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Добавить банное событие 🔥</h1>
        <p className="text-muted-foreground">Заполните форму, чтобы ваше мероприятие увидели тысячи гостей</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Информация о событии</CardTitle>
              <CardDescription>Основные характеристики мероприятия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Название события</Label>
                <Input id="title" placeholder="например, Мужские парения" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Тип события</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sparcom">Эксклюзив SPARCOM</SelectItem>
                      <SelectItem value="ritual">Авторский ритуал</SelectItem>
                      <SelectItem value="party">Банная вечеринка</SelectItem>
                      <SelectItem value="masterclass">Мастер-класс</SelectItem>
                      <SelectItem value="workshop">Интенсив</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Формат</Label>
                  <Select required>
                    <SelectTrigger id="format">
                      <SelectValue placeholder="Выберите формат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="men">Мужское</SelectItem>
                      <SelectItem value="women">Дамское</SelectItem>
                      <SelectItem value="mixed">Смешанное</SelectItem>
                      <SelectItem value="family">Семейное</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Цена за участие (руб.)</Label>
                <Input id="price" type="number" min="0" step="100" placeholder="2500" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="participants">Количество участников</Label>
                  <Input id="participants" type="number" min="1" placeholder="12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Длительность (мин)</Label>
                  <Input id="duration" type="number" min="30" step="15" placeholder="90" required />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата события</Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время начала</Label>
                  <Input id="time" type="time" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание</Label>
                <Textarea id="description" placeholder="Опишите событие, программу, мастера..." className="min-h-[150px]" required />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Место проведения</CardTitle>
                <CardDescription>Где пройдёт событие?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="venue">Название площадки</Label>
                  <Input id="venue" placeholder="Банный клуб SPARCOM" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес</Label>
                  <Input id="address" placeholder="ул. Примерная, 1" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="district">Район</Label>
                    <Input id="district" placeholder="Центральный" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Организатор / Мастер</CardTitle>
                <CardDescription>Информация для связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="masterName">Имя мастера/организатора</Label>
                  <Input id="masterName" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Телефон</Label>
                  <Input id="contactPhone" type="tel" placeholder="+7 (900) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telegram">Telegram (необязательно)</Label>
                  <Input id="telegram" placeholder="@username" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Фотографии</CardTitle>
              <CardDescription>Загрузите фото объекта (до 10 штук)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label
                  htmlFor="images"
                  className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-input bg-muted/50 px-4 py-5 text-center"
                >
                  <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Нажмите для загрузки</span> или перетащите файлы
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG или WEBP (макс. 5 МБ на изображение)</p>
                  <input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                    onChange={handleImageUpload}
                    disabled={images.length >= 10}
                  />
                </Label>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Фото ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-1 top-1 rounded-full bg-background p-1 shadow-sm"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Что входит?</CardTitle>
              <CardDescription>Выберите всё, что включено в событие</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-wenicok"
                    checked={features.wenicok}
                    onCheckedChange={(checked) => setFeatures({ ...features, wenicok: !!checked })}
                  />
                  <label
                    htmlFor="feature-wenicok"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Венички
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-aromatherapy"
                    checked={features.aromatherapy}
                    onCheckedChange={(checked) => setFeatures({ ...features, aromatherapy: !!checked })}
                  />
                  <label
                    htmlFor="feature-aromatherapy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Ароматерапия
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-tea"
                    checked={features.tea}
                    onCheckedChange={(checked) => setFeatures({ ...features, tea: !!checked })}
                  />
                  <label
                    htmlFor="feature-tea"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Чай/напитки
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-massage"
                    checked={features.massage}
                    onCheckedChange={(checked) => setFeatures({ ...features, massage: !!checked })}
                  />
                  <label
                    htmlFor="feature-massage"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Массаж
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-pool"
                    checked={features.pool}
                    onCheckedChange={(checked) => setFeatures({ ...features, pool: !!checked })}
                  />
                  <label
                    htmlFor="feature-pool"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Бассейн
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-hammam"
                    checked={features.hammam}
                    onCheckedChange={(checked) => setFeatures({ ...features, hammam: !!checked })}
                  />
                  <label
                    htmlFor="feature-hammam"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Хаммам
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-sauna"
                    checked={features.sauna}
                    onCheckedChange={(checked) => setFeatures({ ...features, sauna: !!checked })}
                  />
                  <label
                    htmlFor="feature-sauna"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Сауна
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="feature-food"
                    checked={features.food}
                    onCheckedChange={(checked) => setFeatures({ ...features, food: !!checked })}
                  />
                  <label
                    htmlFor="feature-food"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Угощения
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Link to="/properties">
            <Button variant="outline">Отмена</Button>
          </Link>
          <Button type="submit">Добавить событие</Button>
        </div>
      </form>
    </div>
  )
}