const PhaseURL = 'https://api.farmsense.net/v1/moonphases/?d=';
const today = Math.floor(new Date().getTime() / 1000);
const completeday = 29.5;
async function getLunarPhase() {
  const response = await fetch(PhaseURL + today);
  const data = await response.json();
  return data[0];
}

getLunarPhase().then(phase => {
  console.log('Phase:',phase.Phase);
  console.log('Distance:',phase.Distance,'kilometers')
  console.log('Illumination: %' + phase.Illumination * 100);
  console.log('Quarter age:', Math.floor(phase.Age), 'days');
  console.log('Remaining days of the quarter:', Math.floor(completeday - phase.Age), 'days');
  console.log('Quarter percentage: %' + Math.floor((phase.Age / completeday) * 100));
}).catch(error => {
  console.log(error);
});
