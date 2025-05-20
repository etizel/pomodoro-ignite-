import { Play } from 'phosphor-react';
import { HomeContainer } from './styles';
export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <div>
          <label htmlFor="task">Irei Trabalhar em:</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
}
