import { useContext, useState } from "react";
import Results from "./Results";
import useBreeds from "./useBreeds";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import AdoptPetContext from "./AdoptPetContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreeds(animal);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const results = useQuery(["search", requestParams], fetchSearch);
  const [adoptedPet] = useContext(AdoptPetContext);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="my-0 mx-auto grid w-11/12 grid-cols-2 gap-4">
      <form
        className="mb-10 rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          setRequestParams({
            location: formData.get("location") || "",
            animal: formData.get("animal") || "",
            breed: formData.get("breed") || "",
          });
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            className="search-input"
            placeholder="Location..."
          ></input>
        </label>
        <label htmlFor="animal">
          {" "}
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            className="search-input"
            onChange={(event) => {
              setAnimal(event.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          {" "}
          Breed
          <select
            className="search-input grayed-out-disabled"
            id="breed"
            name="breed"
            disabled={breeds.length === 0}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
