"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Material } from "@/components/ui/material-1";
import { Button } from "@/components/ui/button-1";

const SearchIcon = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    className="fill-[#143D2B]/60"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
    />
  </svg>
);

const ArrowBottomIcon = ({ className }: { className?: string }) => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    className={clsx("fill-[#143D2B]/70", className)}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-[#143D2B]"
  >
    <path
      d="M4 12.6111L8.92308 17.5L20 6.5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
    />
  </svg>
);

interface Option {
  label: string;
  value: string;
}

const ComboboxContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder: string;
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  value: string;
  onChangeValue: (value: string) => void;
  disabled?: boolean;
  errored?: boolean;
  size?: "small" | "medium" | "large";
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  inputRef?: React.RefObject<HTMLInputElement | null>;
} | null>(null);

interface ComboboxProps {
  placeholder?: string;
  value?: string | null;
  onChange?: (value: string) => void;
  disabled?: boolean;
  errored?: boolean;
  width?: number | string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Combobox = ({
  placeholder = "Search...",
  value,
  onChange,
  disabled = false,
  errored = false,
  width,
  size = "medium",
  children,
}: ComboboxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [_value, set_value] = useState<string>(value || "");
  const [options, setOptions] = useState<Option[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined && value !== null) {
      set_value(value);
      const match = options.find((opt) => opt.value === value);
      if (match) {
        setInputValue(match.label);
      }
    }
  }, [value, options]);

  const onChangeInputValue = (val: string) => {
    setInputValue(val);
  };

  const onChangeValue = (val: string) => {
    set_value(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <ComboboxContext.Provider
      value={{
        isOpen,
        setIsOpen,
        placeholder,
        inputValue,
        onChangeInputValue,
        disabled,
        errored,
        size,
        value: _value,
        onChangeValue,
        options,
        setOptions,
        inputRef,
      }}
    >
      <div
        className="relative w-full inline-block text-sm font-sans"
        style={typeof width === "number" ? { width } : width ? { width } : undefined}
      >
        {children}
      </div>
    </ComboboxContext.Provider>
  );
};

const ComboboxInput = () => {
  const context = useContext(ComboboxContext);
  const [_errored, set_errored] = useState<boolean>(context?.errored || false);

  const onFocus = () => {
    context?.setIsOpen(true);
    set_errored(false);
  };

  const onBlur = () => {
    // Delay blur slightly so option clicks register cleanly
    setTimeout(() => {
      context?.setIsOpen(false);
      const currentOption = context?.options.find((option) => option.value === context.value);
      if (currentOption) {
        context?.onChangeInputValue(currentOption.label);
      }
      set_errored(context?.errored || false);
    }, 120);
  };

  const onCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    context?.onChangeInputValue("");
    context?.onChangeValue("");
    context?.inputRef?.current?.focus();
  };

  useEffect(() => {
    const currentOption = context?.options.find((option) => option.value === context.value);
    if (currentOption) {
      context?.onChangeInputValue(currentOption.label);
    }
  }, [context?.options, context?.value]);

  useEffect(() => {
    set_errored(context?.errored || false);
  }, [context?.errored]);

  return (
    <Input
      prefix={<SearchIcon />}
      prefixStyling={false}
      suffix={
        context?.inputValue ? (
          <Button
            variant="unstyled"
            svgOnly
            className="fill-slate-600 hover:fill-red-600 -mr-1"
            onClick={onCloseClick}
          >
            <CloseIcon className={clsx(context?.errored && "fill-red-900")} />
          </Button>
        ) : (
          <ArrowBottomIcon
            className={clsx(
              "duration-200 transition-transform",
              context?.isOpen && "rotate-180"
            )}
          />
        )
      }
      suffixStyling={context?.disabled ? "cursor-not-allowed" : "cursor-pointer"}
      placeholder={context?.placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      value={context?.inputValue}
      onChange={context?.onChangeInputValue}
      disabled={context?.disabled}
      error={_errored}
      size={context?.size}
      ref={context?.inputRef}
      className={clsx(context?.errored && "text-red-900")}
    />
  );
};

