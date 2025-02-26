/* 
* Shared Worker подписывается на порт по которому потом происходит слежение
*
* Данные между вкладками, которые используют один SW, передаются. 
* Данные хранятся до тех пор пока не останется одна вкладка. И пока последнюю вкладку не обновят.
*
* Можно использовать несколько SW. Прослушивание сообщений в основном потоке будет зависеть от worker.port.onmessage.
* Где worker это отдельный SW.
*/

const worker = new SharedWorker('./worker.js');

btn.onclick = () => worker.port.postMessage(1);

worker.port.onmessage = (event) => {
  console.log(event.data)
}

worker.port.postMessage(0);