

export default function Footer() {
    let year = new Date().getFullYear();
  return (
    <footer className="text-center font-primary">
        &copy;{year} Vikash Patel
    </footer>
  )
}
