import { Button } from "@mui/material";
import React from "react";
import { getAntonyms, getHomophones, getSynonyms } from "../../../api";
import { MuseResponseModel } from "../../../interfaces/common.model";
import { LoadingIcon } from "../../../assets/icons";
import useApiCallhook from "../../../hooks/useApiCallhook";

enum ActionTypes {
  ANTONYMS = "ANTONYMS",
  SYNONYMS = "SYNONYMS",
  HOMOPHONES = "HOMOPHONES",
}

const WordRel: React.FC = () => {
  const [word, setWord] = React.useState("");
  const { data: museData, loading, error, fetch } = useApiCallhook();

  const handleWordChange = (newWord: string) => {
    setWord(newWord);
  };

  const handleAction = (actionType: string) => {
    switch (actionType) {
      case ActionTypes.ANTONYMS:
        fetch(getAntonyms, [word]);
        break;
      case ActionTypes.SYNONYMS:
        fetch(getSynonyms, [word]);
        break;
      case ActionTypes.HOMOPHONES:
        fetch(getHomophones, [word]);
        break;
    }
  };

  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="word-rel">Enter Your Word</label>
      <input
        type="text"
        id="word-rel"
        value={word}
        onChange={(e) => handleWordChange(e.target.value)}
        className="border border-gray-400 rounded-lg shadow-sm p-1 focus:outline-none focus:border-gray-700"
      />

      <div className="flex items-center gap-2">
        <Button
          variant="contained"
          className="!bg-gray-600 min-w-28 px-4"
          onClick={() => handleAction(ActionTypes.ANTONYMS)}
          disabled={word.length === 0}
        >
          Antonyms
        </Button>
        <Button
          variant="contained"
          className="!bg-gray-600 min-w-28 px-4"
          onClick={() => handleAction(ActionTypes.SYNONYMS)}
          disabled={word.length === 0}
        >
          Synonyms
        </Button>
        <Button
          variant="contained"
          className="!bg-gray-600 min-w-28 px-4"
          onClick={() => handleAction(ActionTypes.HOMOPHONES)}
          disabled={word.length === 0}
        >
          Homophones
        </Button>
      </div>

      <div className="flex items-center justify-center my-4 min-h-[20dvh] max-h-[45dvh] overflow-auto">
        {loading ? (
          <LoadingIcon />
        ) : (
          <ul className="list-disc pl-5">
            {museData?.map((elem: MuseResponseModel, index: number) => (
              <li key={`${elem.word}-${index}`}>
                <span className="flex items-center gap-6">
                  <p className="font-medium">{elem.word}</p>
                  <p className="text-sm text-gray-400">({elem.score})</p>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default WordRel;
