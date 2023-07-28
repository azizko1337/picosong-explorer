import styled from "styled-components";
import AudioContainer from "./AudioContainer";

function Audio(props) {
  const { src } = props;
  return (
    <AudioContainer controls>
      <source src={src} />
    </AudioContainer>
  );
}

export default Audio;
