class SuscriptionEntity {
  constructor({ subscription_id, customer_id, fund_id, amount, timestamp, status }) {
    this.subscription_id = subscription_id;
    this.customer_id = customer_id;
    this.fund_id = fund_id;
    this.amount = amount;
    this.timestamp = timestamp;
    this.status = status;
  }
//guardar en dynamodb
  toItem() {
    return {
      subscription_id: this.subscription_id,
      customer_id: this.customer_id,
      fund_id: this.fund_id,
      amount: this.amount,
      timestamp: this.timestamp,
      status: this.status
    };
  }

  // se recupera de dynamodb
  static fromItem(item) {
    return new SuscriptionEntity({
      subscription_id: item.subscription_id,
      customer_id: item.customer_id,
      fund_id: item.fund_id,
      amount: item.amount,
      timestamp: item.timestamp,
      status: item.status
    });
  }
}

module.exports = SuscriptionEntity;
