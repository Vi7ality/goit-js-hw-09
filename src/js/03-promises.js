import Notiflix from 'notiflix';

const formEl = document.querySelector('.form')
formEl.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.currentTarget.delay.value);
  // console.log(event.currentTarget.step.value);
  // console.log(event.currentTarget.amount.value)
  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;

  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) { 
            resolve({position, delay})
           } else {
    reject({position, delay})
  }
      }, delay)
    })

}

// createPromise(2, 3500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
