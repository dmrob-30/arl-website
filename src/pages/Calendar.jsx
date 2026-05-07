export default function Calendar() {
	const events = [
		{ id: 1, track: 'Imola', date: '18 May 2025', time: '19:30 BST' },
		{ id: 2, track: 'Monza', date: '01 Jun 2025', time: '19:30 BST' },
		{ id: 3, track: 'Spa', date: '22 Jun 2025', time: '19:30 BST' },
	]

	return (
		<main style={{ padding: '2.5rem 1rem', color: 'white' }}>
			<div style={{ maxWidth: 1200, margin: '0 auto' }}>
				<h1 className="calendar-title" style={{ marginBottom: 8 }}>Calendar</h1>
				<p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 20 }}>
					Upcoming events — placeholder data.
				</p>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
					{events.map((e) => (
						<article key={e.id} style={{ background: 'rgba(17,17,20,0.7)', padding: 16, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6 }}>
							<div style={{ color: 'var(--color-primary)', fontWeight: 800, letterSpacing: 1 }}>{e.track.toUpperCase()}</div>
							<div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>{e.date}</div>
							<div style={{ color: 'rgba(255,255,255,0.8)', marginTop: 6 }}>{e.time}</div>
							<div style={{ marginTop: 12 }}>
								<a className="cta" href="#">View details</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</main>
	)
}
