class DomainConfigurationException extends Error {
  constructor(message) {
    super(message);
    this.name = 'DomainConfigurationException';
  }
}

module.exports = DomainConfigurationException;