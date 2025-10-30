const rows = [
  { date: 'Day 1', tiffin: 'Poha + Chutney', lunch: 'Dal Fry, Jeera Rice, Salad', dinner: 'Roti, Paneer Masala, Salad' },
  { date: 'Day 2', tiffin: 'Upma + Coconut Chutney', lunch: 'Rajma Chawal, Curd', dinner: 'Roti, Mix Veg, Jeera Rice' },
  { date: 'Day 3', tiffin: 'Aloo Paratha + Curd', lunch: 'Chole Rice, Salad', dinner: 'Roti, Dal Tadka, Veg Pulao' },
  { date: 'Day 4', tiffin: 'Idli Sambar', lunch: 'Kadhi Khichdi', dinner: 'Roti, Bhindi Masala, Rice' },
  { date: 'Day 5', tiffin: 'Thepla + Pickle', lunch: 'Veg Pulao + Raita', dinner: 'Roti, Chana Masala, Salad' },
]

export default function MenuPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold">Our 30-Day Homemade Food Menu</h1>
          <div className="flex items-center gap-2">
            <a
              href="/nosh-menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold underline"
            >
              Open PDF
            </a>
            <a href="#/" className="text-sm font-bold underline">Back to Home</a>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-black/10 bg-white">
          <table className="min-w-full text-left">
            <thead className="bg-[#FFD43B]">
              <tr>
                <th className="px-4 py-3 font-extrabold">Date</th>
                <th className="px-4 py-3 font-extrabold">Tiffin</th>
                <th className="px-4 py-3 font-extrabold">Lunch</th>
                <th className="px-4 py-3 font-extrabold">Dinner</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={idx} className={idx % 2 ? 'bg-black/5' : ''}>
                  <td className="px-4 py-3 font-bold">{r.date}</td>
                  <td className="px-4 py-3">{r.tiffin}</td>
                  <td className="px-4 py-3">{r.lunch}</td>
                  <td className="px-4 py-3">{r.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-black/60">Note: The full 30-day menu is available in the PDF. If the PDF is not visible, please share it with us and we will update it.</p>
      </div>
    </main>
  )
}
