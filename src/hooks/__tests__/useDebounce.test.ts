import { renderHook, act } from "@testing-library/react-hooks";
import useDebounce from "../useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("returns the initial value without delay", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });
  it("returns the updated value after the specified delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );
    rerender({ value: "updated", delay: 500 });
    expect(result.current).toBe("initial");
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe("updated");
  });
});
