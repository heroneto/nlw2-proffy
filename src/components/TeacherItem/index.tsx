import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem () {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEdfeG5j4-1Dw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=QNeq0pH9a_RMG8DeQzHXYiBdq8Bf-NWQRS-1CqiArTY" alt="Heron Eto"/>
            <div>
              <strong>Heron Eto</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnoligias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 20.00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato  
            </button>
          </footer>
    </article>
  )
}

export default TeacherItem