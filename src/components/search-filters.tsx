import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Filter, X } from "lucide-react"

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000])
  const [participantsRange, setParticipantsRange] = useState([5, 30])
  const [durationRange, setDurationRange] = useState([60, 240])
  const [eventTypes, setEventTypes] = useState({
    sparcom: false,
    ritual: false,
    party: false,
    masterclass: false,
    workshop: false,
  })
  const [formats, setFormats] = useState({
    men: false,
    women: false,
    mixed: false,
    family: false,
  })
  const [status, setStatus] = useState({
    available: true,
    limited: false,
    soldout: false,
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleReset = () => {
    setPriceRange([1000, 5000])
    setParticipantsRange([5, 30])
    setDurationRange([60, 240])
    setEventTypes({
      sparcom: false,
      ritual: false,
      party: false,
      masterclass: false,
      workshop: false,
    })
    setFormats({
      men: false,
      women: false,
      mixed: false,
      family: false,
    })
    setStatus({
      available: true,
      limited: false,
      soldout: false,
    })
  }

  return (
    <div className="w-full rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Фильтры</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 gap-1">
          <X className="h-4 w-4" />
          Сбросить
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["price", "eventType", "format", "status"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Диапазон цен</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={priceRange} min={0} max={10000} step={100} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <div className="w-[120px]">
                  <Label htmlFor="price-min">Мин. цена</Label>
                  <Input id="price-min" type="text" value={formatPrice(priceRange[0])} readOnly />
                </div>
                <div className="w-[120px]">
                  <Label htmlFor="price-max">Макс. цена</Label>
                  <Input id="price-max" type="text" value={formatPrice(priceRange[1])} readOnly />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="participants">
          <AccordionTrigger>Количество участников</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={participantsRange} min={1} max={50} step={1} onValueChange={setParticipantsRange} />
              <div className="flex items-center justify-between">
                <div className="w-[120px]">
                  <Label htmlFor="participants-min">Мин.</Label>
                  <Input id="participants-min" type="number" value={participantsRange[0]} readOnly />
                </div>
                <div className="w-[120px]">
                  <Label htmlFor="participants-max">Макс.</Label>
                  <Input id="participants-max" type="number" value={participantsRange[1]} readOnly />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger>Длительность (мин)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={durationRange} min={30} max={300} step={15} onValueChange={setDurationRange} />
              <div className="flex items-center justify-between">
                <div className="w-[120px]">
                  <Label htmlFor="duration-min">Мин. мин</Label>
                  <Input id="duration-min" type="number" value={durationRange[0]} readOnly />
                </div>
                <div className="w-[120px]">
                  <Label htmlFor="duration-max">Макс. мин</Label>
                  <Input id="duration-max" type="number" value={durationRange[1]} readOnly />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="eventType">
          <AccordionTrigger>Тип события</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-sparcom"
                  checked={eventTypes.sparcom}
                  onCheckedChange={(checked) => setEventTypes({ ...eventTypes, sparcom: !!checked })}
                />
                <label
                  htmlFor="type-sparcom"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Эксклюзив SPARCOM
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-ritual"
                  checked={eventTypes.ritual}
                  onCheckedChange={(checked) => setEventTypes({ ...eventTypes, ritual: !!checked })}
                />
                <label
                  htmlFor="type-ritual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Авторский ритуал
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-party"
                  checked={eventTypes.party}
                  onCheckedChange={(checked) => setEventTypes({ ...eventTypes, party: !!checked })}
                />
                <label
                  htmlFor="type-party"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Банная вечеринка
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-masterclass"
                  checked={eventTypes.masterclass}
                  onCheckedChange={(checked) => setEventTypes({ ...eventTypes, masterclass: !!checked })}
                />
                <label
                  htmlFor="type-masterclass"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Мастер-класс
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-workshop"
                  checked={eventTypes.workshop}
                  onCheckedChange={(checked) => setEventTypes({ ...eventTypes, workshop: !!checked })}
                />
                <label
                  htmlFor="type-workshop"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Интенсив
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="format">
          <AccordionTrigger>Формат</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="format-men"
                  checked={formats.men}
                  onCheckedChange={(checked) => setFormats({ ...formats, men: !!checked })}
                />
                <label
                  htmlFor="format-men"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Мужское
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="format-women"
                  checked={formats.women}
                  onCheckedChange={(checked) => setFormats({ ...formats, women: !!checked })}
                />
                <label
                  htmlFor="format-women"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Дамское
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="format-mixed"
                  checked={formats.mixed}
                  onCheckedChange={(checked) => setFormats({ ...formats, mixed: !!checked })}
                />
                <label
                  htmlFor="format-mixed"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Смешанное
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="format-family"
                  checked={formats.family}
                  onCheckedChange={(checked) => setFormats({ ...formats, family: !!checked })}
                />
                <label
                  htmlFor="format-family"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Семейное
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="status">
          <AccordionTrigger>Статус</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="status-available"
                  checked={status.available}
                  onCheckedChange={(checked) => setStatus({ ...status, available: !!checked })}
                />
                <label
                  htmlFor="status-available"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Доступно
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="status-limited"
                  checked={status.limited}
                  onCheckedChange={(checked) => setStatus({ ...status, limited: !!checked })}
                />
                <label
                  htmlFor="status-limited"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Осталось мало мест
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="status-soldout"
                  checked={status.soldout}
                  onCheckedChange={(checked) => setStatus({ ...status, soldout: !!checked })}
                />
                <label
                  htmlFor="status-soldout"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Мест нет
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6">
        <Button className="w-full">Применить фильтры</Button>
      </div>
    </div>
  )
}
