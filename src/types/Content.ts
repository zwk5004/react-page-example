import { Value } from "@react-page/editor";

export type Content = {
  id: number;
  name: string;
  tabTitle: string;
  status: string;
  order: number;
  content: Value;
};
