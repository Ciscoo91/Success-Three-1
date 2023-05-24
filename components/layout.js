import Header from "./header/header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
    <Header/>
      {children}
      <Footer />
    </>
  )
}