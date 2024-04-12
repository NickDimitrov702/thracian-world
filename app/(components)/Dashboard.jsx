"use client";
// Check what dynamic is from nex/dynamic
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
// import React, { useState } from "react";
import QuillEdditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCallback, useState } from "react";

import { Editor, Transforms, createEditor, Element } from "slate";
import { Slate, Editable, withReact } from "slate-react";
// From here the Admin will be able to make CRUD operation with the data base, change the website visuals and update news + Modules (To be created)

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

function Dashboard() {
  //  creating a slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Define custom styles

  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/ProjectsTest", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Faild to create a Blog");
    }

    router.refresh();
    router.push("/AccountPage");
  };

  const startingProjectData = {
    projectTitle: "",
    shortDescription: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "",
    logo: "",
    x_social_link: "",
  };

  const [formData, setFormData] = useState(startingProjectData);

  return (
    <div className="max-h-full max-w-[800px] w-full h-full bg-backgroundMain m-auto rounded-[25px] text-center ms:w-[650px]">
      <p className="p-1 font-bold uppercase">Create Blog Post</p>
      {/* Create a Blog Work-Space */}
      <form onSubmit={handleSumbit}>
        <div className="flex flex-col max-w-[700px] w-full justify-center items-start m-auto p-2">
          <label className="p-2" htmlFor="">
            Title
          </label>
          <input
            onChange={handleChange}
            className="p-2 m-2 md:m-0 max-w-[1000px] max-h-[450px] h-[30px] w-full  text-black border-none rounded-lg focus:outline-none"
            type="text"
            name="projectTitle"
            id="projectTitle"
            value={formData.projectTitle}
            required={true}
          />
          <label className="p-2">Logo Image</label>
          <input
            onChange={handleChange}
            className="p-2 m-2 md:m-0 max-w-[1000px] max-h-[450px] h-[30px] w-full  text-black border-none rounded-lg focus:outline-none"
            type="text"
            name="logo"
            id="logo"
            value={formData.logo}
            required={true}
          />
          <input
            onChange={handleChange}
            className="p-2 m-2 md:m-0 md:mt-1 max-w-[1000px] max-h-[450px] h-[30px] w-full  text-black border-none rounded-lg focus:outline-none"
            type="text"
            name="x_social_link"
            id="x_social_link"
            value={formData.x_social_link}
            required={true}
          />
          <textarea
            onChange={handleChange}
            className="max-w-[1000px] max-h-full w-full p-2 m-2 md:m-0 md:mt-1 rounded-lg text-black focus:outline-none"
            placeholder="Short Description"
            name="shortDescription"
            id="shortDescription"
            cols="30"
            rows="10"
            value={formData.shortDescription}
          ></textarea>
          <textarea
            onChange={handleChange}
            className="max-w-[1000px] max-h-full w-full p-2 m-2 md:m-0 md:mt-1 rounded-lg text-black focus:outline-none"
            placeholder="Description"
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={formData.description}
          ></textarea>
          <Slate editor={editor} initialValue={initialValue}>
            <Editable
              editor={editor}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) {
                  return;
                }

                switch (event.key) {
                  case "`": {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                    break;
                  }

                  case "b": {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                    break;
                  }
                }
              }}
            />
          </Slate>
          {/* List of Categories to select from the available categories in the webpage */}
          <input
            type="submit"
            value={"Create Blog"}
            className="cursor-pointer bg-backgroundMain p-2 m-2 border max-w-[150px] rounded-lg"
          ></input>
        </div>
      </form>
    </div>
  );
}

const CustomEditor = {
  isBoldMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in paragrah." }],
  },
];

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};
export default Dashboard;

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};
