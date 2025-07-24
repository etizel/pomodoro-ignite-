import { HandPalm, Play } from 'phosphor-react';
import { HomeContainer } from './styles';
import { createContext, useState } from 'react';
import { NewCycleForm } from './components/newCycleForm';
import { CountDown } from './components/CountDown';



interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  isActive: boolean;
  startDate: Date;
  interruptedDate?: Date;
}

interface CycleContextType {
  activeCycle: Cycle | undefined 
}

export const CycleContext = createContext({} as CycleContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

 

  const task = watch('task');
  const isSubmitDisabled = !task;

  function handleCreateNewCyclo(data: NewCycleFormatData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      isActive: true,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  }

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );
    setAmountSecondsPassed(0);
    setActiveCycleId(null);
  }
 
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;



  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <HomeContainer>
<form onSubmit={handleSubmit(handleCreateNewCyclo)} action="">
      <CycleContext.Provider value={{ activeCycle }}>
      <NewCycleForm />
      <CountDown />

    
      
        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
