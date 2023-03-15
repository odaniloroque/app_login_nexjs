import styles from  '../../styles/Global.module.css'
import Card from '../../src/components/Card/card'
import Input from '../../src/components/input/input'
import Button from '../../src/components/button/button'
import Link from 'next/link'

export default function signin(){
  return (
    <div className={styles.backgound}>
        <Card title="Entre em sua conta">
          <form className={styles.form}>
              <Input
                type="email"
                placeholder="Seu e-mail"
              />
              <Input
                type="password"
                placeholder="Sua senha"
              />
              <Button>Entrar</Button>
              <Link href="/security/register">Ja possui cadastro ? </Link>
          </form>
      
        </Card>
        
    </div>
  )
}