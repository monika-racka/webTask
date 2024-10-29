import { getPhoneNumber } from './utils';

test('should format phone number correctly and limit it to 9 digits', () => {
    const phoneNumber = '1234567890';
    const formattedPhoneNumber = '123 456 789';
    expect(getPhoneNumber(phoneNumber)).toBe(formattedPhoneNumber);

    const phoneNumberWithCharacters = 'abc12345abc67890abc';
    expect(getPhoneNumber(phoneNumberWithCharacters)).toBe(formattedPhoneNumber);
    });
