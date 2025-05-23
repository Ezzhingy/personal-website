"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";

interface OptionType {
  value: string;
  label: string;
}

export default function Footer() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const versionOptions = [
    { value: "new", label: "Version: Minimal (2023)" },
    {
      value: "old",
      label: "Version: Pixels (2022)",
    },
  ];

  const onVersionChange = (option: OptionType) => {
    switch (option.value) {
      case "new":
        window.location.href = "https://eugenezhang.me/";
        break;
      case "old":
        window.location.href = "https://old-personal-website-phi.vercel.app/";
        break;
    }
  };

  return (
    <div className="max-w-2xl mx-auto pt-[120px] pb-[120px] text-darkBg dark:text-lightBg flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
        <div className="flex flex-col gap-3 mx-10 items-start">
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/eugene-ezzhang"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark"
                    ? "/lightlinkedin.svg"
                    : "/darklinkedin.svg"
                }
                width={40}
                height={40}
                alt="LinkedIn link"
                className="cursor-pointer transition-transform hover:scale-110"
              />
            </Link>
            <Link
              href="https://github.com/Ezzhingy"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark"
                    ? "/lightgithub.svg"
                    : "/darkgithub.svg"
                }
                width={40}
                height={40}
                alt="GitHub link"
                className="cursor-pointer transition-transform hover:scale-110"
              />
            </Link>
            <Link
              href="mailto:e4zhang@uwaterloo.ca"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark" ? "/lightemail.svg" : "/darkemail.svg"
                }
                width={40}
                height={40}
                alt="Email link"
                className="cursor-pointer transition-transform hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <div className="flex mx-10 items-start">
          <Select
            aria-label="Version selector"
            options={versionOptions}
            onChange={onVersionChange}
            defaultValue={versionOptions[0]}
            isSearchable={false}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor:
                  currentTheme === "dark" ? "#313244" : "#dce0e8",
                borderColor: currentTheme === "dark" ? "#dce0e8" : "#313244",
                ":hover": {
                  borderColor: currentTheme === "dark" ? "#dce0e8" : "#313244",
                  cursor: "pointer",
                },
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                color: currentTheme === "dark" ? "#dce0e8" : "#313244",
                ":hover": {
                  color: currentTheme === "dark" ? "#dce0e8" : "#313244",
                },
              }),
              indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                backgroundColor:
                  currentTheme === "dark" ? "#dce0e8" : "#313244",
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: currentTheme === "dark" ? "#dce0e8" : "#313244",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor:
                  currentTheme === "dark" ? "#313244" : "#dce0e8",
              }),
              option: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                backgroundColor: isFocused
                  ? currentTheme === "dark"
                    ? "#dce0e8"
                    : "#313244"
                  : currentTheme === "dark"
                  ? "#313244"
                  : "#dce0e8",
                color: isFocused
                  ? currentTheme === "dark"
                    ? "#313244"
                    : "#dce0e8"
                  : currentTheme === "dark"
                  ? "#dce0e8"
                  : "#313244",
                cursor: "pointer",
              }),
            }}
          />
        </div>
      </div>
      <div className="mx-10">
        <p>Copyright © Ezzhingy 2025</p>
      </div>
    </div>
  );
}
