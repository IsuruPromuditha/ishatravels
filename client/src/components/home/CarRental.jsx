import React, { useState, useEffect, useRef, useMemo } from 'react'

// Vehicle photos: add these files to src/assets/images/
import carAlto from '../assets/images/CarAlto.jpg'
import carAxio from '../assets/images/CarAxio.jpg'
import carVitara from '../assets/images/CarVitara.jpg'
import carPrado from '../assets/images/CarPrado.jpg'
import carHiace from '../assets/images/CarHiace.jpg'
import carTuktuk from '../assets/images/CarTuktuk.jpg'

/* ------------------------------------------------------------------
   3D MODELS
   Put your .glb files in:  public/models/
   (e.g. public/models/suzuki-alto.glb) and they load from "/models/...".
   Install the viewer once:  npm install @google/model-viewer
------------------------------------------------------------------- */

// Handover / pick-up points
const locations = [
  {
    id: 'cmb-airport',
    name: 'Colombo Airport (CMB)',
    type: 'Airport handover',
    address: 'Bandaranaike International Airport, Katunayake',
    hours: 'Open 24 hours',
    meetingPoint: 'Arrivals hall, exit gate B. Our driver holds a "Love Sri Lanka" sign.',
    steps: [
      'Clear immigration and customs, then exit via gate B.',
      'Meet our representative in the arrivals hall.',
      'Short walk to the car park for the vehicle check and key handover.',
    ],
    mapQuery: 'Bandaranaike International Airport Katunayake',
  },
  {
    id: 'colombo-fort',
    name: 'Colombo Fort',
    type: 'City office',
    address: 'Near Fort Railway Station, Colombo 01',
    hours: '7:00 AM – 9:00 PM',
    meetingPoint: 'Our office is opposite the main railway station entrance.',
    steps: [
      'Visit the office with your passport and driving licence.',
      'Sign the rental agreement and pay the deposit.',
      'Inspect the vehicle together, then collect the keys.',
    ],
    mapQuery: 'Colombo Fort Railway Station',
  },
  {
    id: 'negombo',
    name: 'Negombo',
    type: 'Beach-side office',
    address: 'Lewis Place, Negombo',
    hours: '7:00 AM – 8:00 PM',
    meetingPoint: 'We can also bring the vehicle to your Negombo hotel.',
    steps: [
      'Choose office pick-up or hotel delivery when you book.',
      'Show your passport and driving licence.',
      'Walk around the vehicle with our staff and take the keys.',
    ],
    mapQuery: 'Lewis Place Negombo',
  },
  {
    id: 'kandy',
    name: 'Kandy',
    type: 'Hill-country office',
    address: 'Peradeniya Road, Kandy',
    hours: '8:00 AM – 7:00 PM',
    meetingPoint: 'Near the Kandy City Centre. Hotel delivery within 10 km.',
    steps: [
      'Confirm your handover time by phone or WhatsApp.',
      'Meet our agent at the office or your hotel.',
      'Check the vehicle, sign, and drive off.',
    ],
    mapQuery: 'Peradeniya Road Kandy',
  },
  {
    id: 'galle',
    name: 'Galle',
    type: 'Southern coast office',
    address: 'Matara Road, near Galle Fort',
    hours: '8:00 AM – 7:00 PM',
    meetingPoint: 'Five minutes from Galle Fort. Hotel delivery in Unawatuna and Mirissa.',
    steps: [
      'Tell us your hotel when booking for free delivery nearby.',
      'Our agent arrives with the vehicle and paperwork.',
      'Inspect, sign, and start your coastal drive.',
    ],
    mapQuery: 'Galle Fort Sri Lanka',
  },
]

const categories = ['All', 'Economy', 'Sedan', 'SUV', 'Van', 'Tuk-Tuk']

