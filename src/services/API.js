import axios from "axios";
const REST_API_KEY = "cRW7BdT0XgfioeASkdemk6";
const APP_DB_ID = "ddUmoXbYbcHykqW6lcSK8a";
const ENTITY_ID = "ddGfrDWP9eB5G4W7pcSbit";
export const getNotes = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/${APP_DB_ID}/dtypes/entity/${ENTITY_ID}.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
        page: 1,
        fetch_all: false,
        per_page: 2000,
      },
    }
  );
  return data;
};

export const addNote = async (note) => {
  const { data } = await axios.post(
    `https://quintadb.com.ua/apps/${APP_DB_ID}/dtypes.json`,
    {
      rest_api_key: REST_API_KEY,
      entity_id: ENTITY_ID,
      values: {
        dcP3fzA8nmE4oVWQxdJmky: note,
      },
    }
  );
  return data;
};
export const deleteNoteAPI = async (noteID) => {
  const { data } = await axios.delete(
    `https://quintadb.com.ua/apps/${APP_DB_ID}/dtypes/${noteID}.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
      },
    }
  );
  return data;
};

export const updateNoteAPI = async (noteID, noteText) => {
  const { data } = await axios.put(
    `https://quintadb.com.ua/apps/${APP_DB_ID}/dtypes/${noteID}.json?rest_api_key=${REST_API_KEY}`,
    {
      values: {
        dcP3fzA8nmE4oVWQxdJmky: noteText,
      },
    }
  );
  return data;
};
