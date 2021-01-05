import React, { ReactElement } from "react";

import Editor, { Value } from "@react-page/editor";

// The rich text area plugin
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import { demo, demo2 } from "./Simple-default-state";
import { Button } from "@material-ui/core";

// const cellPlugins = [slate(), image];

type PageEditorProps = {
  name: string;
  editorValue: Value;
  setEditorValue: (value: Value) => void;
};

const defaultSlate = slate(def => ({
  ...def,
  plugins: {
    // this will pull in all predefined plugins
    ...def.plugins
    // you can also add custom plugins. The namespace `custom` is just for organizing plugins
  }
}));

const cellPlugins = [defaultSlate];

export const PageEditor = (): ReactElement => {
  const [editorValue, setEditorValue] = React.useState<Value>(demo);
  return (
    <div style={{ color: "white", paddingBottom: 10 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setEditorValue(demo2)}
      >
        Switch
      </Button>
      <Editor
        cellPlugins={cellPlugins}
        value={editorValue}
        onChange={setEditorValue}
      />
    </div>
  );
};
