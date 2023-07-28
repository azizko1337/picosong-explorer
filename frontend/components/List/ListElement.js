import styled from "styled-components";
import { useState } from "react";
import ListElementContainer from "./ListElementContainer";
import ListElementHeader from "./ListElementHeader";
import Audio from "../Audio/Audio";
import Paragraph from "../Text/Paragraph";
import Button from "../Form/Button";
import ListElementDescription from "./ListElementDescription";
import ListElementMenu from "./ListElementMenu";
import Image from "next/image";

function ListElement(props) {
  const { song, light, likeSong, hideSong, isLiked } = props;
  const [maximize, setMaximize] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [hidden, setHidden] = useState(false);

  if (hidden === true) return null;

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
      <ListElementMenu>
        <Image
          onClick={() => {
            likeSong(song);
            setLiked(!liked);
          }}
          src={liked ? "/icons/filled-star.svg" : "/icons/star.svg"}
          width="40px"
          height="40px"
        />
        <Image
          onClick={() => {
            hideSong(song);
            setHidden(true);
          }}
          src="/icons/eye.svg"
          width="40px"
          height="40px"
        />
      </ListElementMenu>
      <ListElementDescription>
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
      </ListElementDescription>
    </ListElementContainer>
  );
}

export default ListElement;
