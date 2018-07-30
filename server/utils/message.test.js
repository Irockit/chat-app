const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it("should generate the correct message object", () => {
    var from = "Jen";
    var text = "Some Message"
    var message = generateMessage(from, text)
    expect(typeof message.createdAt).toBe('number');
    expect(message).toHaveProperty("from", from);
    expect(message).toHaveProperty("text", text);
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "Deb";
    var coords = {
      latitude: 15,
      longitude: 19
    }
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, coords);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toHaveProperty("from", from);
    expect(message).toHaveProperty("url", url);
  })
});