import React, { useState } from "react";
import PrimaryBtn from "../btn/PrimaryBtn";
import { BorderBeam } from "../lightswind/border-beam";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../lightswind/select";

const UpdateCard = ({
  title,
  subtitle,
  onSubmit,
  isSelect,
  selectOptions,
  selectTitle,
  placeholder,
  isLoading,
  buttonTitle,
  inputList = [],
}) => {
  const [formData, setFormData] = useState(() => {
    const initialData = {
      select: "",
      ...inputList.reduce((acc, input) => {
        acc[input.key] = "";
        return acc;
      }, {}),
    };
    if (inputList.length === 0 && placeholder) {
      initialData.value = "";
    }
    return initialData;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="relative p-1 rounded-xl overflow-hidden bg-[#FFE4761a] border border-[#FFE47666]">
      <BorderBeam
        colorFrom="#FFE476"
        colorTo="#B9AA57"
        size={100}
        duration={10}
        borderThickness={1}
        beamBorderRadius={12}
      />
      <form
        onSubmit={handleSubmit}
        className="relative p-5 rounded-md z-10 bg-[#0A0A0A] flex flex-col gap-4 h-full"
      >
        <h2 className="text-[#FFE476] text-[16px] lg:text-[18px] font-semibold">
          {title}
        </h2>
        {subtitle && <div className="text-[#FFE476] text-[12px]"> {subtitle} </div>}

        {inputList.map((input) => (
          <div key={input.key} className="w-full">
            <input
              type={input.type || "text"}
              placeholder={input.label}
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, [input.key]: e.target.value })
              }
              value={formData[input.key] || ""}
              className="w-full h-[50px] bg-[#1A1A1A] border border-[#FFE47633] text-[#FAFAFB] text-[14px] rounded-lg focus:outline-none focus:border-[#FFE476] px-4 placeholder:text-[#B2B6BF] transition-colors"
              required
            />
          </div>
        ))}

        {placeholder && inputList.length === 0 && (
          <div className="w-full">
            <input
              type="text"
              placeholder={placeholder}
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, value: e.target.value })
              }
              value={formData.value || ""}
              className="w-full h-[50px] bg-[#1A1A1A] border border-[#FFE47633] text-[#FAFAFB] text-[14px] rounded-lg focus:outline-none focus:border-[#FFE476] px-4 placeholder:text-[#B2B6BF] transition-colors"
              required
            />
          </div>
        )}

        {isSelect && (
          <div className="w-full">
            <label className="text-[#C1C4CC] text-[14px] font-medium mb-2 block">
              {selectTitle}
            </label>
            <Select
              value={formData.select}
              onValueChange={(value) =>
                setFormData({ ...formData, select: value })
              }
            >
              <SelectTrigger
                className="w-full h-[50px] bg-[#1A1A1A] border border-[#FFE47633] text-[14px] rounded-lg focus:border-[#FFE476] px-4 hover:border-[#FFE47666] transition-colors [&>span]:text-white"
              >
                <SelectValue
                  placeholder="Select an option"
                />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border border-[#FFE47666] rounded-lg">
                {selectOptions?.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.value}
                    className={`text-[14px] hover:bg-[#FFE47622] focus:bg-[#FFE47622] cursor-pointer ${formData.select === option.value
                      ? "text-[#FFE476] font-semibold bg-[#FFE47622]"
                      : "text-[#FAFAFB]"
                      }`}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <PrimaryBtn
          disabled={!!isLoading}
          type="submit"
          className="w-full bg-[#FFE476] hover:bg-[#D49F12] transition-colors mt-auto"
          textClassName="!text-[#0A0A0A] font-semibold"
          title={buttonTitle ? buttonTitle : "Update"}
        />
      </form>
    </div>
  );
};

export default UpdateCard;
