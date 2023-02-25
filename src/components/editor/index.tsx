import React, { useEffect, useState } from "react";
import {
  useEditor,
  EditorContent,
  getMarkRange,
  type Range,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import TitapImage from "@tiptap/extension-image";

import ToolBar from "./ToolBar/";

import GalleryModal, { type ImageSelectionResult } from "./GalleryModal";

const Editor = () => {
  const [selectionRange, setSelectionRange] = useState<Range>();
  const [showGallery, setShowGallery] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        autolink: false,
        linkOnPaste: false,
        openOnClick: false,
        HTMLAttributes: {
          target: "",
        },
      }),
      Placeholder.configure({
        placeholder: "Type Something",
      }),
      Youtube.configure({
        width: 840,
        height: 472.5,
        HTMLAttributes: {
          class: "mx-auto rounded",
        },
      }),
      // TitapImage.configure({
      //   HTMLAttributes: {
      //     class: "mx-auto",
      //   },
      // }),
    ],

    // editorProps: {
    //   handleClick(view, pos, event) {
    //     const { state } = view;
    //     const selectionRange = getMarkRange(
    //       state.doc.resolve(pos),
    //       state.schema.marks.link
    //     );
    //     if (selectionRange) setSelectionRange(selectionRange);
    //   },
    //   attributes: {
    //     class: "prose prose-lg focus:outline-none max-w-full mx-auto h-full",
    //   },
    // },
  });

  // const handleImageSelection = (result: ImageSelectionResult) => {
  //   editor
  //     ?.chain()
  //     .focus()
  //     .setImage({ src: result.src, alt: result.altText })
  //     .run();
  // };

  useEffect(() => {
    if (editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange);
    }
  }, [editor, selectionRange]);

  return (
    <>
      <div className="flex flex-col">
        <ToolBar
          editor={editor}
          onOpenImageClick={() => setShowGallery(true)}
        />
        <div className="my-3 h-[1px] w-full bg-slate-400" />

        <EditorContent editor={editor} />
      </div>

      {/* <GalleryModal
        visible={showGallery}
        onSelect={handleImageSelection}
        // onImageSelect={}
        onClose={() => setShowGallery(false)}
      /> */}
    </>
  );
};

export default Editor;
