import React from "react";
import layouts, { vertical } from "@dekk/master-slides/lib/layouts";
import { createStyledMaster, Master, Slot } from "@dekk/master";

export const Half = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
  </Master>
)`
    ${layouts.AB.leftRight};
    [data-slot='A'],
    [data-slot='B'] {
        ${vertical.center};
    }
`;

export const HalfVertical = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
  </Master>
)`
  ${layouts.AB.topBottom};
  [data-slot='A'] {
    ${vertical.end};
  }
  [data-slot='B'] {
    ${vertical.start};
  }
`;

/**
 * A collage slide. (two images)
 * @type {Slide}
 */
export const Collage = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
    <Slot name="C" />
  </Master>
)`
  ${layouts.ABC.right};
  [data-slot='A'] {
    ${vertical.start};
    box-sizing: border-box;
    padding: 0 2rem;
  }
`;

export const Grid = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
    <Slot name="C" />
    <Slot name="D" />
  </Master>
)`
  ${layouts.ABCD};
`;
