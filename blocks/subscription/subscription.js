
let subscribe = () => {
  let form = document.querySelector('.form');
  let subscriptionInput = form.querySelector('.form__input');

  let message = {
    loading: 'Идет загрузка. Подождите...',
    success: 'Данные успешно отправлены. Спасибо за подписку!',
    failure: 'Что-то пошло не так. Попробуйте повторить отправку позже...'
  };

  subscriptionInput.required = true;

    //оператор async дает понять, что внутри функции есть асинхронные операторы
  let postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    //оператор await дает понять, какой код будет асинхронным
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    //оператор await дает понять, какой код будет асинхронным   
    return await res.text();
  };

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let value = subscriptionInput.value;
    checkEmail(value);

    let statusMessage = createStatusMessage();

    postData('server.php', new FormData(form))
      .then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      })
      .catch(() =>
        statusMessage.textContent = message.failure)
      .finally(() => {
        clearInput();
        setTimeout(() => {
          statusMessage.remove();
          }, 5000);
      });
    });

  function checkEmail(value) {
    let regexp = /.+@.+\..+/i;
    return regexp.test(value);
  }

  function clearInput() {
    subscriptionInput.value = '';
  }

  function createStatusMessage() {
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.appendChild(statusMessage);
    return statusMessage;
  }
};

export default subscribe;