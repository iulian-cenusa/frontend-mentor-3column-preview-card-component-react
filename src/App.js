import Component from './Component';

function App() {

  let descriptions = [
    `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
  or on your next road trip.`,
    `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
  and off-road adventures.`,
    `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
  rental and arrive in style.`
  ]
  let colors = ['orange', 'darkCyan', 'veryDarkCyan']
  let images = ['./icon-sedans.svg', './icon-suvs.svg', './icon-luxury.svg']

  return (
    <>
      <main>
        <h1></h1>
        <Component title="Sedans" description={descriptions[0]} color={colors[0]} image={images[0]} />
        <Component title="SUVs" description={descriptions[1]} color={colors[1]} image={images[1]} />
        <Component title="Luxury" description={descriptions[2]} color={colors[2]} image={images[2]} />
      </main>
      <footer>
        <div class="attribution">
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a></p>
          <p>Coded by <a href="https://github.com/iulian-cenusa">Iulian Cenuşă</a></p>
        </div></footer>
    </>
  );
}

export default App;
