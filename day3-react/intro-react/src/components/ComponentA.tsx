import styled from "styled-components";

interface ComponentAProps {
  nama: string;
}

const StyledButton = styled.button`
    background-color: black;
    font-size: 40px;
    color: white;
`;

const ComponentA = (props: ComponentAProps) => {
  return (
    <div>
      {/* INLINE STYLE */}
      <h3 style={{ color: "red", fontSize: "40px" }}>Hello, {props.nama}</h3>

      {/* STYLE COMPONENTS */}
      <StyledButton>Custom Button</StyledButton>
    </div>
  );
};

export default ComponentA;
