const PhaseURL = 'https://api.farmsense.net/v1/moonphases/?d=';
const today = Math.floor(new Date().getTime() / 1000);
const completeday = 29.53059027777777;

async function getLunarPhase() {
  const response = await fetch(PhaseURL + today);
  const data = await response.json();
  return data[0];
}

getLunarPhase().then(phase => {
  console.log('Phase:', phase.Phase);
  if (phase.Phase == 'Waning Crescent') {
    console.log('Next phase: New Moon');
  } else if (phase.Phase == 'New Moon') {
    console.log('Next phase: Waxing Crescent');
  } else if (phase.Phase == 'Waxing Crescent') {
    console.log('Next phase: First Quarter');
  } else if (phase.Phase == 'Waxing Gibbous') {
    console.log('Next phase: Full Moon');
  } else if (phase.Phase == 'Full Moon') {
    console.log('Next phase: Waning Gibbous');
  } else if (phase.Phase == 'Waning Gibbous') {
    console.log('Next phase: Third Quarter');
  } else if (phase.Phase == 'Third Quarter') {
    console.log('Next phase: Waning Crescent')
  }
  console.log('Distance:', phase.Distance, 'kilometers');
  console.log('Illumination:', phase.Illumination * 100 + '%');
  console.log('Period age:', Math.floor(phase.Age), 'days');
  console.log('Remaining days of the period:', Math.floor(completeday - phase.Age), 'days');
  console.log('Period percentage (Approximately):', (phase.Age / completeday * 100).toFixed(2) + '%');
}).catch(error => {
  console.error('Error fetching lunar phase:', error);
});