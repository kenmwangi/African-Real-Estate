import { type FC, useCallback } from "react";
import { BsBoxArrowUpRight, BsPencilSquare } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";
import { BubbleMenu, type Editor } from "@tiptap/react";

interface Props {
  editor: Editor;
}

const EditLink: FC<Props> = ({ editor }): JSX.Element => {
  const handleOnLinkOpenClick = useCallback(() => {
    const { href } = editor.getAttributes("link");

    if (href) {
      window.open(href, "_blank");
    }
  }, [editor]);

  const handleLinkEditClick = () => {};

  const handleUnlinkClick = () => {
    editor.commands.unsetLink();
  };

  return (
    <BubbleMenu
      shouldShow={({ editor }) => editor.isActive("link")}
      editor={editor}
    >
      <div className="bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary shadow-secondary-dark z-50 flex items-center space-x-6 rounded p-3 shadow-md">
        <button onClick={handleOnLinkOpenClick}>
          <BsBoxArrowUpRight />
        </button>

        <button onClick={handleLinkEditClick}>
          <BsPencilSquare />
        </button>

        <button onClick={handleUnlinkClick}>
          <BiUnlink />
        </button>
      </div>
    </BubbleMenu>
  );
};

export default EditLink;
