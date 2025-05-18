export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Irei Trabalhar em:</label>
        <input id="task" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>
      </form>
    </div>
  );
}
