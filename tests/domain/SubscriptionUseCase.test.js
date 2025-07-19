const SubscriptionUseCase = require('../../src/domain/usecase/SuscriptionUseCase')
const DomainConfigurationException = require('../../src/domain/exceptions/DomainConfigurationException')
const ExceptionMessages = require('../../src/domain/constants/ExceptionMessages')

describe('SubscriptionUseCaseTest', () => {
    let mockAdapter;

    beforeEach(() => {
    mockAdapter = {
      getSubscriptionsByCustomerId: jest.fn()
    };
  });

  test('shouldThrowErrorWhenAdapterIsMissing', () => {
    const act = () => new SubscriptionUseCase();
    expect(act).toThrow(ExceptionMessages.SUBSCRIPTION_ADAPTER_REQUIRED_MESSAGE);
  });

  test('should return subscriptions when found', async () => {
    const fakeSubscriptions = [{ id: '1', customerId: 'abc', fundId: 'F1' }];
    mockAdapter.getSubscriptionsByCustomerId.mockResolvedValue(fakeSubscriptions);

    const useCase = new SubscriptionUseCase(mockAdapter);
    const result = await useCase.getSubscriptionsByCustomerId('abc');

    expect(result).toEqual(fakeSubscriptions);
    expect(mockAdapter.getSubscriptionsByCustomerId).toHaveBeenCalledWith('abc');
  });

  test('should throw DomainConfigurationException when no subscriptions found', async () => {
    mockAdapter.getSubscriptionsByCustomerId.mockResolvedValue([]);

    const useCase = new SubscriptionUseCase(mockAdapter);

    await expect(useCase.getSubscriptionsByCustomerId('abc'))
      .rejects
      .toThrow(DomainConfigurationException);
  });

});