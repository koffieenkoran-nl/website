import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
