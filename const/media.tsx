import { generateMedia, MediaGenerator } from "styled-media-query";
import { wideContents, contents, tightContents } from "@/const/breakpoint";

const breakpoints = {
  large: wideContents + "px",
  medium: contents + "px",
  small: tightContents + "px",
};

type LessThan = MediaGenerator<typeof breakpoints, any>["lessThan"];

const customMedia = generateMedia(breakpoints);

type RuleFuncLessThan = (
  ...args: Parameters<ReturnType<LessThan>>
) => ReturnType<ReturnType<LessThan>>;

type Rules = {
  large: RuleFuncLessThan;
  medium: RuleFuncLessThan;
  small: RuleFuncLessThan;
};

const rules: Rules = {
  large: (...args) => customMedia.lessThan("large")(...args),
  medium: (...args) => customMedia.lessThan("medium")(...args),
  small: (...args) => customMedia.lessThan("small")(...args),
};

export default rules;