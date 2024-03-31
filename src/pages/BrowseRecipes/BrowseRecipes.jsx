//* react-hooks
import { useEffect, useRef, useState } from "react";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* browse-feature-components
import BrowseHistoryContainer from "../../features/Browse/BrowseHistoryContainer/BrowseHistoryContainer";
import FilterOptions from "../../features/Browse/FilterOptionsSection/FilterOptionsSection";
import BrowseFilterButton from "../../features/Browse/BrowseFilterButton/BrowseFilterButton";

//* components-UI
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import Logo from "../../components/ui/Logo/Logo";
import CardsDisplayContainer from "../../components/ui/CardsDisplayContainer/CardsDisplayContainer";

//* services
import {
  fetchFilteredRecipes,
  fetchRecipes,
} from "../../services/apiGetRecipes";

//* custom-hooks
import { useACollection } from "../../hooks/useACollection";

//* slice
import { addBrowseHistoryTag } from "../../features/Browse/browseSlice";

//* styles
import styles from "./BrowseRecipes.module.css";

function BrowseRecipes() {
  const [searchInput, setSearchInput] = useState("");
  const [tagToPlaceInInput, setTagToPlaceInInput] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const uid = useSelector((state) => state.user.user.uid);
  const recipes = useSelector((state) => state.recipe.recipes);

  const { documents: browseHistoryTags } = useACollection("browseHistoryTags");
  const tags = browseHistoryTags.filter((doc) => doc.uid === uid);

  const searchInputRef = useRef(null);
  const pageRef = useRef(null);
  //TODO: Check if this useRef is needed at all
  const allSelectedValues = useRef([]);

  const dispatch = useDispatch();

  const newHistoryTag = {
    input: searchInput,
    id: nanoid(),
    uid,
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput === "") return;

    dispatch(fetchRecipes(searchInput));
    setSearchInput("");

    if (!tags.find((tag) => tag.input === searchInput)) {
      setSearchInput("");
      dispatch(addBrowseHistoryTag(newHistoryTag));
    }
  }

  function handleFilter() {
    if (allSelectedValues.current.length === 0) return;

    dispatch(fetchFilteredRecipes(allSelectedValues.current));
    setIsFiltering(false);
  }

  function handleOptionChanger(e) {
    allSelectedValues.current = [...allSelectedValues.current, e];
  }

  function checkWhereClickedOnPage(e) {
    if (
      e.target.type === "search" ||
      e.target.name === "history_tag_delete_button"
    ) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    setSearchInput(tagToPlaceInInput);
  }, [tagToPlaceInInput]);

  return (
    <div
      ref={pageRef}
      onClick={checkWhereClickedOnPage}
      className={styles.container_main}
    >
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <h1>Browse</h1>
        <Logo />

        <div className={styles.search_input_and_button_container}>
          <Input
            ref={searchInputRef}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
            placeholder="Search for a recipe..."
            disabled={isFiltering}
            style={isFiltering ? { cursor: "not-allowed" } : {}}
          />

          <Button
            type="blue-hollow"
            disabled={isFiltering}
            style={isFiltering ? { cursor: "not-allowed" } : {}}
          >
            Search
          </Button>
        </div>

        {isSearching && (
          <BrowseHistoryContainer
            tags={tags}
            setTagToPlaceInInput={setTagToPlaceInInput}
          />
        )}
      </form>

      <div style={{ position: "relative" }}>
        {isFiltering && (
          <FilterOptions
            onFilter={handleFilter}
            onOptionChanger={handleOptionChanger}
          />
        )}

        <BrowseFilterButton
          isFiltering={isFiltering}
          setIsFiltering={setIsFiltering}
        />
      </div>

      <CardsDisplayContainer
        array={recipes}
        style={{ marginTop: "5rem" }}
        sortButton={["name", "calories"]}
      />
    </div>
  );
}

export default BrowseRecipes;
