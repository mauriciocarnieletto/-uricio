import { render, screen, fireEvent } from "@testing-library/react";
import { FancySelect } from "./Select";

describe("select", () => {
  it("Should render with default values", () => {
    const defaultLabel = "Open Select";
    const defaultId = "fancy-select";

    render(<FancySelect />);

    expect(screen.getByLabelText(defaultLabel)).toBeTruthy();
    expect(screen.getByLabelText(defaultLabel)).toHaveProperty("id", defaultId);
  });

  it("Should render with a label", () => {
    const label = "my-select-test";

    render(<FancySelect label={label} />);

    expect(screen.getByLabelText(label)).toBeTruthy();
  });

  it("Should be disabled when no options are passed", () => {
    const label = "my-select-test";

    render(<FancySelect label={label} />);

    expect(screen.getByLabelText(label)).toBeDisabled();
  });

  it("Should render with options", () => {
    const label = "my-select-test";

    render(
      <FancySelect
        label={label}
        options={[
          { label: "My Test", value: "1" },
          { label: "My Test 2", value: "3" },
        ]}
      />
    );

    expect(screen.getByText("My Test")).toHaveValue("1");
    expect(screen.getByText("My Test 2")).toHaveValue("3");
  });

  it("Should handle change", () => {
    const label = "my-select-test";
    const changeHandler = jest.fn();

    render(
      <form role="fancy-form">
        <FancySelect
          label={label}
          name="fancy-select"
          options={[{ label: "My Test", value: "1" }]}
          onChange={changeHandler}
        />
      </form>
    );

    fireEvent.change(screen.getByLabelText(label), {
      target: { value: "1" },
    });

    expect(changeHandler).toBeCalled();

    expect(screen.getByRole("fancy-form")).toHaveFormValues({
      "fancy-select": "1",
    });
  });
});
