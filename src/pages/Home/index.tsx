import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
} from './styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
});

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });
  const task = watch('task');
  const isSubmitDisabled = !task;

  function handleCreateNewCyclo(data: unknown) {
    return console.log(data);
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCyclo)} action="">
        <FormContainer>
          <label htmlFor="task">Irei Trabalhar em:</label>
          <input
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao teu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <option value="Projeto 1"></option>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <option value="Projeto 2"></option>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <option value="Projeto 3"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
