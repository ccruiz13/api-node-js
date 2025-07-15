class RouteConstants {
  static SUBSCRIPTION_BASE_PATH = '/subscriptions';
  static GET_CUSTOMER_BY_ID = `${this.SUBSCRIPTION_BASE_PATH}/:customer_id`;

  static values() {
    return [this.GET_CUSTOMER_BY_ID, this.SUBSCRIPTION_BASE_PATH];
  }
}

Object.freeze(RouteConstants);
module.exports = RouteConstants;
