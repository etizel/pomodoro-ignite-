import { Play } from 'phosphor-react';
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Irei Trabalhar em:</label>
          <input id="task" placeholder="Dê um nome ao teu projeto" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" placeholder="00" step={5} />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
