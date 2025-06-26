import { FormContainer } from "./style"


export function NewCycleForm() {
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
  )
}