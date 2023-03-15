import styles from  '../../styles/Global.module.css'
import Card from '../../src/components/Card/card'
import Input from '../../src/components/input/input'
import Button from '../../src/components/button/button'
import Link from 'next/link'

export default function register(){
  return (
    <div className={styles.backgound}>
        <Card title={"Crie seu usuário."}>
          <form className={styles.form}>
          <Input
            type="name"
            placeholder="Digite seu nome"
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
          />
          <Input
            type="password"
            placeholder="Sua senha"
          />
          <Button>Registrar</Button>
          <Link href="/security/signIn">Ja possui cadastro ? </Link>
          </form>
      
        </Card>
        
    </div>
  )
}