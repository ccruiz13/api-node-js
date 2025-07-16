class RouteConstants {
  static SUBSCRIPTION_BASE_PATH = '/subscriptions';
  static GET_CUSTOMER_BY_ID = '/:customer_id';
  static NOTIFICATION_BASE_PATH = '/notifications';

  static values() {
    return [this.GET_CUSTOMER_BY_ID, this.SUBSCRIPTION_BASE_PATH, this.NOTIFICATION_BASE_PATH];
  }
}

Object.freeze(RouteConstants);
module.exports = RouteConstants;
