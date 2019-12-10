namespace Config {
  const host = 'http://192.168.1.164:9080/';

  export function getHost() {
    return host;
  }

  export function setHost(inbound) {
    this.host = inbound;
  }
}
// usage
const host = Config.getHost();
