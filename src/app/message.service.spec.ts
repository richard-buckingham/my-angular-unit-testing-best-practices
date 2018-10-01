import { MessageService } from "./message.service";

describe("MessageService ", () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it("should have no messages at the start ", () => {
    // assert
    expect(service.messages.length).toBe(0);
  });

  it("should add a message to the messages array ", () => {
    // act
    service.add("test message 1");

    // assert
    expect(service.messages.length).toBe(1);
  });

  it("should remove all messages when clear is called ", () => {
    // arrange
    service.add("test message 1");
    service.add("test message 2");

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0);
  });
});
