import Input from "../../../components/ui/Input/Input";
import Button from "../../../components/ui/Button/Button";
import { useDispatch } from "react-redux";
import { setCategories } from "../recipeSlice";
import { useEffect, useState } from "react";

function Category({ label, value }) {
  const [inputValue, setInputValue] = useState("");

  // const result = useMemo(() => {
  //   [label, inputValue];
  // }, [label, inputValue]);

  // useEffect(() => {
  //   setInfo((cur) => {
  //     return { ...cur, result };
  //   });
  // }, [setInfo, inputValue, result]);

  useEffect(() => {
    if (inputValue === "") {
      setInputValue(value);
    }
  }, []);

  const dispatch = useDispatch();

  function handleFinishEdit() {
    dispatch(setCategories([label, inputValue]));
    setInputValue(inputValue);
  }

  return (
    <div>
      <label>{label}</label>

      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name={label}
      />

      <Button onClick={handleFinishEdit}>Finish</Button>
    </div>
  );
}

export default Category;
