class SubscriptionStatus {
  static ACTIVE = 'ACTIVE';
  static CANCELLED = 'CANCELLED';

  static values() {
    return [this.ACTIVE, this.CANCELLED];
  }
}

Object.freeze(SubscriptionStatus);
module.exports = SubscriptionStatus;
