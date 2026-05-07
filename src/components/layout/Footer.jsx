export default function Footer() {
	return (
		<footer style={{padding: '2rem 1rem', textAlign: 'center', color: 'rgba(255,255,255,0.6)'}}>
            <small> Not affiliated with F1 <br /></small>
			<small>© {new Date().getFullYear()} Atmos Racing League</small>
		</footer>
	)
}
