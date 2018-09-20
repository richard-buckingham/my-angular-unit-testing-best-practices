import { StrengthPipe } from "./strength.pipe";
describe("StrengthPipe ", () => {
  it("should display weak if strength is 5", () => {
    // arrange
    const pipe = new StrengthPipe();

    // act
    const strength = pipe.transform(5);

    // assert
    expect(strength).toBe("5 (weak)");
  });

  it("should display strong if strength is 15", () => {
    // arrange
    const pipe = new StrengthPipe();

    // act
    const strength = pipe.transform(15);

    // assert
    expect(strength).toBe("15 (strong)");
  });

  it("should display strong if unbelievable is 25", () => {
    // arrange
    const pipe = new StrengthPipe();

    // act
    const strength = pipe.transform(25);

    // assert
    expect(strength).toBe("25 (unbelievable)");
  });
});
