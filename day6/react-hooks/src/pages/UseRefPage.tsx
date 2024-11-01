import { useRef, useState } from "react";

const UseRefPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputan, setInputan] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    console.log(inputRef);
    if (inputRef.current) {
      setInputan(inputRef.current?.value);
    }
  };

  const handleUpload = () => {
    inputFileRef.current?.click();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSave}>Save</button>
      <h1>{inputan}</h1>
      <br />
      <input type="text" onChange={(e) => setUsername(e.target.value)} />{" "}
      {/* Lebih sering dipakai */}
      <h1>{username}</h1>
      <br />
      <input type="file" style={{ display: "none" }} ref={inputFileRef} />
      <button onClick={handleUpload}>Upload FIle</button>
    </div>
  );
};

export default UseRefPage;
