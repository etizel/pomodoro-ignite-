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
import { number } from 'zod/v4-mini';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O Ciclo precisa ser no mínimo 60 minutos.')
    .max(60, 'O Ciclo precisa ser no máximo 60 minutos.'),
});

interface NewCycleFormatData {
  task: string;
  minutesAmount: number;
}

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });
  const task = watch('task');
  const isSubmitDisabled = !task;

  function handleCreateNewCyclo(data: NewCycleFormatData) {
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