const vehicles = [
  {
    id: 'alto',
    name: 'Suzuki Alto',
    category: 'Economy',
    price: 28,
    seats: 4,
    bags: 1,
    transmission: 'Manual',
    fuel: 'Petrol',
    blurb: 'Small, cheap to run and easy to park in busy towns.',
    model: '/models/suzuki-alto.glb',
    image: carAlto,
    availableAt: ['cmb-airport', 'colombo-fort', 'negombo', 'kandy', 'galle'],
  },
  {
    id: 'axio',
    name: 'Toyota Axio',
    category: 'Sedan',
    price: 45,
    seats: 5,
    bags: 3,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    blurb: 'Comfortable and fuel-efficient for long highway days.',
    model: '/models/toyota-axio.glb',
    image: carAxio,
    availableAt: ['cmb-airport', 'colombo-fort', 'negombo', 'kandy', 'galle'],
  },
  {
    id: 'vitara',
    name: 'Suzuki Vitara',
    category: 'SUV',
    price: 75,
    seats: 5,
    bags: 3,
    transmission: 'Automatic',
    fuel: 'Petrol',
    blurb: 'Higher ground clearance for hill roads and national park tracks.',
    model: '/models/suzuki-vitara.glb',
    image: carVitara,
    availableAt: ['cmb-airport', 'colombo-fort', 'kandy', 'galle'],
  },
  {
    id: 'prado',
    name: 'Toyota Land Cruiser Prado',
    category: 'SUV',
    price: 120,
    seats: 7,
    bags: 4,
    transmission: 'Automatic',
    fuel: 'Diesel',
    blurb: 'Full-size 4x4 for families and rough terrain.',
    model: '/models/toyota-prado.glb',
    image: carPrado,
    availableAt: ['cmb-airport', 'colombo-fort', 'kandy'],
  },
  {
    id: 'hiace',
    name: 'Toyota HiAce Van',
    category: 'Van',
    price: 90,
    seats: 9,
    bags: 8,
    transmission: 'Automatic',
    fuel: 'Diesel',
    blurb: 'Room for a big group and all the luggage. Driver optional.',
    model: '/models/toyota-hiace.glb',
    image: carHiace,
    availableAt: ['cmb-airport', 'colombo-fort', 'negombo', 'kandy'],
  },
  {
    id: 'tuktuk',
    name: 'Bajaj Tuk-Tuk',
    category: 'Tuk-Tuk',
    price: 22,
    seats: 3,
    bags: 1,
    transmission: 'Manual',
    fuel: 'Petrol',
    blurb: 'The classic Sri Lankan way to explore coastal towns.',
    model: '/models/bajaj-tuktuk.glb',
    image: carTuktuk,
    availableAt: ['negombo', 'galle'],
  },
]

