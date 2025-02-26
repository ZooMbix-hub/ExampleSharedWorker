let counter = 0;

const ports = [];

self.onconnect = (initEvent) => {
  const port = initEvent.source;

  ports.push(port);

  port.onmessage = (event) => {
    counter += event.data;

    ports.forEach((item) => item.postMessage(counter))
  }
}