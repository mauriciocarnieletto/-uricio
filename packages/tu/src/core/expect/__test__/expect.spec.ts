describe("expect", () => {
  it("Should be able to run the expect method", () => {
    const bindedExpect = expect("test");
    expect(bindedExpect).toBeTruthy();
  });
});
