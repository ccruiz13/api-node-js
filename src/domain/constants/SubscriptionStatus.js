class SubscriptionStatus {
  static ACTIVE = 'ACTIVE';
  static CANCELLED = 'CANCELLED';
  static EMAIL = 'EMAIL';
  static SMS = 'SMS';
  static BOTH =  'BOTH'; 

  static values() {
    return [this.ACTIVE, this.CANCELLED, this.EMAIL, this.SMS, this.BOTH];
  }
}

Object.freeze(SubscriptionStatus);
module.exports = SubscriptionStatus;
