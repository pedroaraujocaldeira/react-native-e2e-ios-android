describe('My first suite tests E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have info about cancel subscription', async () => {
    const textScreen = 'Cancel anytime. Ofter terms apply.';
    const info = await element(by.text(textScreen));
    await expect(info).toBeVisible();
  });
});
