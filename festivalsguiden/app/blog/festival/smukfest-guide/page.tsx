import { CheckCircle2, MapPin, Calendar, Clock, Users, TreesIcon as Tree } from 'lucide-react'

export default function SmukfestGuide() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img 
          src="/placeholder.svg?height=1080&width=1920" 
          alt="Smukfest" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold mb-4">Smukfest Guide</h1>
            <p className="text-2xl text-gray-300">Din komplette pakkeliste og guide til Danmarks Smukkeste Festival</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Festival Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: "Lokation", value: "Skanderborg" },
            { icon: <Calendar className="w-6 h-6" />, label: "Dato", value: "31. juli - 4. august 2024" },
            { icon: <Clock className="w-6 h-6" />, label: "Varighed", value: "5 dage" },
            { icon: <Users className="w-6 h-6" />, label: "Deltagere", value: "60.000+" }
          ].map((item) => (
            <div key={item.label} className="bg-white/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange-500">{item.icon}</div>
                <h3 className="text-gray-400 uppercase text-sm">{item.label}</h3>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Pakkeliste */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold">Pakkeliste til Smukfest</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Camping Essentials",
                items: [
                  "Telt (vandtæt!)",
                  "Sovepose til sommertemperatur",
                  "Luftmadras eller liggeunderlag",
                  "Campingstol",
                  "Presenning",
                  "Lommelygte/pandelampe",
                  "Reb og tape",
                  "Powerbank og opladere"
                ]
              },
              {
                title: "Personlig Pleje",
                items: [
                  "Festival armbånd",
                  "Penge og betalingskort",
                  "Solcreme",
                  "Regntøj og gummistøvler",
                  "Håndsprit",
                  "Toiletartikler",
                  "Håndklæder",
                  "Myggespray (vigtigt i skoven!)"
                ]
              },
              {
                title: "Festival Necessities",
                items: [
                  "Festivalkort og ID",
                  "Lille rygsæk til dagbrug",
                  "Vandflaske",
                  "Solbriller og hat",
                  "Regnslag",
                  "Kontanter til boder",
                  "Mobil og oplader",
                  "Førstehjælpsudstyr"
                ]
              }
            ].map((category) => (
              <div key={category.title} className="bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pro Tips */}
          <div className="bg-orange-500/10 p-8 mt-12">
            <h3 className="text-2xl font-bold mb-6">Smukfest Specialiteter</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Tree className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>Husk at bøgeskoven kan være fugtig - pak derefter!</span>
              </li>
              <li className="flex items-start gap-2">
                <Tree className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>Vælg et godt telt-spot mellem træerne - undgå skråninger</span>
              </li>
              <li className="flex items-start gap-2">
                <Tree className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>Tag højde for morgendug i skoven - pak tøj og udstyr vandtæt</span>
              </li>
              <li className="flex items-start gap-2">
                <Tree className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>Medbring myggespray - skovmyggene kan være intense!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

