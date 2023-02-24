import React, { type FC } from "react";
import { Editor } from "@tiptap/react";
import {
  BsTypeStrikethrough,
  BsBraces,
  BsCode,
  BsListOl,
  BsListUl,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsImageFill,
  BsLink45Deg,
  BsYoutube,
} from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";
import { getFocusedEditor } from "./EditorUtils";
import DropdownOptions from "src/components/common/DropdownOptions";
import Button from "./Button";
import InsertLink from "../Link/InsertLink";
import { type linkOption } from "../Link/LinkForm";
import EmbedYoutube from "./EmbedYoutube";
interface Props {
  editor: Editor | null;
  onOpenImageClick?(): void;
}

const ToolBar: FC<Props> = ({
  editor,
  onOpenImageClick,
}): JSX.Element | null => {
  if (!editor) return null;

  const options = [
    {
      label: "Paragraph",
      onClick: () => {
        getFocusedEditor(editor).setParagraph().run();
      },
    },
    {
      label: "Heading 1",
      onClick: () => {
        getFocusedEditor(editor).toggleHeading({ level: 1 }).run();
      },
    },
    {
      label: "Heading 2",
      onClick: () => {
        getFocusedEditor(editor).toggleHeading({ level: 2 }).run();
      },
    },
    {
      label: "Heading 3",
      onClick: () => {
        getFocusedEditor(editor).toggleHeading({ level: 3 }).run();
      },
    },
  ];
  const getLabel = (): string => {
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";
    return "Paragraph";
  };

  const handleLinkSubmit = ({ url, openInNewTab }: linkOption) => {
    const { commands } = editor;
    if (openInNewTab) {
      commands.setLink({ href: url, target: "_blank" });
    } else {
      commands.setLink({ href: url });
    }
  };

  const handleEmbedYoutube = (url: string) => {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };
  const Head = () => {
    return (
      <div className="flex items-center space-x-2 text-slate-800">
        <p>{getLabel()}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    );
  };
  return (
    <div className="flex items-center">
      <DropdownOptions options={options} head={<Head />} />

      <div className="mx-8 h-4 w-[1px] bg-slate-400 dark:bg-slate-100" />
      <div className="flex items-center space-x-3">
        <Button
          active={editor.isActive("bold")}
          onClick={() => getFocusedEditor(editor).toggleBold().run()}
        >
          <BsTypeBold />
        </Button>
        <Button
          active={editor.isActive("italic")}
          onClick={() => getFocusedEditor(editor).toggleItalic().run()}
        >
          <BsTypeItalic />
        </Button>
        <Button
          active={editor.isActive("underline")}
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        >
          <BsTypeUnderline />
        </Button>
        <Button
          active={editor.isActive("strike")}
          onClick={() => getFocusedEditor(editor).toggleStrike().run()}
        >
          <BsTypeStrikethrough />
        </Button>
      </div>

      <div className="mx-8 h-4 w-[1px] bg-slate-400 dark:bg-slate-100" />
      <div className="flex items-center space-x-3">
        <Button
          active={editor.isActive("blockQuote")}
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL />
        </Button>
        <Button
          active={editor.isActive("code")}
          onClick={() => getFocusedEditor(editor).toggleCode().run()}
        >
          <BsCode />
        </Button>
        <Button
          active={editor.isActive("codeBlock")}
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces />
        </Button>

        <InsertLink onSubmit={handleLinkSubmit} />
        <Button
          active={editor.isActive("orderedList")}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <BsListOl />
        </Button>
        <Button
          active={editor.isActive("bold")}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <BsListUl />
        </Button>
      </div>
      <div className="mx-8 h-4 w-[1px] bg-slate-400 dark:bg-slate-100" />
      <div className="flex items-center space-x-3">
        <EmbedYoutube onSubmit={handleEmbedYoutube} />
        <Button onClick={onOpenImageClick}>
          <BsImageFill />
        </Button>
      </div>
    </div>
  );
};

export default ToolBar;
