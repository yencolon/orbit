// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../../common/common";

declare module "@kiwicom/orbit-components/lib/Timeline/TimelineStep";

export enum Status {
  success,
  warning,
  critical,
}

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly time: string;
  readonly step: string;
  readonly status?: Status;
}

declare const TimelineStep: React.FC<Props>;

export { TimelineStep as default };