/* ------------------------------------------------------------------
   3D viewer. Drag to rotate, scroll or pinch to zoom.
   Shows a friendly placeholder if the .glb file is missing.
------------------------------------------------------------------- */
const Vehicle3D = ({ src, name }) => {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    import('@google/model-viewer').then(() => setReady(true)).catch(() => setFailed(true))
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onError = () => setFailed(true)
    el.addEventListener('error', onError)
    return () => el.removeEventListener('error', onError)
  }, [ready])

  if (failed) {
    return (
      <div className="flex h-56 sm:h-64 flex-col items-center justify-center gap-2 rounded-t-2xl bg-slate-900 text-slate-400">
        <span className="text-4xl" aria-hidden="true">🚗</span>
        <span className="text-xs">3D model not available yet</span>
      </div>
    )
  }

  return (
    <div className="relative h-56 sm:h-64 rounded-t-2xl bg-gradient-to-b from-slate-800 to-slate-950">
      {ready && (
        <model-viewer
          ref={ref}
          src={src}
          alt={`3D model of ${name}`}
          camera-controls
          auto-rotate
          auto-rotate-delay="1500"
          shadow-intensity="1"
          exposure="1"
          interaction-prompt="none"
          loading="lazy"
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        />
      )}
      <span className="pointer-events-none absolute bottom-2 right-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-slate-200 backdrop-blur">
        Drag to rotate
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------
   Card media: vehicle photo by default, with a toggle to the 3D view.
   The 3D model only loads when the person switches to it.
------------------------------------------------------------------- */
const VehicleMedia = ({ vehicle }) => {
  const [mode, setMode] = useState('photo')

  return (
    <div className="relative">
      {mode === 'photo' ? (
        <div className="h-56 sm:h-64 overflow-hidden rounded-t-2xl bg-slate-900">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        </div>
      ) : (
        <Vehicle3D src={vehicle.model} name={vehicle.name} />
      )}

      <div className="absolute left-3 top-3 flex rounded-full bg-white/90 p-0.5 text-[11px] font-semibold shadow backdrop-blur">
        {[
          ['photo', 'Photo'],
          ['3d', '3D view'],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setMode(key)}
            aria-pressed={mode === key}
            className={`rounded-full px-3 py-1 transition ${
              mode === key ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
const CarRental = () => {
  const [locationId, setLocationId] = useState('cmb-airport')
  const [category, setCategory] = useState('All')
  const [selectedVehicleId, setSelectedVehicleId] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    handoverLocation: 'cmb-airport',
    hotelDelivery: '',
    withDriver: false,
  })

  const activeLocation = locations.find((l) => l.id === locationId)

  const visibleVehicles = useMemo(
    () =>
      vehicles.filter(
        (v) =>
          v.availableAt.includes(locationId) && (category === 'All' || v.category === category)
      ),
    [locationId, category]
  )

  const selectedVehicle = vehicles.find((v) => v.id === selectedVehicleId)

  const days = useMemo(() => {
    if (!form.pickupDate || !form.returnDate) return 0
    const diff = (new Date(form.returnDate) - new Date(form.pickupDate)) / 86400000
    return diff > 0 ? Math.ceil(diff) : 0
  }, [form.pickupDate, form.returnDate])

  const handleLocationChange = (id) => {
    setLocationId(id)
    setForm((f) => ({ ...f, handoverLocation: id }))
    // clear the selected vehicle if it is not offered at the new location
    const v = vehicles.find((x) => x.id === selectedVehicleId)
    if (v && !v.availableAt.includes(id)) setSelectedVehicleId('')
  }

  const chooseVehicle = (id) => {
    setSelectedVehicleId(id)
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const updateForm = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send `form` and `selectedVehicle` to your backend, email service or WhatsApp link.
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30'

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-slate-950 to-slate-950" />
        <div className="relative mx-auto max-w-3xl space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Rent a car in Sri Lanka
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            Pick a handover point, choose your vehicle, and spin it around in 3D before you book.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#vehicles"
              className="rounded-full bg-emerald-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-600"
            >
              Browse vehicles
            </a>
            <a
              href="#handover"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              See handover points
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION + CATEGORY FILTERS */}
      <section id="vehicles" className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 sm:p-6">
          <div className="space-y-2">
            <label htmlFor="rental-location" className="text-sm font-bold text-slate-900">
              Rental location
            </label>
            <select
              id="rental-location"
              value={locationId}
              onChange={(e) => handleLocationChange(e.target.value)}
              className={inputClass}
            >
              {locations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500">
              Vehicles shown are available at this location.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-sm font-bold text-slate-900">Vehicle category</span>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Vehicle category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={category === c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    category === c
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VEHICLE GRID */}
        {visibleVehicles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-600">
            No {category.toLowerCase()} vehicles at {activeLocation.name}. Try another category or location.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleVehicles.map((v) => (
              <article
                key={v.id}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg ${
                  selectedVehicleId === v.id ? 'border-emerald-500 ring-2 ring-emerald-500/30' : 'border-slate-200'
                }`}
              >
                <VehicleMedia vehicle={v} />

                <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold leading-snug text-slate-900">{v.name}</h3>
                      <span className="shrink-0 rounded-md border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        {v.category}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{v.blurb}</p>

                    <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-2 text-xs text-slate-600">
                      <div className="flex justify-between"><dt>Seats</dt><dd className="font-semibold text-slate-800">{v.seats}</dd></div>
                      <div className="flex justify-between"><dt>Bags</dt><dd className="font-semibold text-slate-800">{v.bags}</dd></div>
                      <div className="flex justify-between"><dt>Gearbox</dt><dd className="font-semibold text-slate-800">{v.transmission}</dd></div>
                      <div className="flex justify-between"><dt>Fuel</dt><dd className="font-semibold text-slate-800">{v.fuel}</dd></div>
                    </dl>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-slate-400">Per day</span>
                      <span className="text-xl font-extrabold text-emerald-600">${v.price}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => chooseVehicle(v.id)}
                      className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-600"
                    >
                      Select this vehicle
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* HANDOVER POINTS */}
      <section id="handover" className="bg-slate-900 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Where you collect your vehicle</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-base">
              Choose a handover point to see the address, opening hours, and how the handover works.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* Location list */}
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {locations.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => handleLocationChange(l.id)}
                  className={`min-w-[170px] rounded-xl border px-4 py-3 text-left transition lg:min-w-0 ${
                    locationId === l.id
                      ? 'border-emerald-400 bg-emerald-400/10 text-white'
                      : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <span className="block text-sm font-bold">{l.name}</span>
                  <span className="block text-xs text-slate-400">{l.type}</span>
                </button>
              ))}
            </div>

            {/* Location detail */}
            <div className="space-y-6 rounded-2xl border border-slate-700/60 bg-slate-800/70 p-6 sm:p-8">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">{activeLocation.name}</h3>
                <p className="text-sm text-slate-400">{activeLocation.address}</p>
              </div>

              <div className="grid gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-xl bg-slate-900/60 p-4">
                  <span className="mb-1 block text-xs font-bold text-emerald-400">Opening hours</span>
                  {activeLocation.hours}
                </div>
                <div className="rounded-xl bg-slate-900/60 p-4">
                  <span className="mb-1 block text-xs font-bold text-emerald-400">Meeting point</span>
                  {activeLocation.meetingPoint}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white">How the handover works</h4>
                <ol className="space-y-2 text-sm">
                  {activeLocation.steps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-bold text-emerald-300">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-600"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500">
            Bring your passport, a valid driving licence, and an International Driving Permit if your licence is not in English.
          </p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking-form" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Book your vehicle</h2>
            <p className="text-sm text-slate-600">We confirm availability and the handover time by phone or WhatsApp.</p>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-emerald-50 p-6 text-center text-sm text-emerald-800">
              <p className="font-bold">Request sent.</p>
              <p className="mt-1">
                We will contact {form.name || 'you'} shortly to confirm the handover at{' '}
                {locations.find((l) => l.id === form.handoverLocation)?.name}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold underline"
              >
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-semibold text-slate-700">Full name</label>
                  <input id="name" name="name" required value={form.name} onChange={updateForm} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-xs font-semibold text-slate-700">Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={updateForm} className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="vehicle" className="mb-1 block text-xs font-semibold text-slate-700">Vehicle</label>
                <select
                  id="vehicle"
                  required
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select a vehicle</option>
                  {vehicles
                    .filter((v) => v.availableAt.includes(form.handoverLocation))
                    .map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.category}) – ${v.price}/day
                      </option>
                    ))}
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="pickupDate" className="mb-1 block text-xs font-semibold text-slate-700">Pick-up date</label>
                  <input id="pickupDate" name="pickupDate" type="date" required value={form.pickupDate} onChange={updateForm} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="returnDate" className="mb-1 block text-xs font-semibold text-slate-700">Return date</label>
                  <input id="returnDate" name="returnDate" type="date" required min={form.pickupDate} value={form.returnDate} onChange={updateForm} className={inputClass} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="handoverLocation" className="mb-1 block text-xs font-semibold text-slate-700">Handover location</label>
                  <select
                    id="handoverLocation"
                    name="handoverLocation"
                    value={form.handoverLocation}
                    onChange={(e) => {
                      updateForm(e)
                      setLocationId(e.target.value)
                      const v = vehicles.find((x) => x.id === selectedVehicleId)
                      if (v && !v.availableAt.includes(e.target.value)) setSelectedVehicleId('')
                    }}
                    className={inputClass}
                  >
                    {locations.map((l) => (
                      <option key={l.id} value={l.id}>{l.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="hotelDelivery" className="mb-1 block text-xs font-semibold text-slate-700">Hotel delivery (optional)</label>
                  <input
                    id="hotelDelivery"
                    name="hotelDelivery"
                    placeholder="Hotel name and address"
                    value={form.hotelDelivery}
                    onChange={updateForm}
                    className={inputClass}
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" name="withDriver" checked={form.withDriver} onChange={updateForm} className="h-4 w-4 accent-emerald-600" />
                Add a driver (price confirmed on request)
              </label>

              {selectedVehicle && days > 0 && (
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 text-sm">
                  <span className="text-slate-600">
                    {selectedVehicle.name} × {days} day{days > 1 ? 's' : ''}
                  </span>
                  <span className="text-lg font-extrabold text-emerald-600">
                    ${selectedVehicle.price * days}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-500 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
              >
                Request booking
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Love Sri Lanka Experiences. Prices are in USD and exclude fuel.
      </footer>
    </div>
  )
}

export default CarRental