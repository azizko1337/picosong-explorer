import { useState } from "react";
import Form from "../components/Form/Form";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import Header from "../components/Text/Header";
import List from "../components/List/List";
import ListElement from "../components/List/ListElement";
import Loading from "../components/Loading/Loading";

function Index() {
  const [textToSearch, setTextToSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const mode = e.target.name;
      if (mode === "name") {
        const response = await fetch(
          `${process.env.BACKEND}/searchByName?name=${textToSearch}`,
          { method: "GET" }
        );
        const data = await response.json();
        setResult(data.songs);
      } else if (mode === "encoder") {
        const response = await fetch(
          `${process.env.BACKEND}/searchByEncoder?encoder=${textToSearch}`,
          { method: "GET" }
        );
        const data = await response.json();
        setResult(data.songs);
      }
    } catch (error) {
      setResult([]);
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <Form>
        <Input
          onChange={(e) => setTextToSearch(e.target.value)}
          type="text"
        ></Input>
        {loading ? null : (
          <>
            <Button name="name" onClick={handleSearch}>
              name
            </Button>
            <Button name="encoder" onClick={handleSearch}>
              encoder
            </Button>
          </>
        )}
      </Form>
      <Header>
        Results: ({result.length || 0}){" "}
        {result.length > 10000
          ? "(displaying minified results (>10000 results))"
          : null}
      </Header>
      {loading ? <Loading /> : null}
      <List>
        {result.length > 0
          ? result.map((song) => (
              <ListElement
                light={result.length > 10000}
                key={song.id}
                song={song}
              />
            ))
          : null}
      </List>
    </>
  );
}

export default Index;
