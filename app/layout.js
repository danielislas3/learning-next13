import '../styles/globals.css'
import Navegation from "./components/Navegation"



export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <title>Playing next 13</title>
      <body>
        <Navegation />
        {children}
      </body>
    </html>
  )
}
