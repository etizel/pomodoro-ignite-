import { useForm } from 'react-hook-form';
import { FormContainer } from './style';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O Ciclo precisa ser no mínimo 5 minutos.')
    .max(60, 'O Ciclo precisa ser no máximo 60 minutos.'),
});

type NewCycleFormatData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {
  const { register } = useForm<NewCycleFormatData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  return (
    <FormContainer>
      <label htmlFor="task">Irei Trabalhar em:</label>
      <input
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome ao teu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
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
    </FormContainer>
  );
}
