"use client";
import { useEffect, useRef, useState } from "react";

import { BiHeading, BiParagraph, BiImage, BiListOl } from "react-icons/bi";
import {
  RiFontSize,
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
} from "react-icons/ri";

export default function TextEditor(props) {
  const [text, setText] = useState("");
  const [change, setChange] = useState(1);
  const [activeH, setActiveH] = useState(false);
  const [activeP, setActiveP] = useState(false);
  const [listActive, setListActive] = useState(false);
  const [textAlign, setTextAlign] = useState("left");
  const [size, setSize] = useState(14);
  const [uploadedImage, setUploadedImage] = useState(null);
  const post = useRef(null);

  const textareaRef = useRef(null);

  // input <p></p> tag

  useEffect(() => {
    if (textareaRef.current?.value === "") {
      textareaRef.current.value = "<p> " + textareaRef.current.value + " </p>";
      const cursorPosition = 4; // Position the cursor after the opening <p> tag
      textareaRef.current.setSelectionRange(cursorPosition, cursorPosition);
      textareaRef.current.focus();
    }
  }, []);

  const handelH1 = () => {
    const selectedText = textareaRef.current?.value.substring(
      textareaRef.current?.selectionStart,
      textareaRef.current?.selectionEnd
    );
    if (selectedText !== "") {
      const heading =
        `<h1 style='font-size:${size}px; text-align:${textAlign};  font-weight: 700;'>` +
        selectedText +
        "</h1>";
      const start = textareaRef.current?.selectionStart;
      const end = textareaRef.current?.selectionEnd;
      const newContent =
        textareaRef.current?.value.substring(0, start) +
        heading +
        textareaRef.current?.value.substring(end);
      if (textareaRef.current?.value) {
        textareaRef.current.value = newContent;
      }
    } else {
      let newContent;
      if (activeH) {
        newContent = textareaRef.current.value + "</h1>";
        setActiveH(false);
      } else {
        newContent =
          textareaRef.current.value +
          `<h1 style='font-size:${size}px; text-align:${textAlign} ;  font-weight: 700;'>`;
        setActiveH(true);
      }

      if (textareaRef.current?.value) {
        textareaRef.current.value = newContent;
      }
    }
    setChange(change + 1);
  };
  const handelP = () => {
    const selectedText = textareaRef.current?.value.substring(
      textareaRef.current?.selectionStart,
      textareaRef.current?.selectionEnd
    );
    if (selectedText !== "") {
      const text =
        `<p style='font-size:${size}px;  text-align:${textAlign};  font-weight: 300;'>` +
        selectedText +
        "</p>";
      const start = textareaRef.current?.selectionStart;
      const end = textareaRef.current?.selectionEnd;
      const newContent =
        textareaRef.current?.value.substring(0, start) +
        text +
        textareaRef.current?.value.substring(end);
      if (textareaRef.current?.value) {
        textareaRef.current.value = newContent;
      }
    } else {
      let newContent;
      if (activeP) {
        newContent = textareaRef.current.value + "</p>";
        setActiveP(false);
      } else {
        newContent =
          textareaRef.current.value +
          ` <p style='font-size:${size}px; text-align:${textAlign} ; font-weight: 300;'>`;
        setActiveP(true);
      }

      if (textareaRef.current?.value) {
        textareaRef.current.value = newContent;
      }
    }
    setChange(change + 1);
  };

  // upload image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };
    reader.readAsDataURL(file);
    console.log(uploadedImage);
    textareaRef.current.value =
      textareaRef.current.value +
      `<img src=${uploadedImage} alt="" style="width:95%; max-width: 700px; margin:auto;" /> `;
    setChange(change + 1);
  };

  //  list
  const handleListOl = () => {
    if (listActive) {
      textareaRef.current.value = textareaRef.current.value + "</li></ul> ";
      setListActive(false);
      setChange(change + 1);
    } else {
      textareaRef.current.value = textareaRef.current.value + "<ul> <li>";
      setListActive(true);
    }
  };
  const handleKeyDown = (event) => {
    if (listActive) {
      console.log(event);
      if (event.key === "Enter") {
        event.preventDefault();
        textareaRef.current.value = textareaRef.current.value + "\n</li><li>";
      }
    } else {
      if (event.key === "Enter") {
        event.preventDefault();
        textareaRef.current.value = textareaRef.current.value + "\n<br>";
      }
    }
  };

  const handleTextareaChange = (event) => {
    if (event) {
      const newContentShow = event.target.value;
      setText(encodeHtmlEntities(newContentShow));
    } else {
      setText(encodeHtmlEntities(textareaRef.current?.value));
    }
  };
  const encodeHtmlEntities = (inputText) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = inputText;
    return textArea.value;
  };

  useEffect(() => {
    handleTextareaChange();
  }, [change]);

  const sendDataToParent = (e) => {
    e.preventDefault();

    const childData = post.current.innerHTML;
    props.Data(childData);
    props.upload(true);
  };

  return (
    <div>
      <div className="  max-w-3xl mx-auto">
        <form onSubmit={sendDataToParent}>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                <div className="flex items-center space-x-1 sm:pr-4">
                  <button
                    onClick={handelH1}
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <BiHeading />
                  </button>
                  <button
                    onClick={handelP}
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <BiParagraph />
                  </button>
                  <div className=" flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-400 dark:text-gray-400 dark:hover:text-gray-400 dark:hover:bg-gray-300">
                    <RiFontSize />
                    <input
                      type="number"
                      defaultValue={14}
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                      className=" w-14 border-stone-200 text-center border rounded-md"
                    ></input>
                  </div>
                  <div className=" relative p-2 fill-none text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <input
                      type="file"
                      id="imgFile"
                      className=" opacity-0 absolute w-8"
                      onChange={handleImageUpload}
                    />

                    <BiImage htmlFor="imgFile" />
                  </div>
                </div>
                <div
                  className={`"flex flex-wrap items-center space-x-1 sm:pl-4"`}
                >
                  <button
                    onClick={handleListOl}
                    type="button"
                    className={`${
                      listActive ? "bg-gray-200 " : ""
                    }p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 `}
                  >
                    <BiListOl />
                  </button>
                  <button
                    onClick={() => {
                      setTextAlign("left");
                    }}
                    type="button"
                    className={`${
                      textAlign === "left" ? "bg-gray-200 " : ""
                    }p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
                  >
                    <RiAlignLeft />
                  </button>
                  <button
                    onClick={() => {
                      setTextAlign("center");
                    }}
                    type="button"
                    className={`${
                      textAlign === "center" ? "bg-gray-200 " : ""
                    }p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
                  >
                    <RiAlignCenter />
                  </button>
                  <button
                    onClick={() => {
                      setTextAlign("right");
                    }}
                    type="button"
                    className={`${
                      textAlign === "right" ? "bg-gray-200 " : ""
                    }p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
                  >
                    <RiAlignRight />
                  </button>
                </div>
              </div>
              <button
                type="button"
                data-tooltip-target="tooltip-fullscreen"
                className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                dsds
              </button>
              <div
                id="tooltip-fullscreen"
                role="tooltip"
                className="inline-block invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Show full screen
                <div
                  className="tooltip-arrow text-black z-40"
                  data-popper-arrow
                >
                  dsd
                </div>
              </div>
            </div>

            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">
                Publish post
              </label>
              <textarea
                id="editor"
                ref={textareaRef}
                rows="8"
                onKeyDown={handleKeyDown}
                onChange={handleTextareaChange}
                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an article..."
                required
              ></textarea>

              <div
                dangerouslySetInnerHTML={{ __html: text }}
                contentEditable={false}
                style={{
                  border: "1px solid #ccc",
                  minHeight: "200px",
                  padding: "8px",
                }}
                ref={post}
                className=" dark:text-white"
              ></div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </form>
      </div>
    </div>
  );
}
