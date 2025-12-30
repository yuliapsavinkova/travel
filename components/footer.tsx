import './HeaderFooter.css'

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  )
}
