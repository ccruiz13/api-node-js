const NotificationUseCase = require('../../src/domain/usecase/NotificationUseCase')
const DomainConfigurationException = require('../../src/domain/exceptions/DomainConfigurationException')
const ExceptionMessages = require('../../src/domain/constants/ExceptionMessages')

describe('NotificationUseCaseTest', () => {
    let mockNotificationAdapter;
    beforeEach(() => {
        mockNotificationAdapter = {
            sendNotification: jest.fn()
        };
    });

    test('shouldThrowExceptionWhenAdapterIsMissing', () => {
    const act = () => new NotificationUseCase();
    expect(act).toThrow(ExceptionMessages.NOTIFICATION_ADAPTER_REQUIRED_MESSAGE);
  });

  test('shouldSendNotificationSuccessfully', async () => {
    const mockNotification = { channel: 'EMAIL', target: 'test@example.com', message: 'Hello' };
    mockNotificationAdapter.sendNotification.mockResolvedValue();

    const useCase = new NotificationUseCase(mockNotificationAdapter);
    await useCase.sendNotification(mockNotification);

    expect(mockNotificationAdapter.sendNotification.mock.calls[0][0]).toEqual(mockNotification);
  });

  test('shouldThrowExceptionWhenAdapterFails', async () => {
    const mockNotification = { channel: 'SMS', target: '+1234567890', message: 'Code 1234' };
    mockNotificationAdapter.sendNotification.mockRejectedValue(new Error('Adapter error'));

    const useCase = new NotificationUseCase(mockNotificationAdapter);
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const act = () => useCase.sendNotification(mockNotification);

    await expect(act()).rejects.toThrow(ExceptionMessages.SEND_NOTIFICATION_FAILED_MESSAGE);

    consoleSpy.mockRestore();
  });


});