const ComboboxList = ({
  children,
  maxWidth,
  emptyMessage = "No results",
}: {
  children?: React.ReactNode;
  maxWidth?: number;
  emptyMessage?: string;
}) => {
  const context = useContext(ComboboxContext);
  const [position, setPosition] = useState<{ top?: number | string; bottom?: number | string }>();
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (React.isValidElement<ComboboxOptionProps>(child)) {
      const childText = child.props.children?.toString().toLowerCase() || "";
      const search = context?.inputValue?.toLowerCase() || "";
      return childText.includes(search);
    }
    return false;
  });

  useEffect(() => {
    const options = React.Children.toArray(children)
      .map((child) => {
        if (React.isValidElement<ComboboxOptionProps>(child)) {
          return {
            value: child.props.value,
            label: child.props.children?.toString() || "",
          };
        }
        return undefined;
      })
      .filter((option): option is Option => option !== undefined && option.label !== "");
    context?.setOptions(options);
  }, [children]);

  useEffect(() => {
    const getPosition = () => {
      if (context?.isOpen && context.inputRef?.current && menuRef.current) {
        const inputContainer = context.inputRef.current.closest(".relative") || context.inputRef.current;
        const rect = inputContainer.getBoundingClientRect();
        const menuHeight = menuRef.current.offsetHeight || 180;
        const viewportHeight = window.innerHeight;

        if (rect.bottom + menuHeight + 10 <= viewportHeight) {
          setPosition({ top: "calc(100% + 6px)", bottom: undefined });
        } else if (rect.top - menuHeight - 10 >= 0) {
          setPosition({ bottom: "calc(100% + 6px)", top: undefined });
        } else {
          setPosition({ top: "calc(100% + 6px)", bottom: undefined });
        }
      }
    };

    getPosition();

    window.addEventListener("resize", getPosition);
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("resize", getPosition);
      window.removeEventListener("scroll", getPosition);
    };
  }, [context?.isOpen]);

  return (
    <Material
      ref={menuRef}
      type="menu"
      className={clsx(
        "absolute w-full z-50 left-0 max-h-60 overflow-y-auto border-2 border-[#143D2B] shadow-2xl rounded-2xl bg-white",
        context?.isOpen && "opacity-100",
        !context?.isOpen && "opacity-0 pointer-events-none duration-150"
      )}
      style={{ maxWidth, ...position }}
    >
      <ul className="p-2 space-y-1">
        {filteredChildren.length > 0 ? (
          filteredChildren
        ) : (
          <li
            className={clsx(
              "flex justify-center items-center p-3 text-[#143D2B]/70 font-semibold",
              context?.size === "large" ? "text-base" : "text-xs sm:text-sm"
            )}
          >
            {emptyMessage}
          </li>
        )}
      </ul>
    </Material>
  );
};

interface ComboboxOptionProps {
  value: string;
  children: React.ReactNode;
}

const ComboboxOption = ({ value, children }: ComboboxOptionProps) => {
  const context = useContext(ComboboxContext);

  const onClick = () => {
    context?.onChangeValue(value);
    context?.onChangeInputValue(children?.toString() || "");
    context?.setIsOpen(false);
  };

  return (
    <li
      className={clsx(
        "flex justify-between items-center gap-2 cursor-pointer px-3 py-2.5 w-full rounded-xl hover:bg-slate-100 active:bg-slate-200 font-sans text-[#143D2B] font-bold fill-[#143D2B] transition-colors",
        context?.size === "large" ? "text-base" : "text-xs sm:text-sm"
      )}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      <span className="leading-snug">{children}</span>
      {value === context?.value && <CheckIcon />}
    </li>
  );
};

Combobox.Input = ComboboxInput;
Combobox.List = ComboboxList;
Combobox.Option = ComboboxOption;

export default Combobox;
