export type FancySelectOption = {
  value: string;
  label: React.ReactNode;
};

export type FancySelectProps = {
  id?: string;
  label?: string;
  name?: string;
  disabled?: boolean;
  options?: FancySelectOption[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  selectProps?: Omit<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "onChange" | "children" | "id" | "name" | "disabled"
  >;
};

export function FancySelect({
  id = "fancy-select",
  label = "Open Select",
  name,
  disabled,
  onChange,
  options = [],
  selectProps = {},
}: FancySelectProps) {
  const isDisabled = disabled || !(options.length > 0);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        {...selectProps}
        id={id}
        name={name}
        disabled={isDisabled}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
