describe("expect", () => {
  it("toBe - should pass when assertion succeeds", () => {
    expect(1).toBe(1);
  });

  it("toBe - should throw an exception when the assertion fails", () => {
    let didThrow = false;
    try {
      expect(1).toBe(2);
    } catch {
      didThrow = true;
    }
    expect(didThrow).toBe(true);
  });

  it("toBeTruthy - should pass when assertion succeeds", () => {
    expect(true).toBeTruthy();
  });

  it("toBeTruthy - should throw an exception when the assertion fails", () => {
    let didThrow = false;
    try {
      expect(0).toBeTruthy();
    } catch {
      didThrow = true;
    }
    expect(didThrow).toBe(true);
  });
});

it("inside it", () => {
  expect(1).toBe(1);
});

function par() {
  console.log(`parent`);
}

function independent() {
  console.log(`independent`);
}

function describableWrapper() {
  console.log(`describableWrapper`);
}
