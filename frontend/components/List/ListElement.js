import styled from "styled-components";
import { useState } from "react";
import ListElementContainer from "./ListElementContainer";
import ListElementHeader from "./ListElementHeader";
import Audio from "../Audio/Audio";
import Paragraph from "../Text/Paragraph";
import Button from "../Form/Button";

function ListElement(props) {
  const { song, light } = props;
  const [maximize, setMaximize] = useState(false);
  if (light === true) {
    return (
      <ListElementContainer>
        <ListElementHeader target="_blank" href={song.link}>
          {song.name}
        </ListElementHeader>
      </ListElementContainer>
    );
  }

  return (
    <ListElementContainer>
      <ListElementHeader target="_blank" href={song.link}>
        {song.name}
      </ListElementHeader>
      <Paragraph>{`Duration: ${Math.floor(song.duration / 60)}:${
        song.duration % 60
      }, Size: ${song.size}, Encoder: ${song.encoder}`}</Paragraph>
      <Paragraph italic>{song.part}</Paragraph>
      <Button onClick={() => setMaximize(!maximize)}>
        {maximize ? "noaudio" : "audio"}
      </Button>
      {maximize ? <Audio src={song.link} /> : null}
    </ListElementContainer>
  );
}

export default ListElement;
